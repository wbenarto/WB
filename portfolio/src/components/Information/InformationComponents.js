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
`;

export const InfoHeaderImage = styled.img`
  margin-top: 40px;
  width: 50%;
  border-radius: 20px;
`;

export const InfoHeading = styled.p`
  margin-top: 100px;
  font-size: 48px;
  font-family: "Roboto";
  width: 70vw;
  text-align: center;
`;

export const InfoDetail = styled.p`
  margin-top: 20px;
  font-family: "Roboto Mono";
  font-size: 20px;
  width: 40vw;
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
`;
