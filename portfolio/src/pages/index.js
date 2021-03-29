import React from "react";
import HeroComponent from "../components/Hero";
import ProjectComponent from "../components/Projects/index";

const index = () => {
  return (
    <div>
      <HeroComponent />
      <ProjectComponent layout="normal" />
      <ProjectComponent layout="abnormal" />
      <ProjectComponent layout="normal" />
    </div>
  );
};

export default index;
