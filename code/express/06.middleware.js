/**
 * Los middleware son funciones que reciben 3 parametros
  - Objeto de la peticion
  - Objeto de la respuesta
  - Siguiente funcion a ejecutar en el ciclo peticion-respuesta (next())
 * EL codigo del middleware usualmente añade algun tipo de informacion adicional a los objetos del ciclo de peticion-respuesta
 * Los middleware pueden finalizar el ciclo, enviando una respuesta cuando se cumple una condicion. Si no se envia la respuesta cuando ha finalizado su ejecucion, se inicia con la ejecucion de la siguiente funcion, invocando al tercer argumento del middleware, la funcion next()
*/

const express = require('express')
const app = express()

/**
 * El metodo use() es utilizado para montar un middleware en la raiz de la aplicacion
 * La funcion del middleware app.use() se ejecutara para todas las peticiones realizadas en la aplicacion
*/

app.use((req,res,next) => {
   console.log(req.method) // GET
   next()
})

// Un middleware puede ser montado en una ruta especifica usando la notacion app.METHOD(path, MIDDLEWARE)

app.get('/', (req,res) => {
   res.send('Hello World')
})

// Los middleware pueden ser encadenados dentro de la definicion de una ruta

app.get('/user', (req,res,next) => {
  req.user = getUser() // Hipotetica operacion asincrona
   next()
}, (req,res) => {
   res.json(req.user)
})

/**
 * El encadenamiento resulta util para dividir las operaciones del servidor en unidades mas pequeñas
 * Permite realizar validaciones de los datos, bloqueando la ejecucion del middleware actual en caso de errores, otorgandole el control a la siguiente funcion diseñada especificamente para el manejo de errores.
*/

app.listen(8000)