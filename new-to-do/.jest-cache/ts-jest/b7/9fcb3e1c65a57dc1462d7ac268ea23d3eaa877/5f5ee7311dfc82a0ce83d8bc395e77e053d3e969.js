"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var item_add_form_1 = require("components/item-add-form/item-add-form");
var sinon_1 = __importDefault(require("sinon"));
describe('src/components/item-add-form/item-add-form.tsx', function () {
    var onAddItemStub = sinon_1.default.stub();
    var props = {
        onAddItem: onAddItemStub,
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.Component, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('onSubmit test', function () {
        //Given
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.Component, __assign({}, props)));
        wrapper.setState({ label: 'label' });
        var onSubmit = wrapper.instance().onSubmit;
        var preventDefaultStub = sinon_1.default.stub();
        var event = __assign(__assign({}, new Event('form')), { preventDefault: preventDefaultStub });
        //When
        onSubmit(event);
        //Then
        expect(preventDefaultStub.calledOnceWithExactly()).toBeTruthy();
        expect(onAddItemStub.calledOnceWithExactly('label')).toBeTruthy();
        expect(wrapper.state('label')).toEqual('');
    });
    it('onLabelChange check', function () {
        //Given
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.Component, __assign({}, props)));
        wrapper.setState({ label: '' });
        var onLabelChange = wrapper.instance().onLabelChange;
        var element = {
            target: { value: 'myValue' }
        };
        //When
        onLabelChange(element);
        //Then
        expect(wrapper.state().label).toEqual('myValue');
    });
    // селекторы
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                                               | expectedLength\n        ", "                                         | ", "\n        ", "                                 | ", "\n        ", "                         | ", "\n        ", "                        | ", "\n        "], ["\n        expectedClass                                               | expectedLength\n        ", "                                         | ", "\n        ", "                                 | ", "\n        ", "                         | ", "\n        ", "                        | ", "\n        "])), '.item-add-form', 1, '.item-add-form-wrapper', 1, '.item-add-form-wrapper > input', 1, '.item-add-form-wrapper > button', 1)('should render in AppHeader $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        var currentProps = __assign(__assign({}, props), { filter: 'active' });
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.Component, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
    it('check placeholder text in add form', function () {
        //When
        var content = enzyme_1.shallow(react_1.default.createElement(item_add_form_1.Component, __assign({}, props))).find('.item-add-form-wrapper > input');
        //Then
        expect(content).toHaveLength(1);
        expect(content.props().placeholder).toEqual('Needs to be Done');
    });
    it('check add button text', function () {
        //Given
        var content = enzyme_1.mount(react_1.default.createElement(item_add_form_1.Component, __assign({}, props)));
        //When
        var button = content.find('.add-item-element');
        //Then
        expect(button.text()).toEqual('Add');
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGl0ZW0tYWRkLWZvcm0udGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBc0M7QUFDdEMsZ0RBQTJDO0FBQzNDLHdFQUFxRTtBQUVyRSxnREFBMEI7QUFDMUIsUUFBUSxDQUFDLGdEQUFnRCxFQUFFO0lBQ3ZELElBQU0sYUFBYSxHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFNLEtBQUssR0FBc0I7UUFDNUIsU0FBUyxFQUFFLGFBQWE7S0FDNUIsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLDJCQUFXLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNoQixPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLDhCQUFDLDJCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBQSxzQ0FBUSxDQUF3QjtRQUN4QyxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFNLEtBQUsseUJBQ0osSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQ3BCLGNBQWMsRUFBRSxrQkFB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QUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxpdGVtLWFkZC1mb3JtXFxpdGVtLWFkZC1mb3JtLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW91bnQsIHNoYWxsb3d9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSXRlbUFkZEZvcm0gfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCB7IElQcm9wc0l0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL3R5cGVzLWl0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtLnRzeCcsICgpID0+IHtcclxuICAgIGNvbnN0IG9uQWRkSXRlbVN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzSXRlbUFkZEZvcm0gPSB7XHJcbiAgICAgICAgIG9uQWRkSXRlbTogb25BZGRJdGVtU3R1YixcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEl0ZW1BZGRGb3JtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU3VibWl0IHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxJdGVtQWRkRm9ybT4oPEl0ZW1BZGRGb3JtIHsuLi5wcm9wc30vPik7XHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSh7IGxhYmVsOiAnbGFiZWwnIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgICAgICAgIC4uLm5ldyBFdmVudCgnZm9ybScpLFxyXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogcHJldmVudERlZmF1bHRTdHViLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIG9uU3VibWl0KGV2ZW50IGFzIHVua25vd24gYXMgUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QocHJldmVudERlZmF1bHRTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseSgpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KG9uQWRkSXRlbVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KCdsYWJlbCcpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2xhYmVsJykpLnRvRXF1YWwoJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uTGFiZWxDaGFuZ2UgY2hlY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxJdGVtQWRkRm9ybT4oPEl0ZW1BZGRGb3JtIHsuLi5wcm9wc30vPik7XHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSh7IGxhYmVsOiAnJyB9KTtcclxuICAgICAgICBjb25zdCB7IG9uTGFiZWxDaGFuZ2UgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0ge1xyXG4gICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiAnbXlWYWx1ZScgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIG9uTGFiZWxDaGFuZ2UoZWxlbWVudCBhcyB1bmtub3duIGFzIENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoKS5sYWJlbCkudG9FcXVhbCgnbXlWYWx1ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0YHQtdC70LXQutGC0L7RgNGLXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuaXRlbS1hZGQtZm9ybSd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuaXRlbS1hZGQtZm9ybS13cmFwcGVyJ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuaXRlbS1hZGQtZm9ybS13cmFwcGVyID4gaW5wdXQnfSAgICAgICAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuaXRlbS1hZGQtZm9ybS13cmFwcGVyID4gYnV0dG9uJ30gICAgICAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyIGluIEFwcEhlYWRlciAkZXhwZWN0ZWRDbGFzcycsICh7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHMgLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdhY3RpdmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8SXRlbUFkZEZvcm0gey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2NoZWNrIHBsYWNlaG9sZGVyIHRleHQgaW4gYWRkIGZvcm0nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNoYWxsb3coPEl0ZW1BZGRGb3JtIHsgLi4ucHJvcHMgfSAvPikuZmluZCgnLml0ZW0tYWRkLWZvcm0td3JhcHBlciA+IGlucHV0Jyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChjb250ZW50KS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICAgICAgZXhwZWN0KGNvbnRlbnQucHJvcHMoKS5wbGFjZWhvbGRlcikudG9FcXVhbCgnTmVlZHMgdG8gYmUgRG9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2NoZWNrIGFkZCBidXR0b24gdGV4dCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1vdW50PEl0ZW1BZGRGb3JtPig8SXRlbUFkZEZvcm0geyAuLi5wcm9wcyB9IC8+KTtcclxuICAgICAgICAvL1doZW5cclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY29udGVudC5maW5kKCcuYWRkLWl0ZW0tZWxlbWVudCcpO1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChidXR0b24udGV4dCgpKS50b0VxdWFsKCdBZGQnKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==