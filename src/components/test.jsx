import React, { useState } from "react";

function Test() {
  const [currentTab, setCurrentTab] = useState("competences"); // État pour représenter l'onglet actuellement sélectionné

  return (
    <div id="skills">
      <div className={currentTab === "competences" ? "competences" : "hidden"}>
        <h1>Compétences</h1>
        Le reste du gros chien  contenu de l'onglet 
      </div>
      <div className={currentTab === "services" ? "competences" : "hidden"}>
        <p>Les services que j'utilise</p>
         Le rese du contenu de l'onglet "Services"
      </div>
      <button onClick={() => setCurrentTab("competences")}>Compétences</button>
      <button onClick={() => setCurrentTab("services")}>Services</button>
    </div>
  );
}

export default Test;
