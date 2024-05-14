import React from "react";
import Videocard from "../components/Videocard";
import videoData1 from "../img/ninacarducci.webm";
import videoData2 from "../img/ohmyfood.webm";

function Projects() {
  
  return (
    <main className="projects">
      <h2>Projets</h2>
      <hr />
      <div className="card-wrrapper">
        <Videocard
          title="Nina Carducci"
          description="Le site d'une photographe"
          video={videoData1}
          content="Ce site présente le travail de Nina Carducci, une jeune photographe talentueuse et passionnée. Au programme Optimisation SEO, Amélioration des performances du site, et mise en place des métadonnées."
          link="https://brico97442.github.io/NinaCarducci/"        
        />
        <Videocard
          title="Oh My Food"
          description="Application de Réservation"
          video={videoData2}
          content="Oh My Food est un projet qui à été réalisé en Html, CSS, et Javascript. Il s'agit d'une interface utilisateur pour les restaurateurs, afin de publier en ligne leurs menus."
          link="https://brico97442.github.io/OhMyFood/"
        />
      </div>
    </main>
  );
}

export default Projects;
