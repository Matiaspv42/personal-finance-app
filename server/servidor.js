const express = require('express')
const app = express()


const jwt = require('jsonwebtoken')
const secretKey = 'secreto'
const tiempoDeExpiracionToken = 1000

const bcrypt = require('bcrypt')

const cors = require('cors')
app.use(cors())

const {loginUser, registerUser, findUser} = require('./consultas')

const port = 3001

app.listen(port, ()=>{
    console.log('Servidor andando en puerto '+port)
})

app.get('/usuarios', async(req,res)=>{
    try {
        // obtener usuarios
    } catch (error) {
        res.status(error.code).send(error)
    }
})

// registrar usuarios
app.post('/usuarios', async (req,res)=>{
    try {
        const {email, password} = req.body
        const isUser = await findUser({email})
        if(isUser) return res.status(403).send('Usuario ya existe')
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(password, salt)
        const user = {email, password: hashed}
        await registerUser(user)
        res.send('registrado')
    } catch (error) {
        res.status(error.code).send(error)
    }
})

app.put('/usuarios', async (req,res)=>{
    try {
        // editar usuarios
    } catch (error) {
        res.status(error.code).send(error)
    }
})

app.post('/login', async (req,res)=>{
    try {
        const userLoginData = req.body;
        const res = await loginUser(userLoginData)
        if(respuesta?.error) res.send(respuesta.error)
        else{
            const id = respuesta[0].id
            const token = jwt.sign({id}, secretKey, {
                expiresIn: tiempoDeExpiracionToken,
            })
            res.json({auth:true, token, respuesta})
        }
        
    } catch (error) {
        res.status(error.code).send(error)
    }
})