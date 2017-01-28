var express = require('express');

var app = express();
var port = 8020;

app.get('/', function(req,res){
    //req  information coming from the browser
    //res  what we are going to do with it
    res.send('hello world!');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});