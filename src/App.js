import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import SideMenu from "./components/sidebarMenu/SidebarMenu";
import video from "./components/video/2.mp4";

function App() {
  return (
    <div className="App">
      <div className="topEdge">
        <img
          src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/Vector.png"
          alt=""
        />
      </div>
      <video id="bgVid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="bottomEdge">
        <img
          src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/Vector.png"
          alt=""
        />
      </div>

      <SideMenu />
      <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
