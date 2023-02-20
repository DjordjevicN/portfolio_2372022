import React from "react"
import "./About.scss"

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__content">
          <div className="topEdge">
            <img src="/images/edgeLongYellow.png" alt="" />
          </div>
          <div className="body">
            <div className="body__content">
              <div className="sectionTitle">
                <p className="title">ABOUT ME</p>
              </div>
              <div className="texts">
                <p>
                  Hi, I'm Nikola Djordjevic, a front-end developer based in
                  Belgrade, Serbia.
                  <br /> For the past ten months, I have been working on
                  developing a dispatch dashboard, booking website and business
                  website for a transportation company. I love developing
                  user-experience based projects. I have a keen eye on animation
                  and website design, too.
                </p>
              </div>
            </div>
          </div>
          <div className="bottomEdge ">
            <img src="/images/edgeLongYellow.png" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="about">
        <div className="about__content">
          <div className="inner-content ">
            <p>
              Hi, I'm Nikola Djordjevic, a front-end developer based in
              Belgrade, Serbia.
              <br /> For the past ten months, I have been working on developing
              a dispatch dashboard, booking website and business website for a
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nikola-djordjevic-503066193/"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/DjordjevicNix"
              >
                Twitter
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/DjordjevicN"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default About
