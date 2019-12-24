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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTZDO0FBRTdDLCtCQUE0QjtBQUU1QjtJQUFpQywrQkFBZ0M7SUFBakU7UUFBQSxxRUFvQ0M7UUFuQ0csbUJBQWEsR0FBRyxVQUFDLEVBQTBEO2dCQUE5Qyx1QkFBSztZQUN0QixJQUFBLCtDQUFnQixDQUFnQjtZQUV4QyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFFRixjQUFRLEdBQUcsVUFBQyxLQUF1QztZQUN6QyxJQUFBLGdCQUFzRCxFQUFwRCxvQkFBTyxFQUFFLHNDQUFnQixFQUFFLDBCQUF5QixDQUFDO1lBRTdELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDOztJQXVCTixDQUFDO0lBckJHLDRCQUFNLEdBQU47UUFDSSxPQUFNLENBQ0Ysd0NBQ0ksU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFFdkIsdUNBQUssU0FBUyxFQUFDLHVCQUF1QjtnQkFDbEMseUNBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsY0FBYyxFQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDNUIsV0FBVyxFQUFDLGtCQUFrQixFQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQzlCO2dCQUNGLDBDQUFRLFNBQVMsRUFBQyxrQ0FBa0MsVUFFM0MsQ0FDUCxDQUNILENBQ1YsQ0FBQztJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBaUMscUJBQWEsR0FvQzdDO0FBcENZLGtDQUFXIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wc0l0ZW1BZGRGb3JtIH0gZnJvbSAnLi90eXBlcy1pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0ICcuL2l0ZW0tYWRkLWZvcm0uY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1BZGRGb3JtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJUHJvcHNJdGVtQWRkRm9ybT4ge1xyXG4gICAgb25MYWJlbENoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRBZGRGaWVsZFZhbHVlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBzZXRBZGRGaWVsZFZhbHVlKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgb25TdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRUb0RvLCBzZXRBZGRGaWVsZFZhbHVlLCBmaWVsZFZhbHVlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFkZFRvRG8oZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgc2V0QWRkRmllbGRWYWx1ZSgnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1hZGQtZm9ybSBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1hZGQtZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MYWJlbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZWVkcyB0byBiZSBEb25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWl0ZW0tZWxlbWVudCBidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=