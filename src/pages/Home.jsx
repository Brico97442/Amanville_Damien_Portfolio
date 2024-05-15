import React from "react";
import Welcome from "../components/Welcome";
import Skills from "../components/Skills";
import Section from "../components/Section";

function Home() {
  return (
    <main className="home">
      <Welcome />
      <Section
        paragraphe="Ceci est un ll!,nklmn,pmk,lm,lm,ml,ml,lm,m,ml! ;;ùml;mll$^lplp^lp"
        className="about"
        titleContent="A propos"
      />
      <Skills />
      <Section
        className="services-card"
        titleContent="Mes services"
      />
    </main>
  );
}
export default Home;
