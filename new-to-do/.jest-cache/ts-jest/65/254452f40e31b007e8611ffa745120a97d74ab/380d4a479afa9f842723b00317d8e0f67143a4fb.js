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
var component_1 = require("components/app/component");
var app_header_1 = require("components/app-header");
var item_status_filter_1 = require("components/item-status-filter");
var search_panel_1 = require("components/search-panel");
var item_add_form_1 = require("components/item-add-form");
var todo_list_1 = require("components/todo-list");
describe('src/components/App', function () {
    it('App component should be rendered', function () {
        //When
        var wrapper = enzyme_1.shallow(React.createElement(component_1.App, null));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        component\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    "], ["\n        component\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    "])), app_header_1.AppHeader, item_status_filter_1.ItemStatusFilter, search_panel_1.SearchPanel, item_add_form_1.ItemAddForm, todo_list_1.TodoList)('should render $component', function (_a) {
        var component = _a.component;
        //When
        var wrapper = enzyme_1.shallow(React.createElement(component_1.App, null));
        //Then
        expect(wrapper.find(component)).toHaveLength(1);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLXRlc3RcXGNvbXBvbmVudC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxzREFBK0M7QUFDL0Msb0RBQWlEO0FBQ2pELG9FQUFpRTtBQUNqRSx3REFBc0Q7QUFDdEQsMERBQXVEO0FBQ3ZELGtEQUFnRDtBQUVoRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ25DLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUFDLG9CQUFDLGVBQUcsT0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLG9LQUFBLCtCQUVELEVBQVcsWUFDWCxFQUFrQixZQUNsQixFQUFhLFlBQ2IsRUFBYSxZQUNiLEVBQVUsUUFDZixLQUxNLHNCQUFTLEVBQ1QscUNBQWdCLEVBQ2hCLDBCQUFXLEVBQ1gsMkJBQVcsRUFDWCxvQkFBUSxFQUNiLDBCQUEwQixFQUFFLFVBQUMsRUFBYTtZQUFYLHdCQUFTO1FBQ3RDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUFDLG9CQUFDLGVBQUcsT0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLXRlc3RcXGNvbXBvbmVudC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL2FwcC9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXInXHJcbmltcG9ydCB7IEl0ZW1TdGF0dXNGaWx0ZXIgfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tc3RhdHVzLWZpbHRlcic7XHJcbmltcG9ydCB7IFNlYXJjaFBhbmVsIH0gZnJvbSAnY29tcG9uZW50cy9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBJdGVtQWRkRm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCB7IFRvZG9MaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b2RvLWxpc3QnO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcCcsICgpID0+IHtcclxuICAgIGl0KCdBcHAgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgY29tcG9uZW50XHJcbiAgICAgICAgJHsgQXBwSGVhZGVyIH1cclxuICAgICAgICAkeyBJdGVtU3RhdHVzRmlsdGVyIH1cclxuICAgICAgICAkeyBTZWFyY2hQYW5lbCB9XHJcbiAgICAgICAgJHsgSXRlbUFkZEZvcm0gfVxyXG4gICAgICAgICR7IFRvZG9MaXN0IH1cclxuICAgIGAoJ3Nob3VsZCByZW5kZXIgJGNvbXBvbmVudCcsICh7IGNvbXBvbmVudCB9KSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPEFwcCAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoY29tcG9uZW50KSkudG9IYXZlTGVuZ3RoKDEpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==