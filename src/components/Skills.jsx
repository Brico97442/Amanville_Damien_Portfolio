// Header.js
import React from "react";
import cssImg from "../img/assets/css.png";
import reactImg from "../img/assets/react.png";
import reactRouterImg from "../img/assets/reactrouter.png";
import mongodbImg from "../img/assets/mongodb.png";
import sassImg from "../img/assets/sass.png";
import reduxImg from "../img/assets/redux.png";
import jsImg from "../img/assets/javascript.png";
import html5Img from "../img/assets/html5.png";
import githubImg from "../img/assets/github.png";

function Skills() {
  // Recevoir la fonction openModal en tant que prop
  return (
    <div className="competences">
        <h2>Compétences</h2>
        <hr/>
        <p>J'ai déjà bosser avec :</p>
      <div className="competences-wrapper">
        <div className="icons">
          <img src={jsImg} alt="Icône JS" />
        </div>
        <div className="icons">
          <img src={reduxImg} alt="Icône Redux" />
        </div>
        <div className="icons">
          <img src={sassImg} alt="Icône Sass" />
        </div>
        <div className="icons">
          <img src={mongodbImg} alt="Icône MongoDB" />
        </div>
        <div className="icons">
          <img src={githubImg} alt="Icône GitHub" />
        </div>
        <div className="icons">
          <img src={html5Img} alt="Icône HTML5" />
        </div>
        <div className="icons">
          <img src={reactImg} alt="Icône React" />
        </div>
        <div className="icons">
          <img src={reactRouterImg} alt="Icône React Router" />
        </div>
        <div className="icons">
          <img src={cssImg} alt="Icône CSS" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
