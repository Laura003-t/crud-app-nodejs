var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'laurabrusco2@gmail.com',
        pass: '******'
    }
});

module.exports = transport;
