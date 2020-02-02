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
        // const doneCount = toDoData.filter(element => element.done).length;
        // const toDoCount: number = toDoData.length - doneCount;
        return (React.createElement("div", null,
            React.createElement(app_header_1.AppHeader, null),
            React.createElement(search_panel_1.SearchPanel, { term: term, onSearchChange: this.onSearchChange }),
            React.createElement(item_status_filter_1.ItemStatusFilter, { filter: filter, onFilterChange: this.onFilterChange }),
            React.createElement(item_add_form_1.Component, { onAddItem: this.onAddItem }),
            React.createElement(todo_list_1.ToDoList, { todos: visibleItems, onDeleted: this.deleteItem, onToggleImportant: this.onToggleImportant, onToggleDone: this.onToggleDone })));
    };
    return App;
}(react_1.Component));
exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwXFxBcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsK0JBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCxnRUFBNkQ7QUFDN0QsK0VBQTRFO0FBQzVFLDZEQUEyRDtBQUMzRCxvREFBa0Q7QUFFbEQ7SUFBeUIsdUJBQXFCO0lBQTlDO1FBQUEscUVBNEhDO1FBMUhHLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsb0JBQWMsR0FBRyxVQUFDLEtBQWEsSUFBZ0IsT0FBQSxDQUFDO1lBQzVDLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUU7U0FDbkIsQ0FBQyxFQUw2QyxDQUs3QyxDQUFDO1FBRUgsV0FBSyxHQUFXO1lBQ1osUUFBUSxFQUFFO2dCQUNOLEtBQUksQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxjQUFjLENBQUMsbUNBQW1DLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxjQUFjLENBQUMsbUNBQW1DLENBQUM7YUFDM0Q7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFFRixlQUFTLEdBQUcsVUFBQyxJQUFZO1lBQ3JCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLEVBQVk7b0JBQVYsc0JBQVE7Z0JBQ3JCLE9BQU87b0JBQ0gsUUFBUSxrQkFBRyxPQUFPLEdBQUssUUFBUSxDQUFDO2lCQUNuQyxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRix1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SSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwRixxRUFBcUU7UUFFckUseURBQXlEO1FBRXpELE9BQU0sQ0FDRjtZQUNJLG9CQUFDLHNCQUFTLE9BQUc7WUFDYixvQkFBQywwQkFBVyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQ3JDO1lBQ0Ysb0JBQUMscUNBQWdCLElBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FDckM7WUFDRixvQkFBQywyQkFBVyxJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ3pDLG9CQUFDLG9CQUFRLElBQ0wsS0FBSyxFQUFFLFlBQVksRUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQzFCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDekMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQ2pDLENBQ0EsQ0FDVCxDQUFBO0lBQ0wsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBNUhELENBQXlCLGlCQUFTLEdBNEhqQztBQTVIWSxrQkFBRyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxhcHBcXEFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcEhlYWRlciB9IGZyb20gJy4uL2FwcC1oZWFkZXIvYXBwLWhlYWRlcidcclxuaW1wb3J0IHsgSXRlbUFkZEZvcm0gfSBmcm9tICcuLi9pdGVtLWFkZC1mb3JtL2l0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgeyBJdGVtU3RhdHVzRmlsdGVyIH0gZnJvbSAnLi4vaXRlbS1zdGF0dXMtZmlsdGVyL2l0ZW0tc3RhdHVzLWZpbHRlcic7XHJcbmltcG9ydCB7IFNlYXJjaFBhbmVsIH0gZnJvbSAnLi4vc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbCc7XHJcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSAnLi4vdG9kby1saXN0L3RvZG8tbGlzdCc7XHJcbmltcG9ydCB7IElTdGF0ZSwgSVRvRG9JdGVtIH0gZnJvbSAnLi9hcHAtdHlwZXMnO1xyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PHt9LCBJU3RhdGU+IHtcclxuXHJcbiAgICBtYXhJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIGNyZWF0ZVRvZG9JdGVtID0gKGxhYmVsOiBzdHJpbmcpOiBJVG9Eb0l0ZW0gPT4gKHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIGlkOiB0aGlzLm1heElkKytcclxuICAgIH0pO1xyXG5cclxuICAgIHN0YXRlOiBJU3RhdGUgPSB7XHJcbiAgICAgICAgdG9Eb0RhdGE6IFtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvSXRlbSgnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnKSxcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvSXRlbSgnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyksXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kb0l0ZW0oJ0NyZWF0ZSB0ZXN0cyB3aXRoIEplc3QgYW5kIEVuenltZScpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVybTogJycsXHJcbiAgICAgICAgZmlsdGVyOiAnYWN0aXZlJyxcclxuICAgIH07XHJcblxyXG4gICAgb25BZGRJdGVtID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB0aGlzLmNyZWF0ZVRvZG9JdGVtKHRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKCh7IHRvRG9EYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRhOiBbbmV3SXRlbSwgLi4udG9Eb0RhdGFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgb25Ub2dnbGVJbXBvcnRhbnQgPSAoaWQ6IG51bWJlcik6IHZvaWQgPT4gdGhpcy5zZXRTdGF0ZSggKHsgdG9Eb0RhdGEgfSkgPT4gKHtcclxuICAgICAgICB0b0RvRGF0YTogdGhpcy50b2dnbGVQcm9wZXJ0eSh0b0RvRGF0YSwgaWQsICdpbXBvcnRhbnQnKSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBmaWx0ZXIoaXRlbXMgOiBJVG9Eb0l0ZW1bXSwgZmlsdGVyOiBzdHJpbmcpIDogSVRvRG9JdGVtW10ge1xyXG4gICAgICAgIHN3aXRjaCAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiBJVG9Eb0l0ZW0pID0+ICFpdGVtLmRvbmUpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZG9uZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiBJVG9Eb0l0ZW0pID0+IGl0ZW0uZG9uZSk7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdhbGwnOlxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGl0ZW1zOiBJVG9Eb0l0ZW1bXSwgdGVybTogc3RyaW5nKTogSVRvRG9JdGVtW10ge1xyXG4gICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiB7XHJcbiAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlSXRlbSA9ICggaWQgOiBudW1iZXIgKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCB7IHRvRG9EYXRhIH0gKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRvRG9EYXRhOiB0b0RvRGF0YS5maWx0ZXIoKCBlbGVtZW50OiAgSVRvRG9JdGVtICkgPT4gZWxlbWVudC5pZCAhPT0gaWQpIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRvZ2dsZVByb3BlcnR5ID0gKFxyXG4gICAgICAgIGFycjogSVRvRG9JdGVtW10sXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBwcm9wTmFtZTogc3RyaW5nLFxyXG4gICAgKTogSVRvRG9JdGVtW10gPT4gYXJyLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBbcHJvcE5hbWVdOiAhZWxlbWVudFtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyAuLi5lbGVtZW50IH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBvblRvZ2dsZURvbmUgPSAoaWQ6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgdG9Eb0RhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGE6IHRoaXMudG9nZ2xlUHJvcGVydHkodG9Eb0RhdGEsIGlkLCAnZG9uZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBvblNlYXJjaENoYW5nZSA9ICh0ZXJtOiBzdHJpbmcpOiB2b2lkID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXJtIH0pO1xyXG5cclxuICAgIG9uRmlsdGVyQ2hhbmdlID0gKGZpbHRlcjogc3RyaW5nKTogdm9pZCA9PiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyIH0pO1xyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgeyB0b0RvRGF0YSwgZmlsdGVyLCB0ZXJtIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlSXRlbXM6IElUb0RvSXRlbVtdID0gdGhpcy5maWx0ZXIoIHRoaXMuc2VhcmNoKHRvRG9EYXRhLCB0ZXJtKSwgZmlsdGVyKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZG9uZUNvdW50ID0gdG9Eb0RhdGEuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5kb25lKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHRvRG9Db3VudDogbnVtYmVyID0gdG9Eb0RhdGEubGVuZ3RoIC0gZG9uZUNvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QXBwSGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICB0ZXJtPXt0ZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtU3RhdHVzRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9e3RoaXMub25GaWx0ZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1BZGRGb3JtIG9uQWRkSXRlbT17dGhpcy5vbkFkZEl0ZW19Lz5cclxuICAgICAgICAgICAgICAgIDxUb0RvTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zPXt2aXNpYmxlSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGVkPXt0aGlzLmRlbGV0ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ9e3RoaXMub25Ub2dnbGVJbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVEb25lPXt0aGlzLm9uVG9nZ2xlRG9uZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJ2ZXJzaW9uIjozfQ==