var express = require('express');
var controller = require('../controllers/product.controller');

var router = express.Router();

router.get('/', controller.showProduct);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;