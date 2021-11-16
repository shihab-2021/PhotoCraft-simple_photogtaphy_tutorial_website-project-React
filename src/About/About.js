import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import './About.css';

const About = () => {
    return (
        <div>
            <Container>
                <div className="text-center">
                    <h1 className="logo"><span className="text-danger">Photo</span>Craft</h1>
                    <h5 className="slogan mb-3">Learn photography in creative way</h5>
                </div>
                <Row xs={1} md={2} className="g-4">
                    <Col className="d-flex flex-column align-self-center">
                        <div className="text-secondary">
                            <h5 className="text-primary">About</h5>
                            <p>We are providing free photography tutorial. This tutorials are made by a good number of photographer.</p>
                            <br />
                            <p>The world famous photographer Mr. Royel Lotif is the director.</p>
                            <p>We arranged of documentation very beautifully, that a bigener can learn photography easily.</p>
                            <br />
                            <p>This web tutorial is fully free for all. So wish your best of luck.</p>
                            <br />
                            <h6>Be with PhotoCraft.</h6>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://image.freepik.com/free-vector/about-us-page-concept-illustration_114360-3931.jpg" alt="" />
                    </Col>
                </Row>
                <Contact></Contact>
            </Container>
        </div>
    );
};

export default About;