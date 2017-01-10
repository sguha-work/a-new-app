var PriceService = require('./scripts/PriceScript.js');
ProductService.utilities = new ProductService.methods();
module.exports = {
    getPriceTypeIdFromTitle: function (priceTypeId) {
        var promise = new Promise((resolve, reject) => {
            ProductService.utilities.getPriceTypeIdFromTitle(priceTypeId).then((priceTypeId) => {
                resolve(priceTypeId);
            }, (error) => {
                reject(error);
            });
        });
        return promise;
    }
}
