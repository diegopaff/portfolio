import React from 'react'
import ToolUsedUI from '../ToolUsedUI'
import './SmallProjectsStyles.css'

const SmallProjectItem = ({ itemInfo }) => {
  

  return (
    <button  
      className={`h-[100px] bg-[#0F172A] cursor-pointer p-3 flex flex-col justify-between w-full`}>
        <h3 className=' text-white font-semibold'> { itemInfo.title } </h3>
        <div className='flex flex-row flex-wrap gap-3'>
          {itemInfo.tools.map((item,index) => (
            <ToolUsedUI key={`SmallProjectsTools${item}${index}`} item={item} />
          ))}
        </div>
    </button>
  )
}

export default SmallProjectItem