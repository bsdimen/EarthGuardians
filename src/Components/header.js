import React, { useState, useEffect } from 'react';
import logo from '../Assets/EarthGuardians.svg';
import logoWh from '../Assets/EarthGuardians-wh.svg';

import { easeOut, motion, MotionConfig } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';



const Header = ({ color }) => {
    return (
        <header className='container'>
            <div className='nav-links'>
                {color === "white" ? <img src={logoWh} alt='logo' /> : <img src={logo} alt='logo' />}

                <NavMenu />
            </div>
        </header>
    );
};
export default Header;

const NavMenu = () => {
    const [isActiveNav, setActiveNav] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setActiveNav(false); // Close the mobile menu on large screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize value

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile && (
                <MotionConfig transition={{ duration: 0.3, ease: easeOut }}>
                    <motion.button
                        className='menu-lines'
                        onClick={() => setActiveNav(!isActiveNav)}
                        initial={false}
                        animate={isActiveNav ? "open" : "closed"}
                    >
                        {/* Hamburger button spans */}
                        <motion.span
                            style={{
                                left: "50%",
                                top: "35%",
                                x: "-50%",
                                y: "-50%"
                            }}
                            className='menu-line'
                            variants={{
                                open: {
                                    rotate: ["0deg", "45deg"],
                                    top: ["35%", "50%"]
                                },
                                closed: {
                                    rotate: ["45deg", "0deg"],
                                    top: ["50%", "35%"]
                                }
                            }}
                        />
                        <motion.span
                            style={{
                                left: "50%",
                                top: "50%",
                                x: "-50%",
                                y: "-50%"
                            }}
                            className='menu-line'
                            variants={{
                                open: { rotate: "135deg" },
                                closed: { rotate: "0deg" }
                            }}
                        />
                        <motion.span
                            style={{
                                left: "50%",
                                top: "65%",
                                x: "-50%",
                                y: "-50%"
                            }}
                            className='menu-line'
                            variants={{
                                open: {
                                    rotate: ["0deg", "45deg"],
                                    top: ["65%", "50%"]
                                },
                                closed: {
                                    rotate: ["45deg", "0deg"],
                                    top: ["50%", "65%"]
                                }
                            }}
                        />
                    </motion.button>
                </MotionConfig>
            )}
            <NavLinksContainer isActiveNav={isActiveNav} isMobile={isMobile} />
        </>
    );
};

const NavLinksContainer = ({ isActiveNav, isMobile }) => {

    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/blog', label: 'Blog' },
        { to: '/educational', label: 'Educational Resources' },
        { to: '/contact', label: 'Contact us' },
    ];

    return (
        <motion.nav
            className={`nav-menu ${isActiveNav ? 'open' : ''}`}
            initial={isMobile ? { scale: 0 } : false}
            animate={isMobile && isActiveNav ? { scale: 1 } : isMobile ? { scale: 0 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {links.map((link, index) => (
                <NavLink to={link.to} className="nav-link" activeClassName="active" key={index}>
                    <motion.span
                        onMouseEnter={() => setHoveredLink(link.label)} // Set hovered link
                        onMouseLeave={() => setHoveredLink(null)} // Reset hover on leave
                        animate={hoveredLink === link.label ? { color: '#fafafa' } : {}}
                    >
                        {link.label}
                    </motion.span>
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={hoveredLink === link.label || location.pathname === link.to ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </NavLink>
            ))}
        </motion.nav>
    );
};




