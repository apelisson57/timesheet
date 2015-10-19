var express = require('express');
var jade = require('jade');
var app = express();

app.get('/', function (req, res) {
	//res.send('timesheet');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Running on port " + port);
});
