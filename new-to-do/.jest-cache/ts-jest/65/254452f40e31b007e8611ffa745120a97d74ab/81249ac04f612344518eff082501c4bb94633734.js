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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./item-add-form.css");
var ItemAddForm = /** @class */ (function (_super) {
    __extends(ItemAddForm, _super);
    function ItemAddForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLabelChange = function (_a) {
            var value = _a.target.value;
            var setAddFieldValue = _this.props.setAddFieldValue;
            setAddFieldValue(value);
        };
        _this.onSubmit = function (event) {
            var _a = _this.props, addToDo = _a.addToDo, setAddFieldValue = _a.setAddFieldValue, fieldValue = _a.fieldValue;
            event.preventDefault();
            addToDo(fieldValue);
            setAddFieldValue('');
        };
        return _this;
    }
    ItemAddForm.prototype.render = function () {
        return (react_1.default.createElement("form", { className: "item-add-form d-flex", onSubmit: this.onSubmit },
            react_1.default.createElement("div", { className: "item-add-form-wrapper" },
                react_1.default.createElement("input", { type: "text", className: "form-control", onChange: this.onLabelChange, placeholder: "Needs to be Done", value: this.props.fieldValue }),
                react_1.default.createElement("button", { className: "add-item-element btn btn-success" }, "Add"))));
    };
    return ItemAddForm;
}(react_1.PureComponent));
exports.ItemAddForm = ItemAddForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxpdGVtLWFkZC1mb3JtXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNkM7QUFFN0MsK0JBQTRCO0FBRTVCO0lBQWlDLCtCQUFnQztJQUFqRTtRQUFBLHFFQW9DQztRQW5DRyxtQkFBYSxHQUFHLFVBQUMsRUFBMEQ7Z0JBQTlDLHVCQUFLO1lBQ3RCLElBQUEsK0NBQWdCLENBQWdCO1lBRXhDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUVGLGNBQVEsR0FBRyxVQUFDLEtBQXVDO1lBQ3pDLElBQUEsZ0JBQXNELEVBQXBELG9CQUFPLEVBQUUsc0NBQWdCLEVBQUUsMEJBQXlCLENBQUM7WUFFN0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7O0lBdUJOLENBQUM7SUFyQkcsNEJBQU0sR0FBTjtRQUNJLE9BQU0sQ0FDRix3Q0FDSSxTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUV2Qix1Q0FBSyxTQUFTLEVBQUMsdUJBQXVCO2dCQUNsQyx5Q0FDSSxJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxjQUFjLEVBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUM1QixXQUFXLEVBQUMsa0JBQWtCLEVBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FDOUI7Z0JBQ0YsMENBQVEsU0FBUyxFQUFDLGtDQUFrQyxVQUUzQyxDQUNQLENBQ0gsQ0FDVixDQUFDO0lBQ04sQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXBDRCxDQUFpQyxxQkFBYSxHQW9DN0M7QUFwQ1ksa0NBQVciLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxpdGVtLWFkZC1mb3JtXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHNJdGVtQWRkRm9ybSB9IGZyb20gJy4vdHlwZXMtaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCAnLi9pdGVtLWFkZC1mb3JtLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQWRkRm9ybSBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzSXRlbUFkZEZvcm0+IHtcclxuICAgIG9uTGFiZWxDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QWRkRmllbGRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgc2V0QWRkRmllbGRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWRkVG9Ebywgc2V0QWRkRmllbGRWYWx1ZSwgZmllbGRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhZGRUb0RvKGZpZWxkVmFsdWUpO1xyXG4gICAgICAgIHNldEFkZEZpZWxkVmFsdWUoJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tYWRkLWZvcm0gZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYWRkLWZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmVlZHMgdG8gYmUgRG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZpZWxkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1pdGVtLWVsZW1lbnQgYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInZlcnNpb24iOjN9