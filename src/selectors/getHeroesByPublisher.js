import { heroes } from "../data/hero"

export const getHeroesByPublisher = (publisher) => {
    return heroes.filter(hero => hero.publisher === publisher)

}
