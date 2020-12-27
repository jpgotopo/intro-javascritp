// Funciones en JS

// const saludar = function ( nombre ) {
//     return `Hola, ${ nombre }`;
// }
const saludar2 = ( nombre ) =>{
    return `Hola, ${ nombre } cómo estás?`;
}

const saludar3 =  ( nombre ) =>  `Hola, ${ nombre }`;  //Cuando el return ocupa solo una linea
const saludar4 = ()=> 'Hola Mundo'


console.log( saludar2('María') );
console.log( saludar3('Juan') );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'codemax'
//     }
// }

//Debo colocar entre parentesis cuando quiero sustituir el return
const getUser = () =>  
     ({
        uid: 'ABC123',
        username: 'codemax'
    });
const user = getUser()
console.log(user);

// Tarea 
// 1. Transforme a una función flecha
// 2- Tiene que retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo( nombre ){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }
const getUsuarioActivo = ( nombre) =>
    ({
        uid: 'ABC567',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo )