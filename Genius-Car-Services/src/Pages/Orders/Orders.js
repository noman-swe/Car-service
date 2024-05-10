import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`;
            // console.log(url);
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
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