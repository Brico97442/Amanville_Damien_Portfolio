import React from "react";
import { Link } from "react-router-dom";
import githubImg from "../img/assets/github2.png";

function GithubItem() {
  return (
    <section className="github-item">
      <p>Retrouvez l'ensemble de mes projets sur</p>
      <div className="github-item-wrapper">
        <Link to="https://github.com/Brico97442" target="blank">
          <p>Mon Github</p>
        </Link>
        <div className="icon-container">
          <img src={githubImg} alt="Icône GitHub" />
        </div>
      </div>
    </section>
  );
}

export default GithubItem;
