import React from 'react';
import { Link } from 'react-router-dom';
import './Expert.css';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
        <div className="col-sm-8 col-md-6 col-lg-4 py-2 g-5 mx-auto px-0 ">
            <div className="card mx-auto" style={{ width: "20rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <Link to={''} className="w-100 expert-book-btn btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default Expert;