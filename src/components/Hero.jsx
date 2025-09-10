// src/components/Hero.jsx

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-white">
        Hi, I'm <span className="text-[#915EFF]">Arvind D</span>
      </h1>

      <p className="mt-4 text-lg text-white-100">
        MSc Decision & Computing Science @ CIT <br />
        <b>Aspiring Data Analyst</b>
      </p>

      <div className="mt-6">
        <img
          src="/arvind.jpg"
          alt="Arvind D"
          className="w-40 h-40 rounded-full object-cover border-2 border-[#915EFF]"
        />
      </div>
    </section>
  );
};

export default Hero;
