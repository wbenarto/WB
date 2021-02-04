import React from "react";
import javascript from "../assets/icons/java-script.svg";
import html5 from "../assets/icons/html5-brands.svg";
import node from "../assets/icons/node-brands.svg";
import react from "../assets/icons/react-brands.svg";
import { motion } from "framer-motion";

import Skillcard from "./Skillcard.js";

const about_variants = {
  hidden: {
    x: "-150vh",
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

const skills = [
  {
    icon: javascript,
    title: "Javascript",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: react,
    title: "HTML5",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: react,
    title: "CSS3",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: react,
    title: "React",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: react,
    title: "Redux",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: react,
    title: "React Native",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: node,
    title: "Node.js",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: javascript,
    title: "Express",
    about: "Advance Javascript Knowledge yeehaw",
  },
];
const languages = [
  {
    icon: javascript,
    title: "MySQL",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: javascript,
    title: "MongoDB",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: javascript,
    title: "Restful API",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: javascript,
    title: "Python",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: javascript,
    title: "Java",
    about: "Advance Javascript Knowledge yeehaw",
  },
];

const About = (props) => {
  return (
    <motion.div
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
    >
      <h6 className="about__intro">
        Full-Stack developer seeking for full-time opportunity as a software
        engineer. Experienced in building responsive web-apps through React,
        HTML, and, CSS, developed robust REST API using Django-rest api.
        Passionate in helping others and educating others in technology.{" "}
      </h6>
      <div className="about__container">
        <div className="row about__list">
          <div className="col-sm row__about ">
            <h6 className="about__heading">Frameworks</h6>
            <div className="row row__about__skills">
              {skills.map((e) => (
                <Skillcard className="col-sm" data={e} />
              ))}
            </div>
          </div>

          <div className="col-sm row__about">
            <h6 className="about__heading">Languages</h6>
            <div className="row row__about__skills">
              {languages.map((e) => (
                <Skillcard className="col-sm" data={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
