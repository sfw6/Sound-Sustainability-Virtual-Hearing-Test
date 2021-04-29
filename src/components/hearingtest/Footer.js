import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
	let linkStyle = "text-white pb-1";
	return (
		<div className="footer container-fluid text-white font-weight-light py-4">
			<div className="footer-web">
				<div className="row m-0 pb-4 px-4">
					<div className="col-sm d-flex flex-column">
						<NavLink to="/home" className={linkStyle}>Home</NavLink>
						<NavLink to="/screeninghome" className={linkStyle}>Hearing Screening</NavLink>
						<NavLink to="/devices" className={linkStyle}>Education</NavLink>
						<NavLink to="/devices" className={linkStyle}>Devices</NavLink>
					</div>
					<div className="col-sm d-flex flex-column">
						<NavLink to="/signin" className={linkStyle}>Sign In</NavLink>
						<NavLink to="/devices" className={linkStyle}>My Dashboard</NavLink>
						<NavLink to="/privacypolicy" className={linkStyle}>Privacy Policy</NavLink>
					</div>
					<div className="col-sm d-flex flex-column">
						<NavLink to="/about" className={linkStyle}>About Us</NavLink>
						<NavLink to="/devices" className={linkStyle}>Blog</NavLink>
						<NavLink to="/faq" className={linkStyle}>FAQ</NavLink>
					</div>
					<div className="col-sm-2 d-flex flex-column text-nowrap">
						<a className={linkStyle} href="https://www.facebook.com/SoundSustainability/" >
							<i className="bi bi-facebook text-white"></i> Facebook
						</a>
						<a className={linkStyle} href="https://www.instagram.com/hearyourworld/" >
							<i className="bi bi-instagram text-white"></i> Instagram
						</a>
						<a className={linkStyle} href="https://twitter.com/hearyourworld" >
							<i className="bi bi-twitter text-white"></i> Twitter
					</a>
						<a className={linkStyle} href="https://www.linkedin.com/company/soundsustainability" >
							<i className="bi bi-linkedin text-white"></i> Linked In
						</a>
					</div>
				</div>
			</div>

			<div className="footer-mobile text-center pb-3">
				<a className={linkStyle + " px-2"} href="https://www.facebook.com/SoundSustainability/" >
					<i className="bi bi-facebook text-white"></i>
				</a>
				<a className={linkStyle + " px-2"} href="https://www.instagram.com/hearyourworld/" >
					<i className="bi bi-instagram text-white"></i>
				</a>
				<a className={linkStyle + " px-2"} href="https://twitter.com/hearyourworld" >
					<i className="bi bi-twitter text-white"></i>
				</a>
				<a className={linkStyle + " px-2"} href="https://www.linkedin.com/company/soundsustainability" >
					<i className="bi bi-linkedin text-white"></i>
				</a>
			</div>
			<h6 className="font-weight-light text-center">©2021 by Sound Sustainability Group - All Rights Reserved.</h6>
		</div>
	);
};
export default Footer;
