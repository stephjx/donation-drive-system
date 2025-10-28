import React from "react";
import heroBackground from "../assets/buksu-hero.jpg";

const MainContent = () => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Empower Students.<br />
          <span className="text-blue-600">Flow the Give and Love.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/100 mb-8 max-w-xl mx-auto shadow-2xl-black/30 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">A Student Donation Drive Management System <br />for Bukidnon State University</h2>. <br className="text-white"/>Join our donation drives to make a lasting impact for education and student welfare.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          Explore Donation Drives
        </button>
      </div>
    </section>
  );
};

export default MainContent;
