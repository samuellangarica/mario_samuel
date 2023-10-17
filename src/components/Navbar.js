import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link' to="/">
            Home
        </Link>

        <Link className='link' to="/our-projects">
            Our Projects
        </Link>

        <Link className='link' to="/about-us">
            About Us
        </Link>


    </div>
  );
};

export default Navbar;
