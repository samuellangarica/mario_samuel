import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='btn'>
          <Link to="/">Home</Link>
        </div>

        <div className='btn'>
          <Link to="/our-projects">Our Projects</Link>
        </div>

        <div className='btn'>
          <Link to="/about-us">About Us</Link>
        </div>


    </div>
  );
};

export default Navbar;
