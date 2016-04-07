'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));
router.use('/stories', require('./stories/story.router'));
router.use('/login', require('./login.router'));
router.use('/signup', require('./signup.router'));

module.exports = router;