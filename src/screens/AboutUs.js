import React from 'react';
import '../styles/AboutUs.css'
import mario from '../images/mario.jpg'
import SocialMedia from '../components/SocialMedia';
import samuel from '../images/samuel.jpg';

function AboutUs() {
    const aboutMario = {
        linked_in: 'https://www.linkedin.com/in/mario-rodriguez-g-689552241',
        instagram: 'https://www.instagram.com/mariorg09/',
        description: 'hi im mario alejandro rodriguez gonzalez, i was born in guadalajara, jalisco on october 11, 2001, i unfortunately lived 18 years in colima where i studied high school at anahuac, im currently a 7th semester student of the career of computer systems and graphics engineering, i really like video games and a system i would like to learn more about on my part is linux.',
        email:'marioarodriguezg01@gmail.com', 
        age: 22,
        carrer: 'Computer Graphics and Systems Engineer'
        }
    const aboutSamuel = {
        linked_in: 'https://www.linkedin.com/in/samuel-langarica/',
        instagram: 'https://instagram.com/samuelangarica?igshid=YTQwZjQ0NmI0OA==',
        description: 'I am a student in Systems Engineering with a minor in Computer Graphics, actively seeking opportunities to take the first steps into my professional career. Being deeply passionate about technology, I am eager to develop my skills and to contribute in a meaningful way in innovative projects.',
        email:'samuel.langarica.m@gmail.com', 
        age: 22,
        carrer: 'Computer Graphics and Systems Engineer'
    }
  return (
    <div id='about-us-content'>
        
        <p id='about-us-title'>About Us</p>
        <hr></hr>
        <div className='decor'>
            <div id='left-decor'></div>
            <div id='left-transparent-decor'></div>
            <div id='right-decor'></div>
            <div id='right-transparent-decor'></div>
        </div>

        <div id='about-us'>

            <div className='user mario'>

                <img src={mario}></img>

                <p className='description'>
                    {aboutMario.description}
                </p>
                <hr></hr>

                <p className='name'><b>Mario Alejandro Rodriguez Gonzalez</b> | {aboutMario.carrer} </p>
                <p className='email'><b>Email: </b>{aboutMario.email}</p>
                <SocialMedia data={aboutMario}></SocialMedia>

            </div>

            <div className='user samuel'>

                <img src={samuel}></img>
                <p className='description'>
                    {aboutSamuel.description}
                </p>
                <hr></hr>

                <p className='name'><b>Samuel Langarica</b> | {aboutSamuel.carrer} </p>
                <p className='email'><b>Email: </b>{aboutSamuel.email}</p>
                <SocialMedia data={aboutSamuel}></SocialMedia>

            </div>

        </div>

        
    </div>
  );
}

export default AboutUs;