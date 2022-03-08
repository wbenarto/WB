import React, { useEffect, useState, useRef } from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroDesc,
  HeroDescIcon,
  Widget
} from "./HeroElements";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let t1 = gsap.timeline();

  const nameRef = useRef();
  const jobRef = useRef();

  useEffect(() => {
    t1.from(".first", {
      duration: 1,
      opacity:0,
      y: 50,
      ease: 'ease-in',
      stagger: 0.5,
      delay: 1.5

    }).from('.hero', {
      duration: .5,
      opacity: 0,
      ease: "ease-in",
      y: 30, //normal value
      stagger: .3
    })
  }, []);

  return (
    <>
      <HeroContainer className='container'>
        <HeroTitle >
          {/* <div>
          <p class='hero'>
            Hi, my name is
          </p>
          </div>
          <div>
          <p class='hero big-heading'>
            William Benarto
          </p>
          </div>

          <p class='hero'>I'm a </p>

          <div>
          <p class='hero big-heading heading2'>
            Front-End Software Engineer
          </p>
          </div>
         <div><p class='hero city'>
            in San Francisco Bay Area!
          </p></div> */}
          
        </HeroTitle>
      </HeroContainer>
    </>
  );
};

export default Hero;
