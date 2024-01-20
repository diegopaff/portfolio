import { smallProjectsList } from "../../constants";
import SmallProjectDetail from "./SmallProjectDetail";

function SmallProjectMobileContainer({ isMobile }) {
  return (
    <div className=" relative">
      {smallProjectsList.map((project) => (
        <>
          <SmallProjectDetail
            activeProjectId={project.id}
            isMobile={isMobile}
          />
        </>
      ))}
    </div>
  );
}

export default SmallProjectMobileContainer;
