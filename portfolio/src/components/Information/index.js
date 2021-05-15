import React from "react";
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
  InfoFrameworks,
} from "./InformationComponents";
import webe from "../../assets/icons/webe2sm.jpg";

const index = () => {
  const handleEmailMe = () => {
    window.open("mailto:w.benarto@gmail.com");
  };
  return (
    <>
      <InformationContainer>
        <InfoHeader>
          <InfoHeaderImage src={webe} />
          <InfoHeading>
            Full-Stack developer seeking for full-time opportunity as a software
            engineer.
          </InfoHeading>
          <InfoDetail>
            Enthusiastic web developer with 3+ years of programming experience
            building websites and web applications that provides intuitive user
            interface. Seeking a rewarding career opportunity to dedicate myself
            as a full-time web developer to continue learning and growing while
            putting in the effort to achieve the company’s goal. Experienced in
            building responsive web-apps through React, HTML, and CSS.
          </InfoDetail>
        </InfoHeader>
        <InfoMain>
          <InfoHeading>What I do</InfoHeading>
          <InfoSkills>
            <InfoLanguages>
              <>Languages</>

              <br />
              <br />
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript</p>
              <p>Node.js</p>
              <p>MySQL</p>
              <p>MongoDB</p>
            </InfoLanguages>
            <InfoFrameworks>
              Frameworks
              <br />
              <br />
              <p>Express</p>
              <p>React</p>
              <p>Redux</p>
              <p>Firebase</p>
            </InfoFrameworks>
          </InfoSkills>
          <InfoButton onClick={handleEmailMe}>
            <p>Say Hello</p>
          </InfoButton>
        </InfoMain>
      </InformationContainer>
    </>
  );
};

export default index;
