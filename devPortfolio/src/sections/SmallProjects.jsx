import React, { useEffect, useState } from "react";
import SmallProjectContainer from "../components/SmallProjects/SmallProjectContainer";
import SmallProjectMobileContainer from "../components/SmallProjects/SmallProjectMobileContainer";

const SmallProjects = () => {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    function getScreenSize() {
      if (window.innerWidth < 1024) return true;
      return false;
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <>
      <h2
        className="font-poppins font-semibold text-xl text-white border-b-8 border-[#7477FF] 
                      md:justify-self-start"
      >
        Small Projects
      </h2>

      {screenSize && <SmallProjectMobileContainer isMobile={screenSize} />}
      {!screenSize && <SmallProjectContainer isMobile={screenSize} />}
    </>
  );
};

export default SmallProjects;
