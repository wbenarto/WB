import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 475px) {
    height: 50px;
    /* background-color: teal; */
  }
`;

export const FooterInfo = styled.div`
  width: 260px;
  height: 50px;
  font-size: 20px;
  font-family: "Roboto Mono";
  margin: 80px 80px;

  @media screen and (max-width: 475px) {
    margin: 0;
    width: 100%;
    font-size: 10px;
  }
`;

export const FooterIcons = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  /* background-color: yellow; */
  flex-grow: 2;
  align-items: center;
  margin: 80px 80px;
  @media screen and (max-width: 475px) {
    flex: 1;
    margin: 0;
  }
`;

export const FooterIcon = styled.a`
  width: 50px;
  height: 50px;
  font-size: 2rem;
  color: black;
  padding: 5px;
  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;
