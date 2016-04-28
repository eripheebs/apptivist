var express = require('express');
var router = express.Router();
var app = express();
var models  = require('../models');

router.get('/events', function(req, res) {
  models.Event.findAll({}).then(function(dump){
    res.json(dump);
  });
});

router.post('/events', function(req, res) {
  models.Event.create({
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    location: req.body.location
  }).then(function(Event) {
    res.json(Event);
  });
});

router.get('/events/:event_id', function(req, res) {
  models.Event.find({
    where: {
      id: req.params.event_id
    }
  }).then(function(Event){
    res.json(Event)
  });
});

router.put('/events/:event_id', function(req, res) {
  console.log("called", req.params, req.body, req.query);
  models.Event
    .find({where: {
      id: req.params.event_id
    }})
    .then(function(Evn){
      Evn.updateAttributes({
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        location: req.body.location
      })
    .then(function(Evn){
      res.send(200);
    });
  });
});

router.delete('/events/:event_id', function(req, res) {
  models.Event.destroy({
    where: {
      id: req.params.event_id
    }
  }).then(function(Event) {
    res.json(Event);
  })

});

module.exports = router;
