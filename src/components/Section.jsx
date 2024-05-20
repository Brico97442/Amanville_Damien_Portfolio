import React from "react";
import Servicecard from "./Servicecard";
import { faCode, faLayerGroup, faGlobe, faCartShopping } from "@fortawesome/free-solid-svg-icons"; // Utilisation de faTimes au lieu de faXmark pour l'icône de fermeture

function Section({ className, titleContent, paragraphe, link, linkText }) {
  // Supposons que vous avez un tableau de données pour les cartes de service
  const serviceData = [
    {
      title: "One Page Application",
      content:
        "Vous souhaitez simplement et efficacement établir votre présence en ligne ? Cet solution est parfaite pour vous",
        icon: faCode,
      },
    {
      title: "Multi Page Application ",
      content:
        "Explorez notre solution de sites vitrine multi-pages, conçue pour offrir une expérience web plus complête et entièrement personnalisable, présentant en détail votre entreprise, vos produits et vos valeurs.",
      icon: faLayerGroup,
    },
    {
      title: "Référencement / SEO",
      content:
        "Dominez les résultats de recherche et attirez un flux constant de prospects qualifiés grâce à notre expertise en SEO.",
        icon: faGlobe,
      },
    {
      title: "Sit e-commerce",
      content:
        "Conception de plateforme e-commerce, conçue pour offrir une expérience d'achat en ligne fluide et sécurisée, mettant en valeur vos produits de manière attrayante et maximisant les conversions pour votre entreprise.",
        icon: faCartShopping,
      },
  ];

  return (
    <section className={className}>
      <div className="section-content">
        <div className="section-content-wrapper">
          <h1>{titleContent}</h1>
          <hr />
          <p>{paragraphe}</p>
          <a href={link}>{linkText}</a>
          {className === "services-card" && (
            <div className="services-card">
              {serviceData.map((service, index) => (
                <Servicecard
                  key={index}
                  title={service.title}
                  content={service.content}
                  icon={service.icon}
                  link="/Contact"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section;
