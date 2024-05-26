import React, { useLayoutEffect } from 'react';
import logo from '../IMGS/EarthGuardians.svg';
import { Link, NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className='root-layout'>
             <header>
                <img src={logo} alt=''/>
            <nav>
                <NavLink to="/">Home</NavLink>
               <NavLink to="About">About</NavLink>
               <NavLink to="Blog">Blog</NavLink>
               <NavLink to="educational">Educational Ressources</NavLink>
               <NavLink to="Contact">Contact us</NavLink>
            </nav>
            </header>
            <main>
                <Outlet />
            </main>

        </div>
           

       
    );
}

export default RootLayout;
