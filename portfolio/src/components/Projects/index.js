import React from "react";
import {
  ProjectsContainer,
  ProjectsImage,
  ProjectsInfo,
  ProjectsTitle,
  ProjectsHeadline,
  ProjectsDetail,
  ProjectsButton,
} from "./ProjectsElements";

const index = (props) => {
  return (
    <ProjectsContainer>
      <ProjectsImage>Herro</ProjectsImage>
      <ProjectsInfo>
        <ProjectsTitle>webesushi.io</ProjectsTitle>
        <ProjectsHeadline>
          E-commerce mock website for Pick Up and Drop Off sushi orders
        </ProjectsHeadline>
        <ProjectsDetail>
          - Users are able to sign in or sign up, upload products using user
          input, upload multiple product images in carousel, display product
          detail, filter search, add and remove from cart. - React, Redux, Node,
          MongoDB, Heroku
        </ProjectsDetail>
        <ProjectsButton>Show Github Repo</ProjectsButton>
      </ProjectsInfo>
    </ProjectsContainer>
  );
};

export default index;
