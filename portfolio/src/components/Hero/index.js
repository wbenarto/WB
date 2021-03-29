import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroDesc,
  HeroDescIcon,
} from "./HeroElements";

const index = () => {
  return (
    <>
      <HeroContainer>
        <HeroTitle>
          Full Stack <br /> Web Developer
        </HeroTitle>
        <HeroDesc>
          <p>Based in San Francisco</p>
          <p>Available for work</p>
        </HeroDesc>
      </HeroContainer>
    </>
  );
};

export default index;
