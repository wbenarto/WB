import React from "react";
import github from "../assets/icons/github.svg";
import tie from "../assets/icons/tie.svg";
import pin from "../assets/icons/pin.svg";
import bio from "../assets/icons/bio.jpg";
import linkedin from "../assets/icons/in.svg";
import resume from "../assets/icons/William Benarto - 2021.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:w.benarto@gmail.com");
  };

  const sidebar_variants = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.2,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variants}
      initial="hidden"
      animate="visible"
    >
      <img src={bio} alt="avatar" className="sidebar__avatar"></img>
      <div className="sidebar__name">
        William
        <span>Benarto</span>
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src="" alt="" className="sidebar_icon"></img>Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons">
        <a href="#">
          <img
            src={linkedin}
            alt="linkedIn"
            className="sidebar__icon mr-3"
          ></img>
        </a>
        <a href="#">
          <img src={github} alt="github" className="sidebar__icon mr-3"></img>
        </a>
        {/* <a href="">
          <img src="" alt="" className="sidebar__icon"></img>
        </a> */}
      </figure>
      <div className="sidebar__contact">
        {/* <div className="sidebar__item">
          <a href="">
            <img src="" alt="" className="sidebar__icon"></img>Github
          </a>
        </div> */}
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-2"></img>
          San Francisco, CA 94122
        </div>
        <div className="sidebar__item">w.benarto@gmail.com</div>
        <div className="sidebar__item">628-800-1358</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email Me
      </div>
    </motion.div>
  );
};

export default Sidebar;
