const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "artembeluj28@gmail.com",
    from: "artembeluj@gmail.com",
    subject: "Верифікація",
    html: "<a href='/go/here'>натисніть сюди<a>"
}

sgMail.send(mail)
.then(() => console.log("все добре"))
.catch(error => console.log(error.message))

