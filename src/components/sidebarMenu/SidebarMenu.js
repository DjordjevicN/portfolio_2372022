import React, { useState, useEffect } from "react";
import "./sidebarMenu.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
  }, []);

  const burger = {
    open: { rotate: -90 },
    closed: {
      rotate: 0,
      transition: {
        delay: 0.7,
      },
    },
  };
  const line1 = {
    open: {
      y: -490,
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
    closed: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
  };
  const line2 = {
    open: {
      rotate: 45,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
    closed: {
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
  };
  const line3 = {
    open: {
      y: -7,
      x: 1,
      rotate: -45,
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
    closed: {
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
  };
  const menu = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      x: 30,
      display: "none",
      transition: {
        delay: 0.25,
        duration: 0.2,
      },
    },
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <motion.div
          className="burger"
          animate={isOpen ? "open" : "closed"}
          variants={burger}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <motion.div
            className="line-1"
            animate={isOpen ? "open" : "closed"}
            variants={line1}
          ></motion.div>
          <motion.div
            className="line-2"
            animate={isOpen ? "open" : "closed"}
            variants={line2}
          ></motion.div>

          <motion.div
            className="line-3"
            animate={isOpen ? "open" : "closed"}
            variants={line3}
          ></motion.div>
        </motion.div>

        <motion.div
          className="menuLinks"
          animate={isOpen ? "open" : "closed"}
          variants={menu}
        >
          <Link to="/" className="linkItem">
            HOME
          </Link>
          <Link to="/projects" className="linkItem">
            PROJECTS
          </Link>
          <Link to="/about" className="linkItem">
            ABOUT ME
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default SidebarMenu;
