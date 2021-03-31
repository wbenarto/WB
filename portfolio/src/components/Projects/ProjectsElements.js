import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  /* background-color: teal; */
  flex-direction: row;
  display: flex;
  position: relative;
  border-bottom: 1px solid black;

  overflow: hidden;
  @media screen and (max-width: 475px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const ProjectsImage = styled.img`
  width: 40%;
  height: 600px;

  /* background-color: lightblue; */
  display: flex;
  position: relative;
  margin-left: 80px;

  @media screen and (max-width: 475px) {
    margin-left: 0px;
    margin-top: 20px;
    width: 90%;
    height: 200px;
  }
`;

export const ProjectsInfo = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: teal; */
  display: flex;
  position: relative;
  flex-direction: column;

  margin: 40px 80px 80px 80px;

  > a {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 475px) {
    margin: 20px 0px 0px 0px;
    width: 90%;
  }
`;

export const ProjectsTitle = styled.h1`
  font-size: 20px;
  font-family: "Roboto Mono";
  border-bottom: 0.5px solid black;
  text-decoration: none;
`;

export const ProjectsHeadline = styled.p`
  font-family: "Roboto";
  font-size: 48px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 24px;
  }
`;

export const ProjectsDetail = styled.p`
  font-family: "Roboto Mono";
  font-size: 20px;
  margin-bottom: 80px;

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 14px;
    margin-top: 20px;
  }
`;

export const ProjectsButton = styled.div`
  font-family: "Roboto Mono";
  font-size: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
  border: 1px black solid;
  border-radius: 20px;

  > a {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 475px) {
    margin-top: 40px;
    font-size: 14px;
  }
`;

export const ProjectsTechs = styled.div`
  width: 100%;
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

export const ProjectSite = styled.img`
  width: 50px;
  height: 50px;
  color: black;
  font-size: 1rem;
`;
