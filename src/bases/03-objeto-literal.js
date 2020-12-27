const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 45683224,
        lat: 14.345621,
        lng: 34.587942
    }
}
const persona2 = { ...persona}
persona2.nombre = 'Peter'
console.log(persona);
console.log(persona2);