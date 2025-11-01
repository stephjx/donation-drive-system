// src/components/MainContent.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import heroBackground from "../assets/buksu-hero.jpg";

const MainContent = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white/25" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Empower Students.<br />
          <span className="text-blue-600">Flow the Give and Love.</span>
        </h1>
        <div className="text-lg md:text-xl mb-8 max-w-xl text-white/80 mx-auto shadow-2xl-black/20 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">
            A Student Donation Drive Management System <br />for Bukidnon State University
          </h2>
        </div>

        {/* Explore Button */}
        <button
          type="button" 
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg transition transform hover:scale-105 hover:from-blue-600 hover:to-blue-800"
          onClick={() => navigate("/donation-drives")} 
        >
          Explore Donation Drives
        </button>
      </div>
    </section>
  );
};

export default MainContent;
