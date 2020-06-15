//Не используют методы базового класса, то недолжны зависеть
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
var Sportsman = /** @class */ (function () {
    function Sportsman(name) {
        this.name = name;
    }
    return Sportsman;
}());
var swimmer = {
    swimmingVeryFast: function () {
        console.log(this.name + " could swim 100m in 20 seconds");
    }
};
var runner = {
    runningVeryFast: function () {
        console.log(this.name + " could run 2km like leopard");
    }
};
var boxer = {
    boxing: function () {
        console.log(this.name + " could punch in dace with fist");
    }
};
var wrestler = {
    throw: function () {
        console.log(this.name + " could trow via hip");
    }
};
var Tyson = /** @class */ (function (_super) {
    __extends(Tyson, _super);
    function Tyson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tyson;
}(Sportsman));
// @ts-ignore
Object.assign(Tyson.prototype, boxer, wrestler);
var man = new Tyson('Mike');
man.boxing();
man.throw();
