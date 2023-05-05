import { useNavigate } from "react-router-dom";
import { Button, ButtonCard, Card, Div, DivButton, DivP, Header, P } from "./pokemonListStyle";
import { goToDetails, goToPokedex } from "../../routes/coordinator";

export default function PokemonList (){

    const navigate = useNavigate()

    return(
        <>
            <Header>
                <Button onClick={() => goToPokedex(navigate)}>Ver minha POKEDEX</Button>
                <P>LISTA DE POKÉMONS (VINDO DA API)</P>
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

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>

                <Card>
                    <DivP>
                        <p>POKE CARD</p>
                    </DivP>
                    <DivButton>
                        <ButtonCard>adicionar</ButtonCard>
                        <ButtonCard>ver detal.</ButtonCard>
                    </DivButton>
                </Card>
            </Div>

        </>

        
    )
    
}