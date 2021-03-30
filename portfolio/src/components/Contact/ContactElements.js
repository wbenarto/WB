import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 40vh;
  /* background-color: blue; */
  display: flex;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 475px) {
    height: 60vh;
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
