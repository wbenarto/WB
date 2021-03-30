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
} from "./ProjectsElements";

const index = (props) => {
  console.log(props.project.images);
  return (
    <ProjectsContainer>
      <ProjectsImage src={props.project.images}></ProjectsImage>
      <ProjectsInfo>
        <ProjectsTitle>{props.project.title}</ProjectsTitle>
        <ProjectsHeadline>{props.project.headline}</ProjectsHeadline>
        <ProjectsDetail>- {props.project.desc}</ProjectsDetail>
        <ProjectsButton>Show Github Repo</ProjectsButton>
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
