"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./app-header.css");
exports.AppHeader = function (_a) {
    var toDo = _a.toDo, done = _a.done;
    return (React.createElement("div", { className: "app-header d-flex" },
        React.createElement("h1", null, "My ToDo List"),
        React.createElement("h2", null,
            toDo,
            " more to do, ",
            done)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcYXBwLWhlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQStCO0FBRS9CLDRCQUF5QjtBQUVaLFFBQUEsU0FBUyxHQUFxQixVQUFDLEVBQWM7UUFBWixjQUFJLEVBQUUsY0FBSTtJQUNwRCxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLG1CQUFtQjtRQUM5QiwrQ0FBcUI7UUFDckI7WUFBSyxJQUFJOztZQUFlLElBQUksQ0FBTSxDQUNoQyxDQUNULENBQUE7QUFDTCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcYXBwLWhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICcuL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5pbXBvcnQgJy4vYXBwLWhlYWRlci5jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9EbywgZG9uZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1oZWFkZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxoMT5NeSBUb0RvIExpc3Q8L2gxPlxyXG4gICAgICAgICAgICA8aDI+e3RvRG99IG1vcmUgdG8gZG8sIHtkb25lfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07Il0sInZlcnNpb24iOjN9