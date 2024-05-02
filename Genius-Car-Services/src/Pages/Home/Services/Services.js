import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const url = `http://localhost:5000/service`;
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url]);

    return (
        <div className="container" id='services'>
            <div className='services-container'>
                <h3 className='text-primary text-center'>Our Services</h3>
                <div className="services row">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service._id}
                        ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;