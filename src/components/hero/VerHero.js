import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const VerHero = () => {
  const navigate = useNavigate();
  const {id} = useParams()  
  const handlereturn = () =>{
  
    navigate(-1)
  }
  const hero = useMemo(()=> getHeroesById(id), [ id ]) 
  
  if (!hero) {
    return  <Navigate to='/'/>
  }
  
  return <div className='mt-5 row'>
            <div className='col-4'>
              <img src={`/assets/images/heroes/${id}.jpg`}
                            className='img-thumbnail animate__animated animate__fadeInLeft'
                            alt={hero.superhero}/>
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
              <h3>{hero.superhero}</h3>
              <ul className='list-group list-group-fush '>
                <li className='list-group-item'>
                 <b>Alter ego: </b> {hero.alter_ego} 
                </li>
                <li className='list-group-item'>
                 <b>Publisher: </b> {hero.publisher} 
                </li>
                <li className='list-group-item'>
                 <b>First Aparence: </b> {hero.first_appearance} 
                </li>
              </ul>
              <h5>Character</h5>
              <p>{hero.characters}</p>
              <button onClick={handlereturn} className='btn btn-outline-primary'>Volver</button>
            </div>
      
          
        </div>;
};
