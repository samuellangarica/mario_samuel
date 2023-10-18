import '../styles/ProjectItem.css';

function ProjectItem({data, onClick}){

    const {name, year} = data;
    
    return(
        <a href='#'>
            <div className='project-item' onClick={onClick}>

                <p id='name'>
                    {name}
                </p>
                <p id='year'>
                    {year}
                </p>
                
            </div>
        </a>
    )
};

export default ProjectItem;