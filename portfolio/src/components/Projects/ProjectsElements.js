import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  /* background-color: teal; */
  flex-direction: row;
  display: flex;
  position: relative;

  border-bottom: 1px solid black;
`;

export const ProjectsImage = styled.image`
  width: 50%;
  height: 90%;
  background-color: blue;
  display: flex;
  position: relative;
  margin-left: 80px;
`;

export const ProjectsInfo = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: teal; */
  display: flex;
  position: relative;
  flex-direction: column;

  margin: 160px 0px 80px 80px;
`;

export const ProjectsTitle = styled.h1`
  font-size: 20px;
  width: 180px;
  font-family: "Roboto Mono";
  border-bottom: 0.5px solid black;
`;

export const ProjectsHeadline = styled.p`
  font-family: "Roboto";
  font-size: 48px;
`;

export const ProjectsDetail = styled.p`
  font-family: "Roboto Mono";
  font-size: 20px;
  margin-bottom: 40px;
`;

export const ProjectsButton = styled.div`
  font-family: "Roboto Mono";
  font-size: 20px;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  border: 1px black solid;
  border-radius: 20px;
`;
