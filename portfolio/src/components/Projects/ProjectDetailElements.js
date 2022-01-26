import styled from 'styled-components'

export const PDContainer = styled.div`
    width: 100%;
    margin: auto;
    display:flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    font-family: "Roboto";
    animation: transitionIn 1s;
    
    > a {
        text-decoration: none;
    }

    @keyframes transitionIn {
        from {
            opacity: 0;
            transform: rotateX(-100deg);
        }

        to {
            opacity: 1;
            transform: rotateX(0);
        }
    }
`

export const PDTitle = styled.p`
    font-size: 32px;
    color: #0298a3;
`

export const PDSubtitle = styled.p`
    font-size: 28px;
    color: #0298a3;
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

export const PDBack = styled.div`
    font-size: 24px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    align-self: center;
    border-radius: 50% 50% 50% 50%;
    background-color: gray;
    color:white;
    padding: 5px;
    margin: 20px 0;
    border: 2px solid black;

    &:hover{
        background-color: black;
        color: #0298a3;
        cursor: pointer;
        
    }

    @media screen and (max-width: 475px) {
   
        width: 20px;
        height: 20px
    }
`

export const PDImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;

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

    @media screen and (max-width: 475px) {
        font-size: 14px;
        margin: 10px;
        padding: 5px;
        width: 100px;
    }
`

export const PDIaMap = styled.img`
    width: 100%;
    height: 100%;
    
`