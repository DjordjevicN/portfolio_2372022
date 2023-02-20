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
                <p>I am a front-end developer with 3 years of experience.</p>

                <p>
                  I bring a passion for delivering intuitive and engaging user
                  experiences to the table.
                </p>
                <p>
                  I have honed my skills in developing dynamic and responsive
                  websites that meet both business goals and user needs.
                </p>
                <p>
                  With my tech stack, including JavaScript and ReactJS, I am
                  able to bring my clients' visions to life and create visually
                  appealing, functional websites.
                </p>
                <p>
                  I am dedicated to staying up-to-date with the latest web
                  development trends and continuously expanding my skill set.
                </p>
                <p>
                  Whether working on a new project or updating an existing one,
                  I strive to bring creativity, attention to detail, and a
                  user-centered approach to each and every task.
                </p>
              </div>
            </div>
          </div>
          <div className="bottomEdge ">
            <img src="/images/edgeLongYellow.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
