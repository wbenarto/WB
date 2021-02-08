import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) setActive("About");
    if (currentUrl.endsWith("/resume")) setActive("Resume");
    if (currentUrl.endsWith("/projects")) setActive("Projects");
  }, [active]);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        <Link to="/">
          <div className="navbar__item" onClick={() => setActive("About")}>
            About
          </div>
        </Link>

        <Link to="/resume">
          <div className="navbar__item" onClick={() => setActive("Resume")}>
            Resume
          </div>
        </Link>
        <Link to="/projects">
          <div className="navbar__item" onClick={() => setActive("Projects")}>
            Projects
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
