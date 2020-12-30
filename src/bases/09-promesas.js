import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // console.log('2 segundos después');
//         const p1 = getHeroeById(2);
        
//         // resolve( p1 );
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe')
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Heroe ', heroe);
// } )
// .catch( err => console.warn( err ));

const getHeroeByIdAsync =  ( id ) => {
   const promesa = new Promise((resolve, reject)=> {
        setTimeout(() => {
            // console.log('2 segundos después');
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1)
            }else{
                reject('No se pudo encontrar el Héroe')
            }
            // resolve( p1 );
            resolve(p1);
            // reject('No se pudo encontrar el heroe')
        }, 2000);
    });
    return promesa;
}


getHeroeByIdAsync(3)
    // .then( heroe => console.log('Heroe', heroe) )
    // .catch ( err => console.warn(err));
    .then( console.log )
    .catch( console.warn );