const express = require('express')
const cors = require('cors')

const db= require('./database/db')
const routes = require('./routes/routes')

const app = express()


// CONEXÃO COM O BANCO DE DADOS
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

// HABILITA CORS
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // MOBILE APP
        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

// HABILITA SERVER PARA RECEBER DADOS VIA JSON
app.use(express.json())

// DEFININDO AS ROTAS
app.use('/api', routes)

// EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
