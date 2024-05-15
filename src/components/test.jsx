import React, { useState } from "react";
import Career from "./Career";
import Skills from "./Skills";

function Test() {
  const [currentTab, setCurrentTab] = useState("competences"); // État pour représenter l'onglet actuellement sélectionné

  return (
    <div id="select-wrapper">
      <div className="button-wrapper">
        <button className={currentTab === "competences" ? "active" : ""}>
          <h2 onClick={() => setCurrentTab("competences")}>Compétences</h2>
        </button>
        <button className={currentTab === "career" ? "active" : ""}>
          <h2 onClick={() => setCurrentTab("career")}>
            Expériences professionnelles
          </h2>
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
