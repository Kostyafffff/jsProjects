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
        _this.state = {
            label: ''
        };
        _this.onLabelChange = function (elem) {
            var label = elem.target.value;
            _this.setState({ label: label });
        };
        _this.onSubmit = function (event) {
            event.preventDefault();
            _this.props.onAddItem(_this.state.label);
            _this.setState({ label: '' });
        };
        return _this;
    }
    ItemAddForm.prototype.render = function () {
        return (react_1.default.createElement("form", { className: "item-add-form d-flex", onSubmit: this.onSubmit },
            react_1.default.createElement("div", { className: "item-add-form-wrapper" },
                react_1.default.createElement("input", { type: "text", className: "form-control", onChange: this.onLabelChange, placeholder: "Needs to be Done", value: this.state.label }),
                react_1.default.createElement("button", { className: "add-item-element btn btn-success" }, "Add"))));
    };
    return ItemAddForm;
}(react_1.PureComponent));
exports.ItemAddForm = ItemAddForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaXRlbS1hZGQtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEwRDtBQUUxRCwrQkFBNEI7QUFDNUI7SUFBaUMsK0JBQW1EO0lBQXBGO1FBQUEscUVBdUNDO1FBdENHLFdBQUssR0FBdUI7WUFDeEIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUYsbUJBQWEsR0FBRyxVQUFDLElBQW1DO1lBQ3hDLElBQUEseUJBQVksQ0FBaUI7WUFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFFRixjQUFRLEdBQUcsVUFBQyxLQUF1QztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDOztJQXlCTixDQUFDO0lBdkJHLDRCQUFNLEdBQU47UUFDSSxPQUFNLENBQ0Ysd0NBQ0ksU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFFdkIsdUNBQUssU0FBUyxFQUFDLHVCQUF1QjtnQkFDbEMseUNBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsY0FBYyxFQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDNUIsV0FBVyxFQUFDLGtCQUFrQixFQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQ3pCO2dCQUNGLDBDQUFRLFNBQVMsRUFBQyxrQ0FBa0MsVUFHM0MsQ0FDUCxDQUNILENBQ1YsQ0FBQztJQUNOLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBaUMscUJBQWEsR0F1QzdDO0FBdkNZLGtDQUFXIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGl0ZW0tYWRkLWZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzSXRlbUFkZEZvcm0sIElTdGF0ZUl0ZW1BZGRGb3JtIH0gZnJvbSAnLi90eXBlcy1pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0ICcuL2l0ZW0tYWRkLWZvcm0uY3NzJ1xyXG5leHBvcnQgY2xhc3MgSXRlbUFkZEZvcm0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wc0l0ZW1BZGRGb3JtLCBJU3RhdGVJdGVtQWRkRm9ybT57XHJcbiAgICBzdGF0ZSA6IElTdGF0ZUl0ZW1BZGRGb3JtID0ge1xyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkxhYmVsQ2hhbmdlID0gKGVsZW06IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZTogbGFiZWwgfSA9IGVsZW0udGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgb25TdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQWRkSXRlbSh0aGlzLnN0YXRlLmxhYmVsKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWw6ICcnIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tYWRkLWZvcm0gZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYWRkLWZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmVlZHMgdG8gYmUgRG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtaXRlbS1lbGVtZW50IGJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iXSwidmVyc2lvbiI6M30=