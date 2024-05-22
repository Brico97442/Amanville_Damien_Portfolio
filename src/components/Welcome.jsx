// Header.js
import React from "react";
import "../styles/sass/header.scss";

function Welcome() {
  return (
    <section className="welcome">
      <div className="animated">
        <div className="welcome-content">
          <h1>DévelOppeur</h1>
          <h2>Front-End*</h2>
          <div className="welcome-subtitle">
            <span className="undescore"></span>
            <p>Web</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
