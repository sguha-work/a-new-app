var ProductService,
    methods;


ProductService.methods = (function() {});

ProductService.methods.prototype.addProduct = (function(productObject, userObject) {
    
});

ProductService.methods.prototype.editProduct = (function(productObject, userObject) {
    
});

ProductService.methods.prototype.removeProduct = (function(productId, userObject) {
    
});

methods = new ProductService.methods();


/**
 *  
 * 
*/
ProductService.service = {
    add: function(data) {
        var productObject,
            userObject;
        productObject = data.product;
        userObject = data.user;
        methods.addProduct(productObject, userObject);
    },
    edit: function(data) {
        var productObject,
            userObject;
        productObject = data.product;
        userObject = data.user;
        methods.editProduct(productObject, userObject);
    },
    remove: function(data) {
        var productObject,
            userObject;
        productObject = data.product;
        userObject = data.user;
        methods.removeProduct(productObject, userObject);
    }
};

module.exports = ProductService