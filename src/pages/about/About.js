import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  const textBox = {
    open: { left: 0, opacity: 1 },
    closed: {},
  };
  return (
    <>
      <motion.div
        className="about"
        animate={isOpen ? "open" : "closed"}
        variants={textBox}
      >
        <div className="about__content">
          <div className="inner-content">
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
              <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/">
                LinkedIn
              </a>
              <a href="https://twitter.com/DjordjevicNix">Twitter</a>
              <a href="https://github.com/DjordjevicN">Github</a>
            </div>
          </div>
          <div className="edge"></div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
