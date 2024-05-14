import React from "react";
import Videocard from "../components/Videocard";
import videoData1 from "../img/ninacarducci.webm";
import videoData2 from "../img/ohmyfood.webm";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <main className="projects">
      <h2>PROJETS</h2>
      <hr />
      <div className="card-wrrapper">
        <Link to="https://brico97442.github.io/NinaCarducci/" target="blank">
          <Videocard
            title="Nina Carducci"
            description="Le site d'une photographe"
            video={videoData1}
          />
        </Link>
        <Link to="https://brico97442.github.io/OhMyFood/" target="blank">
          <Videocard
            title="Oh My Food"
            description="Appplication de Réservation"
            video={videoData2}
          />
        </Link>
      </div>
    </main>
  );
}

export default Projects;
