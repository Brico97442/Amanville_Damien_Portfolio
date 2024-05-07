import React from "react";
import Videocard from "../components/Videocard";
import videoData1 from "../img/ninacarducci.webm"
import videoData2 from "../img/ohmyfood.webm"


function Projects() {
  // Supposons que les données de la vidéo se trouvent dans un tableau appelé "videos" dans votre fichier JSON
  return (
    <main className="projects">
      <h2>PROJETS</h2>
      <div className="card-wrrapper">
          <Videocard 
          title="Nina Carducci"
          description="Le site d'une photographe"
          video={videoData1}
          />
          <Videocard 
          title="Oh My Food"
          description="Appplication de Réservation"
          video={videoData2}
          />
      </div>
    </main>
  );
}

export default Projects;
