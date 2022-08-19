import React, { useState } from "react";
import "./Project.scss";
import { motion } from "framer-motion";
import CyberBtn from "../button/CyberBtn";

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
      <motion.div
        className="project"
        animate={entrance ? "open" : "closed"}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
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
                    <a target="_blank" rel="noreferrer" href={githubLink}>
                      <CyberBtn title={githubLinkBtnText} />
                    </a>
                  </div>
                )}
                {githubLink2 && (
                  <div className="button">
                    <a target="_blank" rel="noreferrer" href={githubLink2}>
                      <CyberBtn title={githubLink2BtnText} />
                    </a>
                  </div>
                )}
                {visitLink && (
                  <div className="button">
                    <a target="_blank" rel="noreferrer" href={visitLink}>
                      <CyberBtn title={visitLinkBtnText} />
                    </a>
                  </div>
                )}
                {visitLink2 && (
                  <div className="button">
                    <a target="_blank" rel="noreferrer" href={visitLink2}>
                      <CyberBtn title={visitLink2BtnText} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          whileInView={() => setEntrance(true)}
          className="edge"
        ></motion.div>
      </motion.div>
    </>
  );
}

export default Project;
