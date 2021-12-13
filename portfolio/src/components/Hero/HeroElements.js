import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 900px;
  max-width: 80vw;
  /* min-height: 100%;*/
  /* background-color: blue; */
  position: relative;
  display: flex;
  height: 100vh;
  margin: auto;
  padding: 140px 0px;
  border-bottom: 1px solid black;
  /* scroll-snap-align: start; */
  /* animation: darkLight 8s; */

  @keyframes darkLight {
    from {
      background-color: black;
    }
    to {
      background-color: white;
    }
  }

  @media screen and (max-width: 678px) {
    max-width: 80vw;
    margin-top: 40px;
    padding: 20px 0px;
  }
`;

export const HeroTitle = styled.div`
  margin-top: 180px;
  font-size: 60px;
  font-family: "Roboto";
  width: 90%;
  text-align: left;
  line-height: 4rem;
  /* animation: fade-in-bottom 1s ease-in-out both; */
  /* animation: fade-in-top 1s ease-in-out both; */

  span {
    color: #2298a3;
    position: relative;

    display: flex;
  
  }



    :nth-of-type(2) {
    }
  }

  p {
    font-size: 20px;
    color: black;
    line-height: 1rem;
    /* background-color: purple; */
  }

  > .name {
    font-size: 72px;
    line-height: 2.6rem;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 678px) {
    font-size: 20px;
    margin-top: 10%;
    line-height: 2rem;
    > .first {
      font-size: 12px;
      line-height: 2.5rem;
    }
  }

  /* background-color: pink; */
  /* height: 181px;
  padding-top: 200px;
  padding-bottom: 120px;
  font-size: 80px;
  font-family: "Roboto";
  text-align: center; */
  /* 
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
  /* 
  &:after {
    content: " ";
    display: inline-block;
    height: 70px;
    position: relative;
    top: 10px;
    margin-left: 3px;
    margin-right: 7px;
    width: 4px;
    background: #06a44d;
    animation: blink 1s step-start 0s infinite;
    -webkit-animation: blink 1s step-start 0s infinite;
  }

  .selectedText {
    display: none;
  } */

  @media screen and (max-width: 475px) {
    font-size: 40px;
    padding-top: 140px;
    padding-bottom: 40px;
  }
`;

export const HeroDesc = styled.div`
  height: 60px;
  width: 90%;
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
      font-size: 8px;
      width: 100%;
      height: 20px;
      padding: 0;
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
