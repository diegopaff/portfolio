import React, { useEffect, useState } from 'react'
import ToolUsedUI from '../ToolUsedUI'
import './SmallProjectsStyles.css'
import { useItem } from '../../hooks/useItem'


const SmallProjectItem = ({ itemInfo , setActiveProjectId , activeProjectId }) => {
  
  const activeStyle = activeProjectId == itemInfo.id ? true : false;
  const hanldeClick = (ev) => {
    setActiveProjectId(ev.target.id);
    
  }

  return (
    <button  
      className={`h-[100px] bg-[rgb(15,23,42)] ${activeStyle ? 'border-green-600 border-4 ' : ' border-b-2 border-gray-500'}  cursor-pointer p-3 flex flex-col justify-between w-full hover:pl-6 ease-in duration-300`}
      onClick={hanldeClick}
      id={itemInfo.id}>
        <h3 className=' text-white font-semibold text-lg'> { itemInfo.title } </h3>
        <div className='flex flex-row flex-wrap gap-3'>
          {itemInfo.tools.map((item,index) => (
            <ToolUsedUI key={`SmallProjectsTools${item}${index}`} item={item} />
          ))}
        </div>
    </button>
  )
}

export default SmallProjectItem