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
  padding-bottom: 40px;
  font-size: 80px;
  font-family: "Roboto";
  text-align: center;
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
    width: 360px;
    height: 50%;
    background-color: white;
    text-align: center;
    border: 1px black solid;
    border-radius: 30px;
    font-family: "Roboto Mono";
    font-size: 20px;
    padding: 0 20px;
    margin: 0 20px;
  }
`;

// export const HeroDescIcon = styled.div`
//   background-image: require(url(${FaExpand}));
//   width: 50px;
//   height: 50px;
//   font-size: 1rem;
//   /* background-color: blue; */
// `;
