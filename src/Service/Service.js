import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, image, subServices, user, like, dislike} = props.service;
    return (
        <div>
            <Col>
                <div className="details mb-3 d-flex flex-lg-row flex-md-column flex-column">
                  <div className="mb-2 align-self-center">
                    <img src={image} className="product-image image-fluid rounded-3" alt="" />
                  </div>
                  <div className="card-body pl-2 d-flex flex-column align-self-center">
                    <h5 className="text-primary">{name}</h5>
                    <ul className="text-secondary">
                        <li>{subServices[0]}</li>
                        <li>{subServices[1]}</li>
                        <li>...</li>
                    </ul>
                    <small className="text-primary pb-3">Click More Details for more information</small>
                    <div className="container d-flex justify-content-around">
                    <span><i className="fa fa-user" aria-hidden="true"></i><span>{user}</span></span>
                    <span><i className="fa fa-thumbs-up" aria-hidden="true"></i><span>{like}</span></span>
                    <span><i className="fa fa-thumbs-down" aria-hidden="true"></i><span>{dislike}</span></span>
                    </div>
                    <button id="addToCart-btn" className="buy-now btn btn-secondary mt-3"><NavLink to="/services" className="navLink">More Details</NavLink></button>
                  </div>
                </div>
            </Col>
        </div>
    );
};

export default Service;