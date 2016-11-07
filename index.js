var express = require('express');
var app = express();


function sumreq(query) {
	var a = parseInt(query.a, 10);
	var b = parseInt(query.b, 10);
	if (a && b) {
		return a + b;
	} else if(a) {
		return a;
	} else if(b) {
		return b;
	} else return 0;
}

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
	});

app.get('', function (req,res) {
	console.log(req.query);
	var sumres = sumreq(req.query).toString();
	console.log(sumres);
	res.send(sumres);
});

app.listen(8080);
