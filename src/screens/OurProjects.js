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
    }
];

function OurProjects() {

  const [selectedMarioProject, setSelectedMarioProject] = useState(0);
  const [selectedSamuelProject, setSelectedSamuelProject] = useState(0);

  return (
    <div className="our-projects-content">

        <h1>OurProjects</h1>
        <hr></hr>
        <h2>Mario's Projects</h2>

        <div className='mario'>

            <div id='projects-list'>
                {
                    mario_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => setSelectedMarioProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <div className='project-overview'>
                <ProjectOverview id='p' data={mario_projects[selectedMarioProject]}/>
            </div>
            
        </div>


        <h2>Samuel's Projects</h2>

        <div className='samuel'>

            <div id='projects-list'>
                {
                    samuel_projects.map((project, index) => (
                        <ProjectItem key={index} data={project} onClick={() => setSelectedSamuelProject(index)}></ProjectItem>
                    ))
                }
            </div>

            <div className='project-overview'>
                <ProjectOverview data={samuel_projects[selectedSamuelProject]}/>
            </div>

        </div>

        



    </div>
  );
}

export default OurProjects;
