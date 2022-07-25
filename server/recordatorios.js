const nodemailer = require('nodemailer')
const schedule = require('node-schedule');

require('dotenv').config()


const enviarMail = async (data) => {
    // const {dateFromDatabase} = data
    console.log('esta data estamos usando para enviar mail')
    console.log(data)
    
    const {fecha} = data
    const dateFromDatabaseTransformed = new Date(fecha)
    const job = schedule.scheduleJob(dateFromDatabaseTransformed, function(){
        const {toEmail, descripcion, titulo} = data
        const mailOptions = {
            from: 'chaucherarecordatorios@gmail.com',
            to: `${toEmail}`,
            subject: `${titulo}`,
            text: `${descripcion}`
        }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: 'chaucherarecordatorios@gmail.com',
                pass: process.env.PASSWORD_MAIL,
            }
        })
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error)
            } else {
                console.log('Email send: '+info.response)
            }
        })
    });
    console.log('email creado')
}

module.exports = {
    enviarMail
}