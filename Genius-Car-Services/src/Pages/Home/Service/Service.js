import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, description, price, img } = service;
    const navigate = useNavigate();


    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <div className="service-wrapper">

                <img src={img} className='img-fluid' alt="" />
                <div className="service-info">
                    <h2>{name}</h2>
                    <p>{description && description.slice(0, 100) + '...see'}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
            <button onClick={() => navigateToServiceDetail(id)} className='btn-book-service'>Book {name}</button>

        </div>
    );
};

export default Service;