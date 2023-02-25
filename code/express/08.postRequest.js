/**
 * En la convencion REST, el metodo HTTP POST es utilizado para enviar datos que permitan crear nuevos elementos en la base de datos
 * En este tipo de peticiones, los datos no son mostrados en la URL, ya que estos permanecen ocultos en el cuerpo de la peticion HTTP (carga util)
 * Para analizar los datos provenientes de las peticiones POST, es necesario utilizar la libreria body-parser. Este paquete permite utilizar una serie de middlewares que pueden decodificar datos.
*/
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// El siguiente middleware permite manejar datos codificados por URL
// app.use(bodyParser.urlencoded({extended: false}))

/**
 * extended es una opcion de configuracion que le indica a body-parser que analisis debe ser usado
    - extended=false :: Los valores solo pueden ser strings o arreglos
    - extended=true :: Permite el uso de otras caracteristicas como rich objects y arreglos codificados
*/

// El siguiente middleware permite acceder a los datos enviados en la peticion POST a traves del objeto req en un formato JSON
app.use(bodyParser.json())

app.post('/user', (req, res) => {
    const data = req.body
})

app.listen(8000)

/**
 * Por convencion existe una correspondencia entre el verbo HTTP y la operacion que se va a ejecutar en el servidor

    - POST :: Crear un nuevo recurso
    - GET :: Obtener un recurso existente sin modificarlo
    - PUT :: Actualizar un recurso existente
    - DELETE :: Eliminar un recurso
*/