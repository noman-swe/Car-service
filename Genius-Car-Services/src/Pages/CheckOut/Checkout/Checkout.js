import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
 
    const handlePlaceOrderSubmit = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        // send order to server 
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                // console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast(`Hi ${user?.displayName}, Your Order is Placed.`);
                    event.target.reset();
                }

            })
    }


    return (
        <div>
            <h3>Check Out : {service.name}</h3>

            { /* forms */}
            <form onSubmit={handlePlaceOrderSubmit} className='w-50 mx-auto'>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='Name' disabled readOnly required /> <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="" placeholder='Email' readOnly required /> <br />
                <input className='w-100 mb-2' type="text" name="service" id="" placeholder='Service' value={service.name} readOnly required /> <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='Address' required /> <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='Phone' required /> <br />
                <input className='btn btn-primary w-100' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default Checkout;