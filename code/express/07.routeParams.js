/**
 * Al construir una API se debe permitir que el cliente comunique la informacion que desea obtener del servicio. Por ejemplo, si el cliente solicita informacion de un usuario almacenado en la base de datos, es necesario que este informe de alguna manera el usuario que esta buscando.
 * Los parametros de ruta son segmentos con nombre de la URL, delimitados por el caracter /.
 * Cada segmento captura el valor de la parte de la URL que coincide con su posicion.

    route_path: '/user/:userId/book/:bookId'
    actual_request_URL: '/user/123/book/100'

 * Los valores capturados en la ruta pueden encontrarse en el objeto req.params desde la ruta
*/

const express = require('express')
const app = express()

// Los parametros antecedidos por el caracter : pueden tomar cualquier valor en la ruta
// Una peticion realizada a la siguiente ruta localhost:8000/user/1, retornaria el siguiente valor de acuerdo al ejemplo

app.get('/user/:userId', (req, res) => {
    res.json(req.params) // { user: 1 }
})

/**
 * Otra forma de obtener la entrada del cliente, es codificando los datos despues de la ruta
 * La ruta y los parametros que esta recibe estan delimitados por el caracter ?

    localhost:8000?key=value

 * Cada pareja clave-valor esta separada de la siguiente mediante el caracter &

    localhost:8000?name=martin&lastName=wilches

 * Los parametros pasados a la ruta pueden ser accedidos a traves del objeto req.query desde la ruta
*/

app.get('/name', (req, res) => {
    res.json({
        "name": req.query.firstName,
        "lastName": req.query.lastName
    })
})

app.listen(8000)