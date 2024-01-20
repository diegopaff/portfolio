import SmallProjectDetail from "./SmallProjectDetail";
import SmallProjectItem from "./SmallProjectItem";
import { smallProjectsList } from "../../constants";
import { useState } from "react";

const SmallProjectsContainer = ({ isMobile }) => {
  const [activeProjectId, setActiveProjectId] = useState("RemoteJobDevSearch");

  return (
    <div className="w-[1200px] bg-slate-300 h-[600px] flex flex-row rounded-lg overflow-hidden">
      <ul className="basis-1/3  w-[40%] ">
        {smallProjectsList.map((projectInfo, index) => (
          <SmallProjectItem
            key={`smallProjec${index}`}
            itemInfo={projectInfo}
            setActiveProjectId={setActiveProjectId}
            activeProjectId={activeProjectId}
          />
        ))}
      </ul>
      <SmallProjectDetail
        activeProjectId={activeProjectId}
        isMobile={isMobile}
      />
    </div>
  );
};

export default SmallProjectsContainer;
