import React from "react";
import { Link } from "react-router-dom";
import githubImg from "../img/assets/github2.png";

function GithubItem() {
  return (
    <section className="github-item">
      <Link>
        <p>Mon Github</p>
      </Link>
      <div className="github-item-wrapper">
        <img src={githubImg} alt="Icône GitHub" />
      </div>
    </section>
  );
}

export default GithubItem;
