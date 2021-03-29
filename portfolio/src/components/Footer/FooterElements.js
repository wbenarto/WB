import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  /* background-color: green; */
`;

export const FooterInfo = styled.div`
  width: 260px;
  height: 50px;
  font-size: 20px;
  font-family: "Roboto Mono";
  margin: 80px 80px;
`;

export const FooterIcons = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  /* background-color: yellow; */
  flex-grow: 2;
  align-items: center;
  margin: 80px 80px;
`;

export const FooterIcon = styled.a`
  width: 50px;
  height: 50px;
  font-size: 2rem;
  color: black;
  padding: 5px;
`;
