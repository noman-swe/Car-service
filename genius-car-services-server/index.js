const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
// middlwares
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Running my genius car server.')
})

app.listen(port, () => { console.log("Running on port", port) })