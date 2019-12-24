"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./todo-list-item.css");
exports.TodoListItem = function (_a) {
    var label = _a.label, onDeleted = _a.onDeleted, onToggleImportant = _a.onToggleImportant, onToggleDone = _a.onToggleDone, important = _a.important, done = _a.done;
    var className = classnames_1.default('todo-list-item', {
        done: done,
        important: important,
    });
    return (React.createElement("span", { className: className },
        React.createElement("span", { className: "todo-list-item-label", onClick: onToggleDone }, label),
        React.createElement("div", { className: "button-wrapper" },
            React.createElement("button", { type: "button", className: "btn btn-outline-success btn-sm", onClick: onToggleImportant },
                React.createElement("i", { className: "fa fa-exclamation" })),
            React.createElement("button", { type: "button", className: "btn btn-outline-danger btn-sm", onClick: onDeleted },
                React.createElement("i", { className: "fa fa-trash-o" })))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXGNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStCO0FBQy9CLDBEQUFvQztBQUVwQyxnQ0FBOEI7QUFFakIsUUFBQSxZQUFZLEdBQWdDLFVBQUMsRUFPekQ7UUFORyxnQkFBSyxFQUNMLHdCQUFTLEVBQ1Qsd0NBQWlCLEVBQ2pCLDhCQUFZLEVBQ1osd0JBQVMsRUFDVCxjQUFJO0lBRUosSUFBTSxTQUFTLEdBQVcsb0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUNuRCxJQUFJLE1BQUE7UUFDSixTQUFTLFdBQUE7S0FDWixDQUFDLENBQUM7SUFFSCxPQUFPLENBQ0gsOEJBQU0sU0FBUyxFQUFFLFNBQVM7UUFDdEIsOEJBQ0ksU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxPQUFPLEVBQUUsWUFBWSxJQUVuQixLQUFLLENBQ0o7UUFDUCw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO1lBQzNCLGdDQUNJLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLGdDQUFnQyxFQUMxQyxPQUFPLEVBQUUsaUJBQWlCO2dCQUUxQiwyQkFBRyxTQUFTLEVBQUMsbUJBQW1CLEdBQUUsQ0FDN0I7WUFDVCxnQ0FDSSxJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBQywrQkFBK0IsRUFDekMsT0FBTyxFQUFFLFNBQVM7Z0JBRWxCLDJCQUFHLFNBQVMsRUFBQyxlQUFlLEdBQUUsQ0FDekIsQ0FDUCxDQUNILENBQ1YsQ0FBQztBQUNOLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFx0b2RvLWxpc3QtaXRlbVxcY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBUb2RvTGlzdEl0ZW1Qcm9wcyB9IGZyb20gJy4vdHlwZXMtdG9kby1saXN0LWl0ZW0nO1xyXG5pbXBvcnQgJy4vdG9kby1saXN0LWl0ZW0uY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvTGlzdEl0ZW06IFJlYWN0LkZDPFRvZG9MaXN0SXRlbVByb3BzPiA9ICh7XHJcbiAgICBsYWJlbCxcclxuICAgIG9uRGVsZXRlZCxcclxuICAgIG9uVG9nZ2xlSW1wb3J0YW50LFxyXG4gICAgb25Ub2dnbGVEb25lLFxyXG4gICAgaW1wb3J0YW50LFxyXG4gICAgZG9uZSxcclxufSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gY2xhc3NOYW1lcygndG9kby1saXN0LWl0ZW0nLCB7XHJcbiAgICAgICAgZG9uZSxcclxuICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1pdGVtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlRG9uZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbCB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVJbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EZWxldGVkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufTtcclxuIl0sInZlcnNpb24iOjN9