import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {
    const heroes =useMemo(()=>getHeroesByPublisher(publisher),[publisher]);



  return <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-3">
            
                {heroes.map(hero => {
                    return <HeroCard key={hero.id}{...hero}/>
                })   
                }
    
        </div>
}
