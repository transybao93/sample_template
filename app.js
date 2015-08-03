	
	var express = require('express'),
	app = express();
	app.set('views', './views'),
	app.set('view engine', 'jade'),
	app.use(express.static(__dirname + '/public')),
	
	app.get('/', function (req, res) {
	  res.render('index', { title: 'Welcome to my website', name: 'My name is Bao'});
	});
	app.listen(4000);
	console.log('Testing Nodejs template');
	