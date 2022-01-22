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

  @media screen and (max-width: 678px) {
    max-width: 80vw;
    margin-top: 40px;
    padding: 20px 0px;
  }
`;

export const HeroTitle = styled.div`
  margin-top: 50px;
  font-size: 50px;
  font-family: "Roboto";
  width: 90%;
  text-align: left;
 
  >div {
    /* background-color: pink; */
    padding: 0;
  }

  .big-heading {
    margin: 0;
    color: #2298a3;
    font-size: 78px;
    line-height: 4rem;
    font-weight: 100;
  }
  .heading2 {
    color: #2298a3;
  }

  p {
    font-size: 24px;
    color: black;
    margin: 10px 0;
  }
  .city {
    font-size: 38px;
  }

  @media screen and (max-width: 678px) {
    font-size: 20px;
    margin-top: 10%;
    line-height: 2rem;
  }

  @media screen and (max-width: 475px) {
    margin-top: 250px;
    p {
      font-size: 18px;
      margin: 0;
    }
    .big-heading {
      font-size: 34px;
      line-height: 2rem;
    }
    .city {
      font-size: 20px;
    }
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
