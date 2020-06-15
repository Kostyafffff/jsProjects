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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.access = function () {
        console.log('well done');
    };
    return Person;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Member.prototype.access = function () {
        console.log('Have access');
    };
    return Member;
}(Person));
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGuest = true;
        return _this;
    }
    return Guest;
}(Person));
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Frontend.prototype.createUi = function () {
    };
    return Frontend;
}(Member));
var Backend = /** @class */ (function (_super) {
    __extends(Backend, _super);
    function Backend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Backend.prototype.canCreateConnectToDb = function () {
    };
    return Backend;
}(Member));
var Legioner = /** @class */ (function (_super) {
    __extends(Legioner, _super);
    function Legioner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Legioner.prototype.access = function () {
        throw new Error('Go away');
    };
    return Legioner;
}(Guest));
function openSecretConnection(member) {
    member.access();
}
openSecretConnection(new Frontend());
openSecretConnection(new Backend());
