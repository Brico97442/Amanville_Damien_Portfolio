import React from "react";
import Welcome from "../components/Welcome";
import Section from "../components/Section";
import Test from "../components/test";

function Home() {
  return (
    <main className="home">
      <Welcome />
      <Section
        paragraphe="Passionné de web avec une préférence pour l'UI design, mes compétences sont à votre disposition afin de réalisé vos projets web et de passer de l'idée à la réalité."
        className="about"
        titleContent="A propos de moi"
      />
      <Test/>
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
