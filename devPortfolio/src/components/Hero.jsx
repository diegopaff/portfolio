import React from "react";

const Hero = () => {
  return (
    <div
      className="
      bg-[#0F172A] h-full flex flex-col w-full max-w-[1600px] mx-auto gap-[8%] mt-[20%]
      md:flex-row md:align-middle md:mt-0"
    >
      <div
        className="
        flex flex-col w-full px-8 gap-7 mt-7
        md:align-middle md:justify-center md:mt-0 md:pl-[150px]
        "
      >
        <h2
          className="
          font-pacifico text-4xl text-white text-center
          md:text-left md:text-5xl
          lg:text-7xl"
        >
          Hi,
        </h2>
        <h2
          className="font-pacifico text-4xl text-white text-center
          md:text-left md:text-5xl
          lg:text-7xl"
        >
          I am <span className=" text-[#7477FF] ">D</span>iego,
        </h2>

        <h2
          className="font-pacifico text-4xl text-white text-center
          md:text-left md:text-5xl
          lg:text-7xl"
        >
          Web Developer
        </h2>
        <p
          className="font-poppins font-light text-sm text-white text-center
                      lg:text-left"
        >
          Frontend Developer, Profficienct in React & Node
        </p>
        <a
          href="#Projects"
          className="mx-auto w-[40%] flex justify-center
              lg:mx-0 lg:justify-start"
        >
          <button
            className={`bg-[#7477FF] hover:bg-[#6a6cff] text-white font-bold py-2 px-4 rounded items-center`}
          >
            <span>See projects</span>
          </button>
        </a>
      </div>
      <div
        className="
        flex w-full px-10
        sm:align-middle sm:justify-center"
      >
        <img
          className="w-full object-contain
                     sm:max-w-md"
          src="https://i.ibb.co/n09VqCH/hero-img-min.png"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
