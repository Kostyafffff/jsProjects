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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiw0Q0FBeUM7QUFDekMsNERBQXlEO0FBQ3pELGdEQUE4QztBQUM5QyxrREFBK0M7QUFDL0MsMENBQXdDO0FBRXBDO0lBQXlCLHVCQUFlO0lBQXhDOztJQWFKLENBQUM7SUFYRyxvQkFBTSxHQUFOO1FBQ0ksT0FBTSxDQUNGO1lBQ0ksOEJBQUMsc0JBQVMsT0FBRztZQUNiLDhCQUFDLDBCQUFXLE9BQUc7WUFDZiw4QkFBQyxxQ0FBZ0IsT0FBRztZQUNwQiw4QkFBQywyQkFBVyxPQUFHO1lBQ2YsOEJBQUMsb0JBQVEsT0FBRyxDQUNWLENBQ1QsQ0FBQTtJQUNMLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQWJHLENBQXlCLGVBQUssQ0FBQyxTQUFTLEdBYTNDO0FBYmdCLGtCQUFHIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXGFwcFxcY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICcuLi9hcHAtaGVhZGVyJ1xyXG5pbXBvcnQgeyBJdGVtU3RhdHVzRmlsdGVyIH0gZnJvbSAnLi4vaXRlbS1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICcuLi9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBJdGVtQWRkRm9ybSB9IGZyb20gJy4uL2l0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4uL3RvZG8tbGlzdCc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QXBwSGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoUGFuZWwgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtU3RhdHVzRmlsdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbUFkZEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDxUb2RvTGlzdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=