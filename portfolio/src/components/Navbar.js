import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [active, setActive] = useState("About");

  useEffect(() => {
    let currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) setActive("About");
    else if (currentUrl.endsWith("/projects")) setActive("Projects");
    else if (currentUrl.endsWith("/resume")) setActive("Resume");
  }, [active]);
  return (
    <div className="navbar">
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
    </div>
  );
};

export default Navbar;
