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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var app_header_1 = require("../app-header/app-header");
var item_add_form_1 = require("../item-add-form/item-add-form");
var item_status_filter_1 = require("../item-status-filter/item-status-filter");
var search_panel_1 = require("../search-panel/search-panel");
var todo_list_1 = require("../todo-list/todo-list");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxId = 100;
        _this.createTodoItem = function (label) { return ({
            label: label,
            important: false,
            done: false,
            id: _this.maxId++
        }); };
        _this.state = {
            toDoData: [
                _this.createTodoItem('Setup React project ToDo List'),
                _this.createTodoItem('Rewrite ToDo list with typescript'),
                _this.createTodoItem('Create tests with Jest and Enzyme'),
            ],
            term: '',
            filter: 'active',
        };
        _this.onAddItem = function (text) {
            var newItem = _this.createTodoItem(text);
            _this.setState(function (_a) {
                var toDoData = _a.toDoData;
                return {
                    toDoData: __spreadArrays([newItem], toDoData)
                };
            });
        };
        _this.onToggleImportant = function (id) { return _this.setState(function (_a) {
            var toDoData = _a.toDoData;
            return ({
                toDoData: _this.toggleProperty(toDoData, id, 'important'),
            });
        }); };
        _this.deleteItem = function (id) {
            _this.setState(function (_a) {
                var toDoData = _a.toDoData;
                return { toDoData: toDoData.filter(function (element) { return element.id !== id; }) };
            });
        };
        _this.toggleProperty = function (arr, id, propName) { return arr.map(function (element) {
            var _a;
            if (element.id === id) {
                return __assign(__assign({}, element), (_a = {}, _a[propName] = !element[propName], _a));
            }
            return __assign({}, element);
        }); };
        _this.onToggleDone = function (id) {
            _this.setState(function (_a) {
                var toDoData = _a.toDoData;
                return {
                    toDoData: _this.toggleProperty(toDoData, id, 'done')
                };
            });
        };
        _this.onSearchChange = function (term) { return _this.setState({ term: term }); };
        _this.onFilterChange = function (filter) { return _this.setState({ filter: filter }); };
        return _this;
    }
    App.prototype.filter = function (items, filter) {
        switch (filter) {
            case 'active':
                return items.filter(function (item) { return !item.done; });
            case 'done':
                return items.filter(function (item) { return item.done; });
            case 'all':
            default:
                return items;
        }
    };
    App.prototype.search = function (items, term) {
        return items.filter(function (item) {
            if (term.length === 0) {
                return items;
            }
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };
    App.prototype.render = function () {
        var _a = this.state, toDoData = _a.toDoData, filter = _a.filter, term = _a.term;
        var visibleItems = this.filter(this.search(toDoData, term), filter);
        var doneCount = toDoData.filter(function (element) { return element.done; }).length;
        var toDoCount = toDoData.length - doneCount;
        return (React.createElement("div", null,
            React.createElement(app_header_1.AppHeader, { toDo: toDoCount, done: doneCount }),
            React.createElement(search_panel_1.SearchPanel, { term: term, onSearchChange: this.onSearchChange }),
            React.createElement(item_status_filter_1.ItemStatusFilter, { filter: filter, onFilterChange: this.onFilterChange }),
            React.createElement(item_add_form_1.Component, { onAddItem: this.onAddItem }),
            React.createElement(todo_list_1.ToDoList, { todos: visibleItems, onDeleted: this.deleteItem, onToggleImportant: this.onToggleImportant, onToggleDone: this.onToggleDone })));
    };
    return App;
}(react_1.Component));
exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxBcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsK0JBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCxnRUFBNkQ7QUFDN0QsK0VBQTRFO0FBQzVFLDZEQUEyRDtBQUMzRCxvREFBa0Q7QUFFbEQ7SUFBeUIsdUJBQXFCO0lBQTlDO1FBQUEscUVBNEhDO1FBMUhHLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsb0JBQWMsR0FBRyxVQUFDLEtBQWEsSUFBZ0IsT0FBQSxDQUFDO1lBQzVDLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUU7U0FDbkIsQ0FBQyxFQUw2QyxDQUs3QyxDQUFDO1FBRUgsV0FBSyxHQUFXO1lBQ1osUUFBUSxFQUFFO2dCQUNOLEtBQUksQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxjQUFjLENBQUMsbUNBQW1DLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxjQUFjLENBQUMsbUNBQW1DLENBQUM7YUFDM0Q7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFFRixlQUFTLEdBQUcsVUFBQyxJQUFZO1lBQ3JCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLEVBQVk7b0JBQVYsc0JBQVE7Z0JBQ3JCLE9BQU87b0JBQ0gsUUFBUSxrQkFBRyxPQUFPLEdBQUssUUFBUSxDQUFDO2lCQUNuQyxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRix1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SSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwRixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbEUsSUFBTSxTQUFTLEdBQVcsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFdEQsT0FBTSxDQUNGO1lBQ0ksb0JBQUMsc0JBQVMsSUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUc7WUFDOUMsb0JBQUMsMEJBQVcsSUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUNyQztZQUNGLG9CQUFDLHFDQUFnQixJQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQ3JDO1lBQ0Ysb0JBQUMsMkJBQVcsSUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUN6QyxvQkFBQyxvQkFBUSxJQUNMLEtBQUssRUFBRSxZQUFZLEVBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUMxQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ3pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxHQUNqQyxDQUNBLENBQ1QsQ0FBQTtJQUNMLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQTVIRCxDQUF5QixpQkFBUyxHQTRIakM7QUE1SFksa0JBQUciLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICcuLi9hcHAtaGVhZGVyL2FwcC1oZWFkZXInXHJcbmltcG9ydCB7IEl0ZW1BZGRGb3JtIH0gZnJvbSAnLi4vaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0IHsgSXRlbVN0YXR1c0ZpbHRlciB9IGZyb20gJy4uL2l0ZW0tc3RhdHVzLWZpbHRlci9pdGVtLXN0YXR1cy1maWx0ZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hQYW5lbCB9IGZyb20gJy4uL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gJy4uL3RvZG8tbGlzdC90b2RvLWxpc3QnO1xyXG5pbXBvcnQgeyBJU3RhdGUsIElUb0RvSXRlbSB9IGZyb20gJy4vYXBwLXR5cGVzJztcclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDx7fSwgSVN0YXRlPiB7XHJcblxyXG4gICAgbWF4SWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBjcmVhdGVUb2RvSXRlbSA9IChsYWJlbDogc3RyaW5nKTogSVRvRG9JdGVtID0+ICh7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICBpZDogdGhpcy5tYXhJZCsrXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdGF0ZTogSVN0YXRlID0ge1xyXG4gICAgICAgIHRvRG9EYXRhOiBbXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kb0l0ZW0oJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyksXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kb0l0ZW0oJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcpLFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvZG9JdGVtKCdDcmVhdGUgdGVzdHMgd2l0aCBKZXN0IGFuZCBFbnp5bWUnKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlcm06ICcnLFxyXG4gICAgICAgIGZpbHRlcjogJ2FjdGl2ZScsXHJcbiAgICB9O1xyXG5cclxuICAgIG9uQWRkSXRlbSA9ICh0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5jcmVhdGVUb2RvSXRlbSh0ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyB0b0RvRGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0YTogW25ld0l0ZW0sIC4uLnRvRG9EYXRhXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uVG9nZ2xlSW1wb3J0YW50ID0gKGlkOiBudW1iZXIpOiB2b2lkID0+IHRoaXMuc2V0U3RhdGUoICh7IHRvRG9EYXRhIH0pID0+ICh7XHJcbiAgICAgICAgdG9Eb0RhdGE6IHRoaXMudG9nZ2xlUHJvcGVydHkodG9Eb0RhdGEsIGlkLCAnaW1wb3J0YW50JyksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgZmlsdGVyKGl0ZW1zIDogSVRvRG9JdGVtW10sIGZpbHRlcjogc3RyaW5nKSA6IElUb0RvSXRlbVtdIHtcclxuICAgICAgICBzd2l0Y2ggKGZpbHRlcikge1xyXG4gICAgICAgICAgICBjYXNlICdhY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiAhaXRlbS5kb25lKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2RvbmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiBpdGVtLmRvbmUpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnYWxsJzpcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaChpdGVtczogSVRvRG9JdGVtW10sIHRlcm06IHN0cmluZyk6IElUb0RvSXRlbVtdIHtcclxuICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW06IElUb0RvSXRlbSkgPT4ge1xyXG4gICAgICAgICAgIGlmICh0ZXJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUl0ZW0gPSAoIGlkIDogbnVtYmVyICkgOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCggeyB0b0RvRGF0YSB9ICkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0b0RvRGF0YTogdG9Eb0RhdGEuZmlsdGVyKCggZWxlbWVudDogIElUb0RvSXRlbSApID0+IGVsZW1lbnQuaWQgIT09IGlkKSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0b2dnbGVQcm9wZXJ0eSA9IChcclxuICAgICAgICBhcnI6IElUb0RvSXRlbVtdLFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHJvcE5hbWU6IHN0cmluZyxcclxuICAgICk6IElUb0RvSXRlbVtdID0+IGFyci5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgW3Byb3BOYW1lXTogIWVsZW1lbnRbcHJvcE5hbWVdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgLi4uZWxlbWVudCB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgb25Ub2dnbGVEb25lID0gKGlkOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCh7IHRvRG9EYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRhOiB0aGlzLnRvZ2dsZVByb3BlcnR5KHRvRG9EYXRhLCBpZCwgJ2RvbmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgb25TZWFyY2hDaGFuZ2UgPSAodGVybTogc3RyaW5nKTogdm9pZCA9PiB0aGlzLnNldFN0YXRlKHsgdGVybSB9KTtcclxuXHJcbiAgICBvbkZpbHRlckNoYW5nZSA9IChmaWx0ZXI6IHN0cmluZyk6IHZvaWQgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlciB9KTtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHsgdG9Eb0RhdGEsIGZpbHRlciwgdGVybSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZUl0ZW1zOiBJVG9Eb0l0ZW1bXSA9IHRoaXMuZmlsdGVyKCB0aGlzLnNlYXJjaCh0b0RvRGF0YSwgdGVybSksIGZpbHRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvbmVDb3VudCA9IHRvRG9EYXRhLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuZG9uZSkubGVuZ3RoO1xyXG5cclxuICAgICAgICBjb25zdCB0b0RvQ291bnQ6IG51bWJlciA9IHRvRG9EYXRhLmxlbmd0aCAtIGRvbmVDb3VudDtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFwcEhlYWRlciB0b0RvPXt0b0RvQ291bnR9IGRvbmU9e2RvbmVDb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaFBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVybT17dGVybX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5vblNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbVN0YXR1c0ZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXt0aGlzLm9uRmlsdGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtQWRkRm9ybSBvbkFkZEl0ZW09e3RoaXMub25BZGRJdGVtfS8+XHJcbiAgICAgICAgICAgICAgICA8VG9Eb0xpc3RcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvcz17dmlzaWJsZUl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlZD17dGhpcy5kZWxldGVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50PXt0aGlzLm9uVG9nZ2xlSW1wb3J0YW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlRG9uZT17dGhpcy5vblRvZ2dsZURvbmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=