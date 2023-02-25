import React from "react"
import "./Project.scss"

const Project = ({ project }) => {
  return (
    <div className="singleProject">
      <div className="singleProject__content">
        <div className="image">
          <img src={project.image} alt="" />
        </div>
        <p className="description">{project.description}</p>
      </div>
    </div>
  )
}

export default Project
