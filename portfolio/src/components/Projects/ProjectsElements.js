import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 900px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  max-height: 100vh;
  min-height: 800px;
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
    min-height: 700px;

    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

export const ProjectsImage = styled.img`
  min-width: 40%;
  max-height: 400px;
  object-fit: contain;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  
  @media screen and (max-width: 475px) {
    position: relative;
    max-height: 100%;
    width: 100%;
  }
`;

export const ProjectsInfo = styled.div`
  width: 60%;
  min-height: 400px;
  background-color: rgba(245, 245, 245, 0.9);
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: space-between;
  padding: 40px;
  border-radius: 5px;
  flex-direction: column;
  top: 10;
  right: 0;

  > a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 475px) {
    position: relative;
    margin: 0px 0px 0px 0px;
    height: 100%;
    width: 100%;
    padding: 0px;
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
    margin-bottom: 20px;
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
  font-size: 32px;
  color: #4b606b;
  width: 100%;
  margin: 20px 0px;

  text-align: left;
  /* background-color: rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 24px;
    text-align: left;
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
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: relative;
  text-align: center;
  border: 1px black solid;
  border-radius: 20px;
  padding: 5px;
  right: 0;
  margin: 20px 0;
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
    margin-top: 40px;
    font-size: 8px;

    padding: 5px;
    height: 20px;
  }
`;

export const ProjectsTechs = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  right: 0;
  color: #0298a3;
  /* background-color: green; */
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow-wrap: break-word;
  flex-wrap: wrap;

  > p {
    font-family: "Roboto Mono";
    font-size: 1rem;

    /* background-color: white; */
    text-align: center;

    @media screen and (max-width: 475px) {
      margin: 0;
      font-size: 0.6rem;
    }
  }
`;

export const ProjectSite = styled.img`
  width: 50px;
  height: 50px;
  color: black;
  font-size: 1rem;
`;
