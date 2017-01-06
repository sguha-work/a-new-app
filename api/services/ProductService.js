var ProductService = require('./scripts/ProductScript.js');
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

ProductService.utilities = new ProductService.methods();


/**
 *  
 * 
 */
module.exports = {
    add: function (productObject) {
        var promise = new Promise((resolve, reject) => {
            ProductService.utilities.addProduct(productObject).then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
        return promise;
    },
    edit: function (productObject) {
        //methods.editProduct(productObject);
    },
    remove: function (productObject) {
        //methods.removeProduct(productObject);
    }
};
