import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>Check Out</h3>
        </div>
    );
};

export default Checkout;