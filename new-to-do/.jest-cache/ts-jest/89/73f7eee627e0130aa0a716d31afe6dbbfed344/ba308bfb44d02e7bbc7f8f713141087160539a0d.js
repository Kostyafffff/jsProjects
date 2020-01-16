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
var component_1 = require("components/item-add-form/component");
var sinon_1 = __importDefault(require("sinon"));
describe('src/components/item-add-form/item-add-form.tsx', function () {
    var setAddFieldValueStub = sinon_1.default.stub();
    var addToDoStub = sinon_1.default.stub();
    var props = {
        fieldValue: 'field value',
        setAddFieldValue: setAddFieldValueStub,
        addToDo: addToDoStub,
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should ItemAddForm mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.ItemAddForm, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('onSubmit test', function () {
        //Given
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.ItemAddForm, __assign({}, props)));
        var onSubmit = wrapper.instance().onSubmit;
        var preventDefaultStub = sinon_1.default.stub();
        var event = __assign(__assign({}, new Event('form')), { preventDefault: preventDefaultStub });
        //When
        onSubmit(event);
        //Then
        expect(preventDefaultStub.calledOnceWithExactly()).toBeTruthy();
        expect(addToDoStub.calledOnceWithExactly('field value')).toBeTruthy();
        expect(setAddFieldValueStub.calledOnceWithExactly('')).toBeTruthy();
    });
    it('onLabelChange check', function () {
        //Given
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.ItemAddForm, __assign({}, props)));
        var onLabelChange = wrapper.instance().onLabelChange;
        var element = {
            target: { value: 'myValue' }
        };
        //When
        onLabelChange(element);
        //Then
        expect(setAddFieldValueStub.calledOnceWithExactly('myValue')).toBeTruthy();
    });
    // селекторы
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                                               | expectedLength\n        ", "                                         | ", "\n        ", "                                 | ", "\n        ", "                         | ", "\n        ", "                        | ", "\n        "], ["\n        expectedClass                                               | expectedLength\n        ", "                                         | ", "\n        ", "                                 | ", "\n        ", "                         | ", "\n        ", "                        | ", "\n        "])), '.item-add-form', 1, '.item-add-form-wrapper', 1, '.item-add-form-wrapper > input', 1, '.item-add-form-wrapper > button', 1)('should render in AppHeader $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        var currentProps = __assign(__assign({}, props), { filter: 'active' });
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.ItemAddForm, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
    it('check placeholder text in add form', function () {
        //When
        var content = enzyme_1.shallow(react_1.default.createElement(component_1.ItemAddForm, __assign({}, props))).find('.item-add-form-wrapper > input');
        //Then
        expect(content).toHaveLength(1);
        expect(content.props().placeholder).toEqual('Needs to be Done');
    });
    it('check add button text', function () {
        //Given
        var content = enzyme_1.mount(react_1.default.createElement(component_1.ItemAddForm, __assign({}, props)));
        //When
        var button = content.find('.add-item-element');
        //Then
        expect(button.text()).toEqual('Add');
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGNvbXBvbmVudC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFzQztBQUN0QyxnREFBMkM7QUFDM0MsZ0VBQWlFO0FBRWpFLGdEQUEwQjtBQUUxQixRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFDdkQsSUFBTSxvQkFBb0IsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUMsSUFBTSxXQUFXLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLElBQU0sS0FBSyxHQUFzQjtRQUM3QixVQUFVLEVBQUUsYUFBYTtRQUN6QixnQkFBZ0IsRUFBRSxvQkFBb0I7UUFDdEMsT0FBTyxFQUFFLFdBQVc7S0FDdkIsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTtRQUNyQyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLHVCQUFXLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNoQixPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLDhCQUFDLHVCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFBLHNDQUFRLENBQXdCO1FBQ3hDLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQU0sS0FBSyx5QkFDSixJQUFJLEtBQUssQ0FBQyxN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Q0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcY29tcG9uZW50LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW91bnQsIHNoYWxsb3d9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSXRlbUFkZEZvcm0gfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vY29tcG9uZW50JztcclxuaW1wb3J0IHsgSVByb3BzSXRlbUFkZEZvcm0gfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vdHlwZXMtaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtLnRzeCcsICgpID0+IHtcclxuICAgIGNvbnN0IHNldEFkZEZpZWxkVmFsdWVTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3QgYWRkVG9Eb1N0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzSXRlbUFkZEZvcm0gPSB7XHJcbiAgICAgICAgZmllbGRWYWx1ZTogJ2ZpZWxkIHZhbHVlJyxcclxuICAgICAgICBzZXRBZGRGaWVsZFZhbHVlOiBzZXRBZGRGaWVsZFZhbHVlU3R1YixcclxuICAgICAgICBhZGRUb0RvOiBhZGRUb0RvU3R1YixcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIEl0ZW1BZGRGb3JtIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEl0ZW1BZGRGb3JtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU3VibWl0IHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxJdGVtQWRkRm9ybT4oPEl0ZW1BZGRGb3JtIHsuLi5wcm9wc30vPik7XHJcbiAgICAgICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IHByZXZlbnREZWZhdWx0U3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgICAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgICAgICAgLi4ubmV3IEV2ZW50KCdmb3JtJyksXHJcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBwcmV2ZW50RGVmYXVsdFN0dWIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgb25TdWJtaXQoZXZlbnQgYXMgdW5rbm93biBhcyBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChwcmV2ZW50RGVmYXVsdFN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KCkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICBleHBlY3QoYWRkVG9Eb1N0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KCdmaWVsZCB2YWx1ZScpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KHNldEFkZEZpZWxkVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseSgnJykpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvbkxhYmVsQ2hhbmdlIGNoZWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8SXRlbUFkZEZvcm0+KDxJdGVtQWRkRm9ybSB7Li4ucHJvcHN9Lz4pO1xyXG4gICAgICAgIGNvbnN0IHsgb25MYWJlbENoYW5nZSB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6ICdteVZhbHVlJyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgb25MYWJlbENoYW5nZShlbGVtZW50IGFzIHVua25vd24gYXMgQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qoc2V0QWRkRmllbGRWYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KCdteVZhbHVlJykpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINGB0LXQu9C10LrRgtC+0YDRi1xyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLml0ZW0tYWRkLWZvcm0nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLml0ZW0tYWRkLWZvcm0td3JhcHBlcid9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLml0ZW0tYWRkLWZvcm0td3JhcHBlciA+IGlucHV0J30gICAgICAgICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLml0ZW0tYWRkLWZvcm0td3JhcHBlciA+IGJ1dHRvbid9ICAgICAgICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzICxcclxuICAgICAgICAgICAgZmlsdGVyOiAnYWN0aXZlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEl0ZW1BZGRGb3JtIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdjaGVjayBwbGFjZWhvbGRlciB0ZXh0IGluIGFkZCBmb3JtJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaGFsbG93KDxJdGVtQWRkRm9ybSB7IC4uLnByb3BzIH0gLz4pLmZpbmQoJy5pdGVtLWFkZC1mb3JtLXdyYXBwZXIgPiBpbnB1dCcpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoY29udGVudCkudG9IYXZlTGVuZ3RoKDEpO1xyXG4gICAgICAgIGV4cGVjdChjb250ZW50LnByb3BzKCkucGxhY2Vob2xkZXIpLnRvRXF1YWwoJ05lZWRzIHRvIGJlIERvbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdjaGVjayBhZGQgYnV0dG9uIHRleHQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtb3VudDxJdGVtQWRkRm9ybT4oPEl0ZW1BZGRGb3JtIHsgLi4ucHJvcHMgfSAvPik7XHJcbiAgICAgICAgLy9XaGVuXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNvbnRlbnQuZmluZCgnLmFkZC1pdGVtLWVsZW1lbnQnKTtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYnV0dG9uLnRleHQoKSkudG9FcXVhbCgnQWRkJyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==