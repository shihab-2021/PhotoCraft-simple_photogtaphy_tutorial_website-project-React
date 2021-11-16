import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllServices from '../AllServices/AllServices';

const Services = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => SetServices(data));
    },[])
    return (
        <div className="container mb-4">
            <div className="text-center my-4 pb-3">
              <h1 className="text-danger">Services</h1>
              <h4 className="text-info">All Topic of Our Tutorial</h4>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <AllServices
                      key = {service.key}
                      service = {service}
                      ></AllServices>)
                }
            </Row>
        </div>
    );
};

export default Services;