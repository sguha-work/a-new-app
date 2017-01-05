var ProductService;

ProductService = {};

ProductService.methods = (function () {
    var prepareProductObject,
        insertProductInDatabase;

    //private methods

    /**
     * @description: This function take the raw product object from user input 
     * and prepare the final object which will be reflected to database
     */
    prepareProductObject = (function (productObject) {
        var promise,
            task1, // first task is to get user id from user email provided by user
            task2,
            finalProductObject;

        finalProductObject = {};
        finalProductObject.product_name = productObject.productName;
        finalProductObject.product_description = productObject.productDescription;
        finalProductObject.created_on = Date.now();

        task1 = UserService.getUserIdFromUserEmail(productObject.createdByUserEmail).then(function (userId) {
            finalProductObject.product_created_by_user_id = userId;
        });


        promise = new Promise(function (resolve, reject) {
            Promise.all([task1]).then(function () {
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
     * This function expects to have this type of data
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

module.exports = ProductService;
