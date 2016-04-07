var router = require('express').Router();
var passport = require('passport');

// Google authentication and login 
router.get('/google', passport.authenticate('google', { scope : 'email' }));

// handle the callback after Google has authenticated the user
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect : '/stories', // or wherever
    failureRedirect : '/login' // Redirect back to login
  })
);

module.exports = router;