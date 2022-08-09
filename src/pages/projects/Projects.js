import React from "react";
import "./Projects.scss";
import Project from "../../components/project/Project";

import { projects } from "../../components/project/data";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__content">
        {projects.map((project) => {
          const {
            id,
            title,
            tech,
            mainText,
            image,
            githubLink,
            githubLink2,
            githubLinkBtnText,
            githubLink2BtnText,
            visitLink,
            visitLinkBtnText,
            visitLink2,
            visitLink2BtnText,
          } = project;

          return (
            <Project
              key={id}
              title={title}
              tech={tech}
              mainText={mainText}
              image={image}
              githubLink={githubLink}
              githubLink2={githubLink2}
              githubLinkBtnText={githubLinkBtnText}
              githubLink2BtnText={githubLink2BtnText}
              visitLink={visitLink}
              visitLinkBtnText={visitLinkBtnText}
              visitLink2={visitLink2}
              visitLink2BtnText={visitLink2BtnText}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
