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
var react_1 = require("react");
var react_2 = __importDefault(require("react"));
require("./item-status-filter.css");
var ItemStatusFilter = /** @class */ (function (_super) {
    __extends(ItemStatusFilter, _super);
    function ItemStatusFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = [
            { name: 'all', label: 'All' },
            { name: 'active', label: 'Active' },
            { name: 'done', label: 'Done' },
        ];
        _this.onButtonClick = function (_a) {
            var accessKey = _a.currentTarget.accessKey;
            var onFilterChange = _this.props.onFilterChange;
            onFilterChange(accessKey);
        };
        return _this;
    }
    ItemStatusFilter.prototype.render = function () {
        var _this = this;
        var filter = this.props.filter;
        var buttons = this.buttons.map(function (_a) {
            var name = _a.name, label = _a.label;
            var isActive = filter === name;
            var clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (react_2.default.createElement("button", { type: "button", className: "btn " + clazz, key: name, accessKey: name, onClick: _this.onButtonClick }, label));
        });
        return (react_2.default.createElement("div", { className: "btn-group" },
            react_2.default.createElement("div", { className: "btn-group-wrapper" }, buttons)));
    };
    return ItemStatusFilter;
}(react_1.Component));
exports.ItemStatusFilter = ItemStatusFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcaXRlbS1zdGF0dXMtZmlsdGVyXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFrQztBQUNsQyxnREFBMEI7QUFFMUIsb0NBQWtDO0FBQ2xDO0lBQXNDLG9DQUFpQztJQUF2RTtRQUFBLHFFQXlDQztRQXhDRyxhQUFPLEdBQWU7WUFDbEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7U0FDbEMsQ0FBQztRQUVGLG1CQUFhLEdBQUcsVUFBQyxFQUFpRjtnQkFBOUQsc0NBQVM7WUFDakMsSUFBQSwyQ0FBYyxDQUFnQjtZQUV0QyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDOztJQThCTixDQUFDO0lBNUJHLGlDQUFNLEdBQU47UUFBQSxpQkEyQkM7UUExQlcsSUFBQSwwQkFBTSxDQUFnQjtRQUU5QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsY0FBSSxFQUFFLGdCQUFLO1lBQzNDLElBQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxJQUFJLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO1lBRTlELE9BQU8sQ0FDSCwwQ0FDSSxJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBRSxTQUFPLEtBQU8sRUFDekIsR0FBRyxFQUFFLElBQUksRUFDVCxTQUFTLEVBQUUsSUFBSSxFQUNmLE9BQU8sRUFBRSxLQUFJLENBQUMsYUFBYSxJQUV6QixLQUFLLENBQ0YsQ0FDWixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQ0gsdUNBQUssU0FBUyxFQUFDLFdBQVc7WUFDdEIsdUNBQUssU0FBUyxFQUFDLG1CQUFtQixJQUM1QixPQUFPLENBQ1AsQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBekNELENBQXNDLGlCQUFTLEdBeUM5QztBQXpDWSw0Q0FBZ0IiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcaXRlbS1zdGF0dXMtZmlsdGVyXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzSXRlbVN0YXR1c0ZpbHRlciwgSUJ1dHRvbnMgfSBmcm9tICcuL3R5cGVzLXN0YXR1cy1maWx0ZXInO1xyXG5pbXBvcnQgJy4vaXRlbS1zdGF0dXMtZmlsdGVyLmNzcyc7XHJcbmV4cG9ydCBjbGFzcyBJdGVtU3RhdHVzRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wc0l0ZW1TdGF0dXNGaWx0ZXI+IHtcclxuICAgIGJ1dHRvbnM6IElCdXR0b25zW10gPSBbXHJcbiAgICAgICAgeyBuYW1lOiAnYWxsJywgbGFiZWw6ICdBbGwnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYWN0aXZlJywgbGFiZWw6ICdBY3RpdmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnZG9uZScsIGxhYmVsOiAnRG9uZScgfSxcclxuICAgIF07XHJcblxyXG4gICAgb25CdXR0b25DbGljayA9ICh7IGN1cnJlbnRUYXJnZXQ6IHsgYWNjZXNzS2V5IH0gfTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCB7IG9uRmlsdGVyQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBvbkZpbHRlckNoYW5nZShhY2Nlc3NLZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHsgZmlsdGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zLm1hcCgoeyBuYW1lLCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZmlsdGVyID09PSBuYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBjbGF6eiA9IGlzQWN0aXZlID8gJ2J0bi1pbmZvJyA6ICdidG4tb3V0bGluZS1zZWNvbmRhcnknO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gJHtjbGF6en1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXk9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IGJ1dHRvbnMgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwidmVyc2lvbiI6M30=