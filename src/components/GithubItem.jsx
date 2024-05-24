import React from "react";
import { Link } from "react-router-dom";
import githubImg from "../img/assets/github2.png";

function GithubItem({linkSubtitle,githubItemTitle,githubLink}) {
  return (
    <section className="github-item">
      <p className="github-item-title">{githubItemTitle}</p>
      <div className="github-item-wrapper">
        <Link to={githubLink} target="blank">
          <p>{linkSubtitle}</p>
        </Link>
        <div className="icon-container">
          <img src={githubImg} alt="Icône GitHub" />
        </div>
      </div>
    </section>
  );
}

export default GithubItem;
