import styled from "styled-components";

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: teal; */
  margin-top: 80px;
  flex-direction: column;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const InfoHeader = styled.div`
  width: 80%;
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
  margin-top: 60px;
  width: 60%;
  border-radius: 20px;

  @media screen and (max-width: 475px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const InfoHeading = styled.p`
  margin-top: 100px;
  font-size: 48px;
  font-family: "Roboto";
  width: 70vw;
  text-align: center;

  @media screen and (max-width: 678px) {
    font-size: 28px;
    margin-top: 60px;
  }
`;

export const InfoDetail = styled.p`
  margin-top: 20px;
  font-family: "Roboto Mono";
  font-size: 20px;
  width: 40vw;

  @media screen and (max-width: 475px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const InfoMain = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: yellow; */

  @media screen and (max-width: 475px) {
    margin-top: 0px;
    width: 100%;
  }
`;

export const InfoSkills = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-bottom: 80px;
  width: 80%;
  height: 100%;
  /* background-color: black; */
  font-family: "Roboto Mono";
  font-size: 20px;

  @media screen and (max-width: 475px) {
    margin-top: 20px;
    font-size: 16px;
    width: 100%;
  }
`;

export const InfoLanguages = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: teal; */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-right: 1px solid black;

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
    @media screen and (max-width: 475px) {
      font-size: 14px;
      height: 0.5rem;
      background-color: white;
      margin: 10px 10px;
    }
  }
`;

export const InfoFrameworks = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: purple; */
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;

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

    @media screen and (max-width: 475px) {
      font-size: 14px;
      height: 0.5rem;
      background-color: white;
      margin: 10px 10px;
    }
  }
`;

export const InfoButton = styled.div`
  width: 80%;
  height: 80px;
  border-radius: 50px;
  background-color: blue;
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
    font-size: 20px;
  }
`;
