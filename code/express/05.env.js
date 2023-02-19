const dotenv = require('dotenv').config({path:'../../.env'})
const express = require('express')
const app = express()

app.get('/json', (req,res) => {
    dotenv.parsed.MESSAGE_STYLE === 'uppercase' ? res.json({"message":"HELLO JSON"}) : res.json({"message":"hello json"})
})

app.listen(3000)