import React from 'react'

const ButtonCV = () => {
  return (
    <a href='https://drive.google.com/uc?export=download&id=1QP-YeXJ_HUati5NBKsbPfsjvGPsvhTrt' className={`hidden sm:inline-flex bg-[#7477FF] hover:bg-[#6a6cff] text-white font-bold py-2 px-4 rounded  items-center`}>
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download CV</span>
    </a>
  )
}

export default ButtonCV