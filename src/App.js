import "./App.scss"
import About from "./pages/about/About"
// import Home from "./pages/home/Home"
// import Projects from "./pages/projects/Projects"
// import Intro from "./pages/IntroStory/Intro"
// import TechStack from "./pages/tech/TechStack"
import video from "./components/video/3.mp4"
// import CyberBtn from "./components/button/CyberBtn"
// import { motion } from "framer-motion"

function App() {
  // const cvBtn = {
  //   open: {
  //     opacity: 1,
  //     right: 30,
  //   },
  // }

  return (
    <div className="App">
      <video id="bgVid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="content">
        {/* <motion.div
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
        </motion.div> */}
        {/* <Intro /> */}
        {/* <Home /> */}
        {/* <Projects /> */}
        {/* <TechStack /> */}
        <About />
      </div>
    </div>
  )
}

export default App
