import { useNavigate } from "react-router-dom";
import { Div, Header, Button, P, DivP, DivButton, Card, ButtonCard} from "../PokedexPage/pokedexStyle";
import { goToDetails, goToHome } from "../../routes/coordinator";


export default function PokedexPage (){
    
    const navigate = useNavigate()

    return(
        <>
            <Header>
                <Button onClick={()=> goToHome(navigate)}>Voltar para lista de pokemons</Button>
                <P>POKEDEX</P>
            </Header>

            <Div>
                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard onClick={()=> goToDetails(navigate)}>ver detal.</ButtonCard>
                    </DivButton>
                </Card>
            </Div>
        </>
    )
    
}