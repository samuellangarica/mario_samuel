import React from 'react';
import '../styles/Resumes.css'
import MarioCV from '../images/CV_Mario.png';
import SamuelCV from '../images/CV_Samuel.png';
function Resumes() {
  return (
    <div id='resumes-content'>
        <div className='decor'>
            <div id='left-decor'></div>
            <div id='left-transparent-decor'></div>
            <div id='right-decor'></div>
            <div id='right-transparent-decor'></div>
        </div>
        <p id='our-resumes-title'>Our Resumes</p>
        <div id='cvs'>
            <img className='cv' id='mario-cv'src={MarioCV}/>
            <img className='cv' id='samuel-cv'src={SamuelCV}/>
        </div>
    </div>
  );
}

export default Resumes;