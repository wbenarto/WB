import React from "react";
import HeroComponent from "../components/Hero";
import ProjectComponent from "../components/Projects/index";
import { projects } from "../data/projects_data";

const index = () => {
  return (
    <div>
      <HeroComponent />

      {projects.map((e) => (
        <ProjectComponent project={e} layout="normal" />
      ))}
    </div>
  );
};

export default index;
