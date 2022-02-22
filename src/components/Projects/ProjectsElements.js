import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono";

  @media screen and (max-width: 475px) {
    width: 90%;
  }
`;

export const ProjectContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  height: 500px;
  width: 100%;
  flex-direction: row;
  display: flex;
  position: relative;
  border-bottom: 1px solid black;
  margin: auto;
  margin-bottom: 40px;
  padding: 80px 0px;

  @media screen and (max-width: 475px) {
    width: 100%;
    padding: 0;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0px;

  }
`;

export const ProjectsImage = styled.img`
  width: 60%;
  height: 500px;
  object-fit: cover;
  display: flex;
  position: relative;
  left: 0;
  top: 0;
  
  @media screen and (max-width: 475px) {
    width: 100%;
    height: 200px;
  }
`;

export const ProjectsInfo = styled.div`
  width: 40%;
  min-height: 500px;
  max-height: 500px;
  background-color: rgba(245, 245, 245, 0.9);
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 5px;
  flex-direction: column;
  top: 0;
  right: 0;

  > a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 475px) {
    position: relative;
    margin: 0px 0px 10px 0px;
    width: 100%;
    height: 100%;
    padding: 0px;
    justify-content: space-evenly;
  }
`;

export const ProjectsTitle = styled.h1`
  font-size: 20px;
  font-family: "Roboto Mono";
  border-bottom: 0.5px solid black;
  color: #0298a3;
  /* background-color: rgba(245, 245, 245, 0.5); */

  text-decoration: none;

  @media screen and (max-width: 678px) {
    font-size: 14px;
  }

  @keyframes wobble-horizontal {
    16.65% {
      transform: translateX(8px);
    }

    33.3% {
      transform: translateX(-6px);
    }

    49.95% {
      transform: translateX(4px);
    }

    66.6% {
      transform: translateX(-2px);
    }

    83.25% {
      transform: translateX(1px);
    }

    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    animation-name: wobble-horizontal;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`;

export const ProjectsHeadline = styled.p`
  font-family: "Roboto";
  font-size: 28px;
  color: white;
  padding: 15px 10px;
  margin: 10px 0px;
  text-align: right;
  background-color: #0298a3;

  @media screen and (max-width: 475px) {

    padding: 10px 0;
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
`;

export const ProjectsDetail = styled.p`
  font-family: "Roboto Mono";
  font-size: 20px;
  margin-bottom: 80px;
  /* background-color: rgba(0, 0, 0, 0.1); */
  /* color: #7a7c80; */

  color: black;
  text-align: left;

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 14px;
    margin-top: 20px;
    text-align: left;
  }
`;

export const ProjectsButton = styled.div`
  font-family: "Roboto Mono";
  font-size: 20px;
  padding: 0px 10px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: relative;
  text-align: center;
  border: 1px black solid;
  border-radius: 20px;
  background-color: rgba(5, 99, 99, 0.1);
  
  > a {
    text-decoration: none;
    color: black;
  }

  @keyframes wobble-horizontal {
    16.65% {
      transform: translateX(8px);
    }

    33.3% {
      transform: translateX(-6px);
    }

    49.95% {
      transform: translateX(4px);
    }

    66.6% {
      transform: translateX(-2px);
    }

    83.25% {
      transform: translateX(1px);
    }

    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    animation-name: wobble-horizontal;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }

  @media screen and (max-width: 475px) {

    font-size: 8px;
    margin: 5px 5px;
    padding: 5px;
    height: 20px;
  }
`;

export const ProjectsTechs = styled.div`
  max-width: 100%;
  position: relative;
  color: #0298a3;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  padding: 10px;

  @media screen and (max-width: 475px) {
      margin: 0;
      font-size: 0.6rem;
  }
  
`;

export const ProjectTech = styled.p`
  padding: 5px 15px;
  min-width: 80px;
  margin: 5px;
  text-align: center;
  overflow: wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  @media screen and (max-width: 475px) {
    min-width: 40px;

  }
`

export const ProjectSite = styled.img`
  width: 50px;
  height: 50px;
  color: black;
  font-size: 1rem;
`;
