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
    var label = _a.label, onDeleted = _a.onDeleted, onToggleImportant = _a.toggleImportant, onToggleDone = _a.onToggleDone, important = _a.important, done = _a.done;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXHRvZG8tbGlzdC1pdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsMERBQW9DO0FBRXBDLGdDQUE4QjtBQUVqQixRQUFBLFlBQVksR0FBZ0MsVUFBQyxFQU96RDtRQU5HLGdCQUFLLEVBQ0wsd0JBQVMsRUFDVCx3Q0FBaUIsRUFDakIsOEJBQVksRUFDWix3QkFBUyxFQUNULGNBQUk7SUFFSixJQUFNLFNBQVMsR0FBVyxvQkFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQ25ELElBQUksTUFBQTtRQUNKLFNBQVMsV0FBQTtLQUNaLENBQUMsQ0FBQztJQUVILE9BQU0sQ0FDRiw4QkFBTSxTQUFTLEVBQUUsU0FBUztRQUN0Qiw4QkFDSSxTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLE9BQU8sRUFBRSxZQUFZLElBRW5CLEtBQUssQ0FDSjtRQUNQLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7WUFDM0IsZ0NBQ0ksSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsZ0NBQWdDLEVBQzFDLE9BQU8sRUFBRSxpQkFBaUI7Z0JBRTFCLDJCQUFHLFNBQVMsRUFBQyxtQkFBbUIsR0FBRyxDQUM5QjtZQUNULGdDQUNJLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLCtCQUErQixFQUN6QyxPQUFPLEVBQUUsU0FBUztnQkFFbEIsMkJBQUcsU0FBUyxFQUFDLGVBQWUsR0FBRyxDQUMxQixDQUNQLENBQ0gsQ0FDVixDQUFDO0FBQ04sQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFx0b2RvLWxpc3QtaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgVG9kb0xpc3RJdGVtUHJvcHMgfSBmcm9tICcuL3R5cGVzLXRvZG8tbGlzdC1pdGVtJztcclxuaW1wb3J0ICcuL3RvZG8tbGlzdC1pdGVtLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0xpc3RJdGVtOiBSZWFjdC5GQzxUb2RvTGlzdEl0ZW1Qcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICBvbkRlbGV0ZWQsXHJcbiAgICBvblRvZ2dsZUltcG9ydGFudCxcclxuICAgIG9uVG9nZ2xlRG9uZSxcclxuICAgIGltcG9ydGFudCxcclxuICAgIGRvbmUsXHJcbn0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGNsYXNzTmFtZXMoJ3RvZG8tbGlzdC1pdGVtJywge1xyXG4gICAgICAgIGRvbmUsXHJcbiAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1pdGVtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlRG9uZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbCB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVJbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59O1xyXG4iXSwidmVyc2lvbiI6M30=