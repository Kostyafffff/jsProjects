"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var classnames_1 = require("classnames");
require("./todo-list-item.css");
var TodoListItem = /** @class */ (function (_super) {
    tslib_1.__extends(TodoListItem, _super);
    function TodoListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            done: false,
            important: false
        };
        return _this;
    }
    TodoListItem.prototype.render = function () {
        var _a = this.props, label = _a.label, onDeleted = _a.onDeleted, onToggleImportant = _a.onToggleImportant, onToggleDone = _a.onToggleDone, important = _a.important, done = _a.done;
        var className = classnames_1.default('todo-list-item', {
            'done': done,
            'important': important,
        });
        return (react_1.default.createElement("span", { className: className },
            react_1.default.createElement("span", { className: "todo-list-item-label", onClick: onToggleDone }, label),
            react_1.default.createElement("div", { className: "button-wrapper" },
                react_1.default.createElement("button", { type: "button", className: "btn btn-outline-success btn-sm", onClick: onToggleImportant },
                    react_1.default.createElement("i", { className: "fa fa-exclamation" })),
                react_1.default.createElement("button", { type: "button", className: "btn btn-outline-danger btn-sm", onClick: onDeleted },
                    react_1.default.createElement("i", { className: "fa fa-trash-o" })))));
    };
    return TodoListItem;
}(react_1.Component));
exports.TodoListItem = TodoListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFx0b2RvbGlzdF90eXBlc2NyaXB0XFxzcmNcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFx0b2RvLWxpc3QtaXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQXlDO0FBQ3pDLHlDQUFvQztBQUVwQyxnQ0FBOEI7QUFFOUI7SUFBa0Msd0NBQW9DO0lBQXRFO1FBQUEscUVBNENDO1FBM0NHLFdBQUssR0FBVztZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQzs7SUF3Q04sQ0FBQztJQXRDRyw2QkFBTSxHQUFOO1FBQ1UsSUFBQSxlQU9RLEVBTlYsZ0JBQUssRUFDTCx3QkFBUyxFQUNULHdDQUFpQixFQUNqQiw4QkFBWSxFQUNaLHdCQUFTLEVBQ1QsY0FDVSxDQUFDO1FBRWYsSUFBTSxTQUFTLEdBQVcsb0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxTQUFTO1NBQ3pCLENBQUMsQ0FBQztRQUVILE9BQU0sQ0FDRix3Q0FBTSxTQUFTLEVBQUUsU0FBUztZQUN0Qix3Q0FDSSxTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLE9BQU8sRUFBRSxZQUFZLElBQ3hCLEtBQUssQ0FDQztZQUNQLHVDQUFLLFNBQVMsRUFBQyxnQkFBZ0I7Z0JBQzNCLDBDQUFRLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLGdDQUFnQyxFQUMxQyxPQUFPLEVBQUUsaUJBQWlCO29CQUVsQyxxQ0FBRyxTQUFTLEVBQUMsbUJBQW1CLEdBQUUsQ0FDN0I7Z0JBQ1QsMENBQVEsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsK0JBQStCLEVBQ3pDLE9BQU8sRUFBRSxTQUFTO29CQUV0QixxQ0FBRyxTQUFTLEVBQUMsZUFBZSxHQUFFLENBQ3pCLENBQ0gsQ0FDUCxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBNUNELENBQWtDLGlCQUFTLEdBNEMxQztBQTVDWSxvQ0FBWSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXHRvZG9saXN0X3R5cGVzY3JpcHRcXHNyY1xcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXHRvZG8tbGlzdC1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgSVN0YXRlLCBUb2RvTGlzdEl0ZW1Qcm9wcyB9IGZyb20gJy4vdHlwZXMtdG9kby1saXN0LWl0ZW0nO1xyXG5pbXBvcnQgJy4vdG9kby1saXN0LWl0ZW0uY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8VG9kb0xpc3RJdGVtUHJvcHMsIElTdGF0ZT57XHJcbiAgICBzdGF0ZTogSVN0YXRlID0ge1xyXG4gICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIGltcG9ydGFudDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBvbkRlbGV0ZWQsXHJcbiAgICAgICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50LFxyXG4gICAgICAgICAgICBvblRvZ2dsZURvbmUsXHJcbiAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgZG9uZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGNsYXNzTmFtZXMoJ3RvZG8tbGlzdC1pdGVtJywge1xyXG4gICAgICAgICAgICAnZG9uZSc6IGRvbmUsXHJcbiAgICAgICAgICAgICdpbXBvcnRhbnQnOiBpbXBvcnRhbnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaXRlbS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVEb25lfT5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlSW1wb3J0YW50fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvblwiLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPik7XHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=