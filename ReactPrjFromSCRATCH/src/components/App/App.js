"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = require("../Header/Header");
class App extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            id: '1111',
            name: 'Kostya'
        };
    }
    render() {
        return (react_1.default.createElement(Header_1.Header, null));
    }
}
exports.App = App;
