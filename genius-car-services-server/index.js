const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;
require('dotenv').config();
// middlwares
const cors = require('cors');
app.use(cors());
app.use(express.json());

function verifyJWT(req, res, next) {
    // client side theke pathano authoraization ta ke pai kina dekhi
    const authHeader = req.headers.authorization;
    // console.log("inside JWT", authHeader);
    if (!authHeader) {
        return res.status(401).send({ message: "Unauthorized Access" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Forbiden Access' })
        }
        req.decoded = decoded;
        next();
    })

}

// connection string
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xmq0nwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version 
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('services');
        const orderCollection = client.db('geniusCar').collection('order');
        // console.log("You successfully connected to MongoDB!");

        // app.get: Read & cursor and find
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        //  app.get: Read by id & findOne
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const service = await serviceCollection.findOne(query);
            res.send(service);
        })


        // adding POST API to receive data from client side
        app.post('/service', async (req, res) => {
            const newService = req.body;
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        })

        // DELETE
        app.delete('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = serviceCollection.deleteOne(query);
            res.send(result);
        })
        /* 
        --------------> ORDER
        --------------> ORDER
        --------------> ORDER
        */
        //    find all order by email
        app.get('/orders', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const email = req.query.email;
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = orderCollection.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: "Forbiden Access." })
            }
        });
        // order collection API
        app.post('/order', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        })

        // JWT Auth create API
        app.post('/getToken', (req, res) => {
            const user = req.body;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d'
            });
            res.send({ accessToken });


        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

/*  */


// 
app.get('/', (req, res) => {
    res.send('Running my genius car server.')
})
app.listen(port, () => { console.log("Running on port", port) });

