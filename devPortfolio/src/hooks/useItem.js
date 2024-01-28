import { smallProjectsList } from "../constants";

import { useEffect, useState } from "react";

export function useItem(projectId) {
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    smallProjectsList.forEach((item) => {
      if (item.id === projectId) {
        setActiveProject(item);
      }
    });
  }, [projectId]);

  return activeProject;
}
