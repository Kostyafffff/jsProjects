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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxpbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLDRDQUF5QztBQUN6Qyw0REFBeUQ7QUFDekQsZ0RBQThDO0FBQzlDLGtEQUErQztBQUMvQywwQ0FBd0M7QUFFcEM7SUFBeUIsdUJBQWU7SUFBeEM7O0lBYUosQ0FBQztJQVhHLG9CQUFNLEdBQU47UUFDSSxPQUFNLENBQ0Y7WUFDSSw4QkFBQyxzQkFBUyxPQUFHO1lBQ2IsOEJBQUMsMEJBQVcsT0FBRztZQUNmLDhCQUFDLHFDQUFnQixPQUFHO1lBQ3BCLDhCQUFDLDJCQUFXLE9BQUc7WUFDZiw4QkFBQyxvQkFBUSxPQUFHLENBQ1YsQ0FDVCxDQUFBO0lBQ0wsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBYkcsQ0FBeUIsZUFBSyxDQUFDLFNBQVMsR0FhM0M7QUFiZ0Isa0JBQUciLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnLi4vYXBwLWhlYWRlcidcclxuaW1wb3J0IHsgSXRlbVN0YXR1c0ZpbHRlciB9IGZyb20gJy4uL2l0ZW0tc3RhdHVzLWZpbHRlcic7XHJcbmltcG9ydCB7IFNlYXJjaFBhbmVsIH0gZnJvbSAnLi4vc2VhcmNoLXBhbmVsJztcclxuaW1wb3J0IHsgSXRlbUFkZEZvcm0gfSBmcm9tICcuLi9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICcuLi90b2RvLWxpc3QnO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFwcEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaFBhbmVsIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbVN0YXR1c0ZpbHRlciAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1BZGRGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9kb0xpc3QgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInZlcnNpb24iOjN9