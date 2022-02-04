import {heroes} from '../data/hero';


export const getHeroesByName = (name) => {
    name = name.toLowerCase();
if (name === '') {
    return []
}
 return heroes.filter(hero=> hero.superhero.toLowerCase().includes(name) );
};
