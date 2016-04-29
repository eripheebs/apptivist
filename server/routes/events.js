var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res) {
  res.render('index', {currentUser: req.user});
});

module.exports = router;
