import React from "react";
import Welcome from "../components/Welcome";
import Skills from "../components/Skills";
import Section from "../components/Section";

function Home() {
  return (
    <main className="home">
        <Welcome/>
        <Section content="k^k^kp^k^pkp^kp^kp^k^pk" className="about" title="A propos"/>
        <Skills/>
        <Section content="cette section parle de moi aussi" className="about" title="Mes services"/>
        <Section content="Commençons un projet ensemble," className="about" title="Contact"/>
      </main>
  )
}
export default Home;
