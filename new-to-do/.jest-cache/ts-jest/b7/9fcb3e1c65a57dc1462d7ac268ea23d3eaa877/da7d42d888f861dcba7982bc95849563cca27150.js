"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var todo_list_item_1 = require("../todo-list-item/todo-list-item");
require("./todo-list.css");
exports.ToDoList = function (_a) {
    var todos = _a.todos, onDeleted = _a.onDeleted, onToggleImportant = _a.onToggleImportant, onToggleDone = _a.onToggleDone;
    var elements = todos.map(function (item) {
        var id = item.id, itemProps = __rest(item, ["id"]);
        return (React.createElement("li", { key: id, className: "list-group-item" },
            React.createElement(todo_list_item_1.TodoListItem, __assign({}, itemProps, { onDeleted: function () { return onDeleted(id); }, onToggleImportant: function () { return onToggleImportant(id); }, onToggleDone: function () { return onToggleDone(id); } }))));
    });
    return (React.createElement("ul", { className: "list-group todo-list" }, elements));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcdG9kby1saXN0XFx0b2RvLWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsbUVBQWdFO0FBRWhFLDJCQUF5QjtBQUVaLFFBQUEsUUFBUSxHQUE0QixVQUFDLEVBQXFEO1FBQW5ELGdCQUFLLEVBQUUsd0JBQVMsRUFBRSx3Q0FBaUIsRUFBRSw4QkFBWTtJQUNqRyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtRQUNuQixJQUFBLFlBQUUsRUFBRSxnQ0FBWSxDQUFVO1FBRWxDLE9BQU8sQ0FDSCw0QkFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxpQkFBaUI7WUFDcEMsb0JBQUMsNkJBQVksZUFDTCxTQUFTLElBQ2IsU0FBUyxFQUFFLGNBQVksT0FBQSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxFQUNwQyxpQkFBaUIsRUFBRSxjQUFZLE9BQUEsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLEVBQ3BELFlBQVksRUFBRSxjQUFZLE9BQUEsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFoQixDQUFnQixJQUM1QyxDQUNELENBQ1IsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNILDRCQUFJLFNBQVMsRUFBQyxzQkFBc0IsSUFDL0IsUUFBUSxDQUNSLENBQ1IsQ0FBQztBQUNOLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2RvTGlzdEl0ZW0gfSBmcm9tICcuLi90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbSc7XHJcbmltcG9ydCB7IFRvZG9MaXN0UHJvcHMgfSBmcm9tICcuL3R5cGVzLXRvZG8tbGlzdCc7XHJcbmltcG9ydCAnLi90b2RvLWxpc3QuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUb0RvTGlzdDogUmVhY3QuRkM8VG9kb0xpc3RQcm9wcz4gPSAoeyB0b2Rvcywgb25EZWxldGVkLCBvblRvZ2dsZUltcG9ydGFudCwgb25Ub2dnbGVEb25lIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IHRvZG9zLm1hcChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCB7IGlkLCAuLi5pdGVtUHJvcHMgfSA9IGl0ZW07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlZD17KCk6IHZvaWQgPT4gb25EZWxldGVkKGlkKX1cclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUltcG9ydGFudD17KCk6IHZvaWQgPT4gb25Ub2dnbGVJbXBvcnRhbnQoaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlRG9uZT17KCk6IHZvaWQgPT4gb25Ub2dnbGVEb25lKGlkKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgdG9kby1saXN0XCI+XHJcbiAgICAgICAgICAgIHtlbGVtZW50c31cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuIl0sInZlcnNpb24iOjN9