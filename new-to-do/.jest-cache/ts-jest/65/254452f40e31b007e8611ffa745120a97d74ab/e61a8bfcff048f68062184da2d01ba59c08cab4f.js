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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFx0b2RvLWxpc3QtaXRlbVxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsMERBQW9DO0FBRXBDLGdDQUE4QjtBQUVqQixRQUFBLFlBQVksR0FBZ0MsVUFBQyxFQU96RDtRQU5HLGdCQUFLLEVBQ0wsd0JBQVMsRUFDVCx3Q0FBaUIsRUFDakIsOEJBQVksRUFDWix3QkFBUyxFQUNULGNBQUk7SUFFSixJQUFNLFNBQVMsR0FBVyxvQkFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQ25ELElBQUksTUFBQTtRQUNKLFNBQVMsV0FBQTtLQUNaLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FDSCw4QkFBTSxTQUFTLEVBQUUsU0FBUztRQUN0Qiw4QkFDSSxTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLE9BQU8sRUFBRSxZQUFZLElBRW5CLEtBQUssQ0FDSjtRQUNQLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7WUFDM0IsZ0NBQ0ksSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsZ0NBQWdDLEVBQzFDLE9BQU8sRUFBRSxpQkFBaUI7Z0JBRTFCLDJCQUFHLFNBQVMsRUFBQyxtQkFBbUIsR0FBRSxDQUM3QjtZQUNULGdDQUNJLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLCtCQUErQixFQUN6QyxPQUFPLEVBQUUsU0FBUztnQkFFbEIsMkJBQUcsU0FBUyxFQUFDLGVBQWUsR0FBRSxDQUN6QixDQUNQLENBQ0gsQ0FDVixDQUFDO0FBQ04sQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXGNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgVG9kb0xpc3RJdGVtUHJvcHMgfSBmcm9tICcuL3R5cGVzLXRvZG8tbGlzdC1pdGVtJztcclxuaW1wb3J0ICcuL3RvZG8tbGlzdC1pdGVtLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0xpc3RJdGVtOiBSZWFjdC5GQzxUb2RvTGlzdEl0ZW1Qcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICBvbkRlbGV0ZWQsXHJcbiAgICBvblRvZ2dsZUltcG9ydGFudCxcclxuICAgIG9uVG9nZ2xlRG9uZSxcclxuICAgIGltcG9ydGFudCxcclxuICAgIGRvbmUsXHJcbn0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGNsYXNzTmFtZXMoJ3RvZG8tbGlzdC1pdGVtJywge1xyXG4gICAgICAgIGRvbmUsXHJcbiAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaXRlbS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZURvbmV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlSW1wb3J0YW50fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJ2ZXJzaW9uIjozfQ==