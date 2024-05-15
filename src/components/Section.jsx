import React from "react";
import Servicecard from "./Servicecard";

function Section({ className, titleContent, paragraphe, link, linkText }) {
  // Supposons que vous avez un tableau de données pour les cartes de service
  const serviceData = [
    {
      title: "One Page Application ",
      description: "Un site vitrine,en One Page",
      content: "Une description 1",
    },
    {
      title: "Multi Page Application ",
      description: "Description du service",
      content: "Une description 2",
    },
    {
      title: "Référencement / SEO",
      description: "Description du service",
      content: "Une description 3",
    },
    {
      title: "Application Web complète",
      description: "Description du service",
      content: "Une description 4",
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
