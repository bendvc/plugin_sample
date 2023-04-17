const BasketMgr = require("dw/order/BasketMgr")

exports.modifyGETResponse = function (searchResponse) {
    if (searchResponse && searchResponse.count > 0) {
        const basket = BasketMgr.getCurrentBasket();
        if (basket) {
            var hits = searchResponse.hits.toArray();
            var productIdsInBasket = basket.getAllProductLineItems().toArray().map(({product}) => product.masterProduct.ID)
            hits.forEach(function (hit) {
                hit.c_test = productIdsInBasket
                hit.c_inBasket = productIdsInBasket.includes(hit.productId);
            });
        }
    }
};