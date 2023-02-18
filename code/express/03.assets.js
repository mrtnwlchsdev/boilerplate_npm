const express = require('express')
const app = express()

// El middleware static() permite servir archivos estaticos (hojas de estilo, imagenes, etc.)
// static() recibe como parametro la ruta absoluta donde se localizan los archivos estaticos de la aplicacion

/**
 * Los middleware son funciones que interceptan las el manejo de las rutas, añadiendo algun tipo de informacion adicional
 * Los middleware son montados mediante el metodo use(). Este metodo recibe 2 parametros:
    - Ruta en la cual se ejecutara la funcion del middleware (Si no se especifica, esta funcion sera ejecutada para todas las rutas de la aplicacion)
    - Funcion del middleware
*/

app.use(express.static(__dirname))

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.listen(8000)