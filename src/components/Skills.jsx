// Header.js
import React from "react";
import cssImg from "../img/assets/css.webp";
import reactImg from "../img/assets/react.webp";
import reactRouterImg from "../img/assets/reactrouter.webp";
import mongodbImg from "../img/assets/mongodb.webp";
import sassImg from "../img/assets/sass.png";
import reduxImg from "../img/assets/redux.webp";
import jsImg from "../img/assets/javascript.webp";
import html5Img from "../img/assets/html5.webp";
import githubImg from "../img/assets/github.webp";
import vercelImg from "../img/assets/vercel.webp";
import ghpImg from "../img/assets/ghpages.svg";
import gitImg from "../img/assets/git.webp";
import IconItems from "./IconItems";


function Skills() {
  
  const iconUrls1=[jsImg, html5Img,reactImg,reduxImg,sassImg,mongodbImg,reactRouterImg,cssImg]
  const iconUrls2=[githubImg,vercelImg,ghpImg,gitImg]

  return (
    <div id="skills">
      <h2>Mes compétences</h2>
      <hr />
      <div className="competences">
        <IconItems iconTitle="J'ai déjà travaillé avec" iconUrls={iconUrls1}/>
      </div>
      <div className="competences">
      <IconItems iconTitle="Les services que j'utilise" iconUrls={iconUrls2}/>
      </div>
    </div>
  );
}

export default Skills;
