const nodemailer = require("nodemailer");
//require("dotenv").config()
const dotenv = require('dotenv');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dotenv.config();

// OTP ko mail me send kar sake isliye hmne mailsender create kiya.
const mailSender = async (email, title, body) => {
    try {
        // TRANSPORTER
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            connectionTimeout: 10000, // 10 seconds connection timeout
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
        throw error;
    }
}
module.exports = mailSender;

 