"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./styles/styles.css");
require("./styles/less.less");
require("./babel");
const App_1 = require("./components/App/App");
react_dom_1.default.render(react_1.default.createElement(App_1.App, null), document.getElementById('root'));
