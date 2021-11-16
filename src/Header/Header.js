import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
                <div className="container-fluid container">
                <h1 className="logo"><span className="text-danger">Photo</span>Craft</h1>
                  <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false"            aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item me-3">
                      <NavLink to="/home" activeClassName="selected"  className="navLink">Home</NavLink>
                      </li>
                      <li className="nav-item me-3">
                      <NavLink to="/services" activeClassName="selected"  className="navLink">Services</NavLink>
                      </li>
                      <li className="nav-item me-3">
                      <NavLink to="/about" activeClassName="selected"   className="navLink">About</NavLink>
                      </li>
                      <li className="nav-item me-3">
                      <NavLink to="/tutorial" activeClassName="selected"  className="navLink">Tutorial</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        </div>
    );
};

export default Header;