/**
 * Los middleware son funciones que reciben 3 parametros
    - Objeto de la peticion
    - Objeto de la respuesta
    - Siguiente funcion a ejecutar en el ciclo peticion-respuesta (next())
 * EL codigo del middleware usualmente añade algun tipo de informacion adicional a los objetos del ciclo de peticion-respuesta
 * Los middleware pueden finalizar el ciclo, enviando una respuesta cuando se cumple una condicion. Si no se envia la respuesta cuando ha finalizado su ejecucion, se inicia con la ejecucion de la siguiente funcion, invocando al tercer argumento del middleware, la funcion next()
*/

