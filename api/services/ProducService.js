var ProductService,
    methods;

ProductService = {};

ProductService.methods = (function() {});

/*
    Database to be used for product functionality
    
    3> db_product
    	1> product_id
    	2> product_name
    	3> product_description
    	4> product_images (array of image ids)
    	5> product_created_by_user_id
    	6> product_created_on



    4> db_product_category
    	1> _id
    1> db_product_id
    	2>db_category_id
*/

ProductService.methods.prototype.addProduct = (function(productObject) {
    var createdOn = Date.now();
    productObject.product_created_on = createdOn;
    
});

ProductService.methods.prototype.editProduct = (function(productObject) {
    
});

ProductService.methods.prototype.removeProduct = (function(productId) {
    
});

methods = new ProductService.methods();


/**
 *  
 * 
*/
ProductService.service = {
    add: function(data) {
        var productObject;
        productObject = data.product;
        methods.addProduct(productObject);
    },
    edit: function(data) {
        var productObject;
        productObject = data.product;
        methods.editProduct(productObject);
    },
    remove: function(data) {
        var productObject;
        productObject = data.product;
        methods.removeProduct(productObject);
    }
};

module.exports = ProductService;