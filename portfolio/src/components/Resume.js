import React from "react";
import Canvas from "./Canvas";
import { motion } from "framer-motion";

const resume_variants = {
  hidden: {
    y: "4000px",
    opacity: 0,
  },
  visible: {
    y: 0,
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

const Resume = (props) => {
  return (
    <motion.div
      className="container resume__container"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
    >
      <Canvas />
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Engineering</h5>
            <p className="resume-card__name"></p>
            <p className="resume-card__details">Loremmm</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h4 className="resume-card__heading">Languages and Frameworks</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Engineering</h5>
            <p className="resume-card__name"></p>
            <p className="resume-card__details">Loremmm</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
