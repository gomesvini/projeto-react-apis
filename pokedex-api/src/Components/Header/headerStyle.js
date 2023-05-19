import styled from "styled-components";

 export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    background-color: white; 
    height: 20vh; 
 `

export const Img = styled.img`
    margin-left: 34.55rem;
`

export const SecondImg = styled.img`
    margin-left: 17.1rem;
`

export const ThirdImg = styled.img`
    margin-left: 7.3rem;
`

export const SecondDiv = styled.div`
    display: flex;
    height: 20vh;
    align-items: center; 
    background-color: white;  
`

export const Button = styled.button`
    height: 8vh;
    width: 14vw;
    margin-left: 2vw;
    margin-right: 1rem;
    border-radius: 8px;
    background-color: #33a4f5;
    color: white;
    border: none;
    cursor: pointer;
    :hover{
        transform: scale(0.9)
    }
`
export const ButtonCatch = styled.button`
    height: 8vh;
    width: 14vw;
    margin-right: 2rem;
    border-radius: 8px;
    background-color: #33a4f5;
    color: white;
    border: none;
    cursor: pointer;
    :hover{
        transform: scale(0.9)
    }
`
export const ButtonRemove = styled.button`
    height: 8vh;
    width: 14vw;
    margin-left: 2vw;
    margin-right: 1rem;
    border-radius: 8px;
    background-color:  #ff6262;
    color: white;
    border: none;
    cursor: pointer;
    :hover{
        transform: scale(0.9);
    }

`


export const BackButton = styled.button`
    height: 7vh;
    margin-left: 2vw;
    width: 7vw;
    cursor: pointer;
`
export const BtnBack = styled.button`
    border: none;
    font-size: 1.5rem;
    margin-left: 3rem;
    font-weight: 700;
    background-color: white;
    cursor: pointer;
    :hover{
        text-decoration: underline;
        transform: scale(0.9)
    }
`