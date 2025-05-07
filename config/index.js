const sequelize = require('./database')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
    express.json(),
    cors()
)

// Rota - Teste
app.get('/teste', (req, res) => {
    res.json({ message: "Hello world!"});
})

// Rota - Authenticate
const authRoutes = require('../src/routes/authRoutes')
app.use(authRoutes)

const port = process.env.PORT;

sequelize.authenticate()
    .then(() => { 
        console.log("Banco conectado com Sequelize."); 
        app.listen(port, () => { 
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((err) => {
        console.error("Erro ao conectar com o banco:", err);
    });