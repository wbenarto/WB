import React from "react";
import HeroComponent from "../components/Hero";
import ProjectComponent from "../components/Projects/index";
import { projects } from "../data/projects_data";

const index = () => {
  return (
    <div>
      <HeroComponent />
      <ProjectComponent project={projects[0]} layout="normal" />
      <ProjectComponent project={projects[1]} layout="abnormal" />
      <ProjectComponent project={projects[2]} layout="normal" />
    </div>
  );
};

export default index;
