import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactHeadline,
  EmailButton,
} from "./ContactElements";
import { ProjectsTitle } from "../Projects/ProjectsElements";
import { InfoDetail } from "../Information/InformationComponents";
const index = () => {
  const handleEmailMe = () => {
    window.open("mailto:w.benarto@gmail.com");
  };
  return (
    <>
      <ContactContainer id="contact">
        <ContactContent>
          <ProjectsTitle>Contact Me</ProjectsTitle>

          <ContactHeadline>Let's build a better future❤️</ContactHeadline>
          <InfoDetail>Currently looking for new opportunities. </InfoDetail>
          <EmailButton onClick={handleEmailMe}>
            <p>Say Hello</p>
          </EmailButton>
          {/* <ProjectsDetail>Contact Us</ProjectsDetail>
          <ProjectsButton>Contact Us</ProjectsButton> */}
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default index;
