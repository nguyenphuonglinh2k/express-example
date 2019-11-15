var Product = require('../../models/product.model');

module.exports.showProduct = async function(req, res) {
	var products = await Product.find();
	res.json(products);
};

module.exports.create = async function(req, res) {
	var product = await Product.create(req.body);
	res.json(product);
};

module.exports.delete =async function(req, res) {
	var id = req.params.id;
	var oneDelete = await Product.deleteOne({_id: id});
	res.json(oneDelete);
}