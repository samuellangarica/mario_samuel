import React from 'react';
import '../styles/AboutUs.css'
import mario from '../images/mario.jpg'
import SocialMedia from '../components/SocialMedia';
import samuel from '../images/samuel.jpg';

function AboutUs() {
    const marioData = {
        linked_in: 'https://www.linkedin.com/in/samuel-langarica/',
        instagram: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Id faucibus nisl tincidunt eget',
        age: 22,
        carrer: 'Computer Graphics and Systems Engineer'
    }
    const samuelData = {
        linked_in: 'https://www.linkedin.com/in/samuel-langarica/',
        instagram: 'https://instagram.com/samuelangarica?igshid=YTQwZjQ0NmI0OA==',
        description: 'I am a student in Systems Engineering with a minor in Computer Graphics, actively seeking opportunities to take the first steps into my professional career.',
        email:'samuel.langarica.m@gmail.com', 
        age: 22,
        carrer: 'Computer Graphics and Systems Engineer'
    }
  return (
    <div id='about-us-content'>
        
        <p id='about-us-title'>About Us</p>

        <div id='about-us'>

            <div className='user mario'>

                <img src={mario}></img>

                <p className='description'>
                    {marioData.description}
                </p>
                <hr></hr>

                <p className='name'><b>Mario Alejandro Rodriguez Gonzalez</b> | {marioData.carrer} </p>
                <p className='email'><b>Email: </b>{marioData.email}</p>
                <SocialMedia data={marioData}></SocialMedia>

            </div>

            <div className='user samuel'>

                <img src={samuel}></img>
                <p className='description'>
                    {samuelData.description}
                </p>
                <hr></hr>

                <p className='name'><b>Samuel Langarica</b> | {samuelData.carrer} </p>
                <p className='email'><b>Email: </b>{samuelData.email}</p>
                <SocialMedia data={samuelData}></SocialMedia>

            </div>

        </div>

        
    </div>
  );
}

export default AboutUs;