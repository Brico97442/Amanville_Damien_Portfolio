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
import vercelImg from "../img/assets/vercel.png";
import ghpImg from "../img/assets/ghpages.svg";
import IconItems from "./IconItems";

function Skills() {
  const iconUrls1=[jsImg, html5Img,reactImg,reduxImg,sassImg,mongodbImg,reactRouterImg,cssImg]
  const iconUrls2=[githubImg,vercelImg,ghpImg]
  return (
    <div id="skills">
      <h2>Mes compétences</h2>
      <hr />
      <div className="competences">
        <IconItems iconTitle="J'ai déjà travailler avec" iconUrls={iconUrls1}/>
      </div>
      <div className="competences">
      <IconItems iconTitle="Les services que j'utilise" iconUrls={iconUrls2}/>
      </div>
    </div>
  );
}

export default Skills;
