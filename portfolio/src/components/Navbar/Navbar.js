import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  NavbarContainer,
  NavbarLogo,
  NavLinks,
  NavLink,
  NavbarItem,
  ResumeButton,
  Transition,
} from "./NavbarElements";

const Navbar = (props) => {
  const [scrollDown, setScrollDown] = useState(false);

  let lastScrollTop = 0;

  const handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= lastScrollTop || scrollTop <= 140) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
    lastScrollTop = scrollTop;
  };

  useEffect(() => {
    setScrollDown(true);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Transition>
      <NavbarContainer className={scrollDown ? "active" : "hidden"}>
        <Link to="/" onClick={toggleHome}>
          <NavbarLogo>WB</NavbarLogo>
        </Link>

        <NavLinks>
          <NavLink
            to="information"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-60}
          >
            <NavbarItem>01. About</NavbarItem>
          </NavLink>

          <NavLink
            to="work"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-60}
          >
            <NavbarItem>02. Work</NavbarItem>
          </NavLink>

          <NavLink
            to="contact"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            // offset={80}
          >
            <NavbarItem>03. Contact</NavbarItem>
          </NavLink>
        </NavLinks>
        <ResumeButton
          href="https://drive.google.com/file/d/1W9Gy3TF4XhgUQlis3_w9KvTQ9UrfR8kG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </ResumeButton>
      </NavbarContainer>
    </Transition>
  );
};

export default Navbar;
