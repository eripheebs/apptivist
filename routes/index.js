var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost/apptivist_development';

router.get('/', function(req, res, next) {
  res.render('index', { title: 'apptivistApp' });
});

module.exports = router;

router.post('/events', function(req, res) {

    var results = [];
    console.log(req);
    var data = {title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      location: req.body.location
    };
    console.log(data);

    pg.connect(connectionString, function(err, client, done) {

        client.query("INSERT INTO events(title, description, time, location) values($1, $2, $3, $4)",
        [data.title, data.description, data.time, data.location]);

        var query = client.query("SELECT * FROM events ORDER BY id ASC");

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        if(err) {
          console.log(err);
        }

    });
});
