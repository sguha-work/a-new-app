/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//var productService = require('../services/ProductService');
module.exports = {
	add: function(request, response) {
	    return response.send({data:"hello"});
	}
};

