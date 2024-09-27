import React from 'react';
import logo from "../Assets/EarthGuardians-wh.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer center-h center-v">
            <div className="container">
                <div className="logo">
                    <img src={logo} />
                </div>

                <div className="footer-links">
                    <ul>
                        <li><Link to="/" className='footer-nav-link'>Home</Link></li>
                        <li><Link to="/about" className='footer-nav-link'>About Us</Link></li>
                        <li><Link to="/blog" className='footer-nav-link'>Blog</Link></li>
                        <li><Link to="/educational" className='footer-nav-link'>Educational Resources</Link></li>
                        <li><Link to="/contact" className='footer-nav-link'>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <Link to="https://twitter.com" className='footer-nav-link'>Twitter</Link>
                    <Link to="https://facebook.com" className='footer-nav-link'>Facebook</Link>
                    <Link to="https://instagram.com" className='footer-nav-link'>Instagram</Link>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
