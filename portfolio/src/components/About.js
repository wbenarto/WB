import React from "react";
import javascript from "../assets/icons/java-script.svg";
import html5 from "../assets/icons/html5-brands.svg";
import node from "../assets/icons/node-brands.svg";
import react from "../assets/icons/react-brands.svg";

import Skillcard from "./Skillcard.js";

const skills = [
  {
    icon: javascript,
    title: "Javascript",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: "",
    title: "HTML5",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: "",
    title: "CSS3",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: react,
    title: "React",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: "",
    title: "Redux",
    about: "Advance Javascript Knowledge yeehaw",
  },
  {
    icon: "",
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
    <div className="about">
      <h6 className="about__intro">
        Full-Stack developer seeking for full-time opportunity as a software
        engineer. Experienced in building responsive web-apps through React,
        HTML, and, CSS, developed robust REST API using Django-rest api.
        Passionate in helping others and educating others in technology.{" "}
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">Skills</h6>
        <div className="row row__about">
          {skills.map((e) => (
            <Skillcard data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
