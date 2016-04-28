var express = require('express');
var router = express.Router();
var models  = require('../models');

var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var session = require('express-session');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/auth', passport.authenticate('github'));

router.get('/auth/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    models.User
      .find({
        where: {githubID: req.user.id}
      })
      .then(function(Usr) {
        if(Usr === null) {
          models.User
            .create({
              githubID: req.user.id,
              username: req.user.username
            })
            .then(res.redirect('/'));
        } else {
          res.redirect('/');
        }

      });
  }
);

router.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

module.exports = router;
