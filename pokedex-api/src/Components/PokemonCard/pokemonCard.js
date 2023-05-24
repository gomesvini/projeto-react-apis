import {Card, FirstDiv, SubFirstDiv1, SubFirstDiv2, SecondDiv, BtnDetail, BtnCatch, DivTypes, Img, Id, Name, BtnRemove, Image} from "./pokemonCardStyle"
import { goToDetails } from "../../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


import bug from "../../Assets/bug.svg"
import dark from "../../Assets/dark.svg"
import dragon from "../../Assets/dragon.svg"
import electric from "../../Assets/electric.svg"
import fairy from "../../Assets/fairy.svg"
import fighting from "../../Assets/fighting.svg"
import fire from "../../Assets/fire.svg"
import flying from "../../Assets/flying.svg"
import ghost from "../../Assets/ghost.svg"
import grass from "../../Assets/grass.svg"
import ground from "../../Assets/ground.svg"
import ice from "../../Assets/ice.svg"
import normal from "../../Assets/normal.svg"
import poison from "../../Assets/poison.svg"
import psychic from "../../Assets/psychic.svg"
import rock from "../../Assets/rock.svg"
import steal from "../../Assets/steal.svg"
import water from "../../Assets/water.svg"

export default function PokemonCard ({pokemonName, pokemonUrl, addToPokedex, removeFromPokedex, setDetail}){

    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    


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
    }

    const navigate = useNavigate(); 
    const location = useLocation();

    const loadDetails = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(pokemonUrl);
            setPokemon(res.data)
            setType1(res.data.types[0]?.type.name)
            setType2(res.data.types[1]?.type.name)
            setIsLoading(false)
        } catch (err) {
            Swal.fire("Erro ao carregar os detalhes")
        }
    };

    useEffect(()=> {
        loadDetails()
    },[pokemonName])

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

    

     const typ2 = () => {
        if (type2){
            return <Image src={typesCard(type2)}/>
        }else {
            return null;
        }
     } 
     
     const pokeDetail = () => {
        setDetail(pokemon)
        goToDetails(navigate)
     }
     
     
    return(
    <>
        {
            isLoading?
                <>
                    <h3>Loading...</h3>
                </>
                :
                <Card color={()=> {return colorCard(type1)}} >
                    <FirstDiv>
                        <SubFirstDiv1>      
                            <Id>#0{pokemon.id}</Id>
                            <Name>{pokemonName}</Name> 
                            <DivTypes>                                
                                <Image src={typesCard(type1)}/>
                                {typ2()}                  
                            </DivTypes>                     
                        </SubFirstDiv1>
                        <SubFirstDiv2>
                            <Img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} width={150} />               
                        </SubFirstDiv2>
                    </FirstDiv>
                    <SecondDiv>
                        <BtnDetail 
                        onClick={()=> pokeDetail()}>Detalhes</BtnDetail> 
                        {location.pathname === "/" ? (
                            <BtnCatch onClick={() => addToPokedex(pokemon)}>Capturar!</BtnCatch> 
                        ) : (
                            <BtnRemove onClick={() => removeFromPokedex(pokemon)}>Excluir</BtnRemove>
                        )}                  
                    </SecondDiv>
                </Card>             
        }

    </>
    )
    
}