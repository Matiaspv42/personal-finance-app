const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.listen(3000, ()=>{
    console.log('Servidor ON')
})

app.get('/usuarios', async(req,res)=>{
    try {
        // obtener usuarios
    } catch (error) {
        res.status(error.code).send(error)
    }
})

app.post('/usuarios', async (req,res)=>{
    try {
        // agregar usuarios
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
        // hacer login
    } catch (error) {
        res.status(error.code).send(error)
    }
})