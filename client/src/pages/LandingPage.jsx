import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import About from "../components/About";
import Footer from "../components/Footer"; 
import Contact from "../components/Contact";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <About />
      <Contact />
      <Footer /> 
    </>
  );
};

export default LandingPage;
