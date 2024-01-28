import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-11
                     py-36"
    >
      <h3 className="font-poppins font-semibold text-xl text-white border-b-8 border-[#7477FF] ">
        Tools I Use
      </h3>
      <div className="flex flex-wrap gap-10 px-11 justify-center">
        <div className="flex flex-col items-center">
          <SiReact className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            React Js
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            Typescript
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            Javascript
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiHtml5 className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            HTML5
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiCss3 className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            CSS 3
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiSass className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            SaSS
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            Tailwind Ui
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiBootstrap className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            Bootstrap
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SiGit className="text-6xl text-gray-600" />
          <p className="text-poppins font-regular text-md text-gray-600 ">
            Git
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
