import React, { useState, useEffect } from "react";
import "./Project.scss";
import { motion } from "framer-motion";

function Project({
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
}) {
  const [entrance, setEntrance] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEntrance(true);
    }, 1000);
  }, []);

  const projects = {
    open: {
      opacity: 1,
      right: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      rotate: 0,
      transition: {
        delay: 0.7,
      },
    },
  };
  return (
    <>
      {entrance && (
        <motion.div
          className="project"
          animate={entrance ? "open" : "closed"}
          variants={projects}
          onClick={() => {
            if (visitLink) window.location.href = visitLink;
          }}
        >
          <div className="project__content">
            <div className="imagePreview">
              <img src={image} alt={`${title} project`} />
              <div className="information">
                <div className="left">
                  <div className="title">
                    <h2>{title}</h2>
                  </div>
                  <div className="text">
                    <p>{mainText}</p>
                    <p className="tech">{`Tech: ${tech}`}</p>
                  </div>
                </div>
                <div className="right">
                  {githubLink && (
                    <div className="button">
                      <a href={githubLink}>{githubLinkBtnText}</a>
                    </div>
                  )}
                  {githubLink2 && (
                    <div className="button">
                      <a href={githubLink2}>{githubLink2BtnText}</a>
                    </div>
                  )}
                  {visitLink && (
                    <div className="button">
                      <a href={visitLink}>{visitLinkBtnText}</a>
                    </div>
                  )}
                  {visitLink2 && (
                    <div className="button">
                      <a href={visitLink2}>{visitLink2BtnText}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="edge" />
        </motion.div>
      )}
    </>
  );
}

export default Project;
