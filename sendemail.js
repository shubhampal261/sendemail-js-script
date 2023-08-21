#!/usr/bin/node

const nodemailer = require('nodemailer');

const creds = {
    user: 'smtp_username',
    pass: 'smtp_pass',
};

const transporter = nodemailer.createTransport({
    host: 'smtp.spsendemaildemo.in',
    port: 587,
    secure: false,
    auth: creds,
    tls: {
        ciphers: 'SSLv3'
    }
});

const mailOptions = {
    from: 'no-reply@spsendemaildemo.email',
    headers: {
        'custom_ref': `abcd_12345_{${(new Date()).toISOString()}}`,
    },
    to: 'spsendemaildemo@spsendemaildemo.in',
    cc: 'spsendemaildemo@spsendemaildemo.in',
    bcc: 'spsendemaildemo@spsendemaildemo.in',
    subject: `Email via SMTP and StartTLS from {${creds.user}} at {${(new Date()).toISOString()}}`,
    html: `<!doctype html>
    <html>
    <head>
    <meta charset='UTF-8'> 
    <title>Deskera email</title>
    </head>
    <body>
    Hi There!!!, How are you?
    <br>
    <br>
    Regards...
    </body>
    </html>`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + JSON.stringify(info));
    }
});
