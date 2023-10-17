import React from 'react';
import '../styles/AboutUs.css'
import margo from '../images/margo.jpg'
import SocialMedia from '../components/SocialMedia';

function AboutUs() {
    const marioData = {
        linked_in: 'https://www.linkedin.com/in/samuel-langarica/',
        instagram: ''
    }
  return (
    <div className='home'>
        
        <h1>About Us</h1>

        <div id='about-us'>

            <div className='user mario'>

                <img src={margo}></img>

                <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Id faucibus nisl tincidunt eget
                <hr></hr>
                </p>

                <p className='name'>Mario Rodriguez</p>

                <SocialMedia data={marioData}></SocialMedia>

            </div>

            <div className='user samuel'>

                <img src={margo}></img>

                <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Id faucibus nisl tincidunt eget
                <hr></hr>
                </p>

                <p className='name'>Samuel Langarica</p>

                <SocialMedia data={marioData}></SocialMedia>
            </div>

        </div>

        
    </div>
  );
}

export default AboutUs;