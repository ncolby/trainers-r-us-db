const express = require('express')
const db = require('./db/pool_config.js')


const app = express()
const PORT = process.env.PORT || 5005


app.use(express.json())


app.get('/api/trainers', async (req, res) => {
    try {
        const {rows} = await db.query('SELECT * FROM TRAINERS')
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

