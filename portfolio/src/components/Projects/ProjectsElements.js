import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 95vh;
  /* background-color: teal; */
  flex-direction: row;
  display: flex;
  position: relative;
  border-bottom: 1px solid black;

  overflow: hidden;
  @media screen and (max-width: 475px) {
    flex-direction: column;
  }
`;

export const ProjectsImage = styled.img`
  width: 50%;
  height: 80%;
  background-color: lightblue;
  display: flex;
  position: relative;
  margin-left: 80px;

  @media screen and (max-width: 475px) {
    margin-left: 0px;
  }
`;

export const ProjectsInfo = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: teal; */
  display: flex;
  position: relative;
  flex-direction: column;

  margin: 160px 0px 80px 80px;

  @media screen and (max-width: 475px) {
    margin-top: 0px;
  }
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
  margin-right: 40px;
  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 24px;
  }
`;

export const ProjectsDetail = styled.p`
  font-family: "Roboto Mono";
  font-size: 20px;
  margin-bottom: 40px;
  margin-right: 40px;

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 14px;
  }
`;

export const ProjectsButton = styled.div`
  font-family: "Roboto Mono";
  font-size: 20px;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
  border: 1px black solid;
  border-radius: 20px;

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 14px;
  }
`;

export const ProjectsTechs = styled.div`
  width: 80%;
  height: 40px;
  /* background-color: green; */
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;

  > p {
    font-family: "Roboto Mono";
    font-size: 1rem;
    padding: 5px;

    @media screen and (max-width: 475px) {
      margin: 0;
      font-size: 0.5rem;
    }
  }
`;
