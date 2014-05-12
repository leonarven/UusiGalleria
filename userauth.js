var crypto = require('crypto')
  , shasum = crypto.createHash('sha1')
  , cfg = {}
  , sql = {};

exports.initUserAuth = function(connection, config) {
	sql = connection;
	cfg = config;
}

exports.passhash = function(password) {
	com = cfg.userauth1 + password + cfg.userauth2;
	shasum.update(com);
	return shasum.digest('hex');
}

exports.login = function(username, passhash) {

}