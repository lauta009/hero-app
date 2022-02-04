import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id,
                            superhero,
                            publisher,
                            alter_ego,
                            first_appearance,
                            characters 
                        }) => {

    return <div className='col'>
            <div className='card animate__animated animate__fadeIn'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={`/assets/images/heroes/${id}.jpg`}
                            className='card-img'
                            alt={superhero}/>
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {(alter_ego !== characters) 
                            && <p className='text-muted'>{characters}</p>}
                            <p className='text-muted'>{first_appearance}</p>
                            <Link to={`/hero/${id}`}>Ver más...</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>;
};
