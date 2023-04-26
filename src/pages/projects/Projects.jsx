import React from "react"
import "./Projects.scss"
import LandLineProject from "../../components/project/LandLineProject"

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__content">
        <div className="topEdge">
          <img src="/images/edgeLongYellow.png" alt="" />
        </div>
        <div className="body">
          <div className="body__content">
            <LandLineProject />
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
