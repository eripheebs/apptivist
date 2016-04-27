var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost/apptivist_development';

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'apptivistApp' });
// });



module.exports = router;
