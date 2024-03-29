import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ToolUsedUI from "./ToolUsedUI";

const ProjectCard = ({ Project }) => {
  return (
    <div className="max-w-sm flex flex-col h-[400px] md:h-[450px] bg-[#0F172A] overflow-hidden duration-500 hover:scale-105 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white font-poppins">
      <div className="opacity-30 hover:opacity-90 transition-all ease-in-outn h-[200px] overflow-hidden hover:h-[350px] duration-700">
        <img
          className="rounded-t-lg grayscale-0"
          src={`${Project.thumbnail}`}
          alt=""
        />
      </div>
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <a href="#">
            <h5 className="mb-2  text-xl m:text-2xl  font-bold tracking-tight text-white dark:text-white">
              {" "}
              {Project.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-sm m:text-base text-white dark:text-gray-400">
            {" "}
            {Project.description}
          </p>
          <div className="flex flex-row flex-wrap gap-3">
            {Project.tools.map((item, index) => (
              <ToolUsedUI key={`ProjectTools${item}${index}`} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <a
            href={Project.liveLink}
            target="_blank"
            className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7477FF] rounded-lg hover:bg-[#3b3c77] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Live
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href={Project.repoLink}
            target="_blank"
            className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7477FF] rounded-lg hover:bg-[#3b3c77] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <p>Repo</p>
            <AiFillGithub className="text-xl" />
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <a
          href={Project.Project.liveLink}
          target="_blank"
          className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7477FF] rounded-lg hover:bg-[#3b3c77] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Live
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href={Project.Project.repoLink}
          target="_blank"
          className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7477FF] rounded-lg hover:bg-[#3b3c77] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <p>Repo</p>
          <AiFillGithub className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
