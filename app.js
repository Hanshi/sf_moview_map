
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
function getJSON (options, onResult)
{
    console.log("rest::getJSON");
    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            output += chunk;
        });
        res.on('end', function() {
            obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });
    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });
    req.end();
};
var options = {
    host: 'data.sfgov.org',
    port: 443,
    path: '/resource/yitu-d5am.json',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
function callback(statusCode, result)
{
   // I could work with the result html/json here.  I could also just return it
   // console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
   for(var i =0; i< result.length; i++)
   {
       console.log(result[i]);
   }
}


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
//
getJSON(options, callback);

app.listen(8080, function(){
  console.log("Express server listening on port 8080 in %s mode", app.settings.env);
});
