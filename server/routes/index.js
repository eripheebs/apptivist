var express = require('express');
var router = express.Router();
var connectionString = process.env.DATABASE_URL || 'postgres://localhost/apptivist_development';

module.exports = router;
