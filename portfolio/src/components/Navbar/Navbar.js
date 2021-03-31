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
    <>
      <NavbarContainer>
        <Link to="/">
          <NavbarLogo>William Benarto</NavbarLogo>
        </Link>

        <NavLinks>
          <Link
            to="/"
            // onClick={() => setActive("Work")}
          >
            <NavbarItem>Work</NavbarItem>
          </Link>

          <Link
            to="/information"
            // onClick={() => setActive("Information")}
          >
            <NavbarItem>Information</NavbarItem>
          </Link>

          <Link
            to="/contact"
            // onClick={() => setActive("Contact")}
          >
            <NavbarItem>Contact</NavbarItem>
          </Link>
        </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
