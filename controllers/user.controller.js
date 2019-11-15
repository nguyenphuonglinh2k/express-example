var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(request, response) {

	response.render('users/index', {
		users: db.get('users').value()
	});
};

module.exports.search = function(req, res) {
	var q = req.query.q;
	var matchedUsers = db.get('users').value().filter(function(user) {
		return user.name.indexOf(q) !== -1;
	});

	res.render('users/index', {
		users: matchedUsers
	});

	input.value = q;
};

module.exports.create = function(req, res) {
	res.render('users/create');
};

module.exports.get = function(req, res) {
	var id = req.params.id;

	var user = db.get('users').find({id: id}).value();

	res.render('users/view', {
		user: user
	});
};

module.exports.postCreate = function(req, res) {
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.slice(7);

	db.get('users').push(req.body).write();
	res.redirect('/users');
};
