import styled from "styled-components";
import picturePokebola from "../../Assets/imagePokebola.svg"

export const Card = styled.div`
    width: 30vw;
    height: 32vh;
    line-height: 1rem;
    background-color: ${(props) => {return props.color}};
    background-image: url(${picturePokebola});
    background-repeat: no-repeat;
    background-position: right;
    line-height: 0.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    margin: 0.5rem;
`

export const FirstDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
`
export const SubFirstDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;
`
export const SubFirstDiv2 = styled.div`
    margin-bottom: 0.5rem;
    background-color: transparent;
`
export const SecondDiv = styled.div`
   display: flex;
   justify-content: space-between;
   width: 95%;
   background-color: transparent;

`

export const BtnDetail = styled.button`
    color: white;
    background-color: transparent;
    border: none;
    font-size: 1em;
    text-decoration: underline;
    margin-left: 1.4rem;
    margin-bottom: 1rem; 
    cursor: pointer;
    :hover{
        transform: scale(1.1)
    }
` 

export const BtnCatch = styled.button`
    width: 9vw;
    height: 5vh;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    :hover{
        transform: scale(1.1)
    }
`

export const DivTypes = styled.div`
    display: flex;
    gap: 0.5rem;
`
export const Img = styled.img`
    position: static;
    :hover{
        transform: scale(1.3)
    }
`
export const Id = styled.p`
    color: white;
`
export const Name = styled.h1`
    color: white;
    text-transform: capitalize;
`

export const BtnRemove = styled.button`
    width: 9vw;
    height: 5vh;
    border-radius: 8px;
    border: none;
    background-color: #ff6262;
    color: white;
    cursor: pointer;
    :hover{
        transform: scale(1.1)
    }
` 

export const Image = styled.img`
    :hover{
        transform: scale(1.1)
    }
`