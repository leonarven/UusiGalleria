var express = require('express')
  , cons = require('consolidate')
  , cfg = require('./config.js')
  , mysql = require('mysql')
  , app = express();

configVersion = "0.1";

if (cfg.configVersion !== configVersion) {
  console.log("Ivalid Config Version.");
  console.log("For newest config.js see https://github.com/leonarven/UusiGalleria/blob/master/config-example.js");
  process.exit(1);
} 

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension 
app.set('view engine', 'html');
app.set('views', __dirname + '/static');
app.set('view cache', false);

app.use('/', express.static(__dirname + '/static'));


// mysql connection
/*var connection = mysql.createConnection({
  host     : cfg.mysql.host,
  user     : cfg.mysql.user,
  database : cfg.mysql.database,
  password : cfg.mysql.passwd
});

connection.connect();*/


renderPage = function(req, res, page, variables) {
  if (typeof variables == "undefined")
    variables = {};

  if (typeof req.query.logged != "undefined")
    variables.loggedIn = true;

  res.render(page, variables);
};

app.get('/', function(req, res){
  renderPage(req, res, 'etusivu');
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

