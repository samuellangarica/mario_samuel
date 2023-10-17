import React from 'react';
import '../styles/AboutUs.css'
import margo from '../images/margo.jpg'

function AboutUs() {
  return (
    <div className='home'>
        <h1>About Us</h1>

        <div id='about-us'>

        <div className='user mario'>
            <img src={margo}></img>
            <p className='name'>Mario Rodriguez</p>
            <div className='social-media-bar'></div>
        </div>

        <div className='vertical-line'>
        </div>

        <div className='user samuel'>
        <img src={margo}></img>
            <p className='name'>Mario Rodriguez</p>
        </div>

        </div>

        
    </div>
  );
}

export default AboutUs;