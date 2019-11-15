var db = require('../db');



module.exports.addToCart = function(req, res, next) {
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;
	var numbers = 0;

	if(!sessionId) {
		res.redirect('/products');
		return;
	}

	var count = db.get('sessions')
		.find({ id: sessionId})
		.get('cart.' + productId, 0);

	var sessions = db.get('sessions')
			.find({ id: sessionId})
			.set('cart.' + productId, count + 1)
			.write();

	
	var sessionNow = db.get('sessions')
		.find( {id: req.signedCookies.sessionId} )
		.value();

	for(var key in sessionNow.cart) {
		numbers += sessionNow.cart[key];
	}

	db.get('sessions')
			.find({ id: sessionId})
			.set('number', numbers)
			.write();


	res.redirect('/products');
};