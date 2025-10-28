import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import About from "../components/About";
import Footer from "../components/Footer"; 

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <About />
      <Footer /> 
    </>
  );
};

export default LandingPage;
