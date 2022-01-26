import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ProjectContainer,
  ProjectsContainer,
  ProjectsImage,
  ProjectsInfo,
  ProjectsTitle,
  ProjectsHeadline,
  ProjectsDetail,
  ProjectsButton,
  ProjectsTechs,
  ProjectTech,
  ProjectSite,
} from "./ProjectsElements";
import { InfoDetail, InfoHeading } from "../Information/InformationComponents";
import { FaEye, FaGasPump } from "react-icons/fa";
import { projects } from "../../data/projects_data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = (props) => {
  let t1 = gsap.timeline();
  const infoRef = useRef();
  const imgRef = useRef();
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    console.log("useEffect here gsap");

    revealRefs.current.forEach((e, i) => {
      gsap.from(e, {
        duration: 1,
        opacity: 0,
        y: 60,

        ease: "ease-in",

        scrollTrigger: {
          id: `section-${i + 1}`,
          trigger: e,
          start: "top 60%",
          end: "bottom 40% ",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

    });

  }, []);

  const addToRefs = (e) => {
    console.log(e);
    if (e !== null && e && !revealRefs.current.includes(e)) {
      console.log("PUSHING" + e);
      revealRefs.current.push(e);
    }
    console.log(revealRefs.current);
  };

  return (
    <ProjectsContainer className="content" id="work">
      <InfoHeading ref={imgRef}>02. Work</InfoHeading>
      <InfoDetail>Here is some of the Projects I have done so far!</InfoDetail>

      {projects.map((e, i) => (
        <ProjectContainer key={e} className="content-main" ref={addToRefs}>
          <ProjectsImage ref={imgRef} src={e.images}></ProjectsImage>
          <ProjectsInfo ref={infoRef}>
            <a href={e.deployed_url}>
              {" "}
              <ProjectsTitle>
                {e.title} <FaEye />
              </ProjectsTitle>
            </a>
            <ProjectsHeadline>{e.headline}</ProjectsHeadline>
            {/* <ProjectsDetail>- {e.desc}</ProjectsDetail> */}
            {/* <ProjectSite src={web} /> */}
            <ProjectsTechs>
              {e.tech.map((i) => (
                <ProjectTech>{i}</ProjectTech>
              ))}
            </ProjectsTechs>
            
            <Link to={`projects/${e.id}`}>
              <ProjectsButton>Show Project Page ></ProjectsButton>
            </Link>
            <a href={e.github}>
              <ProjectsButton>Show Github Repo ></ProjectsButton>
            </a>

            
          </ProjectsInfo>
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
