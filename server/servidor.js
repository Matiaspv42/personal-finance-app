const express = require('express')
const app = express()


const jwt = require('jsonwebtoken')
const secretKey = 'secreto'
const tiempoDeExpiracionToken = 1000

const bcrypt = require('bcrypt')

const cors = require('cors')
app.use(cors())

app.use(express.json())

const {loginUser, registerUser, findUser} = require('./consultas')
const { restart } = require('nodemon')

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
        console.log(email, password)
        const isUser = await findUser({email})
        if(isUser){
            const salt = await bcrypt.genSalt()
            const hashed = await bcrypt.hash(password, salt)
            const user = {email, password: hashed}
            console.log(user)
            await registerUser(user)
            res.send('registrado')
        }
        return res.status(403).send('Usuario ya existe')
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
        const user = await findUser(userLoginData)
        if(!user){
            console.log('usuario o contraseña invalida')
            res.send('usuario o contraseña invalida')
        }else{
            const match = await bcrypt.compare(userLoginData.password, user[0].password)
            if(match){
                const id = user[0].id
                const token = jwt.sign({id}, secretKey, {
                expiresIn: tiempoDeExpiracionToken,
                })
                res.status(200).send({auth:true, token})
            }else{
                res.status(403).send('usuario y/o contraseña invalida')
            }
        }
        
    } catch (error) {
        console.log(error)
        res.status(error.code).send(error)
    }
})