var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get("/canary", indexController.canary);

app.get("/cape", indexController.cape);
app.get("/strait", indexController.strait);
app.get("/guam", indexController.guam);
app.get("/philippines", indexController.philippines);

var server = app.listen(8884, function() {
	console.log('Express server listening on port ' + server.address().port);
});
