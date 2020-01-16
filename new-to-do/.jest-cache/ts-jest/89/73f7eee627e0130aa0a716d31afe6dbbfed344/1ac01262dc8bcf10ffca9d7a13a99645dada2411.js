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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiwrQkFBa0M7QUFFbEMsOEJBQTJCO0FBQzNCO0lBQWlDLCtCQUE0QjtJQUE3RDtRQUFBLHFFQXdCQztRQXZCRyxvQkFBYyxHQUFHLFVBQUMsRUFBMEQ7Z0JBQTlDLHVCQUFLO1lBQ3ZCLElBQUEsMkNBQWMsQ0FBZ0I7WUFFdEMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQzs7SUFtQk4sQ0FBQztJQWpCRyw0QkFBTSxHQUFOO1FBQ1ksSUFBQSxrQ0FBVSxDQUFnQjtRQUVsQyxPQUFPLENBQ0gsdUNBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNqQyx1Q0FBSyxTQUFTLEVBQUMscUJBQXFCO2dCQUNoQyx5Q0FDSSxJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQywyQkFBMkIsRUFDckMsV0FBVyxFQUFDLFFBQVEsRUFDcEIsS0FBSyxFQUFFLFVBQVUsRUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQy9CLENBQ0EsQ0FDSixDQUNULENBQUE7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBeEJELENBQWlDLGlCQUFTLEdBd0J6QztBQXhCWSxrQ0FBVyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxzZWFyY2gtcGFuZWxcXGNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHNTZWFyY2hQYW5lbCB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgJy4vc2VhcmNoLXBhbmVsLmNzcydcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wc1NlYXJjaFBhbmVsPiB7XHJcbiAgICBvblNlYXJjaENoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRTZWFyY2hWYWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgc2V0U2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHsgZmllbGRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY29udHJvbC13cmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXNlYXJjaC1lbGVtZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgc2VhcmNoIGlucHV0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=