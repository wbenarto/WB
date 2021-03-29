import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  NavbarContainer,
  NavbarLogo,
  NavLinks,
  NavbarItem,
} from "./NavbarElements";

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
    <NavbarContainer>
      <NavbarLogo className="navbar__active">William Benarto</NavbarLogo>

      <NavLinks>
        <Link
          style={{ textDecoration: "none" }}
          to="/"
          onClick={() => setActive("Work")}
        >
          <NavbarItem>Work</NavbarItem>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to="/information"
          onClick={() => setActive("Information")}
        >
          <NavbarItem>Information</NavbarItem>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to="/contact"
          onClick={() => setActive("Contact")}
        >
          <NavbarItem>Contact</NavbarItem>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
