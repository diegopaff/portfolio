import React, { useState } from 'react';
import { navLinks } from '../constants';
import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai' 

import ButtonCV from './ButtonCV';

const Navbar = () => {

  

  const [toggle, setToggle] = useState(false);
  const handleToggleNavbar = () => setToggle((prev) => !prev ) 

  return (
    <nav className='max-w-[1600px] w-full flex py-6 px-6 justify-between mx-auto absolute' >
      <h2 className='font-poppins text-[#7477FF] text-3xl font-extrabold'>DC</h2>
      {/* --------------- NavBar version desktop ---------------------------*/}
      <ul className='list-none sm:flex hidden justify-end items-center gap-10'>
        {navLinks.map((item, index) => (
          <li key={item.id} className='flex justify-center align-middle text-white hover:text-[#7477FF] gap-2 font-poppins cursor-pointer'>  
            <a href={`#${item.title}`} 
               className='flex' >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {toggle ? 
          <AiOutlineClose  onClick={handleToggleNavbar} className={`text-white text-3xl cursor-pointer`}/> : 
            <AiOutlineMenu  onClick={handleToggleNavbar} className='text-white text-3xl cursor-pointer'/>}

        {/* --------------- NavBar version mobile ---------------------------*/}
        <div className={`${toggle ? 'flex' : 'hidden '} absolute top-20 right-0 m-2 min-w-full h-screen rounded-xl`}>
          <ul className='bg-[#0F172A] list-none flex flex-col items-center w-full'>
            {navLinks.map((item, index) => (
              
              <li key={item.id} className={ `w-full flex h-20 justify-center items-center text-white font-poppins cursor-pointer border-b-2 border-gray-300 font-medium text-lg hover:bg-[#242f41]`}>  
                <a 
                  href={`#${item.title}`} 
                  className='flex justify-center items-center w-full h-full'
                  onClick={handleToggleNavbar}
                  >
                  {item.title}
                </a>
              </li>
            ))}
            
              <li className={ `w-full flex h-20 justify-center items-center text-white font-poppins cursor-pointer border-b-2 border-gray-300 font-medium text-lg hover:bg-[#242f41]`}>  
                <a href='https://drive.google.com/uc?export=download&id=1QP-YeXJ_HUati5NBKsbPfsjvGPsvhTrt'
                   className='flex'>
                  Download CV
                </a>
              </li>
            
          </ul>
        </div>
      </div>
      <ButtonCV/>
    </nav>
  )
    
}

export default Navbar