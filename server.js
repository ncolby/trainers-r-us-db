const express = require('express')

const app = express()
const PORT = 5005


app.use(express.json())


app.get('/', (req, res) => {
    res.send({message: 'Whaat up dooeeee'})
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

