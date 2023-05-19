import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function GlobalState({children}){
    
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    

    const loadDetails = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(pokemonUrl);
            setPokemon(res.data)
            setIsLoading(false)
            console.log(res.data)

        } catch (err) {
            Swal.fire("Erro ao carregar os detalhes")
            console.log(err.response)
        }
    };

    useEffect(()=> {
        loadDetails()
    },[]);

    useEffect(() =>{
        createPokelist()
    },[]);

    const createPokelist = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setPokelist(res.data.results)
        } catch (err) {
            console.log("Erro ao buscar lista de pokemons")
            console.log(err.response)
        }
    }
    
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

    
    

    const valores = {
        pokemon, isLoading, removeFromPokedex, addToPokedex, pokedex, pokelist
    }

    return (
        <GlobalContext.Provider value={valores}>
            {children}
        </GlobalContext.Provider>        
    )

}