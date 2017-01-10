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
    prepareProductObject = ((productObject) => {
        var promise,
            task1, // first task is to get user id from user email provided by user
            task2,
            finalProductObject;

        finalProductObject = {};
        finalProductObject.product_name = productObject.productName;
        finalProductObject.product_description = productObject.productDescription;
        finalProductObject.created_on = Date.now();
        finalProductObject.product_unit_price = productObject.productUnitPrice;

        task1 = UserService.getUserIdFromUserEmail(productObject.createdByUserEmail).then((userId) => {
            finalProductObject.product_created_by_user_id = userId;
        });
        task2 =


            promise = new Promise((resolve, reject) => {
                Promise.all([task1]).then(() => {
                    resolve(finalProductObject);
                }, (error) => {
                    console.log(error);
                });
            });
        return promise;
    });


    insertProductInDatabase = ((data) => {
        var promise = new Promise((resolve, reject) => {
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
     *       productUnitPrice: 0, {Number}
     *       productPriceTypeId:0,{id of price type}
     *       discountIds: [], // Array of discount ids
     *       createdByUserEmail: "",
     *   
     *   }
     * 
     */
    this.addProduct = ((productObject) => {
        var promise = new Promise((resolve, reject) => {
            prepareProductObject(productObject).then((data) => {
                insertProductInDatabase(data).then((data) => {
                    resolve(data);
                }, (error) => {
                    reject(error);
                });
            }, (error) => {
                reject(error);
            });

        });

        return promise;
    });

    this.editProduct = ((productObject) => {

    });

    this.removeProduct = ((productId) => {

    });
});

module.exports = ProductService;
