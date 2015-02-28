
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = express();
// global variable
var obj;
var input_box_selected=false;
var text_so_far="";

var sys = require("sys");
var http = require("http");
var https = require("https");


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/movie_search', routes.searchmovie());

app.listen(8080, function(){
  console.log("Express server listening on port 8080 in %s mode", app.settings.env);
});
