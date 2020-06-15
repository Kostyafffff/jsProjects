//открыты для расширения но закрыты для модификации
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getPrice = function () {
        throw new Error('getPrice method should be implemented');
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(price) {
        var _this = _super.call(this) || this;
        _this.price = price;
        return _this;
    }
    Mercedes.prototype.getPrice = function () {
        return this.price * 10;
    };
    return Mercedes;
}(Car));
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(price) {
        var _this = _super.call(this) || this;
        _this.price = price;
        return _this;
    }
    Ford.prototype.getPrice = function () {
        return this.price * 3;
    };
    return Ford;
}(Car));
var PriceCalculator = /** @class */ (function () {
    function PriceCalculator(cars) {
        if (cars === void 0) { cars = []; }
        this.cars = cars;
    }
    PriceCalculator.prototype.sum = function () {
        return this.cars.reduce(function (acc, car) {
            acc += car.getPrice();
            return acc;
        }, 0);
    };
    return PriceCalculator;
}());
var calcPrice = new PriceCalculator([
    new Mercedes(200),
    new Ford(300),
    new Ford(300),
]);
console.log(calcPrice);
