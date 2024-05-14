import React from "react";
import Welcome from "../components/Welcome";
import Skills from "../components/Skills";
import Services from "../components/Services";
import About from "../components/About";
function Home() {
  return (
    <main className="home">
      <Welcome />
      <About/>
      <Skills />
      <Services/>

    </main>
  );
}
export default Home;
