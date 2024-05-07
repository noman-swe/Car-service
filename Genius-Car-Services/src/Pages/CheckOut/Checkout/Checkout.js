import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: 'Noman',
        email: 'noman@gmail.com',
        address: 'tangail',
        phone: '0144455555'
    })

    const handleAddressChange = event => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        setUser(newUser);
    }
    return (
        <div>
            <h3>Check Out : {service.name}</h3>

            {/* forms */}
            <form className='w-50 mx-auto'>
                <input className='w-100 mb-2' type="text" value={user.name} name="name" id="" placeholder='Name' required /> <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" id="" placeholder='Email' required /> <br />
                <input className='w-100 mb-2' type="text" name="service" id="" placeholder='Service' value={service.name} required /> <br />
                <input onChange={handleAddressChange} className='w-100 mb-2' type="text" value={user.address} name="address" id="" placeholder='Address' required /> <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name="phone" id="" placeholder='Phone' required /> <br />
                <input className='btn btn-primary w-100' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default Checkout;