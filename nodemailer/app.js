const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: "artembeluj@meta.ua",
        pass: META_PASSWORD,
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const mail = {
    to: "artembeluj@gmail.com",
    from: "artembeluj@meta.ua",
    subject: "title",
    html: "<p>text</p>"
}

transport.sendMail(mail)
.then(()=> console.log("success"))
.catch(error => console.log(error.message))