import React, { useState } from "react";
import "./About.scss";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const textBox = {
    open: { left: 0, opacity: 1, bottom: "20px" },
    closed: {},
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="about"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
          variants={textBox}
        >
          <div className="about__content">
            <div className="inner-content ">
              <p>
                Hi, I'm Nikola Djordjevic, a front-end developer based in
                Belgrade, Serbia.
                <br /> For the past ten months, I have been working on
                developing a dispatch dashboard, booking website and business
                website for a transportation company. I love developing
                user-experience based projects. I have a keen eye on animation
                and website design, too.
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
            <motion.div
              whileInView={() => setIsOpen(true)}
              className="edge"
            ></motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default About;
