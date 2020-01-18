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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
require("./search-panel.css");
var SearchPanel = /** @class */ (function (_super) {
    __extends(SearchPanel, _super);
    function SearchPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSearchChange = function (_a) {
            var value = _a.target.value;
            var setSearchValue = _this.props.setSearchValue;
            setSearchValue(value);
        };
        return _this;
    }
    SearchPanel.prototype.render = function () {
        var fieldValue = this.props.fieldValue;
        return (react_1.default.createElement("div", { className: 'form-control-wrapper' },
            react_1.default.createElement("div", { className: 'flex-search-element' },
                react_1.default.createElement("input", { type: 'text', className: 'form-control search input', placeholder: 'search', value: fieldValue, onChange: this.onSearchChange }))));
    };
    return SearchPanel;
}(react_2.Component));
exports.SearchPanel = SearchPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxzZWFyY2gtcGFuZWxcXGNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLCtCQUFrQztBQUVsQyw4QkFBMkI7QUFDM0I7SUFBaUMsK0JBQTRCO0lBQTdEO1FBQUEscUVBd0JDO1FBdkJHLG9CQUFjLEdBQUcsVUFBQyxFQUEwRDtnQkFBOUMsdUJBQUs7WUFDdkIsSUFBQSwyQ0FBYyxDQUFnQjtZQUV0QyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDOztJQW1CTixDQUFDO0lBakJHLDRCQUFNLEdBQU47UUFDWSxJQUFBLGtDQUFVLENBQWdCO1FBRWxDLE9BQU8sQ0FDSCx1Q0FBSyxTQUFTLEVBQUMsc0JBQXNCO1lBQ2pDLHVDQUFLLFNBQVMsRUFBQyxxQkFBcUI7Z0JBQ2hDLHlDQUNJLElBQUksRUFBQyxNQUFNLEVBQ1gsU0FBUyxFQUFDLDJCQUEyQixFQUNyQyxXQUFXLEVBQUMsUUFBUSxFQUNwQixLQUFLLEVBQUUsVUFBVSxFQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FDL0IsQ0FDQSxDQUNKLENBQ1QsQ0FBQTtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBaUMsaUJBQVMsR0F3QnpDO0FBeEJZLGtDQUFXIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzU2VhcmNoUGFuZWwgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0ICcuL3NlYXJjaC1wYW5lbC5jc3MnXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHNTZWFyY2hQYW5lbD4ge1xyXG4gICAgb25TZWFyY2hDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0U2VhcmNoVmFsdWUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHNldFNlYXJjaFZhbHVlKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBjb25zdCB7IGZpZWxkVmFsdWUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wtd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1zZWFyY2gtZWxlbWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIHNlYXJjaCBpbnB1dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInZlcnNpb24iOjN9