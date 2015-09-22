var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('index<hr/>');
});

app.get('/version', function(req, res) {
	res.type('text/plain');
	res.send('version');
});

var server = app.listen(3000, function(){
	console.log('Listening on port %d', server.address().port);
});
