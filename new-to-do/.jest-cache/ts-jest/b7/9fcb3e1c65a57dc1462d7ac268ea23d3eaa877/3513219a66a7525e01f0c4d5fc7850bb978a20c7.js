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
        _this.state = {
            term: ''
        };
        _this.onSearchChange = function (event) {
            var term = event.target.value;
            _this.setState({ term: term });
            _this.props.onSearchChange(term);
        };
        return _this;
    }
    SearchPanel.prototype.render = function () {
        return (react_1.default.createElement("div", { className: 'form-control-wrapper' },
            react_1.default.createElement("div", { className: 'flex-search-element' },
                react_1.default.createElement("input", { type: 'text', className: 'form-control search input', placeholder: 'search', value: this.state.term, onChange: this.onSearchChange }))));
    };
    return SearchPanel;
}(react_2.Component));
exports.SearchPanel = SearchPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxzZWFyY2gtcGFuZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiwrQkFBa0M7QUFFbEMsOEJBQTJCO0FBQzNCO0lBQWlDLCtCQUE0QjtJQUE3RDtRQUFBLHFFQTJCQztRQXpCRyxXQUFLLEdBQUc7WUFDSixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUM7UUFFRixvQkFBYyxHQUFHLFVBQUMsS0FBMEM7WUFDeEQsSUFBTSxJQUFJLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUUsQ0FBQztZQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUN0QyxDQUFDLENBQUM7O0lBaUJOLENBQUM7SUFmRyw0QkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUNILHVDQUFLLFNBQVMsRUFBQyxzQkFBc0I7WUFDakMsdUNBQUssU0FBUyxFQUFDLHFCQUFxQjtnQkFDaEMseUNBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLFdBQVcsRUFBQyxRQUFRLEVBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQy9CLENBQ0EsQ0FDSixDQUNULENBQUE7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBM0JELENBQWlDLGlCQUFTLEdBMkJ6QztBQTNCWSxrQ0FBVyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxzZWFyY2gtcGFuZWxcXHNlYXJjaC1wYW5lbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHNTZWFyY2hQYW5lbCB9IGZyb20gJy4vdHlwZXMtc2VhcmNoLXBhbmVsJztcclxuaW1wb3J0ICcuL3NlYXJjaC1wYW5lbC5jc3MnXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHNTZWFyY2hQYW5lbD4ge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHRlcm06ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIG9uU2VhcmNoQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlcm06IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVybSB9ICk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaENoYW5nZSggdGVybSApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wtd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1zZWFyY2gtZWxlbWVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIHNlYXJjaCBpbnB1dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=