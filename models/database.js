var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost/apptivist_development');

// var models = [
//   'Event'
// ]
//
// models.forEach(function(model){
//   module.exports[model] = sequelize.import(__dirname + '/' + model);
// });

var Event = sequelize.import(__dirname + '/Event');

Event.sync({force: true});

module.exports.sequelize = sequelize;
