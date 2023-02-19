const express = require('express')
const app = express()

/**
 * Una API se encarga de servir datos
 * REST (REpresentational State Transfer) API, permite el intercambio de datos de una forma simple
    - El cliente unicamente necesita saber la URL en la que se localiza el recurso al que desea acceder y la accion a realizar (verbo HTTP)
*/

app.get('/json', (req,res) => {
    /**
     * El formato estandar para intercambiar datos en la web es JSON (JavaScript Object Notation)
     * JSON es la forma de representar un objeto de JavaScript como un string
     * El metodo json() recibe como parametro un objeto JavaScript, el cual es convertido en un string, ademas de definir los encabezados de la peticion necesarios para que el navegador reconozca que el tipo de dato que se esta sirviendo es JSON.
    */
    json({"message": "hello json"})
})

app.listen(8000)