import React from "react";
import Videocard from "../components/Videocard";
function Projects() {
  return (
    <div className="projects">
      <p>Mes projets seront ici </p>
      <div className="card-wrrapper">
        <Videocard />
        <Videocard />
        <Videocard />
      </div>
    </div>
  );
}

export default Projects;
