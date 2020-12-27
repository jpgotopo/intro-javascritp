const nombre = 'Jean'
const apellido = 'Gotopo'

const nombreCompleto = ` ${nombre} ${apellido}`;

console.log( nombreCompleto );

function getSaludo (){
    return 'Hola Mundo'
}
console.log(`Ese es un texto ${ getSaludo()}`)