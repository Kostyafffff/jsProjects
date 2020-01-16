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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcdG9kby1saXN0XFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFHL0IsMkJBQXlCO0FBQ3pCLHlEQUEyRDtBQUczRCxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQW1CLEVBQUUsTUFBYztJQUMvQyxRQUFRLE1BQU0sRUFBRTtRQUNaLEtBQUssUUFBUTtZQUNULE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWUsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQztRQUV6RCxLQUFLLE1BQU07WUFDUCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFlLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFDO1FBRXhELEtBQUssS0FBSyxDQUFDO1FBQ1g7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBa0IsRUFBRSxJQUFZO0lBQzVDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWU7UUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUNKLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBNEIsVUFBQyxFQU9qRDtRQU5HLHNCQUFRLEVBQ1Isd0JBQVMsRUFDVCx3Q0FBaUIsRUFDakIsOEJBQVksRUFDWiw0QkFBVyxFQUNYLDRCQUFXO0lBRVgsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtRQUNoRSxJQUFBLFlBQUUsRUFBRSxnQ0FBWSxDQUFVO1FBRWxDLE9BQU8sQ0FDSCw0QkFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxpQkFBaUI7WUFDcEMsb0JBQUMsd0JBQVksZUFDTCxTQUFTLElBQ2IsU0FBUyxFQUFFLGNBQVksT0FBQSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxFQUNwQyxpQkFBaUIsRUFBRSxjQUFZLE9BQUEsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLEVBQ3BELFlBQVksRUFBRSxjQUFZLE9BQUEsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFoQixDQUFnQixJQUM1QyxDQUNELENBQ1IsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNILDRCQUFJLFNBQVMsRUFBQyxzQkFBc0IsSUFDL0IsUUFBUSxDQUNSLENBQ1IsQ0FBQztJQUNGLGNBQWM7QUFDbEIsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBUb2RvTGlzdFByb3BzIH0gZnJvbSAnLi90eXBlcy10b2RvLWxpc3QnO1xyXG5pbXBvcnQgJy4vdG9kby1saXN0LmNzcyc7XHJcbmltcG9ydCB7IFRvZG9MaXN0SXRlbSB9IGZyb20gJy4uL3RvZG8tbGlzdC1pdGVtL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IElUb0RvSXRlbSB9IGZyb20gJy4uL2FwcC9hcHAtdHlwZXMnO1xyXG5cclxuY29uc3QgZmlsdGVyID0gKGl0ZW1zIDogSVRvRG9JdGVtW10sIGZpbHRlcjogc3RyaW5nKSA6IElUb0RvSXRlbVtdID0+IHtcclxuICAgIHN3aXRjaCAoZmlsdGVyKSB7XHJcbiAgICAgICAgY2FzZSAnYWN0aXZlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSVRvRG9JdGVtKSA9PiAhaXRlbS5kb25lKTtcclxuXHJcbiAgICAgICAgY2FzZSAnZG9uZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW06IElUb0RvSXRlbSkgPT4gaXRlbS5kb25lKTtcclxuXHJcbiAgICAgICAgY2FzZSAnYWxsJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzZWFyY2ggPSAoaXRlbXM6IElUb0RvSXRlbVtdLCB0ZXJtOiBzdHJpbmcpOiBJVG9Eb0l0ZW1bXSA9PiB7XHJcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiBJVG9Eb0l0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxUb2RvTGlzdFByb3BzPiA9ICh7XHJcbiAgICB0b2RvTGlzdCxcclxuICAgIG9uRGVsZXRlZCxcclxuICAgIG9uVG9nZ2xlSW1wb3J0YW50LFxyXG4gICAgb25Ub2dnbGVEb25lLFxyXG4gICAgZmlsdGVyVmFsdWUsXHJcbiAgICBzZWFyY2hWYWx1ZSxcclxufSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZmlsdGVyKHNlYXJjaCh0b2RvTGlzdCwgc2VhcmNoVmFsdWUpLCBmaWx0ZXJWYWx1ZSkubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLml0ZW1Qcm9wcyB9ID0gaXRlbTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGVkPXsoKTogdm9pZCA9PiBvbkRlbGV0ZWQoaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50PXsoKTogdm9pZCA9PiBvblRvZ2dsZUltcG9ydGFudChpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVEb25lPXsoKTogdm9pZCA9PiBvblRvZ2dsZURvbmUoaWQpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCB0b2RvLWxpc3RcIj5cclxuICAgICAgICAgICAge2VsZW1lbnRzfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gICAgLy9tYWtlIGNvbm5lY3RcclxufTtcclxuIl0sInZlcnNpb24iOjN9