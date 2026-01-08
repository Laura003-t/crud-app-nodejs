var express = require('express');
var router = express.Router();
var db=require('../myOrganizer');
var email = require('../email');

router.get('/landingpage', function(req, res, next) {
    res.render('myOLandingPage');
});
router.post('/signingup', function(req, res, next) {
    const userDetails=req.body;
    var sql = 'INSERT INTO users (username, email, userpassword) VALUES(\'' + userDetails.newUser + '\', \'' + userDetails.email + '\', \'' + userDetails.newPassword + '\')';
    db.query(sql, function (err, data) {
        if (err) throw err;
        console.log("User data is inserted successfully");
    });
    res.redirect('/myorganizer/landingpage/lobby');
});
router.get('/landingpage/lobby', function(req, res, next) {
    res.render('myOLobby');
});
router.post('/gotohome', function(req, res, next) {
    res.redirect('/myorganizer/home');
});
router.get('/home', function(req, res, next) {
    res.render('myOHome');
});
router.get('/signup', function(req, res, next) {
    res.render('myOSignUp');
});
router.post('/login', function(req, res, next) {
    const username = req.body.user0;
    const passwrd = req.body.passwrd;
    var sql = "SELECT * FROM users WHERE username = \'" + username + "\' AND userpassword = \'" + passwrd + "\'";
    db.query(sql, function(err, result) {
        if (err) throw err;
        if (result != '') res.redirect('/myorganizer/home');
    })
});
router.post('/login/resetpass', function(req, res, next) {
    const emaill = req.body.emailR;
    const userr = req.body.userR;
    var sql = "SELECT * FROM users WHERE email = \'" + emaill + "\' AND username = \'" + userr + "\'";
    db.query(sql, function(err, result) {
        if (err) res.status(401).json({
            message: 'An error occured on our end, please try again later. Thank you.'
        });
        if (result != '') {
            var mailOptions = {
                from: 'laurabrusco2@gmail.com',
                to: emaill,
                subject: 'PASSWORD RESET',
                text: 'Hello ' + userr + ', did you request for a password reset for your myOrganizer account? If you did not please send an email to stop suspicious actions on your account. If this request was initiated by you, please be patient, we will get back to you soon'
            };

            email.sendEmail(mailOptions, function(error, info){
                if (error) res.status(401).json({
                    message: 'An error occured with our mail service, please try again later. Thank you.'
                }) 
                else res.status(201).json({
                    message: 'Email sent!'
                });
            });
        } else res.status(500).json({
            message: 'This user doesn\'t exist'
        });
    });
});
router.get('/FAQ', function(req, res, next) {
    res.render('myOFAQ');
});
router.get('/contactus', function(req, res, next) {
    res.render('myOContact');
});

module.exports = router;