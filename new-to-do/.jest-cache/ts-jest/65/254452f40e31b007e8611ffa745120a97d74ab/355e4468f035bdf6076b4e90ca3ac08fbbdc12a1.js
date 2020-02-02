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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxpdGVtLXN0YXR1cy1maWx0ZXJcXGNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWtDO0FBQ2xDLGdEQUEwQjtBQUUxQixvQ0FBa0M7QUFDbEM7SUFBc0Msb0NBQWlDO0lBQXZFO1FBQUEscUVBeUNDO1FBeENHLGFBQU8sR0FBZTtZQUNsQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNsQyxDQUFDO1FBRUYsbUJBQWEsR0FBRyxVQUFDLEVBQWlGO2dCQUE5RCxzQ0FBUztZQUNqQyxJQUFBLDJDQUFjLENBQWdCO1lBRXRDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7O0lBOEJOLENBQUM7SUE1QkcsaUNBQU0sR0FBTjtRQUFBLGlCQTJCQztRQTFCVyxJQUFBLDBCQUFNLENBQWdCO1FBRTlCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZTtnQkFBYixjQUFJLEVBQUUsZ0JBQUs7WUFDM0MsSUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLElBQUksQ0FBQztZQUNqQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7WUFFOUQsT0FBTyxDQUNILDBDQUNJLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFFLFNBQU8sS0FBTyxFQUN6QixHQUFHLEVBQUUsSUFBSSxFQUNULFNBQVMsRUFBRSxJQUFJLEVBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxhQUFhLElBRXpCLEtBQUssQ0FDRixDQUNaLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FDSCx1Q0FBSyxTQUFTLEVBQUMsV0FBVztZQUN0Qix1Q0FBSyxTQUFTLEVBQUMsbUJBQW1CLElBQzVCLE9BQU8sQ0FDUCxDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUF6Q0QsQ0FBc0MsaUJBQVMsR0F5QzlDO0FBekNZLDRDQUFnQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJFOlxcSnNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXGl0ZW0tc3RhdHVzLWZpbHRlclxcY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wc0l0ZW1TdGF0dXNGaWx0ZXIsIElCdXR0b25zIH0gZnJvbSAnLi90eXBlcy1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0ICcuL2l0ZW0tc3RhdHVzLWZpbHRlci5jc3MnO1xyXG5leHBvcnQgY2xhc3MgSXRlbVN0YXR1c0ZpbHRlciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHNJdGVtU3RhdHVzRmlsdGVyPiB7XHJcbiAgICBidXR0b25zOiBJQnV0dG9uc1tdID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ2FsbCcsIGxhYmVsOiAnQWxsJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2FjdGl2ZScsIGxhYmVsOiAnQWN0aXZlJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2RvbmUnLCBsYWJlbDogJ0RvbmUnIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2sgPSAoeyBjdXJyZW50VGFyZ2V0OiB7IGFjY2Vzc0tleSB9IH06IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvbkZpbHRlckNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2UoYWNjZXNzS2V5KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBjb25zdCB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucy5tYXAoKHsgbmFtZSwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGZpbHRlciA9PT0gbmFtZTtcclxuICAgICAgICAgICAgY29uc3QgY2xhenogPSBpc0FjdGl2ZSA/ICdidG4taW5mbycgOiAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuICR7Y2xhenp9YH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsIH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBidXR0b25zIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInZlcnNpb24iOjN9