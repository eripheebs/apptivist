var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var server = require('http').createServer(app);

app.set("views", "app/views");
app.set("view engine", "pug");


app.use(express.static(__dirname));


app.get('/', function(request, response){
  response.render('index');
});

app.get('/users', function(request, response){
  response.render('users/new');
});

app.post('/events', function(request, response){
  console.log("POST CALLED WITH", request);
  response.render('index');
});

app.get('/events/new', function(request, response){
  response.render('events/new');
});




server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
