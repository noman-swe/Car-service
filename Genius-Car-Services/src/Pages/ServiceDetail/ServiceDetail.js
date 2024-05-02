import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='container'>
            <h3 className='text-center my-5'>You are about to book : {service.name}</h3>
            <div className="w-25 mx-auto">
                <Link to={'/checkout'} className='w-100 text-white bg-dark btn-checkout btn border-oranged '>Process CheckOut</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;