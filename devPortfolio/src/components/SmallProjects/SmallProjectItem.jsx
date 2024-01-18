import React, { useEffect, useState } from "react";
import ToolUsedUI from "../ToolUsedUI";
import "./SmallProjectsStyles.css";
import { useItem } from "../../hooks/useItem";

const SmallProjectItem = ({
  itemInfo,
  setActiveProjectId,
  activeProjectId,
}) => {
  const activeStyle = activeProjectId == itemInfo.id ? true : false;
  const hanldeClick = (ev) => {
    setActiveProjectId(ev.target.id);
  };

  return (
    <button
      className={`h-[100px] bg-[#0F172A] relative ${
        activeStyle
          ? "border-accent  z-10 border-4 bg-[#0b1220] "
          : " border-b-2 border-gray-500"
      }  cursor-pointer  flex flex-col justify-between w-full  ease-in duration-300 `}
      onClick={hanldeClick}
      id={itemInfo.id}
    >
      <h3 className=" text-white font-semibold text-lg mt-2 ml-2">
        {itemInfo.title}
      </h3>
      <div className="flex flex-row flex-wrap gap-3 mb-2 ml-2">
        {itemInfo.tools.map((item, index) => (
          <ToolUsedUI key={`SmallProjectsTools${item}${index}`} item={item} />
        ))}
      </div>
      <div className="bg-[#0b1220] w-2 h-full absolute top-0 left-full"></div>
    </button>
  );
};

export default SmallProjectItem;
