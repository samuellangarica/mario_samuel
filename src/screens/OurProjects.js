import { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectOverview from '../components/ProjectOverview';
import '../styles/OurProjects.css';

const mario_projects = [
    {
        name: 'Project 1',
        year: 2023,
        description: 'kjsdnbf ksjdnbfwq vuvcxgywe kauydbsf wkjwdgfw i',
        language: 'Java',
        skills: 'OOP'
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'defrg agveda fcwref  wrefvg wer fg we fw ef ',
        language: 'Python',
        skills: 'Data Structures'
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures'
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures'
    }
];

const samuel_projects = [
    {
        name: 'Project 1',
        year: 2023,
        description: 'uiok et q3 gv yruir4ytrh wretytgyre',
        language: 'Java',
        skills: 'OOP'
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures'
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures'
    },
    {
        name: 'Project 2',
        year: 2022,
        description: 'iwquyefqiwyue wiuyfebreikyufhgb   wuyfebweydh',
        language: 'Python',
        skills: 'Data Structures'
    }
];

function OurProjects() {

  const [selectedMarioProject, setSelectedMarioProject] = useState(0);
  const [selectedSamuelProject, setSelectedSamuelProject] = useState(0);

  return (
    <div className="our-projects-content">

        <p id='our-projects-title'>OurProjects</p>
        <hr></hr>

        <div className='mario-p'>

            <div className='projects-list'>
                <p className='name-p'>Mario's Projects</p>
                {
                    mario_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => setSelectedMarioProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <ProjectOverview  className='project-overview' data={mario_projects[selectedMarioProject]}/>
            
        </div>


        <div className='samuel-p'>

            <div className='projects-list'>
                <p className='name-p'>Samuel's Projects</p>
                {
                    samuel_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => selectedSamuelProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <ProjectOverview className='project-overview' data={samuel_projects[selectedSamuelProject]}/>
            
        </div>

        



    </div>
  );
}

export default OurProjects;
