import React from 'react';
import { HeroList } from '../hero/HeroList';

export const DcHeroes = () => {
  return <div>
    <h1>DC Heroes</h1>
    <hr></hr>
    <HeroList publisher='DC Comics'></HeroList>
    </div>;
};
