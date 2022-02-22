import React from "react";
import github from "../../assets/icons/github.svg";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterInfo,
  FooterIcons,
  FooterIcon,
} from "./FooterElements";

const index = () => {
  const handleEmailMe = () => {
    window.open("mailto:w.benarto@gmail.com");
  };
  return (
    <FooterContainer>
      <FooterInfo>
        GET IN TOUCH <br /> w.benarto@gmail.com{" "}
      </FooterInfo>
      <FooterInfo>
        BASED IN <br /> San Francisco, CA
      </FooterInfo>
      <FooterIcons>
        <FooterIcon
          href="https://www.linkedin.com/in/william-benarto/"
          target="_blank"
          aria-label="Linked In"
        >
          <FaLinkedin />
        </FooterIcon>
        <FooterIcon
          href="https://github.com/wbenarto"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </FooterIcon>
        <FooterIcon
          href="https://www.instagram.com/webeclinkz/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </FooterIcon>

        <FooterIcon onClick={handleEmailMe}>
          <FaRegEnvelope></FaRegEnvelope>
        </FooterIcon>
      </FooterIcons>
    </FooterContainer>
  );
};

export default index;
