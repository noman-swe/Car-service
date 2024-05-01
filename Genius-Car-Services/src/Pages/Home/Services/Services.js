import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container" id='services'>
            <div className='services-container'>
                <h3 className='text-primary text-center'>Our Services</h3>
                <div className="services row">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.id}
                        ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;