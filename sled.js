"use strict";
exports.__esModule = true;
exports.Sled = void 0;
var Sled = /** @class */ (function () {
    function Sled(sledSanta) {
        this.santa = sledSanta;
        this.bags = [];
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (newSanta) {
        this.santa = newSanta;
    };
    return Sled;
}());
exports.Sled = Sled;
