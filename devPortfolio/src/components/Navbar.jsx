import React, { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between' >
      <img src={logo} alt="Diego Curutchet Portfolio" className='w-[124px]'/>
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
        <div
          className={`${toggle ? 'flex' : 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounde-xl sidebar`}

        >
          <ul className='list-none flex flex-col justify-end items-center gap-10'>
            {navLinks.map((item, index) => (
              <li key={item.id} className={ `flex justify-center align-middle text-white gap-2 font-poppins cursor-pointer ${navLinks.length -1 ? 'mr-0' : 'mb-1' }`}
              >  
                <a href={`#${item.title}`} 
                  className='flex' >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
    
}

export default Navbar