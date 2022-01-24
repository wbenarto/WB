import styled from 'styled-components'

export const PDContainer = styled.div`
    width: 100%;
    margin: auto;
    display:flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    font-family: "Roboto";
    > a {
        text-decoration: none;
    }

`

export const PDTitle = styled.p`
    font-size: 32px;
    color: gray;
`

export const PDSubtitle = styled.p`
    font-size: 28px;
    color: gray;
    text-align: center;

    @media screen and (max-width: 475px) {
        width: 90%;
        font-size: 20px;
    }
`

export const PDHeadings = styled.h5`
    font-size: 24px;
    color: gray;
    border-bottom: 4px solid #0298a3;
    text-align: center;

    @media screen and (max-width: 475px) {
        width: 80%;
        font-size: 20px;
    }
`

export const PDDesc = styled.p`
    text-align: center;
    width: 70%;
    font-size: 20px;
    line-height: 2rem;
    @media screen and (max-width: 475px) {
        width: 90%;
        font-size: 14px;
    }
`

export const PDBack = styled.button`
    font-size: 24px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    align-self: center;
    border-radius: 50% 50% 50% 50%;
    background-color: white;
    padding: 20px;
    margin: 20px 0;

    &:hover{
        background-color: gray;
        color: white;
        cursor: pointer;
    }
`

export const PDImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;

    @media screen and (max-width: 475px) {
        height: 200px;
        object-fit: cover;
    }
`



export const PDTech = styled.p`
    width: 70;
    font-size: 20px;
    @media screen and (max-width: 475px) {
        width: 70%;
        font-size: 14px;
    }
`

export const PDLinks = styled.div`
    border: 2px solid black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 30px;
    width: 140px;
    color: black;
    margin: 40px;

    &:hover{ 
        background-color: #0298a3;
        color: white;
    }
`