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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaXRlbS1hZGQtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEwRDtBQUUxRCwrQkFBNEI7QUFFNUI7SUFBaUMsK0JBQW1EO0lBQXBGO1FBQUEscUVBc0NDO1FBckNHLFdBQUssR0FBdUI7WUFDeEIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUYsbUJBQWEsR0FBRyxVQUFDLElBQW1DO1lBQ3hDLElBQUEseUJBQVksQ0FBaUI7WUFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFFRixjQUFRLEdBQUcsVUFBQyxLQUF1QztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDOztJQXdCTixDQUFDO0lBdEJHLDRCQUFNLEdBQU47UUFDSSxPQUFNLENBQ0Ysd0NBQ0ksU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFFdkIsdUNBQUssU0FBUyxFQUFDLHVCQUF1QjtnQkFDbEMseUNBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsY0FBYyxFQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDNUIsV0FBVyxFQUFDLGtCQUFrQixFQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQ3pCO2dCQUNGLDBDQUFRLFNBQVMsRUFBQyxrQ0FBa0MsVUFFM0MsQ0FDUCxDQUNILENBQ1YsQ0FBQztJQUNOLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBaUMscUJBQWEsR0FzQzdDO0FBdENZLGtDQUFXIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGl0ZW0tYWRkLWZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzSXRlbUFkZEZvcm0sIElTdGF0ZUl0ZW1BZGRGb3JtIH0gZnJvbSAnLi90eXBlcy1pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0ICcuL2l0ZW0tYWRkLWZvcm0uY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1BZGRGb3JtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJUHJvcHNJdGVtQWRkRm9ybSwgSVN0YXRlSXRlbUFkZEZvcm0+e1xyXG4gICAgc3RhdGUgOiBJU3RhdGVJdGVtQWRkRm9ybSA9IHtcclxuICAgICAgICBsYWJlbDogJydcclxuICAgIH07XHJcblxyXG4gICAgb25MYWJlbENoYW5nZSA9IChlbGVtOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IGxhYmVsIH0gPSBlbGVtLnRhcmdldDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWwgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFkZEl0ZW0odGhpcy5zdGF0ZS5sYWJlbCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsOiAnJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLWFkZC1mb3JtIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWFkZC1mb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxhYmVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5lZWRzIHRvIGJlIERvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWl0ZW0tZWxlbWVudCBidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59Il0sInZlcnNpb24iOjN9