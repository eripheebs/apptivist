var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res) {
  console.log('loading index, passing i:',req.user);
  res.render('index');
});

module.exports = router;
