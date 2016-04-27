var express = require('express');
var router = express.Router();
// var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost/apptivist_development';

router.get('/', function(req, res) {
  var results = [];

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }

    var query = client.query("SELECT * FROM events ORDER BY id ASC");

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

router.post('/', function(req, res) {

    var results = [];
    var data = {title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      location: req.body.location
    };

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

router.put('/:event_id', function(req, res) {

    var results = [];

    var id = req.params.event_id;

    var data = {title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      location: req.body.location
    };

    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }

        client.query("UPDATE events SET title=($1), description=($2), time=($3), location=($4) WHERE id=($5)", [data.title, data.description, data.time, data.location, id]);

        var query = client.query("SELECT * FROM events ORDER BY id ASC");

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });
    });

});

router.delete('/:event_id', function(req, res) {

    var results = [];

    var id = req.params.event_id;


    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        client.query("DELETE FROM events WHERE id=($1)", [id]);

        var query = client.query("SELECT * FROM events ORDER BY id ASC");

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });
    });

});

module.exports = router;
