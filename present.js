"use strict";
exports.__esModule = true;
exports.Present = void 0;
var Present = /** @class */ (function () {
    function Present(presentName, presentWeight, presentType) {
        this.name = presentName;
        this.weight = presentWeight;
        this.presentType = presentType;
    }
    Present.prototype.getPresentType = function () {
        return this.presentType;
    };
    Present.prototype.getPresentWeight = function () {
        return this.weight;
    };
    return Present;
}());
exports.Present = Present;
