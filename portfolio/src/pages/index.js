import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Information from "../components/Information";
import ProjectComponent from "../components/Projects/index";
import Navbar from "../components/Navbar/Navbar";
import { projects } from "../data/projects_data";
import background from '../assets/projects/webb.png'

const index = () => {
  return (
    <div style={{backgroundImage:`url(${background})`,backgroundAttachment:'fixed'}}>
      <Navbar />
      <Hero id="/" />
      <Information />
      <ProjectComponent layout="normal" />
      {/* {projects.map((e) => (
        <ProjectComponent project={e} layout="normal" />
      ))} */}
      <Contact />
    </div>
  );
};

export default index;
