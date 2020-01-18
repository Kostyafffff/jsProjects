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
require("./todo-list.css");
var component_1 = require("../todo-list-item/component");
var filter = function (items, filter) {
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
var search = function (items, term) {
    return items.filter(function (item) {
        if (term.length === 0) {
            return items;
        }
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
};
exports.TodoList = function (_a) {
    var todoList = _a.todoList, onDeleted = _a.onDeleted, onToggleImportant = _a.onToggleImportant, onToggleDone = _a.onToggleDone, filterValue = _a.filterValue, searchValue = _a.searchValue;
    var elements = filter(search(todoList, searchValue), filterValue).map(function (item) {
        var id = item.id, itemProps = __rest(item, ["id"]);
        return (React.createElement("li", { key: id, className: "list-group-item" },
            React.createElement(component_1.TodoListItem, __assign({}, itemProps, { onDeleted: function () { return onDeleted(id); }, onToggleImportant: function () { return onToggleImportant(id); }, onToggleDone: function () { return onToggleDone(id); } }))));
    });
    return (React.createElement("ul", { className: "list-group todo-list" }, elements));
    //make connect
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXGNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUcvQiwyQkFBeUI7QUFDekIseURBQTJEO0FBRzNELElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBbUIsRUFBRSxNQUFjO0lBQy9DLFFBQVEsTUFBTSxFQUFFO1FBQ1osS0FBSyxRQUFRO1lBQ1QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBRXpELEtBQUssTUFBTTtZQUNQLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWUsSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUyxDQUFDLENBQUM7UUFFeEQsS0FBSyxLQUFLLENBQUM7UUFDWDtZQUNJLE9BQU8sS0FBSyxDQUFDO0tBQ3BCO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFrQixFQUFFLElBQVk7SUFDNUMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZTtRQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQ0osQ0FBQTtBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUE0QixVQUFDLEVBT2pEO1FBTkcsc0JBQVEsRUFDUix3QkFBUyxFQUNULHdDQUFpQixFQUNqQiw4QkFBWSxFQUNaLDRCQUFXLEVBQ1gsNEJBQVc7SUFFWCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1FBQ2hFLElBQUEsWUFBRSxFQUFFLGdDQUFZLENBQVU7UUFFbEMsT0FBTyxDQUNILDRCQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLGlCQUFpQjtZQUNwQyxvQkFBQyx3QkFBWSxlQUNMLFNBQVMsSUFDYixTQUFTLEVBQUUsY0FBWSxPQUFBLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLEVBQ3BDLGlCQUFpQixFQUFFLGNBQVksT0FBQSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBckIsQ0FBcUIsRUFDcEQsWUFBWSxFQUFFLGNBQVksT0FBQSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQWhCLENBQWdCLElBQzVDLENBQ0QsQ0FDUixDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQ0gsNEJBQUksU0FBUyxFQUFDLHNCQUFzQixJQUMvQixRQUFRLENBQ1IsQ0FDUixDQUFDO0lBQ0YsY0FBYztBQUNsQixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXGNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgVG9kb0xpc3RQcm9wcyB9IGZyb20gJy4vdHlwZXMtdG9kby1saXN0JztcclxuaW1wb3J0ICcuL3RvZG8tbGlzdC5jc3MnO1xyXG5pbXBvcnQgeyBUb2RvTGlzdEl0ZW0gfSBmcm9tICcuLi90b2RvLWxpc3QtaXRlbS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJVG9Eb0l0ZW0gfSBmcm9tICcuLi9hcHAvYXBwLXR5cGVzJztcclxuXHJcbmNvbnN0IGZpbHRlciA9IChpdGVtcyA6IElUb0RvSXRlbVtdLCBmaWx0ZXI6IHN0cmluZykgOiBJVG9Eb0l0ZW1bXSA9PiB7XHJcbiAgICBzd2l0Y2ggKGZpbHRlcikge1xyXG4gICAgICAgIGNhc2UgJ2FjdGl2ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW06IElUb0RvSXRlbSkgPT4gIWl0ZW0uZG9uZSk7XHJcblxyXG4gICAgICAgIGNhc2UgJ2RvbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiBJVG9Eb0l0ZW0pID0+IGl0ZW0uZG9uZSk7XHJcblxyXG4gICAgICAgIGNhc2UgJ2FsbCc6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2VhcmNoID0gKGl0ZW1zOiBJVG9Eb0l0ZW1bXSwgdGVybTogc3RyaW5nKTogSVRvRG9JdGVtW10gPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZXJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgIH1cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvTGlzdDogUmVhY3QuRkM8VG9kb0xpc3RQcm9wcz4gPSAoe1xyXG4gICAgdG9kb0xpc3QsXHJcbiAgICBvbkRlbGV0ZWQsXHJcbiAgICBvblRvZ2dsZUltcG9ydGFudCxcclxuICAgIG9uVG9nZ2xlRG9uZSxcclxuICAgIGZpbHRlclZhbHVlLFxyXG4gICAgc2VhcmNoVmFsdWUsXHJcbn0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGZpbHRlcihzZWFyY2godG9kb0xpc3QsIHNlYXJjaFZhbHVlKSwgZmlsdGVyVmFsdWUpLm1hcChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCB7IGlkLCAuLi5pdGVtUHJvcHMgfSA9IGl0ZW07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlZD17KCk6IHZvaWQgPT4gb25EZWxldGVkKGlkKX1cclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUltcG9ydGFudD17KCk6IHZvaWQgPT4gb25Ub2dnbGVJbXBvcnRhbnQoaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlRG9uZT17KCk6IHZvaWQgPT4gb25Ub2dnbGVEb25lKGlkKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgdG9kby1saXN0XCI+XHJcbiAgICAgICAgICAgIHtlbGVtZW50c31cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxuICAgIC8vbWFrZSBjb25uZWN0XHJcbn07XHJcbiJdLCJ2ZXJzaW9uIjozfQ==