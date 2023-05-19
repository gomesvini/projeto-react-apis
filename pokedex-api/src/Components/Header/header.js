import { useLocation, useNavigate } from "react-router-dom"
import { goToHome, goToPokedex } from "../../routes/coordinator"
import { Div, Img, Button, ButtonCatch, SecondDiv, SecondImg, BtnBack, ButtonRemove, ThirdImg } from "./headerStyle"
import logo from "../../Assets/logoPokemon.svg"



export default function Header ({checkPokemon, addToPokedex, removeFromPokedex, detail}){

    const navigate = useNavigate()
    const location = useLocation()

    const renderHeader = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <Div>
                        <Img src={logo}/>
                        <Button onClick={() => goToPokedex(navigate)}>Pokédex</Button>
                    </Div>
                );
            
            case "/pokedex":
                return (
                    <SecondDiv>
                        <BtnBack onClick={()=> goToHome(navigate)}> &lt; Todos Pokémons</BtnBack>
                        <SecondImg src={logo}/>
                    </SecondDiv>
                );
            case "/details":
                return (
                    <Div>
                        <BtnBack onClick={()=> navigate(-1)}> &lt; Voltar</BtnBack>
                        <ThirdImg src={logo}/>
                        {checkPokemon() && <ButtonRemove onClick={() => removeFromPokedex(detail)}>Excluir da Pokedex</ButtonRemove>}
                        {!checkPokemon() && <ButtonCatch onClick={() => addToPokedex(detail)}>Capturar</ButtonCatch>}
                        
                    </Div>
                );
            default:
                return(
                    <SecondDiv>
                        <BtnBack onClick={()=> goToHome(navigate)}> &lt; Todos Pokémons</BtnBack>
                        <SecondImg src={logo}/>
                    </SecondDiv>
                )
        }
    }

    return (
        <>
            {renderHeader()}
        </>
    )
}  