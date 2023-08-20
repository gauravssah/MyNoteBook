const connectToMongo = require("./db")

connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Gaurav!')
})

app.get('/api/login', (req, res) => {
    res.send('Hello Gaurav Login Now!')
})

app.get('/api/Singin', (req, res) => {
    res.send('Hello Gaurav Singin Now!')
})

app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`)
})