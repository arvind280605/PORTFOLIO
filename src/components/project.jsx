// src/components/Projects.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
      {/* Title Section */}
      <h2 className="text-white text-2xl font-bold">My Work</h2>
      <p className="text-secondary text-[17px] mt-2">
        Projects
      </p>

      {/* Description */}
      <p className="mt-4 text-secondary text-[15px] leading-[24px] max-w-3xl">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve complex
        problems, work with different technologies, and manage projects effectively.
      </p>

      {/* Project Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
