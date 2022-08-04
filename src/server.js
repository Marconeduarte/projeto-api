const express = require('express')
// const path = require('path')

const db= require('./database/db')
const routes = require('./routes/routes')

const app = express()


// CONEXÃO COM O BANCO DE DADOS
db.connect()


// HABILITA SERVER PARA RECEBER DADOS VIA POST (FORMULARIO)
app.use(express.urlencoded({ extended: true }))

// DEFININDO AS ROTAS
app.use('/api', routes)

// EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
