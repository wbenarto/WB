import styled from "styled-components";

import { FaExpand } from "react-icons/fa";
export const HeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  /* background-color: blue; */
  position: relative;
  margin-top: 40px;
  padding-bottom: 80px;
  border-bottom: 1px solid black;
`;

export const HeroTitle = styled.div`
  height: 181px;
  /* 
  background-color: pink; */
  margin-top: 200px;
  padding-bottom: 120px;
  font-size: 80px;
  font-family: "Roboto";
  text-align: center;

  @media screen and (max-width: 475px) {
    font-size: 40px;
    margin-top: 140px;
    padding-bottom: 40px;
  }
`;

export const HeroDesc = styled.div`
  height: 60px;
  width: 100%;
  flex-direction: row;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;

  > p {
    width: 300px;
    height: 100%;
    /* background-color: #4bbf68; */
    align-items: center;
    display: flex;
    justify-content: center;
    color: black;
    text-align: center;
    border: 1px black solid;
    border-radius: 30px;
    font-family: "Roboto Mono";
    font-size: 20px;
    padding: 0 20px;
    margin: 0 20px;

    @media screen and (max-width: 475px) {
      font-size: 12px;
    }
  }
`;

// export const HeroDescIcon = styled.div`
//   background-image: require(url(${FaExpand}));
//   width: 50px;
//   height: 50px;
//   font-size: 1rem;
//   /* background-color: blue; */
// `;
