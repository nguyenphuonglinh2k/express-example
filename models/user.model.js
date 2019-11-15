var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: String,
	pasword: String,
	name: String,
	avatar: String,
	phone: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;