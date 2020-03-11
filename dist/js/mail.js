const express = require("express");
const nodemailer = require("nodemailer");
const env = require("dotenv").config();
const app = express();
const to = "jb.leonizio@gmail.com";
const text = "teste de envio vis THIS e THAT alaaje";

const user = process.env.EMAIL_USER;
const pass = process.env.PASSWORD_USER;

//app.get("/", (req, res) => res.send("Hello World"));

//app.get("/send", (req, res) => {
function sendMail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: { user, pass }
  });

  transporter.sendMail({
    from: user,
    to: to,
    subject: "Email enviado dia 11/03 as 13:55 ",
    text: text
  });
}
//});

exports.sendMail = sendMail;

//app.listen(port, () => console.log(`example listening on port ${port}`));
console.log(user, pass);
