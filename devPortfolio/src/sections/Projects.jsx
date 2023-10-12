import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsList } from '../constants';

const Projects = () => {
  return (
    <div className='flex flex-col gap-9 justify-start  mt-9 m:mt-32 items-center px-5 py-7'>

      <h2 className='font-poppins font-semibold text-xl text-white border-b-8 border-[#7477FF] 
                     md:justify-self-start'>
        Projects
      </h2>
      <div className='flex flex-col gap-9 my-9 m:my-32 items-center
                    md:flex-row md:justify-center'>     
        {projectsList.map( (proj , index) => (
        
          <ProjectCard
            key={index}
            Project={proj}/>
        ))}
      </div> 
    </div>
  )
}

export default Projects;