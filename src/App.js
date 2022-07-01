import "./App.scss";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import video from "./components/video/3.mp4";

function App() {
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
  );
}

export default App;
