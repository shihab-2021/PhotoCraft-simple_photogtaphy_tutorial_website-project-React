import React from 'react';
import { Card, Col, ModalFooter } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './AllServices.css';

const AllServices = (props) => {
    const {name, image, subServices, user, like, dislike} = props.service;
    return (
        <div>
          <div className="hi">
            <h1>hi</h1>
          </div>
            <Col>
                <Card className="details2 mb-3">
                  <Card.Img className="card-img-top product-image2 image-fluid rounded-3" variant="top" src={image} />
                  <Card.Body>
                    <Card.Title className="text-primary">{name}</Card.Title>
                    <div className="text-secondary">
                      <ul>
                          {
                            subServices.map(subService => <li>{subService}</li>)
                          }
                      </ul>
                    </div>
                  </Card.Body>
                  <ModalFooter>
                  <div className="container d-flex justify-content-around ">
                        <span><i className="fa fa-user text-secondary" aria-hidden="true"></i><span>{user}</span></span>
                        <span><i className="fa fa-thumbs-up text-primary" aria-hidden="true"></i><span>{like}</span></span>
                        <span><i className="fa fa-thumbs-down text-danger" aria-hidden="true"></i><span>{dislike}</span></span>
                        <button id="addToCart-btn" className="buy-now btn btn-secondary ms-3"><NavLink to="/tutorial" className="btnDeco text-info">Start Tutorial</NavLink></button>
                  </div>
                  </ModalFooter>
                </Card>
            </Col>
        </div>
    );
};

export default AllServices;