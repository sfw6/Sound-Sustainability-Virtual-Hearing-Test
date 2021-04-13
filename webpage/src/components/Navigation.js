import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div className="header">
            <div id="logo-header">
                <NavLink to="/">Sound Sustainability</NavLink>
            </div>
            <div id="nav-links">   
                <NavLink to="/hearingscreening">Hearing Screening</NavLink>
                <NavLink to="/about">Education</NavLink>
                <NavLink to="/about">Devices</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/about">Sign In</NavLink>
            </div>
       </div>
    );
}
 
export default Navigation;