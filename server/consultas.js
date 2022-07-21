const {Pool} = require('pg')

const config = {
    user: 'postgres',
    host:'localhost',
    password:'postgres',
    port:5432,
    database:'chauchera',
}

const pool = new Pool(config)

const findUser = async (user) =>{
    const {email} = user 
    try {
        const query = {
            text: "SELECT * from usuarios where email = $1",
            values: [email]
        }
        const {rows} = await pool.query(query)
        console.log(rows)
        if(rows.length > 0) return rows;
        return false
    } catch (error) {
        
    }
}

const registerUser = async (user) =>{
    const {email, password} = user 
    console.log('este es el mail y la pw recibida en la query ' + email, password)
    try {
        const query = {
            text: "INSERT into usuarios(email, password) values ($1, $2)", 
            values: [email, password]
        }
        const result = await pool.query(query)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (user) =>{
    const {email, password} = user
    try {
        const query = {
            text: "SELECT * from usuarios where email = $1 and password = $2",
            values: [email, password]
        }
        const {rows} = await pool.query(query)
        if(rows.length > 0) rows;
        return {error: "Email o password equivocada"}
    } catch (error) {
        
    }
}

module.exports = {
    registerUser,
    loginUser,
    findUser
}