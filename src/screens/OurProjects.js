import { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectOverview from '../components/ProjectOverview';
import '../styles/OurProjects.css';
import chessRender from '../images/chess_raytracer.png';

const mario_projects = [
    {
        name: 'Raytracer',
        year: 2023,
        description: "Development of a ray tracer application using object oriented programming principles to achieve realistic rendering of 3D scenes",
        language: 'Java',
        skills: 'OOP',
        image: <img src={chessRender}></img>
    },
    {
        name: 'Maze Solver',
        year: 2021,
        description: 'Efficient maze solving algorithm using BFS',
        language: 'Python',
        skills: 'Data Structures',
        image: <img src={chessRender}></img>
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures',
        image: <img src={chessRender}></img>
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures',
        image: <img src={chessRender}></img>
    }
];

const samuel_projects = [
    {
        name: 'Project 1',
        year: 2023,
        description: 'uiok et q3 gv yruir4ytrh wretytgyre',
        language: 'Java',
        skills: 'OOP',
        image: <img src={chessRender}></img>
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures',
        image: <img src={chessRender}></img>
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures',
        image: <img src={chessRender}></img>
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures',
        image: <img src={chessRender}></img>
    }
];

function OurProjects() {

  const [selectedMarioProject, setSelectedMarioProject] = useState(0);
  const [selectedSamuelProject, setSelectedSamuelProject] = useState(0);

  return (
    <div className="our-projects-content">

        <p id='our-projects-title'>OUR PROJECTS</p>
        <hr></hr>

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
                    mario_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => setSelectedMarioProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <ProjectOverview  className='project-overview' data={mario_projects[selectedMarioProject]}/>
            
        </div>

    </div>
  );
}

export default OurProjects;
