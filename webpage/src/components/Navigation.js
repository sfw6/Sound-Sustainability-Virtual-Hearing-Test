// Navigation Bar and Header
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div className="header">
            <div id="logo-header">
                <NavLink to="/">Sound Sustainability</NavLink>
            </div>
            <div id="nav-links">
                <NavLink className="nav-btn" to="/hearingscreening">Hearing Screening</NavLink>
                <NavLink className="nav-btn" to="/about">Education</NavLink>
                <NavLink className="nav-btn" to="/about">Devices</NavLink>
                <NavLink className="nav-btn" to="/about">About Us</NavLink>
                <NavLink className="nav-btn" to="/about">Sign In</NavLink>
            </div>
       </div>
    );
}

export default Navigation;