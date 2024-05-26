import React from 'react';
import logo from '../IMGS/EarthGuardians.svg';

const Header = () => {
    return (
            <header>
            <nav>
            <div className="container nav-bar">
                <span className="logo"><img src={logo} alt="earthguardians"/></span>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Get Involved</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Educational Resources</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        </header>
       
    );
}

export default Header;
