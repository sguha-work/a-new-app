var ProductService;

ProductService = {};

ProductService.methods = (function () {
    var prepareProductObject,
        insertProductInDatabase;

    //private methods
    prepareProductObject = (function (productObject) {
        var promise,
            promise1,
            promise2,
            finalProductObject;

        finalProductObject = {};
        finalProductObject.product_name = productObject.productName;
        finalProductObject.product_description = productObject.productDescription;
        finalProductObject.created_on = Date.now();

        promise1 = UserService.getUserIdFromUserEmail(productObject.createdByUserEmail).then(function (userId) {
            finalProductObject.product_created_by_user_id = userId;
        });



        promise = new Promise(function (resolve, reject) {
            Promise.all([promise1]).then(function () {
                resolve(finalProductObject);
            }, function (error) {
                console.log(error);
            });
        });
        return promise;
    });


    insertProductInDatabase = (function (data) {
        var promise = new Promise(function (resolve, reject) {
            resolve(data);
        });
        return promise;
    });

    // public methods

    /**
     * {
     *       productName: “***”, // {String} should not be empty,
     *       productDescription: “***”, // {String} should not be empty
     *       productImages: [], // {Array of image ids}
     *       categoryId:0, // {Number} should not be empty
     *       status: "", // private public
     *       sharedWithUser: [], // array of user email
     *       quantity: 0, // {Number},
     *       discountIds: [], // Array of discount ids
     *       createdByUserEmail: "",
     *   
     *   }
     * 
     */
    this.addProduct = (function (productObject) {
        var promise = new Promise(function (resolve, reject) {
            prepareProductObject(productObject).then(function (data) {
                insertProductInDatabase(data).then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            }, function (error) {
                reject(error);
            });

        });

        return promise;
    });

    this.editProduct = (function (productObject) {

    });

    this.removeProduct = (function (productId) {

    });
});

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
        var promise = new Promise(function (resolve, reject) {
            ProductService.utilities.addProduct(productObject).then(function (data) {
                resolve(data);
            }, function (error) {
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
