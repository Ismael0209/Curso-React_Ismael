//formas de importar
// import { heroes } from './data/heroes'
// import {heroes} from './data/heroes' 
//const { heroes } = require("./data/heroes"); 
import heroes, {owners} from './data/heroes'

//console.log(heroes);


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) =>  heroes.filter(  (heroe)  => heroe.owner === owner );

console.log(getHeroeByOwner('DC'));