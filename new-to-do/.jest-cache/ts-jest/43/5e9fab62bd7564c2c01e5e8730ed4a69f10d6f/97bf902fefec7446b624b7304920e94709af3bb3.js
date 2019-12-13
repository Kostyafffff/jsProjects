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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxBcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsK0JBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCxnRUFBNkQ7QUFDN0QsK0VBQTRFO0FBQzVFLDZEQUEyRDtBQUMzRCxvREFBa0Q7QUFFbEQ7SUFBeUIsdUJBQXFCO0lBQTlDO1FBQUEscUVBMkhDO1FBekhHLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsb0JBQWMsR0FBRyxVQUFDLEtBQWEsSUFBZ0IsT0FBQSxDQUFDO1lBQzVDLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUU7U0FDbkIsQ0FBQyxFQUw2QyxDQUs3QyxDQUFDO1FBRUgsV0FBSyxHQUFXO1lBQ1osUUFBUSxFQUFFO2dCQUNOLEtBQUksQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxjQUFjLENBQUMsbUNBQW1DLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxjQUFjLENBQUMsbUNBQW1DLENBQUM7YUFDM0Q7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFFRixlQUFTLEdBQUcsVUFBQyxJQUFZO1lBQ3JCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLEVBQVk7b0JBQVYsc0JBQVE7Z0JBQ3JCLE9BQU87b0JBQ0gsUUFBUSxrQkFBRyxPQUFPLEdBQUssUUFBUSxDQUFDO2lCQUNuQyxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRix1QkFBaUIsR0FBRyxVQUFDLEVBQVUsSUFBVyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUUsVUFBQyxFQUFZO2dCQUFWLHNCQUFRO1lBQU8sT0FBQSxDQUFDO2dCQUN4RSxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQzthQUMzRCxDQUFDO1FBRnlFLENBRXpFLENBQUMsRUFGdUMsQ0FFdkMsQ0FBQztRQTJCSixnQkFBVSxHQUFHLFVBQUUsRUFBVztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQUUsRUFBWTtvQkFBVixzQkFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUUsT0FBbUIsSUFBTSxPQUFBLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFqQixDQUFpQixDQUFDLEVBQUUsQ0FBQztZQUN2RixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLG9CQUFjLEdBQUcsVUFDYixHQUFnQixFQUNoQixFQUFVLEVBQ1YsUUFBZ0IsSUFDRixPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPOztZQUM3QixJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuQiw2QkFDTyxPQUFPLGdCQUNULFFBQVEsSUFBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FDaEM7YUFDTDtZQUVELG9CQUFZLE9BQU8sRUFBRztRQUMxQixDQUFDLENBQUMsRUFUZ0IsQ0FTaEIsQ0FBQztRQUVILGtCQUFZLEdBQUcsVUFBQyxFQUFVO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBQyxFQUFZO29CQUFWLHNCQUFRO2dCQUNyQixPQUFPO29CQUNILFFBQVEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDO2lCQUN0RCxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUM7UUFFRixvQkFBYyxHQUFHLFVBQUMsSUFBWSxJQUFXLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztRQUVqRSxvQkFBYyxHQUFHLFVBQUMsTUFBYyxJQUFXLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsRUFBekIsQ0FBeUIsQ0FBQzs7SUFnQ3pFLENBQUM7SUF4Rkcsb0JBQU0sR0FBTixVQUFPLEtBQW1CLEVBQUUsTUFBYztRQUN0QyxRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssUUFBUTtnQkFDVCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFlLElBQUssT0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7WUFFekQsS0FBSyxNQUFNO2dCQUNQLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWUsSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUyxDQUFDLENBQUM7WUFFeEQsS0FBSyxLQUFLLENBQUM7WUFDWDtnQkFDSSxPQUFPLEtBQUssQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFRCxvQkFBTSxHQUFOLFVBQU8sS0FBa0IsRUFBRSxJQUFZO1FBQ3BDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWU7WUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FDSCxDQUFBO0lBQ0osQ0FBQztJQW1DRCxvQkFBTSxHQUFOO1FBQ1UsSUFBQSxlQUF1QyxFQUFyQyxzQkFBUSxFQUFFLGtCQUFNLEVBQUUsY0FBbUIsQ0FBQztRQUU5QyxJQUFNLFlBQVksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwRixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbEUsSUFBTSxTQUFTLEdBQVcsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFdEQsT0FBTSxDQUNGO1lBQ0ksb0JBQUMsc0JBQVMsSUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUc7WUFDOUMsb0JBQUMsMEJBQVcsSUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUNyQztZQUNGLG9CQUFDLHFDQUFnQixJQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQ3JDO1lBQ0Ysb0JBQUMsMkJBQVcsSUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUN6QyxvQkFBQyxvQkFBUSxJQUNMLEtBQUssRUFBRSxZQUFZLEVBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUMxQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ3pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxHQUNqQyxDQUNBLENBQ1QsQ0FBQTtJQUNMLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQTNIRCxDQUF5QixpQkFBUyxHQTJIakM7QUEzSFksa0JBQUciLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICcuLi9hcHAtaGVhZGVyL2FwcC1oZWFkZXInXHJcbmltcG9ydCB7IEl0ZW1BZGRGb3JtIH0gZnJvbSAnLi4vaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0IHsgSXRlbVN0YXR1c0ZpbHRlciB9IGZyb20gJy4uL2l0ZW0tc3RhdHVzLWZpbHRlci9pdGVtLXN0YXR1cy1maWx0ZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hQYW5lbCB9IGZyb20gJy4uL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gJy4uL3RvZG8tbGlzdC90b2RvLWxpc3QnO1xyXG5pbXBvcnQgeyBJU3RhdGUsIElUb0RvSXRlbSB9IGZyb20gJy4vYXBwLXR5cGVzJztcclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDx7fSwgSVN0YXRlPiB7XHJcblxyXG4gICAgbWF4SWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBjcmVhdGVUb2RvSXRlbSA9IChsYWJlbDogc3RyaW5nKTogSVRvRG9JdGVtID0+ICh7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICBpZDogdGhpcy5tYXhJZCsrXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdGF0ZTogSVN0YXRlID0ge1xyXG4gICAgICAgIHRvRG9EYXRhOiBbXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kb0l0ZW0oJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyksXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kb0l0ZW0oJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcpLFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvZG9JdGVtKCdDcmVhdGUgdGVzdHMgd2l0aCBKZXN0IGFuZCBFbnp5bWUnKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlcm06ICcnLFxyXG4gICAgICAgIGZpbHRlcjogJ2FjdGl2ZScsXHJcbiAgICB9O1xyXG5cclxuICAgIG9uQWRkSXRlbSA9ICh0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5jcmVhdGVUb2RvSXRlbSh0ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyB0b0RvRGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0YTogW25ld0l0ZW0sIC4uLnRvRG9EYXRhXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uVG9nZ2xlSW1wb3J0YW50ID0gKGlkOiBudW1iZXIpOiB2b2lkID0+IHRoaXMuc2V0U3RhdGUoICh7IHRvRG9EYXRhIH0pID0+ICh7XHJcbiAgICAgICAgdG9Eb0RhdGE6IHRoaXMudG9nZ2xlUHJvcGVydHkodG9Eb0RhdGEsIGlkLCAnaW1wb3J0YW50JyksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgZmlsdGVyKGl0ZW1zIDogSVRvRG9JdGVtW10sIGZpbHRlcjogc3RyaW5nKSA6IElUb0RvSXRlbVtdIHtcclxuICAgICAgICBzd2l0Y2ggKGZpbHRlcikge1xyXG4gICAgICAgICAgICBjYXNlICdhY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiAhaXRlbS5kb25lKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2RvbmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiBpdGVtLmRvbmUpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnYWxsJzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGl0ZW1zOiBJVG9Eb0l0ZW1bXSwgdGVybTogc3RyaW5nKTogSVRvRG9JdGVtW10ge1xyXG4gICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiB7XHJcbiAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlSXRlbSA9ICggaWQgOiBudW1iZXIgKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCB7IHRvRG9EYXRhIH0gKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRvRG9EYXRhOiB0b0RvRGF0YS5maWx0ZXIoKCBlbGVtZW50OiAgSVRvRG9JdGVtICkgPT4gZWxlbWVudC5pZCAhPT0gaWQpIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRvZ2dsZVByb3BlcnR5ID0gKFxyXG4gICAgICAgIGFycjogSVRvRG9JdGVtW10sXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBwcm9wTmFtZTogc3RyaW5nLFxyXG4gICAgKTogSVRvRG9JdGVtW10gPT4gYXJyLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBbcHJvcE5hbWVdOiAhZWxlbWVudFtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyAuLi5lbGVtZW50IH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBvblRvZ2dsZURvbmUgPSAoaWQ6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgdG9Eb0RhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGE6IHRoaXMudG9nZ2xlUHJvcGVydHkodG9Eb0RhdGEsIGlkLCAnZG9uZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBvblNlYXJjaENoYW5nZSA9ICh0ZXJtOiBzdHJpbmcpOiB2b2lkID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXJtIH0pO1xyXG5cclxuICAgIG9uRmlsdGVyQ2hhbmdlID0gKGZpbHRlcjogc3RyaW5nKTogdm9pZCA9PiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyIH0pO1xyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgeyB0b0RvRGF0YSwgZmlsdGVyLCB0ZXJtIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlSXRlbXM6IElUb0RvSXRlbVtdID0gdGhpcy5maWx0ZXIoIHRoaXMuc2VhcmNoKHRvRG9EYXRhLCB0ZXJtKSwgZmlsdGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG9uZUNvdW50ID0gdG9Eb0RhdGEuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5kb25lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvRG9Db3VudDogbnVtYmVyID0gdG9Eb0RhdGEubGVuZ3RoIC0gZG9uZUNvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QXBwSGVhZGVyIHRvRG89e3RvRG9Db3VudH0gZG9uZT17ZG9uZUNvdW50fS8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICB0ZXJtPXt0ZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtU3RhdHVzRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9e3RoaXMub25GaWx0ZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1BZGRGb3JtIG9uQWRkSXRlbT17dGhpcy5vbkFkZEl0ZW19Lz5cclxuICAgICAgICAgICAgICAgIDxUb0RvTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zPXt2aXNpYmxlSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGVkPXt0aGlzLmRlbGV0ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ9e3RoaXMub25Ub2dnbGVJbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVEb25lPXt0aGlzLm9uVG9nZ2xlRG9uZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJ2ZXJzaW9uIjozfQ==