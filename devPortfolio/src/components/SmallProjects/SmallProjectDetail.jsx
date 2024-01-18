import React from "react";
import { useItem } from "../../hooks/useItem";
import { AiFillGithub } from "react-icons/ai";
import "./SmallProjectsStyles.css";

const SmallProjectDetail = ({ activeProjectId }) => {
  const { title, thumbnail, description, liveLink, repoLink } =
    useItem(activeProjectId);

  return (
    <div
      style={{ "--image-url": `url(${thumbnail})` }}
      className={`basis-2/3 bg-[image:var(--image-url)] bg-cover bg-center relative flex flex-col justify-end gap-3 `}
    >
      <div className="absolute ] h-full w-full z-0 border-accent border-4 hover:to-[rgba(15,23,42,0)] duration-500 ease-in"></div>
      <h3 className=" text-white z-10 font-bold text-xl mx-6">{title}</h3>
      <p className=" text-white z-10 font-medium mx-6">{description}</p>
      <div className="flex flex-row gap-6 z-10 mb-6 ml-6">
        <a
          href={liveLink}
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
          href={repoLink}
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

export default SmallProjectDetail;
