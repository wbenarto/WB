import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100vh;
  /* background-color: blue; */
  display: flex;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 475px) {
    margin-top: 0px;
  }
`;

export const ContactContent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  /* background-color: pink; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const EmailButton = styled.div`
  margin-top: 100px;
  width: 60%;
  height: 60px;
  border-radius: 50px;
  background-color: #2298a3;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
  font-family: "Roboto Mono";
  font-size: 28px;

  @media screen and (max-width: 475px) {
    height: 40px;
    font-size: 14px;
  }
`;

export const ContactHeadline = styled.p`
  font-family: "Roboto";
  font-size: 32px;
  color: #4b606b;
  width: 100%;
  margin: 20px 0px;

  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 475px) {
    margin: 0;
    font-size: 24px;
  }
`;
