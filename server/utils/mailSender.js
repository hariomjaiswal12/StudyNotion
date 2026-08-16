const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const dns = require('dns');
const https = require("https");
dns.setDefaultResultOrder('ipv4first');
dotenv.config();

const sendBrevoEmail = (email, title, body) => {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            sender: {
                name: "StudyNotion",
                email: process.env.MAIL_USER || "omjaiswal942@gmail.com"
            },
            to: [{ email: email }],
            subject: title,
            htmlContent: body
        });

        const options = {
            hostname: "api.brevo.com",
            path: "/v3/smtp/email",
            method: "POST",
            headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json",
                "Content-Length": data.length,
                "accept": "application/json"
            }
        };

        const req = https.request(options, (res) => {
            let resData = "";
            res.on("data", chunk => resData += chunk);
            res.on("end", () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(JSON.parse(resData));
                } else {
                    reject(new Error(`Brevo failed with status ${res.statusCode}: ${resData}`));
                }
            });
        });

        req.on("error", err => reject(err));
        req.write(data);
        req.end();
    });
};

const sendResendEmail = (email, title, body) => {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            from: "StudyNotion <onboarding@resend.dev>",
            to: [email],
            subject: title,
            html: body
        });

        const options = {
            hostname: "api.resend.com",
            path: "/emails",
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
                "Content-Length": data.length
            }
        };

        const req = https.request(options, (res) => {
            let resData = "";
            res.on("data", chunk => resData += chunk);
            res.on("end", () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(JSON.parse(resData));
                } else {
                    reject(new Error(`Resend failed with status ${res.statusCode}: ${resData}`));
                }
            });
        });

        req.on("error", err => reject(err));
        req.write(data);
        req.end();
    });
};

// OTP ko mail me send kar sake isliye hmne mailsender create kiya.
const mailSender = async (email, title, body) => {
    try {
        if (process.env.BREVO_API_KEY) {
            console.log("Sending email via Brevo API...");
            return await sendBrevoEmail(email, title, body);
        }

        if (process.env.RESEND_API_KEY) {
            console.log("Sending email via Resend API...");
            return await sendResendEmail(email, title, body);
        }

        console.log("Sending email via Nodemailer SMTP...");
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

 