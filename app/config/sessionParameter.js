var express_session = require('express-session');
var app = require('../../app');

exports.session = session;

var session = express_session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
})


