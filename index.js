var express = require('express')
//  , bodyParser = require('body-parser')
  , cons = require('consolidate')
  , cfg = require('./config.js')
  , mysql = require('mysql')
  , app = express();

configVersion = "0.2";

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
//app.use(bodyParser());

// mysql connection
var connection = mysql.createConnection(cfg.mysql);

connection.connect();


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

/* TODO: get postiksi kunhan korjauskeino löytyy */
app.get('/action/register', function(req, res){
  console.log("POSTin /action/register");
  console.log(req.query);
});
app.get('/action/login', function(req, res){
  console.log("POSTin /action/login");
  console.log(req.query);
});

app.listen(cfg.port);
console.log('Express server listening on port ' + cfg.port);

