import React, { useState } from "react"
import "./Projects.scss"
import Project from "../../components/project/Project"
import { projectsData } from "../../utilities/projectData"

const Projects = () => {
  const [projectCount, setProjectCount] = useState(0)
  console.log(projectsData[projectCount])

  return (
    <div className="projects">
      <div className="projects__content">
        <div className="topEdge">
          <img src="/images/edgeLongYellow.png" alt="" />
        </div>
        <div className="body">
          <div className="body__content">
            <div className="sectionTitle">
              <p className="title">Projects</p>
            </div>
            <div className="display">
              <div className="display-menu">
                <div className="display-menu__content">
                  <p
                    className="display-menu__item"
                    onClick={() => setProjectCount(0)}
                  >
                    {projectsData[0].title}
                  </p>
                  <p
                    className="display-menu__item"
                    onClick={() => setProjectCount(1)}
                  >
                    {projectsData[1].title}
                  </p>
                  <p
                    className="display-menu__item"
                    onClick={() => setProjectCount(2)}
                  >
                    {projectsData[2].title}
                  </p>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase__content">
                  <Project project={projectsData[projectCount]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomEdge ">
          <img src="/images/edgeLongYellow.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects
