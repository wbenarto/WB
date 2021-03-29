import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 5vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const NavbarLogo = styled.div`
  height: 3vh;
  position: relative;
  display: flex;
  color: black;
  margin-left: 80px;
  margin-top: 80px;
  /* background-color: green; */
  font-family: "Roboto";
  font-size: 28px;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 40%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  margin-top: 80px;
  margin-right: 80px;

  position: relative;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavbarItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: black;
  /* background-color: teal; */
  font-family: "Roboto Mono";
  font-size: 24px;

  align-items: center;
  justify-content: flex-end;
`;
