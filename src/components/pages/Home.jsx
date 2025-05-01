import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import Education from "./Education";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Experience from "./Experience";
import SocialShowcase from "../layouts/SocialShowCase";

const Home = () => {
  return (
    <div>
      <Hero />
      <SocialShowcase />
      <Services />

  

      <Contact />
    </div>
  );
};

export default Home;
