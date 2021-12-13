import React, { useRef, useEffect } from "react";
import {
  InformationContainer,
  InfoHeader,
  InfoHeaderImage,
  InfoHeading,
  InfoDetail,
  InfoMain,
  InfoSkills,
  InfoButton,
  InfoLanguages,
} from "./InformationComponents";
import webe from "../../assets/projects/profile.jpg";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  let t1 = gsap.timeline();
  const imgRef = useRef();
  const imgRef2 = useRef();
  const infoRef = useRef();

  useEffect(() => {
    console.log(imgRef);
    gsap.from(
      imgRef.current,
      {
        duration: 1,
        opacity: 0,
        y: 60,
        ease: "ease-in",
        scrollTrigger: {
          id: "information",
          trigger: "#information",
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      },
      "Start"
    );
    gsap.from(imgRef2.current, {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "ease-in",
      scrollTrigger: {
        id: "information",
        trigger: imgRef.current,
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from(infoRef.current, {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "ease-in",
      scrollTrigger: {
        id: "information",
        trigger: imgRef2.current,
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <>
      <InformationContainer id="information">
        <InfoHeader>
          <InfoHeading>01. About Me</InfoHeading>
          {/* <InfoHeading>
            <span class="first">Hi, my name is</span>
            <br />
            <span class="name">William Benarto</span>.<br />
            I'm a <span>Front-End Software Engineer</span> in San Francisco Bay
            Area!
          </InfoHeading> */}

          <InfoHeaderImage ref={imgRef} src={webe} />

          {/* <InfoHeading>
            Full-Stack developer seeking for full-time opportunity as a software
            engineer.
          </InfoHeading> */}
          <InfoDetail ref={imgRef2}>
            Hello World! I am an enthusiastic Front-End Engineer experienced in
            building websites and web applications that provides intuitive user
            interface. I enjoy building things that live on the internet that
            are helpful for other people. Seeking for a full-time software
            engineering position where I can positively contribute to the
            company's goal and to the world.
          </InfoDetail>
        </InfoHeader>
        <InfoMain ref={infoRef}>
          <InfoHeading>
            <span>What I do</span>
          </InfoHeading>
          <InfoSkills>
            <InfoLanguages>
              <h1>Languages</h1>

              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Python</p>
              <p>TypeScript</p>
            </InfoLanguages>

            <InfoLanguages>
              <h1>Frameworks</h1>

              <p>jQuery</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>React</p>
              <p>Redux</p>
              <p>Next.js</p>
            </InfoLanguages>

            <InfoLanguages>
              <h1>Technologies</h1>

              <p>Git</p>
              <p>Heroku</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Firebase</p>
              <p>SASS</p>
              <p>Tailwind</p>
            </InfoLanguages>
          </InfoSkills>
        </InfoMain>
      </InformationContainer>
    </>
  );
};

export default Information;
