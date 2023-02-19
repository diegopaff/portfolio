import React from 'react';
import { AiFillGithub } from 'react-icons/ai'


const ProjectCard = ( Project ) => {

    /* Project.Project.tools.map( item => console.log(item)) */
  return (
    
        <div className="max-w-sm flex flex-col min-h-[550px] bg-[#0F172A] overflow-hidden duration-500 hover:scale-105 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white font-poppins">

            <a href="#" className='opacity-30 hover:opacity-90 transition-all ease-in-outn'>
                <img className="rounded-t-lg grayscale-0" src={`../../public/${Project.Project.thumbnail}`} alt="" />
            </a>
            <div className="p-5 flex flex-col justify-between h-full">
                <div>

                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"> {Project.Project.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-white dark:text-gray-400"> {Project.Project.description}</p>
                    <div className='flex flex-row flex-wrap gap-3'>
                    {Project.Project.tools.map( (item, index) => (
                        <div key={`toolIcon${index}`} className=' border-[1px] border-gray-500 p-1 w-auto' title={item}>
                            <p className='font-poppins font-regular text-gray-500 text-xs cursor-default'> {item} </p>
                        </div>
                        ))}
                    </div>
                </div>
                
                <div className='flex flex-row gap-6'>
                    <a href={Project.Project.liveLink} target='_blank' className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7477FF] rounded-lg hover:bg-[#3b3c77] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Live 
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        
                                            
                    </a>
                    <a href={Project.Project.repoLink} target='_blank' className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7477FF] rounded-lg hover:bg-[#3b3c77] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <p>Repo</p>
                        <AiFillGithub className='text-xl'/>
                    </a>
                </div>
                
                
            </div>
        </div>

  )
}

export default ProjectCard