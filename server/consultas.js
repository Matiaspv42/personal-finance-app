const {Pool} = require('pg')

require('dotenv').config()

const config = {
    user: 'postgres',
    host:'localhost',
    password:'postgres',
    port:5432,
    database:'chauchera',
}
// const config = {
//     user: process.env.USER ,
//     host: process.env.HOST,
//     password: process.env.PASSWORD,
//     port: process.env.PORT_DATABASE,
//     database: process.env.DATABASE,
//     // esto es para heroku
//     ssl: {
//         rejectUnauthorized:false
//     }
// }



const pool = new Pool(config)

const findUserbyId = async (user) =>{
    const {email} = user 
    try {
        const query = {
            text: "SELECT * from usuarios where id = $1",
            values: [email]
        }
        const {rows} = await pool.query(query)
        console.log(rows)
        if(rows.length > 0) return rows;
        return false
    } catch (error) {
        
    }
}

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

const depositarDinero = async (transferencia) =>{
    const {categoria, dinero, id_usuario} = transferencia

    const registrarTransferencia = {
        text: "INSERT INTO transsacciones(fecha, cantidad_dinero, categoria_destino, id_usuario) values (NOW(), $1, $2, $3)",
        values: [dinero, categoria, id_usuario]
    }
    const actualizarBalance = {
        text: `UPDATE usuarios set balance_${categoria} = balance_${categoria} + $1 where id = $2`,
        values: [dinero, id_usuario]
    }
    try {
        await pool.query('BEGIN');
        await pool.query(registrarTransferencia);
        await pool.query(actualizarBalance);
        await pool.query('COMMIT');
        return true
    } catch (error) {
        await pool.query('ROLLBACK');
        console.log(error);
        throw error
    }
}

const transferenciaDinero = async (transferencia) =>{
    console.log(transferencia)
    const {emisor, receptor, dinero, id} = transferencia
    const agregarTransferencia ={
        text: "INSERT INTO transsacciones (categoria_emisora, categoria_destino, cantidad_dinero, id_usuario, fecha) values ($1, $2, $3, $4 ,NOW())",
        values: [emisor, receptor, dinero, id]
    };
    const actualizarDatosEmisor = {
        text: `UPDATE usuarios set balance_${emisor} = balance_${emisor} - $1 where id = $2`,
        values: [dinero, id]
    };
    const actualizarDatosReceptor = {
        text: `UPDATE usuarios set balance_${receptor} = balance_${receptor} + $1 where id = $2`,
        values: [dinero, id]
    };
    try {
        await pool.query('BEGIN');
        await pool.query(agregarTransferencia);
        await pool.query(actualizarDatosEmisor);
        await pool.query(actualizarDatosReceptor);
        await pool.query('COMMIT');
        return true
    } catch (error) {
        await pool.query('ROLLBACK');
        console.log(error);
        throw error
    }
}

const getTransferencias = async (id) =>{
    const query = {
        text: "select * from transsacciones where id_usuario = $1",
        values:[id]
    }
    try {
        const {rows} = await pool.query(query);
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}

const registerRecordatorio = async (recordatorio) =>{
    const {fecha, descripcion, id_usuario, titulo} = recordatorio
    console.log(fecha, descripcion, id_usuario, titulo)
    const registrarRecordatorio = {
        text: "INSERT INTO recordatorios(fecha, descripcion, id_usuario, titulo) values ($1, $2, $3, $4)",
        values: [fecha, descripcion, id_usuario, titulo]
    }
    try {
        await pool.query(registrarRecordatorio);
        return true
    } catch (error) {
        console.log(error);
        throw error
    }
}

const getRecordatorios = async (id) =>{
    const query = {
        text: "select * from recordatorios where id_usuario = $1",
        values: [id]
    }
    try {
        const {rows} = await pool.query(query);
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}

const getRecordatoriosLimitados = async (id, limit) =>{
    const query = {
        text: "select * from recordatorios where id_usuario = $1 and fecha > NOW() order by fecha asc limit $2 ",
        values: [id,limit]
    }
    try {
        const {rows} = await pool.query(query);
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}


const gastoDinero = async (dataGasto) =>{
    const {titulo, chauchera_gastada, id_usuario, dinero} = dataGasto
    console.log(titulo, chauchera_gastada, id_usuario,dinero)
    const agregarGasto ={
        text: "INSERT INTO gastos (fecha, titulo, chauchera_gastada, id_usuario, dinero) values (NOW(), $1, $2, $3, $4)",
        values: [titulo, chauchera_gastada, id_usuario, dinero]
    };
    const actualizarUsuario = {
        text: `UPDATE usuarios set balance_${chauchera_gastada} = balance_${chauchera_gastada} - $1 where id = $2`,
        values: [dinero, id_usuario]
    };
    try {
        await pool.query('BEGIN');
        await pool.query(agregarGasto);
        await pool.query(actualizarUsuario);
        await pool.query('COMMIT');
        return true
    } catch (error) {
        await pool.query('ROLLBACK');
        console.log(error);
        throw error
    }
}

const getGastosLimitados = async (id, limit) =>{
    const query = {
        text: "select * from gastos where id_usuario = $1 order by fecha asc limit $2 ",
        values: [id,limit]
    }
    try {
        const {rows} = await pool.query(query);
        console.log(rows)
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}


module.exports = {
    findUserbyId,
    registerUser,
    loginUser,
    findUser,
    depositarDinero,
    transferenciaDinero,
    getTransferencias,
    registerRecordatorio,
    getRecordatorios,
    getRecordatoriosLimitados,
    gastoDinero,
    getGastosLimitados
}