/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     *
     * access URL: http://my-work-sguha-work.c9users.io:8080/product/add
     */
    add: function (request, response) {
        if (RequestService.restrictIfNotPostMethod(request)) {
            return response.forbidden();
        }
        ProductService.add(request.body).then(function (data) {
            response.send(data);
        }, function (error) {
            response.send(error);
        });
        return false;
    }
};
