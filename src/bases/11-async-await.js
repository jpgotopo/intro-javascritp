// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://ajjajsjsjasa.com')
//     })

//     return promesa;
// }

//Otra forma
// const getImagenPromesa = () =>  new Promise(resolve => resolve('https://ajjajsjsjasa.com'))
// getImagenPromesa().then( console.log );

// Ahora con Async

const getImagen = async()=> {

    try {
        const apiKey = 'YiBg7GYAuEyhz7YKrSU5faDDC4gC3FXD';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    } catch (error) {
        //manejo del error
        console.error(error);
    }

    
    // console.log(data);
}



getImagen()
