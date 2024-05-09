import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`;
            // console.log(url);
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h2>Orders : {orders.length}</h2>
        </div>
    );
};

export default Orders;