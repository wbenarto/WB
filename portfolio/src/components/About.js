import React from "react";
import javascript from "../assets/icons/java-script.svg";

import Skillcard from "./Skillcard.js";

const skills = [
  {
    icon: javascript,
    title: "Javascript",
    about: "Advance Javascript Knowledge yeehaw",
  },
];

const About = (props) => {
  return (
    <div className="about">
      <h6 className="about__intro">Lorem Ipsum sum</h6>
      <div className="container">
        <h6 className="about__heading">What I Offer</h6>
        <div className="row">
          {skills.map((e) => (
            <Skillcard data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
