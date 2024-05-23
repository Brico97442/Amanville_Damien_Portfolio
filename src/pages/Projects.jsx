import React from "react";
import Videocard from "../components/Videocard";
import ninaImg from "../img/nina.png";
import ohmyfoodImg from "../img/ohmyfood.png";
import kasaImg from "../img/kasa.png";
import sophieBluelImg from "../img/sophie_bluel.png";
import argentBankImg from "../img/argent-bank.png";

const projectData = [
  {
    title: "Nina Carducci",
    description: "Le site d'une photographe",
    url: ninaImg,
    content: "Ce site présente le travail de Nina Carducci, une jeune photographe talentueuse et passionnée. Au programme Optimisation SEO, Amélioration des performances du site, et mise en place des métadonnées.",
    link: "https://brico97442.github.io/NinaCarducci/"
  },
  {
    title: "Oh My Food",
    description: "Application de Réservation",
    url: ohmyfoodImg,
    content: "Oh My Food est un projet qui a été réalisé en Html, CSS, et Javascript. Il s'agit d'une interface utilisateur pour les restaurateurs, afin de publier en ligne leurs menus.",
    link: "https://brico97442.github.io/OhMyFood/"
  },
  {
    title: "Kasa",
    description: "Application d'hébergements",
    url: kasaImg,
    content: "Kasa est un projet d'application permettant au particulier de réserver un hébergement.",
    link: "https://brico97442.github.io/OhMyFood/"
  },
  {
    title: "Sophie Bluel Architecte",
    description: "Portfolio de Sophiue Bluel",
    url: sophieBluelImg,
    content: "Ce projet porte sur la conception du portfolio de Sophie Bluel, mise en place d'un système d'authentification. Elaboration d'une fonctionnalité de tris des projets avec la possibilité d'ajouter et de suprimer des projets",
    link: "https://brico97442.github.io/OhMyFood/"
  },
  {
    title: "Argent Bank",
    description: "Application Bancaire",
    url: argentBankImg,
    content: "Kasa est un projet d'application permettant au particulier de réserver un hébergement.",
    link: "https://brico97442.github.io/OhMyFood/"
  },
];

function Projects() {
  return (
    <main className="projects" id="projects">
      <h2>Mes projets</h2>
      <div className="divider">
        <hr />
      </div>
      <div className="card-wrapper">
        {projectData.map((card, index) => (
          <Videocard
            key={index}
            title={card.title}
            description={card.description}
            websiteScreenshot={card.url}
            content={card.content}
            link={card.link}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
