const express = require('express')
const app = express()

// Servir un archivo a traves del metodo sendFile()
// sendFile() contiene los headers necesarios para indicarle al navegador la forma en que debe manejar el archivo enviado
// sendFile() requiere de una ruta absoluta que especifique la ubicacion del archivo que sera servido
// La variable global __dirname es utilizada para acceder a la ruta actual desde la cual se ejecuta la aplicacion

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.listen(8000)