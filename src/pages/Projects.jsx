import React from "react";
import Videocard from "../components/Videocard";
import projectsData from "../projects.json";

function Projects() {
  // Supposons que les données de la vidéo se trouvent dans un tableau appelé "videos" dans votre fichier JSON
  const videoData = projectsData.video;
         
  return (
    <main className="projects">
      <h2>PROJETS</h2>
      <div className="card-wrrapper">
        {videoData.map((data, index) => (
          <Videocard
          key={data.id} 
          title={data.title}
          description={data.description}
          video={data.url}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
