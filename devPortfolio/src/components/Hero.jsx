import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#0F172A] h-screen flex w-full max-w-[1600px] mx-auto align-middle justify-center mt-[-20px]'>

      <div className='flex flex-col w-full justify-center'>
        <h2 className='font-pacifico text-7xl text-white '>Hi,</h2>
        <h2 className='font-pacifico text-7xl text-white '>I am <span className=' text-[#7477FF] '>D</span>iego,</h2>
        <h2 className='font-pacifico text-7xl text-white '> Web Developer</h2>
      </div>
      <div className='flex justify-center align-middle w-full'>
        <img className='w-full object-contain' src='../../public/hero-img.png'></img>
      </div>
      

      

      
    </div>
  )
}

export default Hero