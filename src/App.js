import "./App.scss"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import video from "./components/video/3.mp4"
import CyberBtn from "./components/button/CyberBtn"
import { motion } from "framer-motion"
// app
function App() {
  const cvBtn = {
    open: {
      opacity: 1,
      right: 30,
    },
  }

  return (
    <div className="App">
      <video id="bgVid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="topEdge">
        <img
          src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/Vector.png"
          alt=""
        />
      </div>
      <div className="content">
        <motion.div
          className="downloadButton"
          animate={"open"}
          transition={{ ease: "easeOut", duration: 0.1, delay: 3 }}
          variants={cvBtn}
        >
          <a
            href="images/cvYellow.pdf"
            download="CV Nikola Djordjevic Frontend developer"
          >
            <CyberBtn title={"Download CV"} />
          </a>
        </motion.div>
        <Home />
        <About />
        <Projects />
      </div>
      <div className="bottomEdge">
        <img
          src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/Vector.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default App
