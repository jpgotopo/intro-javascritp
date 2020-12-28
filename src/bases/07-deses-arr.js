

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ]= personajes;

console.log(p3);

const retronaArreglo =  () => {
    return ['ABC', 123];
}

const [letras, numeros ] = retronaArreglo();
console.log(letras, numeros);

//Tarea

const usaState = (valor)=> {
    return [valor, () => console.log('Hola Mundo')];

}

const [nombre, setNombre] = usaState('Goku');
console.log(nombre);
setNombre();
