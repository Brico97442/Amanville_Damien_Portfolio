import React from "react";
import Videocard from "../components/Videocard";
function Projects() {
  return (
    <main className="projects">
      <p>PROJETS</p>
      <div className="card-wrrapper">
        <Videocard />
        <Videocard />
        <Videocard />
        <Videocard />
        <Videocard />
      </div>
    </main>
  );
}

export default Projects;
