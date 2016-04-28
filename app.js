var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./server/routes/index');
var users = require('./server/routes/users');
var events = require('./server/routes/events');
var api = require('./server/routes/api');

var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var session = require('express-session');

var app = express();

app.set('views', 'client/views');
app.set('view engine', 'pug');
app.set('models', 'server/models');

app.use(session({secret: "pineapple is a weird name for ananas"}));
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('client'));

app.use('/', index);
app.use('/users', users);
app.use('/events', events);
app.use('/api', api);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

passport.use(new GithubStrategy({
    clientID: "e2ffec479fa621ef20b4",
    clientSecret: process.env.GIT_SECRET,
    callbackURL: "http://localhost:3000/users/auth/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  var token = user.id;
  done(null, token);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = app;
