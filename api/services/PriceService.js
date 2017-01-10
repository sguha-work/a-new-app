var PriceService = require('./scripts/PriceScript.js');
PriceService.utilities = new PriceService.methods();
module.exports = {
    getPriceTypeIdFromTitle: function (priceTypeId) {
        var promise = new Promise((resolve, reject) => {
            PriceService.utilities.getPriceTypeIdFromTitle(priceTypeId).then((priceTypeId) => {
                resolve(priceTypeId);
            }, (error) => {
                reject(error);
            });
        });
        return promise;
    }
}
