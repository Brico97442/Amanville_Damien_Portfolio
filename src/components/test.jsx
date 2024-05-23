import React, { useState } from "react";
import Career from "./Career";
import Skills from "./Skills";

function Test() {
  const [currentTab, setCurrentTab] = useState("competences"); // État pour représenter l'onglet actuellement sélectionné

  return (
    <div id="select-wrapper">
      <h1>Compétences <br/>et<br/> expériences professionnelles</h1>
      <div className="divider">
        <hr />
      </div>
      <div className="button-wrapper">
        <button
          className={currentTab === "competences" ? "active" : ""}
          onClick={() => setCurrentTab("competences")}
        >
          <h2>Mes compétences</h2>
        </button>
        <button
          className={currentTab === "career" ? "active" : ""}
          onClick={() => setCurrentTab("career")}
        >
          <h2>Expériences professionnelles</h2>
        </button>
      </div>

      <div className={currentTab === "competences" ? "competences" : "hidden"}>
        <Skills />
      </div>
      <div className={currentTab === "career" ? "carrer" : "hidden"}>
        <Career />
      </div>
    </div>
  );
}

export default Test;
