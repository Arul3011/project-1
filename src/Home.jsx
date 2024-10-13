import React from "react";
import Nav from "./componentes/Navation";
import Slider from "./componentes/Slider";
import Bsm from "./componentes/Bsm";
import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";
function Home(props) {
  return (
    <div>
      <div className="nav" id="home">
        <Nav />
      </div>
      <div className="slider" id="slider">
        <Slider />
      </div>
      <div className="main" id="main">
        <Bsm />
      </div>
      <div className="about" id="about">
        <About />
      </div>
      <h1 className="h1">Contact Us</h1>
      <div className="contact" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
