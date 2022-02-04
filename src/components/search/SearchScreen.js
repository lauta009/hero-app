import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';


export const SearchScreen = () => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const {q=''} = queryString.parse(search)
  const [{textSearch}, handleForm, reset] = useForm({textSearch:q});
  const heroes = useMemo(()=>getHeroesByName(textSearch), [q] )
 
  const handleSubmit = (e) => {
  e.preventDefault();
  navigate(`?q=${textSearch}`)

}
  return <div>
             <h1>Search</h1>
             <hr></hr>
             <div className='col-12 col-lg-4 col col-md-6'>
               <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input className="form-control"
                  type="text" name="textSearch" value={textSearch}
                  onChange={handleForm}></input>
               <button type="submit" className='btn btn-outline-info mt-3'>Buscar</button>
                </div>
               </form>
             </div>
             <hr></hr>
             <div className='col-12 col-lg-8 col col-md-6'>
                {heroes.map((hero)=>{
                  return  <HeroCard key={hero.id}{...hero}/>
                })}
             </div>

        </div>;
};
