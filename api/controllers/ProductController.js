/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//var productService = require('../services/ProductService');
module.exports = {
    
    /**
     *
     * access URL: http://my-work-sguha-work.c9users.io:8080/product/add
     */
	add: function(request, response) {
	    return response.send({data:"hello"});
	}
};

