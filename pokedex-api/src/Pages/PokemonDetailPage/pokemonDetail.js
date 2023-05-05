import { useNavigate } from "react-router-dom";
import { Button, ButtonF, Header, General, DivOne, FrontImage, BackImage, DivTwo, DivType, DivMoves, DivThree, Title, Items, Moves, Types } from "./pokemonDetailStyle";

export default function PokemonDetail (){
        
    const navigate = useNavigate()

    return(
        <>
            <Header>
                <ButtonF onClick={()=> navigate(-1)}>Voltar</ButtonF>
                <p>NOME DO POKEMON</p>
                <Button>Adicionar/Remover da pokedex</Button>
            </Header>


            <General>
                <DivOne>
                    <FrontImage>
                        <p>Imagem frontal</p>
                    </FrontImage>

                    <BackImage>
                        <p>Imagem de costas</p>
                    </BackImage>
                </DivOne>

                <DivTwo>
                    <Title>
                        <p>Stats</p>
                    </Title>

                    <Items>
                        <p>HP: 46</p>
                        <p>attack:39</p>
                        <p>defense: 52</p>
                        <p>special-attack: 43</p>
                        <p>special-defense: 54</p>
                        <p>speed: 54</p>
                    </Items>
                </DivTwo>

                <DivThree>
                    <DivType>
                        <Types>type 1</Types>
                        <Types>type 2</Types>
                    </DivType>

                    <DivMoves>
                        <Title>
                            <p>Moves</p>
                        </Title>

                        <Moves>
                            <p>move name 1</p>
                            <p>move name 2</p>
                            <p>move name 3</p>
                        </Moves>                
                    </DivMoves>
                </DivThree>

            </General>
        </>
    )
    
}