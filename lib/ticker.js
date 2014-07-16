'use strict';

var MaicoinTicker = function () {

};

MaicoinTicker.factory = function factory() {
    return new MaicoinTicker();
};

MaicoinTicker.prototype.ticker = function ticker(currencies, callback) {
    // Dummy callback for the moment
    callback(null, {
        TWD: {currency: 'TWD', rate: 20000}
    });
};

module.exports = MaicoinTicker;
