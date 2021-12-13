import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Transition = styled.div`
  width: 100vw;

  .active {
    visibility: visible;
    transition: all 400ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 400ms ease-out;
    transform: translate(0, -150%);
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 7vh;

  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  background-color: white;
  > a {
    text-decoration: none;
  }

  @media screen and (max-width: 475px) {
    width: 85vw;
    height: 7vh;
    top: 0;
    left: 0;
    right: 0;
    /* margin-top: 20px; */
  }
`;

export const NavbarLogo = styled.div`
  height: 4vh;
  position: relative;
  display: flex;
  color: #13a8bf;
  margin-left: 80px;

  /* background-color: green; */
  font-family: "Roboto";
  font-size: 26px;
  align-items: center;
  text-decoration: none;
  border: 2px solid #13a8bf;
  padding: 10px;

  @media screen and (max-width: 475px) {
    font-size: 10px;
    height: 2vh;
    margin-left: 0;
  }
`;

export const NavLinks = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: red; */
  display: flex;

  position: relative;
  flex-direction: row;
  justify-content: space-between;

  > a {
    text-decoration: none;
  }
  @media screen and (max-width: 678px) {
    margin-top: 0;
    width: 65%;
  }

  > :nth-child(4) {
    border: 1.5px solid black;
    background-color: #2298a3;

    padding: 12px;

    > div {
      color: white;
    }
  }
`;

export const NavLink = styled(LinkS)`
  display: flex;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #13a8bf;
  }
`;
export const NavbarItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: black;
  font-family: "Roboto Mono";
  font-size: 1.3rem;
  align-items: center;
  justify-content: flex-end;

  > a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 475px) {
    font-size: 0.7rem;
  }
`;

export const ResumeButton = styled.a`
  font-family: "Roboto Mono";
  font-size: 18px;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  display: flex;

  margin-right: 80px;
  position: relative;
  border: 1.5px solid black;
  background-color: #2298a3;

  @media screen and (max-width: 475px) {
    width: 40px;
    height: 70%;
    margin-right: 0;
    font-size: 10px;
  }
`;
