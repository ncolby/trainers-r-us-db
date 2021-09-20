const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'ncolby',
    password: 'password',
    port: '5434',
    database: ''
})


module.exports = pool