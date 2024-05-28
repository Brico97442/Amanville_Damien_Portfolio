import React from "react";
import GithubItem from "../components/GithubItem";
import Videocard from "../components/Videocard";
import ninaImg from "../img/nina.webp";
import ohmyfoodImg from "../img/ohmyfood.webp";
import kasaImg from "../img/kasa.webp";
import sophieBluelImg from "../img/sophie_bluel.webp";
import argentBankImg from "../img/argent-bank.webp";
import cssImg from "../img/assets/css.webp";
import html5Img from "../img/assets/html5.webp";
import reactImg from "../img/assets/react.webp";
import mongodbImg from "../img/assets/mongodb.webp";
import sassImg from "../img/assets/sass.png";
import reduxImg from "../img/assets/redux.webp";
import jsImg from "../img/assets/javascript.webp";

const projectData = [
  {
    title: "Nina Carducci",
    description: "Le site d'une photographe",
    url: ninaImg,
    content:
      "Ce site présente le travail de Nina Carducci, une jeune photographe talentueuse et passionnée. Au programme Optimisation SEO, Amélioration des performances du site, et mise en place des métadonnées.",
    link: "https://brico97442.github.io/NinaCarducci/",
    showNavLink: true,
    githubLink: "https://github.com/Brico97442/NinaCarducci",
    linkSubtitle: "Github",
    iconUrls: [cssImg,html5Img,jsImg],
  },
  {
    title: "Oh My Food",
    description: "Application de Réservation",
    url: ohmyfoodImg,
    content:
      "Oh My Food est un projet qui a été réalisé en Html, CSS, et Javascript. Il s'agit d'une interface utilisateur pour les restaurateurs, afin de publier en ligne leurs menus.",
    link: "https://brico97442.github.io/OhMyFood/",
    showNavLink: true,
    githubLink: "https://github.com/Brico97442/OhMyFood",
    linkSubtitle: "Github",
    iconUrls: [cssImg,html5Img],

  },
  {
    title: "Kasa",
    description: "Application d'hébergements",
    url: kasaImg,
    content:
      "Kasa est un projet d'application permettant au particulier de réserver un hébergement.",
    link: "https://kasa-navy-beta.vercel.app/",
    showNavLink: true,
    githubLink: "https://github.com/Brico97442/Kasa",
    linkSubtitle: "Github",
    iconUrls: [cssImg,html5Img,jsImg,reactImg,sassImg],
  },
  {
    title: "Sophie Bluel Architecte",
    description: "Portfolio de Sophiue Bluel",
    url: sophieBluelImg,
    content:
      "Ce projet porte sur la conception du portfolio de Sophie Bluel, mise en place d'un système d'authentification. Elaboration d'une fonctionnalité de tris des projets avec la possibilité d'ajouter et de suprimer des projets",
    link: "https://brico97442.github.io/OhMyFood/",
    showNavLink: false,
    githubLink:
      "https://github.com/Brico97442/Sophie__BLUEL__Architecte__Portfolio",
    linkSubtitle: "Github",
    iconUrls: [cssImg,html5Img,jsImg],

  },
  {
    title: "Argent Bank",
    description: "Application Bancaire",
    url: argentBankImg,
    content:
      "Argent Bank est une interface utilisateur pour une application bancaire. Avec la possibilité de modifier le nom de l'utilisateur, stocké dans une base de données, ce projet portait sur la gestion du state global dans une application via redux",
    link: "https://brico97442.github.io/OhMyFood/",
    showNavLink: false,
    githubLink: "https://github.com/Brico97442/ArgentBank-website",
    linkSubtitle: "Github",
    iconUrls: [cssImg,html5Img,jsImg,reactImg,reduxImg,mongodbImg,sassImg],
  },
];

function Projects() {
  return (
    <main className="projects" id="projects">
      <h1>Mes derniers projets</h1>
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
            linkSubtitle={card.linkSubtitle}
            showNavLink={card.showNavLink}
            githubLink={card.githubLink}
            iconUrls={card.iconUrls} // Passez les URLs des icônes

          />
        ))}
      </div>
      <GithubItem
        linkSubtitle="Mon Github"
        githubItemTitle="Retrouvez tout mes projets sur"
        githubLink="https://github.com/Brico97442"
      />
    </main>
  );
}

export default Projects;
