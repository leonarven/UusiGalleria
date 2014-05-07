var express = require('express')
  , cons = require('consolidate')
  , cfg = require('./config.js')
  , mysql = require('mysql')
  , app = express();

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension 
app.set('view engine', 'html');
app.set('views', __dirname + '/static');
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/fonts', express.static(__dirname + '/static/fonts'));
app.use('/js', express.static(__dirname + '/static/js'));

// mysql connection
var connection = mysql.createConnection({
  host     : cfg.mysql.host,
  user     : cfg.mysql.user,
  database : cfg.mysql.database,
  password : cfg.mysql.passwd
});

connection.connect();


renderPage = function(req, res, page, variables) {
  if (typeof variables == "undefined")
    variables = {};

  if (typeof req.query.logged != "undefined")
    variables.loggedIn = true;

  res.render(page, variables);
}

app.get('/', function(req, res){
  renderPage(req, res, 'index');
});
app.get('/users', function(req, res){
  renderPage(req, res, 'users');
});
app.get('/images', function(req, res){
  renderPage(req, res, 'images');
});
app.get('/login', function(req, res){
  renderPage(req, res, 'login');
});
app.get('/logout', function(req, res){
  renderPage(req, res, 'logout');
});
app.get('/addimg', function(req, res){
  renderPage(req, res, 'addimg');
});
app.get('/register', function(req, res){
  renderPage(req, res, 'register');
});

app.listen(cfg.port);
console.log('Express server listening on port ' + cfg.port);

