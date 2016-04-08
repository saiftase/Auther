var passport = require('passport');
var router = require('express').Router();
var User = require('../api/users/user.model');

router.use(passport.initialize());
router.use(passport.session());

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
  new GoogleStrategy({
    clientID: '786117171609-q8ctpk4vk2plmt9alg682e5mas9k5f9g.apps.googleusercontent.com',
    clientSecret: '13wRKL8n4eCM5mJjJyo3lKns',
    callbackURL: '/api/oauth/google/callback'
  },
  // Google will send back the token and profile
  function (token, refreshToken, profile, done) {
    // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
    console.log('---', 'in verification callback', profile, '---');
    passport.serializeUser(profile, done);  
  })
);

passport.serializeUser(function (user, done) {
  User.findOne({
    _id: user
  })
  .then(function(reponse){
    console.log("RESPONSible", reponse);
  })

  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, done);
});

module.exports = router