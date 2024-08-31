import React, { useLayoutEffect } from 'react';
import logo from '../../IMGS/EarthGuardians.svg';
import search_icon from '../../IMGS/Icons/search-icon.svg';

import {NavLink } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className='root-layout'>
             <header>
                <div className='nav-links'>
                    <img src={logo} alt=''/>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                    <NavLink to="About">About</NavLink>
                    <NavLink to="Blog">Blog</NavLink>
                    <NavLink to="educational">Educational Ressources</NavLink>
                    <NavLink to="Contact">Contact us</NavLink>
                    </nav>
                </div>
                <div className='search'>
                    <input className='search-bar' placeholder='Search'/>
                    <img src={search_icon}/>
                </div>
                
            </header>

        </div>
           

       
    );
}

export default RootLayout;
