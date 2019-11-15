var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
	if(!req.signedCookies.userId) {//MD5
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({ id: req.signedCookies.userId }).value();

	if(!user) {
		res.redirect('/auth/login');
		return;
	}

	next();
}