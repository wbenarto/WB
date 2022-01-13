import React, { useState, useEffect, useRef } from "react";
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
import { gsap } from "gsap";
import Power3 from'gsap'

const Navbar = (props) => {
  const [scrollDown, setScrollDown] = useState(false);

  let lastScrollTop = 0;

  let t2 = gsap.timeline();

  useEffect(()=>{
    t2.from(".navLink",{
      duration: 1,
      opacity: 0,
      y: -800,
      ease: 'ease-in',
    })
  }
  , [])

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
          <NavbarLogo className='navLink'>WB</NavbarLogo>
        </Link>

        <NavLinks >
          <NavLink
            to="information"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-60}
            
          >
            <NavbarItem className='navLink'>01. About</NavbarItem>
          </NavLink>

          <NavLink
            to="work"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-60}
            
          >
            <NavbarItem className='navLink'>02. Work</NavbarItem>
          </NavLink>

          <NavLink
            to="contact"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            // offset={80}
            
          >
            <NavbarItem className='navLink'>03. Contact</NavbarItem>
          </NavLink>
        </NavLinks>
        <ResumeButton
          href="https://drive.google.com/file/d/1redEHk-1iQAq5i90RhiwhAJrv5yq54Ie/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className='navLink'
        >
          Resume
        </ResumeButton>
      </NavbarContainer>
    </Transition>
  );
};

export default Navbar;
