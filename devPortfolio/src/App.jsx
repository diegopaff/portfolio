import React from 'react';
import { About, Contact, Footer, Hero, Navbar, Projects, Skills} from './components'; 

const App = () => {
  return (
    <div className='bg-[#0F172A] overflow-hidden flex flex-col'>
      <header className={`w-full flex justify-center`}>
        <Navbar/>
      </header>

      <section className={`bg-[#0F172A] h-screen mt-[-18px] mb-20 `}>
        <Hero/>
      </section>

      <div className='diagonal-dark-to-light'></div>

      <div className={`bg-[#1E293B]`}>
        
        <div id='About' className={``}>
          <About/>
        </div>

        <div className='diagonal-light-to-dark'></div> 
        <div id='Skills' className={`bg-[#0F172A]`}>
          <Skills/>
        </div>
        <div className='diagonal-dark-to-light'></div>

        <div id='Projects' >
          <Projects/>
        </div>

        <div id='Contact' className='flex flex-col py-12'>
          
          <Contact/>
          
        </div >
                
        
      </div>
      <footer>
        <Footer/>
      </footer>
      
      
    </div>
  )
}

export default App