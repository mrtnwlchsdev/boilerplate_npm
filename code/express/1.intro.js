/**
 * Node.js y express

    Node.js es un entorno que permite ejecutar codigo de JavaScript fuera del navegador web.
*/

/*
    Servidor de express
    Express es un paquete de npm ampliamente utilizado para la creacion de servidores y para el manejo del enrutamiento en una aplicacion.
*/

const express = require('express') // Requerimiento del paquete express en el archivo actual
const app = express() // Definicion de objeto de express

// El metodo listen() le indica al servidor en que puerto se debe ejecutar
app.listen(8000)

// Peticion HTTP GET realizada mediante el objeto de express
app.get('/',(req,res)=> {
    res.send('<h1>Hello World</h1>')
})

/*
    - app :: Objeto de express
    - get :: Metodo HTTP
    - / :: Ruta en el navegador donde se realizara la peticion HTTP
    - (req,res) => {} :: Funcion ejecutada cuando se accede a la ruta etablecida
        - req :: Objeto de la peticion
        - res :: Objeto de la respuesta
*/