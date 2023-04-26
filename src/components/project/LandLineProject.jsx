import React, { useState } from "react"
import "./LandLineProject.scss"
import { motion } from "framer-motion"

const LandLineProject = () => {
  const [open, setOpen] = useState(false)

  const main = {
    open: {
      y: -5,
    },
    closed: {
      y: 0,
    },
  }
  const tableRight = {
    open: {
      y: -135,
      x: 130,
      rotate: 30,
    },
    closed: {
      y: 0,
    },
  }
  const map = {
    open: {
      y: -100,
      x: 20,
      rotate: 10,
    },
    closed: {
      y: 0,
    },
  }
  const login = {
    open: {
      y: -100,
      x: 20,
      rotate: -10,
    },
    closed: {
      y: 0,
    },
  }
  const tableLeft = {
    open: {
      y: -135,
      x: -130,
      rotate: -30,
    },
    closed: {
      y: 0,
    },
  }
  const van = {
    open: {
      y: -135,
      x: -250,
      rotate: -30,
    },
    closed: {
      y: 0,
    },
  }
  const bus = {
    open: {
      y: -210,
      x: 20,
    },
    closed: {
      y: 0,
    },
  }
  const jeep = {
    open: {
      y: -135,
      x: 350,
      rotate: 28,
    },
    closed: {
      y: 0,
    },
  }

  return (
    <div className="singleProject">
      <div className="singleProject__content">
        <div className="description">
          <h2>Landline</h2>
          <p>
            Landline is a transport agency that offers transport services from
            and to airport and other destinations. The project was built using
            React, Redux and Sass.
          </p>
        </div>
        <div
          className="imagesWrapper"
          onMouseOver={() => {
            setOpen(true)
          }}
          onMouseLeave={() => {
            setOpen(false)
          }}
        >
          <div className="imageGroup">
            <motion.img
              animate={open ? "open" : "closed"}
              variants={van}
              src="/images/landlineProject/van.png"
              alt="main"
              className="van"
            />
            <motion.img
              animate={open ? "open" : "closed"}
              variants={bus}
              src="/images/landlineProject/bus.png"
              alt="main"
              className="bus"
            />
            <motion.img
              animate={open ? "open" : "closed"}
              variants={jeep}
              src="/images/landlineProject/jeep.png"
              alt="main"
              className="jeep"
            />
            {/* cars  */}

            <motion.img
              animate={open ? "open" : "closed"}
              variants={tableRight}
              src="/images/landlineProject/tableRight.png"
              alt="main"
              className="tableRight"
            />
            <motion.img
              animate={open ? "open" : "closed"}
              variants={map}
              src="/images/landlineProject/Map.png"
              alt="main"
              className="map"
            />
            <motion.img
              animate={open ? "open" : "closed"}
              variants={login}
              src="/images/landlineProject/Login.png"
              alt="main"
              className="login"
            />

            <motion.img
              animate={open ? "open" : "closed"}
              variants={tableLeft}
              src="/images/landlineProject/tableLeft.png"
              alt="main"
              className="tableLeft"
            />

            <motion.img
              animate={open ? "open" : "closed"}
              variants={main}
              src="/images/landlineProject/main.png"
              alt="main"
              className="main"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandLineProject
