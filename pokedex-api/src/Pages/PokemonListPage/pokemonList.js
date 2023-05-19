import {Div, DivTotal, H1, Container} from "./pokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/pokemonCard";
import Header from "../../Components/Header/header";

export default function PokemonList ({pokelist, pokedex, addToPokedex, setDetail }){

  const filteredPokelist = () => 
    pokelist.filter(
        (pokemonInList) => 
        !pokedex.find(
            (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
   
            
    return(
        <Container>
            <Header/>

            <DivTotal> 
                <>
                    <H1>Todos Pokémons</H1>
                </>
                <Div>
                    {filteredPokelist().map((pokemon, index) => (
                        <PokemonCard
                        key={index}
                        pokemonName={pokemon.name}
                        pokemonUrl={pokemon.url}
                        addToPokedex={addToPokedex}
                        setDetail={setDetail}/>
                    ))}         

                
                </Div>
                               
            </DivTotal>
        </Container>

        
    )
    
}