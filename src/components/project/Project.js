import React from "react";
import "./Project.scss";

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
  console.log(visitLink !== undefined);

  const data = `https://api.glovoapp.com/v3/stores/mcdonald`;

  return (
    <div className="project">
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
    </div>
  );
}

export default Project;
