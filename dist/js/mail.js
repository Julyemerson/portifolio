const express = require('express');
const nodemailer = require('nodemailer')
const env = require('dotenv').config();
const app = express();
const port = 3000;

const user = process.env.USER_EMAIL;
const pass = process.env.USER_PASSWORD;


app.get('/', (req, res) => res.send('Hello World'))

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: { user, pass }
    });

    transporter.sendMail({
        from: user,
        to: 'thalyta.apuhena@gmail.com',
        replyTo: "stefanini.julyemerson@grupofleury.com.br",
        subject: "Teste de envio de email via sistema ",
        text: "Recebemos sua mensagem e em breve entraremos em contato"
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })

})

app.listen(port, () => console.log(`example listening on port ${port}`))