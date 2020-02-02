"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var app_header_1 = require("../app-header");
var item_status_filter_1 = require("../item-status-filter");
var search_panel_1 = require("../search-panel");
var item_add_form_1 = require("../item-add-form");
var todo_list_1 = require("../todo-list");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(app_header_1.AppHeader, null),
            react_1.default.createElement(search_panel_1.SearchPanel, null),
            react_1.default.createElement(item_status_filter_1.ItemStatusFilter, null),
            react_1.default.createElement(item_add_form_1.ItemAddForm, null),
            react_1.default.createElement(todo_list_1.TodoList, null)));
    };
    return App;
}(react_1.default.Component));
exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxpbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLDRDQUF5QztBQUN6Qyw0REFBeUQ7QUFDekQsZ0RBQThDO0FBQzlDLGtEQUErQztBQUMvQywwQ0FBd0M7QUFFeEM7SUFBeUIsdUJBQWU7SUFBeEM7O0lBYUEsQ0FBQztJQVhHLG9CQUFNLEdBQU47UUFDSSxPQUFNLENBQ0Y7WUFDSSw4QkFBQyxzQkFBUyxPQUFHO1lBQ2IsOEJBQUMsMEJBQVcsT0FBRztZQUNmLDhCQUFDLHFDQUFnQixPQUFHO1lBQ3BCLDhCQUFDLDJCQUFXLE9BQUc7WUFDZiw4QkFBQyxvQkFBUSxPQUFHLENBQ1YsQ0FDVCxDQUFBO0lBQ0wsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBeUIsZUFBSyxDQUFDLFNBQVMsR0FhdkM7QUFiWSxrQkFBRyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxhcHBcXGluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICcuLi9hcHAtaGVhZGVyJ1xyXG5pbXBvcnQgeyBJdGVtU3RhdHVzRmlsdGVyIH0gZnJvbSAnLi4vaXRlbS1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICcuLi9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBJdGVtQWRkRm9ybSB9IGZyb20gJy4uL2l0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4uL3RvZG8tbGlzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBcHBIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hQYW5lbCAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1TdGF0dXNGaWx0ZXIgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtQWRkRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvZG9MaXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJ2ZXJzaW9uIjozfQ==