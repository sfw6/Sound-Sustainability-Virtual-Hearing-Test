// Navigation Bar and Header
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const selectedNav = {
    color: '#F28F38'
}

const StyledLink = styled(NavLink)`
    &:focus,  &:hover {
    color: #F28F38;
  }
`;

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="white" variant="light" sticky="top" className="border-bottom shadow-sm py-3">
                <StyledLink to="/" className="text-primary text-decoration-none">
                    <h4 className="mb-0 font-weight-normal text-primary text-decoration-none">Sound Sustainability</h4>
                </StyledLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledLink className="nav-btn text-decoration-none pl-4" activeStyle={selectedNav}
                            to="/screeninghome" >Hearing Screening</StyledLink>
                        <StyledLink className="nav-btn text-decoration-none pl-4" activeStyle={selectedNav}
                            to="/about">Education</StyledLink>
                        <StyledLink className="nav-btn text-decoration-none pl-4" activeStyle={selectedNav}
                            to="/screening">Devices</StyledLink>
                        <StyledLink className="nav-btn text-decoration-none pl-4" activeStyle={selectedNav}
                            to="/about">About Us</StyledLink>
                        <StyledLink className="nav-btn text-decoration-none pl-4" activeStyle={selectedNav}
                            to="/about">Sign In</StyledLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;