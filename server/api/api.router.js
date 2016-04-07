'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));
router.use('/stories', require('./stories/story.router'));
router.use('/login', require('./authorization/login.router'));
router.use('/signup', require('./authorization/signup.router'));
router.use('/logout', require('./authorization/logout.router'));
router.use('/me', require('./authorization/me.router'));

module.exports = router;