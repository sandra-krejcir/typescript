"use strict";
exports.__esModule = true;
exports.Bag = void 0;
var Bag = /** @class */ (function () {
    function Bag(bagMaxWeight, bagType) {
        this.maxWeight = bagMaxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresents = function (present) {
        this.presents.push(present);
    };
    return Bag;
}());
exports.Bag = Bag;
