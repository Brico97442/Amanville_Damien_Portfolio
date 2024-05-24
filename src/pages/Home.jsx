import React from "react";
import Section from "../components/Section";
import SelectComponent from "../components/SelectComponent";
import Parallaxe from "../components/Parallaxe";
import Projects from "./Projects"
function Home() {
  return (
    <main className="home">
      <Parallaxe/>
      <Section
        paragraphe="Bonjour, mon nom est Amanville Damien, je suis passionné de web avec une préférence pour l'UI design, mes compétences sont à votre disposition afin de réaliser vos projets web et de passer de l'idée à la réalité."
        className="about"
        titleContent="A propos de moi"
      />
      <Projects/>
      <SelectComponent/>
      <Section className="services-card" titleContent="Mes services" />
      <Section
        className="contact"
        titleContent="Une idée ? Un projet ?"
        link="/contact"
        linkText="Me contacter"
      />
    </main>
  );
}
export default Home;
