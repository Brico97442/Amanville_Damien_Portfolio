import React from "react";
import Servicecard from "./Servicecard";

function Section({ className, titleContent, paragraphe, link, linkText }) {
  // Supposons que vous avez un tableau de données pour les cartes de service
  const serviceData = [
    {
      title: "One page apllication",
      description: "Site vitrine One page",
      content:
        "Vous souhaitez simplement et efficacement établir votre présence en ligne ? Cet solution est parfaite pour vous",
    },
    {
      title: "Multi Page Application ",
      description: "Description du service",
      content:
        "Explorez notre solution de sites vitrine multi-pages, conçue pour offrir une expérience web complète plus complête et entièrement personnalisable, présentant en détail votre entreprise, vos produits et vos valeurs, tout en maximisant les opportunités de conversion. ",
    },
    {
      title: "Référencement / SEO",
      description: "Description du service",
      content:
        "Dominez les résultats de recherche et attirez un flux constant de prospects qualifiés grâce à notre expertise en SEO.",
    },
    {
      title: "Plateforme web e-commerce",
      description: "Description du service",
      content:
        "Découvrez nos plateforme e-commerce, conçue pour offrir une expérience d'achat en ligne fluide et sécurisée, mettant en valeur vos produits de manière attrayante et maximisant les conversions pour votre entreprise.",
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
                  description={service.description}
                  content={service.content}
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
