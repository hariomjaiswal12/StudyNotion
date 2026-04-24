const nodemailer = require("nodemailer");
//require("dotenv").config()
const dotenv = require('dotenv');
dotenv.config();

// OTP ko mail me send kar sake isliye hmne mailsender create kiya.
const mailSender = async (email, title, body) => {
    try {
        // TRANSPORTER
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from: 'StudyNotion || Hariom Jaiswal - by OM Dwivedi',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = mailSender;

 