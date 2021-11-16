import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = () => {
    return (
        <div>
            <h1 className="text-info text-center pt-4">The Basics of Exposure</h1>
            <Container className="my-5">
                <h1 className="text-success">Setting up Your First Camera</h1>
                <p>When you unpack your first camera you may be intimidated with the various menus, settings, and options for customization. The camera user manual, while it does contain valuable information, is often dry and technical which only compounds the issues of learning this new technology.</p><br />
                <p>While you could embrace the good old “play with it” method of learning it can lead to frustration if your early results don’t live up to expectations. This method can also lead to learning less than optimal ways of using your camera making it more difficult to fix bad habits later on.</p><br /><br />
                <img className="img-fluid" src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/03/manual.jpg?resize=717%2C537&ssl=1" alt="" />
                <br /><br />
                <p>Each camera manufacturer has its own design, terminology, and specifications. So, it’s difficult to provide you with an exact guide for setting up your specific camera. As a result, for detailed instructions about your camera, I suggest searching YouTube or specific guides found on the internet. Just Google the brand and model of your camera to find more specific help.</p><br />
                <p>Regardless of manufacturer, there are a few important steps you should take to make sure your camera is set up to your liking. Let’s go through those individually.</p>
                <div className="text-center pt-4 mt-4">
                    <button type="button" className="btn btn-outline-success"><NavLink to="/next" className="btnDeco text-success">Next ....</NavLink></button>
                </div>
            </Container>
        </div>
    );
};

export default Tutorial;