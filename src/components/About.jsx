// src/components/About.jsx

import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
const About = () => {
  return (
    <section className="mt-20 text-white max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 text-secondary text-[17px] leading-[30px]">
        I'm <b>Arvind D</b>, a 3rd-year MSc student in 
        <b> Decision and Computing Science</b> at 
        <b> Coimbatore Institute of Technology (CIT)</b>. <br /><br />
       I am a Data Science & Machine Learning enthusiast skilled in Python, Power BI, and ML model development. I work on projects involving data analysis, dashboards, classification models, and visualization. I enjoy exploring datasets, building prediction models, and solving real-world problems through analytics.

      </p>
    </section>
  );
};

export default SectionWrapper(About, "about");
