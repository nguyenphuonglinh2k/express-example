var Product = require('../models/product.model');

module.exports.showProduct = async function(req, res) {
	// var page = parseInt(req.query.page) || 1;
	// var perPage = 8;

	// var start = (page - 1) * perPage;
	// var end = page * perPage;

	// res.render('products/index', {
	// 	products: db.get('products').value().slice(start, end),
	// 	// products: db.get('products').drop(start).take(perPage).value()
	// 	session: db.get('sessions').find( {id: req.signedCookies.sessionId} ).value()
	// });
	var products = await Product.find();
	res.render('products/index', {
		products: products
	});
	
};