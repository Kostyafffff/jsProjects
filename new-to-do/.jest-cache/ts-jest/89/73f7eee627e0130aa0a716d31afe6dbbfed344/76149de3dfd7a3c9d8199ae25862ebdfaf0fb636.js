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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxjb21wb25lbnQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsc0RBQStDO0FBQy9DLG9EQUFpRDtBQUNqRCxvRUFBaUU7QUFDakUsd0RBQXNEO0FBQ3RELDBEQUF1RDtBQUN2RCxrREFBZ0Q7QUFFaEQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzNCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtRQUNuQyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsZ0JBQU8sQ0FBQyxvQkFBQyxlQUFHLE9BQUcsQ0FBQyxDQUFDO1FBRWpDLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxvS0FBQSwrQkFFRCxFQUFXLFlBQ1gsRUFBa0IsWUFDbEIsRUFBYSxZQUNiLEVBQWEsWUFDYixFQUFVLFFBQ2YsS0FMTSxzQkFBUyxFQUNULHFDQUFnQixFQUNoQiwwQkFBVyxFQUNYLDJCQUFXLEVBQ1gsb0JBQVEsRUFDYiwwQkFBMEIsRUFBRSxVQUFDLEVBQWE7WUFBWCx3QkFBUztRQUN0QyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsZ0JBQU8sQ0FBQyxvQkFBQyxlQUFHLE9BQUcsQ0FBQyxDQUFDO1FBRWpDLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtdGVzdFxcY29tcG9uZW50LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJ2NvbXBvbmVudHMvYXBwL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcEhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvYXBwLWhlYWRlcidcclxuaW1wb3J0IHsgSXRlbVN0YXR1c0ZpbHRlciB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICdjb21wb25lbnRzL3NlYXJjaC1wYW5lbCc7XHJcbmltcG9ydCB7IEl0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICdjb21wb25lbnRzL3RvZG8tbGlzdCc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwJywgKCkgPT4ge1xyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxBcHAgLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBjb21wb25lbnRcclxuICAgICAgICAkeyBBcHBIZWFkZXIgfVxyXG4gICAgICAgICR7IEl0ZW1TdGF0dXNGaWx0ZXIgfVxyXG4gICAgICAgICR7IFNlYXJjaFBhbmVsIH1cclxuICAgICAgICAkeyBJdGVtQWRkRm9ybSB9XHJcbiAgICAgICAgJHsgVG9kb0xpc3QgfVxyXG4gICAgYCgnc2hvdWxkIHJlbmRlciAkY29tcG9uZW50JywgKHsgY29tcG9uZW50IH0pID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChjb21wb25lbnQpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9