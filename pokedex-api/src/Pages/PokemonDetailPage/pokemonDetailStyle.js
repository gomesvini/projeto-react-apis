import styled from "styled-components";
import picturePokebola from "../../Assets/imagePokebola.svg"

export const Container = styled.div`
    background-color: gray;
    height: 100vh;
`
export const General = styled.div`
    display: flex;
    height: 64vh;
    width: 80vw;
    border-radius: 30px;
    padding: 1rem;
    margin: 1rem;
    box-sizing: border-box;
    position: static;
    background-color: ${(props) => {return props.color}};
    background-image: url(${picturePokebola});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 468px;
    background-position-y: -170px;
    margin-left: 8rem;
`
export const Image = styled.div`
    height: 28vh;
    width: 18vw;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    
`

export const Images= styled.div`
    margin-left: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 25vw;
    height: 59vh;
    line-height: 0.2rem;
    border-radius: 12px;
    text-align: center;
    background-color: white;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Details = styled.div`
    line-height: 0.5rem;
`
export const Title = styled.h1`
    font-weight: 900;
    text-align: start;
    margin: 2rem 1rem ;
`

export const PokeStats = styled.p`
    display: flex;
    flex-direction: row;
    line-height: 0.01rem;
`
export const Id = styled.p`
    color: white;
`
export const Name = styled.h1`
    color: white;
    text-transform: capitalize;
`
export const Moves = styled.div`
    line-height: 1rem;
    height: 39vh;
    width: 15vw;
    border-radius: 8px;
    text-align: left;
    background-color: white;
`

export const H1 = styled.h1`
    color: white;
    margin-left: 4rem;
`

export const Img = styled.img`
    margin-right: 0.5rem;
    :hover{
        transform: scale(1.1);
    }
`
export const StatsName = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-left: 2rem;
`
export const StatsValue = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 2rem;
`

export const StatsProgress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.62rem;
    
`

export const ProgressBar = styled.div`
    --progress: ${(props) => {return props.value}};
    width: 10vw;
    height: 2vh;
    background-color: #DCDDDD;
    display: flex;
    border-radius: 40px;
    margin-top: 0.6rem;
    margin-left: 0.8rem;
    ::before{
        content:"";
        width: calc(var(--progress)*1%);
        background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
        border-radius: 40px;
    }
`

export const TitleMoves = styled.h1`
    text-align: start;
    font-size: 20px;
    margin-left: 1rem;
    font-weight: 800;
    font-style: normal;
`
export const DivMoves = styled.div`
    border: 1px dotted white;
    width: max-content;
    height: max-content;
    margin: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    text-transform: capitalize;
    background-color: #DCDDDD;    
    word-spacing: none;
`

export const Font = styled.p`
    color: #696969;
    font-weight: 700;
`

export const TotalValue = styled.p`
    font-weight: 800
`
export const Value = styled.p`
    font-weight: 500
`