import React from "react";
import { Footer, Navbar } from "./components";
import {
  Contact,
  About,
  Hero,
  Projects,
  Skills,
  SmallProjects,
} from "./sections";

const App = () => {
  return (
    <div className="bg-[#0F172A] overflow-hidden flex flex-col">
      <header className={`w-full flex justify-center`}>
        <Navbar />
      </header>

      <section className={`bg-[#0F172A] h-screen mt-[-18px] mb-20 `}>
        <Hero />
      </section>

      <div className="diagonal-dark-to-light"></div>

      <div className={`bg-[#1E293B]`}>
        <section id="About" className={``}>
          <About />
        </section>

        <div className="diagonal-light-to-dark"></div>
        <section id="Skills" className={`bg-[#0F172A]`}>
          <Skills />
        </section>
        <div className="diagonal-dark-to-light"></div>

        {/* <section id='Projects' >
          <Projects/>
        </section> */}

        <section
          id="Projects"
          className="flex flex-col gap-9 justify-start  mt-9 m:mt-32 items-center px-5 py-7 bg-[#1E293B] min-h-screen"
        >
          <SmallProjects />
        </section>

        <div id="Contact" className="flex flex-col py-12">
          <Contact />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
