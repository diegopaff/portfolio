import React from 'react'
import SmallProjectContainer from '../components/SmallProjects/SmallProjectContainer'

const SmallProjects = () => {
  return (
    <>
        <h2 className='font-poppins font-semibold text-xl text-white border-b-8 border-[#7477FF] 
                      md:justify-self-start'>
          Small Projects
        </h2>
        <SmallProjectContainer/>
    </>
  )
}

export default SmallProjects