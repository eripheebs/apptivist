var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var server = require('http').createServer(app);

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.static("bower_components/angular"));
app.use(express.static("bower_components/angular-resource"));

app.get('/', function(request, response){
  response.render('index');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
