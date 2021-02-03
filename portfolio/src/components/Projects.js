import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

import dataProjects from "../data/projects_data";

const Projects = (props) => {
  const [categories, setCategories] = useState(dataProjects);

  const handleFilter = (name) => {
    const filtered = dataProjects.filter((project) =>
      project.category.includes(name)
    );
    setCategories(filtered);
  };
  return (
    <div className="container projects__container">
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
      <div className="row">
        {categories.map((e) => (
          <ProjectCard key={e.name} project={e} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
