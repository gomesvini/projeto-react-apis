import { General, Image, Images, Stats, Infos, Details, Title, PokeStats, Id, Name, Moves, Container, H1, Img, StatsName, StatsValue, StatsProgress, ProgressBar, TitleMoves, DivMoves, Font, TotalValue, Value} from "./pokemonDetailStyle";
import Header from "../../Components/Header/header";

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



export default function PokemonDetail ({detail, pokedex, addToPokedex, removeFromPokedex}){

    // const context = useContext();
    // const {typesCard, detail, pokedex, addToPokedex, removeFromPokedex} = context

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

        const typ2 = () => {
            if (detail.types[1]?.type.name){
                return <Img src={typesCard(detail.types[1]?.type.name)} height={32}/>
            }else {
                return null;
            }
         } 

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
    
    return(
        <Container>
            <Header 
                checkPokemon={checkPokemon} 
                detail={detail}
                removeFromPokedex={removeFromPokedex}
                addToPokedex={addToPokedex}/>

            <H1>Detalhes</H1>

            <General color={()=> {return colorCard(detail.types[0]?.type.name)}}>
                <Images>
                    <Image>
                        <Img src={detail.sprites.front_default} height={180}/>
                    </Image>                 

                    <Image>
                        <Img src={detail.sprites.back_default} height={180}/>
                    </Image>
                </Images>
                    
                

                <Stats>
                    <Title>Base Stats</Title>           

                    <PokeStats>
                        <StatsName>                            
                            <Font>HP</Font>
                            <Font>Attack</Font>
                            <Font>Defense</Font>
                            <Font>Sp.Atk</Font>
                            <Font>Sp.Def</Font>
                            <Font>Speed</Font>
                            <Font>Total</Font>                        
                        </StatsName>
                        

                        <StatsValue>
                            <Value>{detail.stats[0]?.base_stat}</Value>
                            <Value>{detail.stats[1]?.base_stat}</Value>
                            <Value>{detail.stats[2]?.base_stat}</Value>
                            <Value>{detail.stats[3]?.base_stat}</Value>
                            <Value>{detail.stats[4]?.base_stat}</Value>
                            <Value>{detail.stats[5]?.base_stat}</Value>
                            <TotalValue>{sumStats()}</TotalValue>
                        </StatsValue>

                        <StatsProgress>
                            <ProgressBar value={()=> {return (detail.stats[0]?.base_stat)}}></ProgressBar>
                            <ProgressBar value={()=> {return (detail.stats[1]?.base_stat)}}></ProgressBar>
                            <ProgressBar value={()=> {return (detail.stats[2]?.base_stat)}}></ProgressBar>
                            <ProgressBar value={()=> {return (detail.stats[3]?.base_stat)}}></ProgressBar>
                            <ProgressBar value={()=> {return (detail.stats[4]?.base_stat)}}></ProgressBar>
                            <ProgressBar value={()=> {return (detail.stats[5]?.base_stat)}}></ProgressBar>
                        </StatsProgress>
                    </PokeStats>
                </Stats>                     
                   
               
                <Infos>
                    <Details>
                        <Id>#0{detail.id}</Id>
                        <Name>{detail.name}</Name>
                        <Img src={typesCard(detail.types[0]?.type.name)} height={32}/>
                        {typ2()}
                    </Details>
                        
                    

                    <Moves>
                        <TitleMoves>Moves:</TitleMoves>               

                       
                        <DivMoves>{detail.moves[0]?.move.name}</DivMoves>
                        <DivMoves>{detail.moves[1]?.move.name}</DivMoves>
                        <DivMoves>{detail.moves[2]?.move.name}</DivMoves>
                        <DivMoves>{detail.moves[3]?.move.name}</DivMoves>
                    </Moves>
                </Infos>
                
                        
                        <Img src={detail.sprites.other["official-artwork"].front_default} height={200} />
            </General>
        </Container>
    )
    
}