import React from "react";
import { ContactContainer, ContactContent } from "./ContactElements";
import {
  ProjectsTitle,
  ProjectsHeadline,
  ProjectsDetail,
  ProjectsButton,
} from "../Projects/ProjectsElements";

const index = () => {
  return (
    <div>
      <ContactContainer>
        <ContactContent>
          <ProjectsTitle>Contact Me</ProjectsTitle>
          <ProjectsHeadline>Let's build a better future❤️</ProjectsHeadline>
          {/* <ProjectsDetail>Contact Us</ProjectsDetail>
          <ProjectsButton>Contact Us</ProjectsButton> */}
        </ContactContent>
      </ContactContainer>
    </div>
  );
};

export default index;
