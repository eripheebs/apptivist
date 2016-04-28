var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res) {
  console.log('MAKING AN EVENT PAGELOAD REQUEST WITH:',req.user);
  res.render('index');
});

module.exports = router;
