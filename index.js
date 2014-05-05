var express = require('express')
  , cons = require('consolidate')
  , cfg = require('./config.js')
  , app = express();

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension 
app.set('view engine', 'html');
app.set('views', __dirname + '/static');

app.get('/', function(req, res){
  res.render('index', {
    title: 'Alaston #uusikanava'
  });
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

try {
  app.listen(cfg.port);
  console.log('Express server listening on port ' + cfg.port);

} catch(e) {
  console.log("Exception", e);
}

