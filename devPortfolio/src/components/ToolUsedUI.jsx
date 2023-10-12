import React from 'react'

const ToolUsedUI = ( { item }) => {
    
  return (
    <div className='border-[1px] border-gray-500 p-1 w-auto'>
        <p className='font-poppins font-regular text-gray-500 text-xs cursor-default'> {item} </p>
    </div>
  )
}

export default ToolUsedUI