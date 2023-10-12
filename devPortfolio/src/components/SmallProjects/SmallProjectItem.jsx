import React from 'react'
import ToolUsedUI from '../ToolUsedUI'

const SmallProjectItem = ({ itemInfo }) => {
    
  return (
    <div className='h-[100px] bg-[#0F172A] cursor-pointer p-3 border-b-2 border-[grey]'>
        <h3> { itemInfo.title } </h3>
        <div className='flex flex-row flex-wrap gap-3'>
          {itemInfo.tools.map((item,index) => (
            <ToolUsedUI key={`SmallProjectsTools${item}${index}`} item={item} />
          ))}
        </div>
    </div>
  )
}

export default SmallProjectItem