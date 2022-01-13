import styled from "styled-components";

export const InformationContainer = styled.div`
  max-width: 900px;
  width: 90%;
  height: 100%;
  /* background-color: teal; */
  margin-top: 80px;
  margin: auto;
  flex-direction: column;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  @media screen and (max-width: 475px) {
    max-width: 85vw;
  }
`;

export const InfoHeader = styled.div`
  height: 800px;
  margin-top: 100px;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 475px) {
    margin-top: 0px;
    width: 90%;
    height: 600px;
  }
`;

export const InfoHeaderImage = styled.img`
  margin-top: 20px;
  width: 80%;


  @media screen and (max-width: 475px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const InfoHeading = styled.p`
  margin-top: 100px;
  font-size: 32px;
  font-family: "Roboto Mono";
  width: 100%;
  text-align: left;
  line-height: 4rem;
  color: #2298a3;
  /* background-color: cyan; */

  > span {
    color: #2298a3;
    width: 40%;
    border-bottom: 2px solid #2298a3;
    display: flex;
    margin: auto;
    justify-content: center;
  }

  @media screen and (max-width: 678px) {
    font-size: 20px;
    margin-top: 40px;
    line-height: 2rem;
  }
`;

export const InfoDetail = styled.p`
  margin-top: 60px;
  font-family: "Roboto Mono";
  font-size: 20px;

  @media screen and (max-width: 475px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const InfoMain = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const InfoSkills = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-bottom: 80px;
  width: 100%;
  height: 100%;

  font-family: "Roboto Mono";
  font-size: 20px;

  @media screen and (max-width: 678px) {
    margin-top: 20px;
    font-size: 16px;
    width: 100%;
  }
`;

export const InfoLanguages = styled.div`
  width: 33%;
  height: 100%;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 1.5rem;
  }
  > p {
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    padding: 10px 50px;
    margin-left: 50px;
    margin-right: 50px;
  }

  :nth-of-type(2) {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  @media screen and (max-width: 678px) {
    > p {
      font-size: 10px;
      height: 0.5rem;
      background-color: white;
      margin: 10px;
      padding: 7px 15px;
    }
    > h1 {
      font-size: 0.7rem;
    }
  }
`;
