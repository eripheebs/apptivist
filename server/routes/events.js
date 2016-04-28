var express = require('express');
var router = express.Router();
var app = express();
var models  = require('../models');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/new', function(req, res) {
  res.render('events/new');
});

router.get('/:event_id', function(req, res) {
  res.render('events/show');
});

module.exports = router;
