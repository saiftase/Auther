'use strict'; 

var app = require('express')();
var path = require('path');
var session = require('express-session');
var chalk = require('chalk');

app.use(require('body-parser').urlencoded({extended: false}))

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use(session({ secret: 'tongiscool' }));

app.use('/api', require('../api/api.router'));



//Session Visit Counter
// app.use(function (req, res, next) {
//   if (!req.session.counter) req.session.counter = 0;
//   console.log(chalk.white('counter', ++req.session.counter));
//   next();
// });

// Log Session Variable
// app.use(function (req, res, next) {
//     console.log('session', req.session);
//     next();
// });

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;