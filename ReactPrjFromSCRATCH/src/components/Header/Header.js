"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Tabs_1 = require("../App/common-tab/Tabs");
const types_1 = require("../App/common-tab/types");
class Header extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "header-wrapper" },
            react_1.default.createElement(Tabs_1.Tab, { tabs: types_1.Tabs.CURRENCIES }),
            react_1.default.createElement(Tabs_1.Tab, { tabs: types_1.Tabs.HISTORY }),
            react_1.default.createElement(Tabs_1.Tab, { tabs: types_1.Tabs.LATEST })));
    }
}
exports.Header = Header;
