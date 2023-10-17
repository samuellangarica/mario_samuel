import React from 'react';
import '../styles/AboutUs.css'
import margo from '../images/margo.jpg'
import SocialMedia from '../components/SocialMedia';

function AboutUs() {
    const marioData = {
        linked_in: 'https://www.linkedin.com/in/samuel-langarica/',
        instagram: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Id faucibus nisl tincidunt eget',
        age: 22,
        carrer: 'Computer Graphics and Systems Engineer'
    }
  return (
    <div id='about-us-content'>
        
        <p id='about-us-title'>About Us</p>

        <div id='about-us'>

            <div className='user mario'>

                <img src={margo}></img>

                <p className='description'>
                    {marioData.description}
                </p>
                <hr></hr>

                <p className='name'><b>Samuel Langarica</b> | {marioData.carrer} </p>
                <SocialMedia data={marioData}></SocialMedia>

            </div>

            <div className='user samuel'>

                <img src={margo}></img>
                <p className='description'>
                    {marioData.description}
                </p>
                <hr></hr>

                <p className='name'><b>Samuel Langarica</b> | {marioData.carrer} </p>
                <SocialMedia data={marioData}></SocialMedia>

            </div>

        </div>

        
    </div>
  );
}

export default AboutUs;