import React from "react";
import {
  ProjectsContainer,
  ProjectsImage,
  ProjectsInfo,
  ProjectsTitle,
  ProjectsHeadline,
  ProjectsDetail,
  ProjectsButton,
  ProjectsTechs,
  ProjectSite,
} from "./ProjectsElements";

const index = (props) => {
  console.log(props.project.images);
  return (
    <ProjectsContainer>
      <ProjectsImage src={props.project.images}></ProjectsImage>
      <ProjectsInfo>
        <a href={props.project.deployed_url}>
          {" "}
          <ProjectsTitle>{props.project.title}</ProjectsTitle>
        </a>
        <ProjectsHeadline>{props.project.headline}</ProjectsHeadline>
        <ProjectsDetail>- {props.project.desc}</ProjectsDetail>
        {/* <ProjectSite src={web} /> */}
        <a href={props.project.github}>
          <ProjectsButton>Show Github Repo</ProjectsButton>
        </a>

        <ProjectsTechs>
          {props.project.tech.map((e) => (
            <p>{e}</p>
          ))}
        </ProjectsTechs>
      </ProjectsInfo>
    </ProjectsContainer>
  );
};

export default index;
