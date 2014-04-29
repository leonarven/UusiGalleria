var express     = require('express'),
    swig        = require('swig'),
    consolidate = require('consolidate'),

    app         = express();



app.use(function(err, req, res, next){
	console.error(err.stack);
	res.send(500, 'Something broke!');
});

app.use('/static', express.static(__dirname + '/static'));

app.get('/index', function(req, res){
	res.send('Index');
});


var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});