import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  margin-bottom: 0px;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2298a3;
  scroll-snap-align: start;
  @media screen and (max-width: 475px) {
    height: 50px;
  }
`;

export const FooterInfo = styled.div`
  width: 35%;
  height: 50px;
  font-size: 20px;
  font-family: "Roboto Mono";
  color: white;
  margin: 0px 60px;
  overflow-wrap: break-word;
  /* background-color: purple; */
  @media screen and (max-width: 475px) {
    margin: 0;
    width: 100%;
    font-size: 10px;
  }
`;

export const FooterIcons = styled.div`
  max-width: 30%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  /* background-color: yellow; */
  flex-grow: 2;
  align-items: center;

  margin-right: 60px;
  @media screen and (max-width: 475px) {
    flex: 1;
    margin-right: 0px;
  }
`;

export const FooterIcon = styled.a`
  width: 50px;
  height: 50px;
  font-size: 2rem;
  color: white;
  padding: 5px;
  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;
