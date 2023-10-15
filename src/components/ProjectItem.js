import '../styles/ProjectItem.css';

function ProjectItem({data, onClick}){

    const {name, year} = data;
    
    return(
        <div className='project-item' onClick={onClick}>

            <p id='name'>
                {name}
            </p>
            <p id='year'>
                {year}
            </p>
            
        </div>
    )
};

export default ProjectItem;