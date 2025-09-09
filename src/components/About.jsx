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
        My goal is to become a <b>Data Analyst</b> who can transform raw data into
        meaningful insights. I have strong skills in <b>Python, SQL, Excel</b>, 
        and <b>Power BI</b>, and I enjoy building dashboards and analyzing datasets 
        to solve real-world problems.
      </p>
    </section>
  );
};

export default SectionWrapper(About, "about");
