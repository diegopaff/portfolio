import React from 'react';
import styles from './style.js';
import { About, Contact, Footer, Hero, Navbar, Proyects, Skills } from './components'; 

const App = () => {
  return (
    <div className='bg-[#0F172A] overflow-hidden flex flex-col'>
      <div className={`${styles.paddingX} w-full`}>
        <div className='w-full'> 
          <Navbar/>
        </div>

      </div>
      
      <div className={`bg-[#0F172A] w-full`}>
        <Hero/>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About/>
          <Skills/>
          <Proyects/>
          <Contact/>        
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
      
      
    </div>
  )
}

export default App