import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsList } from '../constants';

const Projects = () => {
  return (
    <div className='flex flex-row justify-center gap-9 mt-32'>
      {projectsList.map( (proj , index) => (
        
        <ProjectCard
          key={index}
          Project={proj}
          />
      ))}
      
    </div>
  )
}

export default Projects