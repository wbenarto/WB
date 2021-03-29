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
            Experienced in building responsive web-apps through React, HTML, and
            CSS, developed robust REST API using Django-rest api. Passionate in
            helping and educating others in technology.
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
              <p>Python</p>
              <p>MySQL</p>
            </InfoLanguages>
            <InfoFrameworks>
              Frameworks and Libraries
              <br />
              <br />
              <p>Express</p>
              <p>React</p>
              <p>Redux</p>
              <p>Django</p>
              <p>Firebase</p>
            </InfoFrameworks>
          </InfoSkills>
          <InfoButton>
            <p>Say Hello</p>
          </InfoButton>
        </InfoMain>
      </InformationContainer>
      ;
    </>
  );
};

export default index;
