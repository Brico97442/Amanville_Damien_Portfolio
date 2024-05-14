import React from "react";
import "../styles/sass/section.scss";

function Section({className,title,content}) {
  return (
    <section className={className}>
      <div className="content">
        <div className="wrapper">
          <h1>{title}</h1>
          <hr/>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
