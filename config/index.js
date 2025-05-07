const express = require('express')
const cors = require('cors')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
    express.json(),
    cors()
)

app.get('/teste', (req, res) => {
    res.json({ message: "Hello world!"});
})

require('./database')
app.listen(8000)