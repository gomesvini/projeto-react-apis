import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from '../Pages/PokemonListPage/pokemonList';
import PokedexPage from '../Pages/PokedexPage/pokedexPage';
import PokemonDetail from "../Pages/PokemonDetailPage/pokemonDetail";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL} from "../constants/BASE_URL"
import Swal from "sweetalert2";



export default function Router(){
    

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [detail, setDetail] = useState([]);
    

    const createPokelist = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setPokelist(res.data.results)
        } catch (err) {
            console.log("Erro ao buscar lista de pokemons")
            console.log(err.response)
        }
    }

    useEffect(() =>{
        createPokelist()
    },[]);

    

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );
        if(!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
            Swal.fire({
                title: 'Gotcha!',
                text: `O Pokémon foi adicionado a sua Pokédex`,
                showConfirmButton: false
              })
        }
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name 
        );

        setPokedex(newPokedex)
        Swal.fire({
            title: 'Oh, no!',
            text: 'O Pokémon foi removido da sua Pokédex',
            showConfirmButton: false,
          })
    };

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<PokemonList
                       pokelist={pokelist}
                       pokedex={pokedex} 
                       addToPokedex={addToPokedex}
                       setDetail={setDetail}/>}/>
                <Route 
                    path="/pokedex" 
                    element={<PokedexPage
                        pokedex={pokedex}
                        removeFromPokedex={removeFromPokedex}
                        setDetail={setDetail}
                        detail={detail}/>}/>
                <Route 
                    path="/details" 
                    element={<PokemonDetail
                        pokedex={pokedex}
                        pokelist={pokelist}
                        addToPokedex={addToPokedex}
                        removeFromPokedex={removeFromPokedex}
                        detail={detail}/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}