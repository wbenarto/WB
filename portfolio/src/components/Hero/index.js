import React, { useEffect, useState, useRef } from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroDesc,
  HeroDescIcon,
} from "./HeroElements";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let t1 = gsap.timeline();

  const nameRef = useRef();
  const jobRef = useRef();
  useEffect(() => {
    t1.from('.container', {
      duration: 1.5,
      opacity: 0,
      ease: 'ease-in',
      y: -800,
    }).from(nameRef.current, {
      duration: 1,
      opacity: 0,

      ease: "ease-in",

      x: -100, //normal value
      y: function (index, target, targets) {
        //function-based value
        return index * 50;
      },
    }).from(jobRef.current, {
      duration: 1,

      opacity: 0,

      ease: "ease-in",

      x: -100, //normal value
      y: function (index, target, targets) {
        //function-based value
        return index * 50;
      },
    });
  }, []);

  return (
    <>
      <HeroContainer className='container'>
        <HeroTitle>
          <p class="first">Hi, my name is</p>
          <span ref={nameRef} class="name">
            William Benarto.
          </span>
          {/* <br /> */}
          I'm a <span ref={jobRef}>Front-End Software Engineer</span> in San
          Francisco Bay Area!
        </HeroTitle>
      </HeroContainer>
    </>
  );
};

export default Hero;
