"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var enzyme_1 = require("enzyme");
var app_1 = require("components/app");
var app_header_1 = require("components/app-header");
var item_status_filter_1 = require("components/item-status-filter");
var search_panel_1 = require("components/search-panel");
var item_add_form_1 = require("components/item-add-form");
var todo_list_1 = require("components/todo-list");
describe('src/components/App', function () {
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.shallow(React.createElement(app_1.App, null));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        component\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    "], ["\n        component\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    "])), app_header_1.AppHeader, item_status_filter_1.ItemStatusFilter, search_panel_1.SearchPanel, item_add_form_1.ItemAddForm, todo_list_1.TodoList)('should render $component', function (_a) {
        var component = _a.component;
        //When
        var wrapper = enzyme_1.shallow(React.createElement(app_1.App, null));
        //Then
        expect(wrapper.find(component)).toHaveLength(1);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxzQ0FBcUM7QUFDckMsb0RBQWlEO0FBQ2pELG9FQUFpRTtBQUNqRSx3REFBc0Q7QUFDdEQsMERBQXVEO0FBQ3ZELGtEQUFnRDtBQUVoRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ25DLElBQU0sT0FBTyxHQUFHLGdCQUFPLENBQUMsb0JBQUMsU0FBRyxPQUFHLENBQUMsQ0FBQztRQUVqQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxvS0FBQSwrQkFFRCxFQUFTLFlBQ1QsRUFBZ0IsWUFDaEIsRUFBVyxZQUNYLEVBQVcsWUFDWCxFQUFRLFFBQ2IsS0FMSyxzQkFBUyxFQUNULHFDQUFnQixFQUNoQiwwQkFBVyxFQUNYLDJCQUFXLEVBQ1gsb0JBQVEsRUFDWiwwQkFBMEIsRUFBRSxVQUFDLEVBQWE7WUFBWCx3QkFBUztRQUN0QyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsZ0JBQU8sQ0FBQyxvQkFBQyxTQUFHLE9BQUcsQ0FBQyxDQUFDO1FBRWpDLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtdGVzdFxcaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXInXHJcbmltcG9ydCB7IEl0ZW1TdGF0dXNGaWx0ZXIgfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tc3RhdHVzLWZpbHRlcic7XHJcbmltcG9ydCB7IFNlYXJjaFBhbmVsIH0gZnJvbSAnY29tcG9uZW50cy9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBJdGVtQWRkRm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCB7IFRvZG9MaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b2RvLWxpc3QnO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcCcsICgpID0+IHtcclxuICAgIGl0KCdBcHAgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgY29tcG9uZW50XHJcbiAgICAgICAgJHtBcHBIZWFkZXJ9XHJcbiAgICAgICAgJHtJdGVtU3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICR7U2VhcmNoUGFuZWx9XHJcbiAgICAgICAgJHtJdGVtQWRkRm9ybX1cclxuICAgICAgICAke1RvZG9MaXN0fVxyXG4gICAgYCgnc2hvdWxkIHJlbmRlciAkY29tcG9uZW50JywgKHsgY29tcG9uZW50IH0pID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChjb21wb25lbnQpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9