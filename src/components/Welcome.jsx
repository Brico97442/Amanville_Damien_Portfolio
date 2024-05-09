// Header.js
import React from "react";
import "../styles/sass/header.scss";
import damienImg from "../img/assets/img/portfolio/20230703_172611.jpg"

function Welcome() {
  
  return (
    <section className="welcome">
      <div className="identity">
        <img src={damienImg} alt="Damien"/>      
      </div>
      <div className="welcome-content">
        <h1>DévelOppeur</h1>
        <h2>Front-End*</h2>
        <div className="welcome-subtitle">
          <span className="undescore"></span>
          <p>Web</p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
