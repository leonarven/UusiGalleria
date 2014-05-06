var express = require('express')
  , cons = require('consolidate')
  , passport = require('passport')
  , cfg = require('./config.js')
  , mysql = require('mysql')
  , app = express()
  , LocalStrategy = require('passport-local').Strategy;

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension 
app.set('view engine', 'html');
app.set('views', __dirname + '/static');

app.configure(
  function() {
    app.use(express.session({ secret: cfg.sessionSecret }));
    app.use(passport.initialize());
    app.use(passport.session());
  }
);

// mysql connection
var connection = mysql.createConnection({
  host     : cfg.host,
  user     : cfg.user,
  database : cfg.database,
  password : cfg.passwd
});

connection.connect();

app.get('/', function(req, res){
  res.render('index', {
    title: 'Alaston #uusikanava'
  });
});
app.get('/users', function(req, res){
  res.render('users');
});
app.get('/images', function(req, res){
  res.render('images', {
    title: 'Kuvvee'
  });
});
app.get('/login', function(req, res){
  res.render('login', {
    title: 'kirjaudu'
  });
});
app.get('/logout', function(req, res){
  res.render('logout', {
    title: 'Kirjaudu ulos'
  });
});
app.get('/addimg', function(req, res){
  res.render('addimg', {
    title: 'Lisää kuva'
  });
});
app.get('/register', function(req, res){
  res.render('register', {
    title: 'Rekisteröidy'
  });
});

app.listen(cfg.port);
console.log('Express server listening on port ' + cfg.port);

