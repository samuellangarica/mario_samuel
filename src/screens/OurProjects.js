import { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectOverview from '../components/ProjectOverview';
import '../styles/OurProjects.css';
import chessRender from '../images/chess_raytracer.png';

const mario_projects = [
    {
        name: 'Shidorah',
        year: 2021,
        description: "Creation of a 2D mario bros type of a mexican kaijuu where we use different enemies and mechanics to make the game feel unique.",
        language: 'C#',
        skills: 'Game Design'
    },
    {
        name: 'Raytracer',
        year: 2022,
        description: 'Application of different object-oriented methods for the creation and rendering of 3D scenarios, as well as adding lighting and shadows to make it more realistic.',
        language: 'Java',
        skills: 'OOP'
    },
    {
        name: 'Car Interface',
        year: 2023,
        description: 'Creation of an interface of a car, with pedals and that the interface is pleasant to the user with different elements to make you feel as if you were really in front of a car.',
        language: 'C#',
        skills: 'User interface design'
    },
    {
        name: 'Modelling Software',
        year: 2023,
        description: 'Creation of a Maya-like 3D object creation software, where you can create figures and move them within its small graphical interface as well as rotate and scale.',
        language: 'Javascript',
        skills: 'WebGL'
    }
];

const samuel_projects = [
    {
        name: 'Raytracer',
        year: 2023,
        description: "Development of a ray tracer application using object oriented programming principles to achieve realistic rendering of 3D scenes",
        language: 'Java',
        skills: 'OOP'
    },
    {
        name: 'Maze Solver',
        year: 2021,
        description: 'Efficient maze solving algorithm using BFS',
        language: 'Python',
        skills: 'Data Structures'
    },
    {
        name: 'Modelling Software',
        year: 2022,
        description: 'Implementation of the WebGL Graphics Pipeline for the development of a basic 3Dmodelling software',
        language: 'Javascript',
        skills: 'WebGL'
    },
    {
        name: 'Chess Game',
        year: 2022,
        description: 'Java two player chess game',
        language: 'Java',
        skills: 'OOP'
    }
];

function OurProjects() {

  const [selectedMarioProject, setSelectedMarioProject] = useState(0);
  const [selectedSamuelProject, setSelectedSamuelProject] = useState(0);

  return (
    <div className="our-projects-content">
        

        <p id='our-projects-title'>OUR PROJECTS</p>
        <hr></hr>
        <div className='decor'>
            <div id='left-decor'></div>
            <div id='left-transparent-decor'></div>
            <div id='right-decor'></div>
            <div id='right-transparent-decor'></div>
        </div>

        <div className='mario-p'>

            <p className='name-p'>Mario's projects</p>

            <div className='projects-list'>
                {
                    mario_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => setSelectedMarioProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <ProjectOverview  className='project-overview' data={mario_projects[selectedMarioProject]}/>
            
        </div>

        <div className='mario-p'>

            <p className='name-p'>Samuel's projects</p>

            <div className='projects-list'>
                {
                    samuel_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => setSelectedSamuelProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <ProjectOverview  className='project-overview' data={samuel_projects[selectedSamuelProject]}/>
            
        </div>

    </div>
  );
}

export default OurProjects;
