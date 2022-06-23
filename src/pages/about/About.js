import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="inner-content">
          <p>
            Hi, I'm Nikola Djordjevic, a front-end developer based in Belgrade,
            Serbia.
            <br /> For the past six months, I have been working on developing a
            dispatch dashboard, booking website and business website for a
            transportation company. I love developing user-experience based
            projects. I have a keen eye on animation and website design, too.
          </p>
          <br />
          <p>
            Wanna get to know me more? Feel free to get in touch with me via
            <a href="mailto:nikola.dj.87@gmail.com"> e-mail</a> , or social
            media linked below.
          </p>

          <div className="links">
            <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/">
              LinkedIn
            </a>
            <a href="https://twitter.com/DjordjevicNix">Twitter</a>
            <a href="https://github.com/DjordjevicN">Github</a>
          </div>
        </div>
        <div className="edge"></div>
      </div>
    </div>
  );
}

export default About;
