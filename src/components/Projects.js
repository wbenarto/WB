import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import dataProjects from "../data/projects_data";

const Projects = (props) => {
  const [categories, setCategories] = useState(dataProjects);

  const handleFilter = (name) => {
    const filtered = dataProjects.filter((project) =>
      project.category.includes(name)
    );
    setCategories(filtered);
  };

  const project_variants = {
    hidden: {
      x: "200vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects__navbar">
        <div
          className="projects__filter"
          onClick={() => setCategories(dataProjects)}
        >
          All
        </div>
        <div
          className="projects__filter"
          onClick={() => handleFilter("react.js")}
        >
          React
        </div>
        <div
          className="projects__filter"
          onClick={() => handleFilter("mongoDB")}
        >
          MongoDB
        </div>
        <div
          className="projects__filter"
          onClick={() => handleFilter("node.js")}
        >
          Node
        </div>
        <div className="projects__filter" onClick={() => handleFilter("mySQL")}>
          MySQL
        </div>
        <div className="projects__filter" onClick={() => handleFilter("java")}>
          Java
        </div>
        <div
          className="projects__filter"
          onClick={() => handleFilter("python")}
        >
          Python
        </div>
        <div className="projects__filter" onClick={() => handleFilter("api")}>
          API
        </div>
        <div
          className="projects__filter"
          onClick={() => handleFilter("full-stack")}
        >
          Full Stack
        </div>
      </div>
      <div className="row projects__row">
        {categories.map((e) => (
          <ProjectCard key={e.name} project={e} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
