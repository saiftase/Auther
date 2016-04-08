'use strict'; 

var app = require('express')();
var path = require('path');
var session = require('express-session');
var chalk = require('chalk');

// app.use(require('body-parser').json);
app.use(require('body-parser').urlencoded({extended: false}));

//General Middleware
app.use(require('./logging.middleware'));
app.use(require('./requestState.middleware'));
app.use(require('./statics.middleware'));

//Passport
app.use(require('./passport.middleware'))

//Secrets + API
app.use(session({ secret: 'tongiscool' }));
app.use('/api', require('../api/api.router'));

// Log Session Variable
app.use(function (req, res, next) {
    console.log('session', req.session);
    next();
});

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;