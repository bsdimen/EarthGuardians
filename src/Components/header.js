import React, { useState, useEffect } from 'react';
import logo from '../IMGS/EarthGuardians.svg';
import { easeOut, motion, MotionConfig, useAnimate, stagger } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <div className='nav-links'>
                <img src={logo} alt='logo' />
                <NavMenu />
            </div>
        </header>
    );
};
export default Header;

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });



const NavMenu = () => {
    const [isActiveNav, setActiveNav] = useState(false);

    return (
        <>
            <MotionConfig transition={{ duration: 0.3, ease: easeOut }}>
                <motion.button
                    className='menu-lines'
                    onClick={() => setActiveNav(!isActiveNav)}
                    initial={false}
                    animate={isActiveNav ? "open" : "closed"}
                >
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
            <NavLinksContainer isActive={isActiveNav} />
        </>
    );
};

const NavLinksContainer = ({ isActive }) => {

    return (
        <motion.nav
            initial={false}
            animate={isActive ? "open" : "closed"}
            variants={{
                open: {
                    scale: 1,
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    transition: { duration: 1, ease: "easeInOut" }
                },
                closed: {
                    scale: 0,
                    opacity: 0,
                    clipPath: [
                        "polygon(100% 100%, 100% 0, 0 0, 100% 0)"
                    ],
                    transition: { duration: 1, ease: "easeInOut" }
                }
            }}
            style={{
                pointerEvents: isActive ? "auto" : "none",
                clipPath: "polygon(100% 100%, 100% 0, 0 0, 0 100%)",
            }}
        >
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/educational" className="nav-link">Educational Resources</NavLink>
            <NavLink to="/contact" className="nav-link">Contact us</NavLink>
        </motion.nav>
    );
};
