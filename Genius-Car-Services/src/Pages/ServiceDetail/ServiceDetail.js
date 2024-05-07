import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div className='container'>
            <h3 className='text-center my-5'>You are about to book : {service.name}</h3>
            <div className="w-25 mx-auto">
                <Link to={`/checkout/${serviceId}`} className='w-100 text-white bg-dark btn-checkout btn border-oranged '>Process CheckOut</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;