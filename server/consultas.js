const {Pool} = require('pg')

const config = {
    user,
    host,
    password,
    port,
    database
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
        if(rows.length > 0) rows;
        return {error: "Usuario ya existe"}
    } catch (error) {
        
    }
}

const registerUser = async (user) =>{
    const {email, password} = user 
    try {
        const query = {
            text: "INSERT into usuarios(email, password) values ($1, $2)", 
            values: [email, password]
        }
    } catch (error) {
        
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