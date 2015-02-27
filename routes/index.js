
/*
 * GET home page.
 */

/*
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

*/

exports.index =  function(req, res){
      res.render('index', { title: 'Search Movie in SF' })
}

exports.searchmovie = function(){
    return function(req, res){
       var input_string = req.body.movie_name;
       console.log(input_string);
    };  
        
  //s.render('index', { title: 'Search Movie in SF' })
};

