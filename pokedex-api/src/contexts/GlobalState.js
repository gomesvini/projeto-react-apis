import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {BASE_URL} from "../../src/constants/BASE_URL"
import  GlobalContext  from "./GlobalContext";


import bug from "../../src/Assets/bug.svg"
import dark from "../../src/Assets/dark.svg"
import dragon from "../../src/Assets/dragon.svg"
import electric from "../../src/Assets/electric.svg"
import fairy from "../../src/Assets/fairy.svg"
import fighting from "../../src/Assets/fighting.svg"
import fire from "../../src/Assets/fire.svg"
import flying from "../../src/Assets/flying.svg"
import ghost from "../../src/Assets/ghost.svg"
import grass from "../../src/Assets/grass.svg"
import ground from "../../src/Assets/ground.svg"
import ice from "../../src/Assets/ice.svg"
import normal from "../../src/Assets/normal.svg"
import poison from "../../src/Assets/poison.svg"
import psychic from "../../src/Assets/psychic.svg"
import rock from "../../src/Assets/rock.svg"
import steal from "../../src/Assets/steal.svg"
import water from "../../src/Assets/water.svg"

export default function GlobalState(props){
    
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [detail, setDetail] = useState([]);

    const typesCard = (types_name) => {
        switch (types_name) {
            case "bug":
                return bug;
            case "dark":
                return dark;
            case "dragon":
                return dragon;
            case "electric":
                return electric;
            case "fairy":
                return fairy;
            case "fighting":
                return fighting;
            case "fire":
                return fire;
            case "flying":
                return flying;
            case "ghost":
                return ghost;    
            case "grass":
                return grass;    
            case "ground":
                return ground;    
            case "ice":
                return ice;    
            case "normal":
                return normal;    
            case "poison":
                return poison;    
            case "psychic":
                return psychic;    
            case "rock":
                return rock;    
            case "steal":
                return steal;    
            case "water":
                return water;    
            default:
                break;
        }
    };

    const colorCard = (kind_of_pokemon) => {
        switch (kind_of_pokemon) {
            case "grass":
                return "#729F92";            
            case "fire":
                return "#EAAB7D";            
            case "water":
                return "#71C3FF";            
            case "bug":
                return "#76A866";        
            case "normal":
                return "#BF9762";        
            default:
                return "null";
                
        }
    }

    // const typ2 = () => {
    //     if (detail.types[1]?.type.name){
    //         return <Img src={typesCard(detail.types[1]?.type.name)} height={32}/>
    //     }else {
    //         return null;
    //     }
    //  } 

     const checkPokemon = () => {
        const found = pokedex.find((pokemonOnPokedex) => {
            return pokemonOnPokedex.name === detail.name
        })
        
        if(found) {
            return true
        } else{
            return false
        }
     }

     const sumStats = () => {
        return detail.stats[0]?.base_stat + detail.stats[1]?.base_stat + detail.stats[2]?.base_stat + detail.stats[3]?.base_stat + detail.stats[4]?.base_stat + detail.stats[5]?.base_stat
     }
    

    // const loadDetails = async () => {
    //     try {
    //         setIsLoading(true)
    //         const res = await axios.get(pokemonUrl);
    //         setPokemon(res.data)
    //         setIsLoading(false)
    //         console.log(res.data)

    //     } catch (err) {
    //         Swal.fire("Erro ao carregar os detalhes")
    //         console.log(err.response)
    //     }
    // };

    // useEffect(()=> {
    //     loadDetails()
    // },[]);

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
        pokemon, 
        pokelist, 
        pokedex, 
        isLoading, 
        detail,
        setDetail,
        // loadDetails, 
        createPokelist, 
        addToPokedex, 
        removeFromPokedex,
        typesCard,
        // typ2,
        colorCard,
        checkPokemon,
        sumStats,
        setPokemon,
        setIsLoading
    }

    return (
        <GlobalContext.Provider value={valores}>
            {props.children}
        </GlobalContext.Provider>        
    )

}