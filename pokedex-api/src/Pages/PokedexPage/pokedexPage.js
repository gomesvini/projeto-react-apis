import { Div, Container} from "../PokedexPage/pokedexStyle";
import PokemonCard from "../../Components/PokemonCard/pokemonCard";
import Header from '../../Components/Header/header'
import { BASE_URL } from "../../constants/BASE_URL";

export default function PokedexPage ({pokedex, removeFromPokedex, detail, setDetail}){

    return(
        <Container>
            <Header/>

            <Div>
                {pokedex.map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                        pokemonName={pokemon.name}
                        removeFromPokedex={removeFromPokedex}
                        detail={detail}
                        setDetail={setDetail}/>
                ))}             
                
            </Div>
        </Container>
    )
    
}