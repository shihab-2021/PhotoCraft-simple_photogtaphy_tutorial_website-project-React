import React, { useEffect, useState } from 'react';
import { Container,Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => SetServices(data));
    },[])
    services.splice(4);
    return (
        <div>
            {/* Showcase section  */}
            <section id="showcase">
                <Container className="d-flex flex-column align-self-center">
                    <h1 className="logo"><span className="text-danger">Photo</span>Craft</h1>
                    <h5 className="slogan mb-3">Learn photography in creative way</h5>
                    <p><small>Photography is a way of feeling, of touching, of loving.</small></p>
                    <p><small>What you have caught on film is captured forever…</small></p>
                    <p><small>It remembers little things, long after you have forgotten everything.</small></p>
                    <Button variant="outline-info" className="d-inline-block mt-3"><NavLink to="/tutorial" className="btnDeco text-info">Start Tutorial for Free</NavLink></Button>
                </Container>
            </section>
            {/* section for about photography */}
            <section id="about_pg container" className="my-5">
                <Container className="text-center">
                    <h1 className="text-info">Photography</h1>
                    <p className="container px-5 py-4 text-secondary">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.</p>
                    <img className="img-fluid" src="https://v1.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-c7f7b63/wp-content/uploads/2017/12/Best_Photography_Quotes_Shotkit_002-1.jpg" alt="" />
                </Container>
            </section>
            {/* services section  */}
            <section className="pb-4">
                <Container>
                    <h1 className="text-center text-success py-5">Services</h1>
                    <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <Service
                        service={service}
                        key={service.key}
                        ></Service>)
                    }
                    </Row>
                </Container>
            </section>
            {/* contact section */}
            <section className="py-5">
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;