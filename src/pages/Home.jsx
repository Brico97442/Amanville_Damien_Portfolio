import React from "react";
import Welcome from "../components/Welcome";
import Skills from "../components/Skills";
import Section from "../components/Section";

function Home() {
  return (
    <main className="home">
      <Welcome />
      <Section
        paragraphe="Il faut que j'écrit quelque chose à propos de moi"
        className="about"
        titleContent="A propos"
      />
      <Skills />
      <Section
        className="services-card"
        titleContent="Mes services"
      />
      <Section
        className="contact"
        titleContent="Contact"
        paragraphe="Une idée ? Un projet? Me contacter"
      />
    </main>
  );
}
export default Home;
