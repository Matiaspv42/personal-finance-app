const {Pool} = require('pg')

const config = {
    user,
    host,
    password,
    port,
    database
}

const pool = new Pool(config)

module.exports = {}