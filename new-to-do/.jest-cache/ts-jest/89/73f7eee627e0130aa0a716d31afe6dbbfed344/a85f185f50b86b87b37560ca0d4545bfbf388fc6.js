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
        //When
        var wrapper = enzyme_1.shallow(React.createElement(app_1.App, null));
        //Then
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxzQ0FBcUM7QUFDckMsb0RBQWlEO0FBQ2pELG9FQUFpRTtBQUNqRSx3REFBc0Q7QUFDdEQsMERBQXVEO0FBQ3ZELGtEQUFnRDtBQUVoRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ25DLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUFDLG9CQUFDLFNBQUcsT0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLG9LQUFBLCtCQUVELEVBQVcsWUFDWCxFQUFrQixZQUNsQixFQUFhLFlBQ2IsRUFBYSxZQUNiLEVBQVUsUUFDZixLQUxNLHNCQUFTLEVBQ1QscUNBQWdCLEVBQ2hCLDBCQUFXLEVBQ1gsMkJBQVcsRUFDWCxvQkFBUSxFQUNiLDBCQUEwQixFQUFFLFVBQUMsRUFBYTtZQUFYLHdCQUFTO1FBQ3RDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUFDLG9CQUFDLFNBQUcsT0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL2FwcCc7XHJcbmltcG9ydCB7IEFwcEhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvYXBwLWhlYWRlcidcclxuaW1wb3J0IHsgSXRlbVN0YXR1c0ZpbHRlciB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICdjb21wb25lbnRzL3NlYXJjaC1wYW5lbCc7XHJcbmltcG9ydCB7IEl0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICdjb21wb25lbnRzL3RvZG8tbGlzdCc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwJywgKCkgPT4ge1xyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxBcHAgLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBjb21wb25lbnRcclxuICAgICAgICAkeyBBcHBIZWFkZXIgfVxyXG4gICAgICAgICR7IEl0ZW1TdGF0dXNGaWx0ZXIgfVxyXG4gICAgICAgICR7IFNlYXJjaFBhbmVsIH1cclxuICAgICAgICAkeyBJdGVtQWRkRm9ybSB9XHJcbiAgICAgICAgJHsgVG9kb0xpc3QgfVxyXG4gICAgYCgnc2hvdWxkIHJlbmRlciAkY29tcG9uZW50JywgKHsgY29tcG9uZW50IH0pID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChjb21wb25lbnQpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9