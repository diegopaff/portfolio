import React from 'react'
import ToolUsedUI from '../ToolUsedUI'
import './SmallProjectsStyles.css'
import { useItem } from '../../hooks/useItem'


const SmallProjectItem = ({ itemInfo, setActiveProjectId }) => {
  const hanldeClick = (ev) => {
    setActiveProjectId(ev.target.id);
  }

  return (
    <button  
      className={`h-[100px] bg-[rgb(15,23,42)] border-b-2 border-gray-600 cursor-pointer p-3 flex flex-col justify-between w-full hover:bg-[#192541] ease-in-out duration-300`}
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