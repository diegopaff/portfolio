import React, { useState } from 'react';

import { close, menu } from '../assets';
import { navLinks } from '../constants'

import ButtonCV from './ButtonCV';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className='max-w-[1600px] w-full flex py-6 justify-between mx-auto' >
      <h2 className='font-poppins text-[#7477FF] text-3xl font-extrabold'>DC</h2>
      {/* --------------- NavBar version desktop ---------------------------*/}
      <ul className='list-none sm:flex hidden justify-end items-center gap-10'>
        {navLinks.map((item, index) => (
          <li key={item.id} className='flex justify-center align-middle text-white gap-2 font-poppins cursor-pointer'>  
            <a href={`#${item.title}`} 
               className='flex' >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* --------------- NavBar version mobile ---------------------------*/}
        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-0 my-2 min-w-full rounded-xl `}>
          <ul className='bg-[#1E293B] list-none flex flex-col items-center w-full'>
            {navLinks.map((item, index) => (
              <li key={item.id} className={ `w-full flex h-20 justify-center items-center text-white font-poppins cursor-pointer border-b-2 border-gray-300 font-medium text-lg hover:bg-[#242f41]`}>  
                <a href={`#${item.title}`} 
                  className='flex'>
                  {item.title}
                </a>
              </li>
            ))}
            
              <li className={ `w-full flex h-20 justify-center items-center text-white font-poppins cursor-pointer border-b-2 border-gray-300 font-medium text-lg hover:bg-[#242f41]`}>  
                <a href='#'
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