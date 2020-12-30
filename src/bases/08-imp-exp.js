// import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';
// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => heroe.id === id );  //heroe dentro del paréntesis es el argumento de la función que recibe el find
// }
//console.log(owners);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id );  //heroe dentro del paréntesis es el argumento de la función que recibe el find


const resultado = getHeroeById(2);
// console.log(resultado);

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesByOwner('DC'))
