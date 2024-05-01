import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div className='container'>
            <h3 className='text-center my-5'>Welcome to details: {serviceId}</h3>
            <div className="w-25 mx-auto">
                <Link to={'/checkout'} className='w-100 text-white bg-dark btn-checkout btn border-oranged '>Process CheckOut</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;