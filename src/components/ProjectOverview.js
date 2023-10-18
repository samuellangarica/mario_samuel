import '../styles/ProjectOverview.css';

function ProjectOverview({data, onClick}){

    const {name, year, description, language, skills, image} = data;
    
    return(
        <div className='content' onClick={onClick}>

            

            <div className='details'>
                <p>Description:</p>
                {description}

                <p>Skills: </p>
                {skills}

                <p>Programming Language: </p>
                {language}


            </div>

        </div>
    )
};

export default ProjectOverview;