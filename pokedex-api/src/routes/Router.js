import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from '../Pages/PokemonListPage/pokemonList';
import PokedexPage from '../Pages/PokedexPage/pokedexPage';
import PokemonDetail from "../Pages/PokemonDetailPage/pokemonDetail";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonList/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/details" element={<PokemonDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}