"use strict";
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
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.Component, __assign({}, props)));
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
    it('onLabelChange', function () {
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
    it('should');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGl0ZW0tYWRkLWZvcm0udGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQixnREFBMkM7QUFDM0Msd0VBQXFFO0FBRXJFLGdEQUEwQjtBQUUxQixRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFDdkQsSUFBTSxhQUFhLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQU0sS0FBSyxHQUFzQjtRQUM1QixTQUFTLEVBQUUsYUFBYTtLQUM1QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQywyQkFBVyxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNoQixPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLDhCQUFDLDJCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBQSxzQ0FBUSxDQUF3QjtRQUN4QyxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFNLEtBQUsseUJBQ0osSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQ3BCLGNBQWMsRUFBRSxrQkFBa0IsR0FDckMsQ0FBQztRQUVGLE1BQU07UUFDTixRQUFRLENBQUMsS0FBb0QsQ0FBQyxDQUFDO1FBRS9ELE1BQU07UUFDTixNQUFNLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDaEIsT0FBTztRQUNQLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBYyw4QkFBQywyQkFBVyxlQUFLLEtBQUssRUFBRyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUEsZ0RBQWEsQ0FBd0I7UUFDN0MsSUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1NBQzdCLENBQUM7UUFFRixNQUFNO1FBQ04sYUFBYSxDQUFDLE9BQW1ELENBQUMsQ0FBQztRQUVuRSxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDaEIsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGl0ZW0tYWRkLWZvcm0udGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2l0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgeyBJUHJvcHNJdGVtQWRkRm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS90eXBlcy1pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2l0ZW0tYWRkLWZvcm0udHN4JywgKCkgPT4ge1xyXG4gICAgY29uc3Qgb25BZGRJdGVtU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIGNvbnN0IHByb3BzOiBJUHJvcHNJdGVtQWRkRm9ybSA9IHtcclxuICAgICAgICAgb25BZGRJdGVtOiBvbkFkZEl0ZW1TdHViLFxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8SXRlbUFkZEZvcm0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25TdWJtaXQgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEl0ZW1BZGRGb3JtPig8SXRlbUFkZEZvcm0gey4uLnByb3BzfS8+KTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgbGFiZWw6ICdsYWJlbCcgfSk7XHJcbiAgICAgICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IHByZXZlbnREZWZhdWx0U3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgICAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgICAgICAgLi4ubmV3IEV2ZW50KCdmb3JtJyksXHJcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBwcmV2ZW50RGVmYXVsdFN0dWIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgb25TdWJtaXQoZXZlbnQgYXMgdW5rbm93biBhcyBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChwcmV2ZW50RGVmYXVsdFN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KCkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICBleHBlY3Qob25BZGRJdGVtU3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoJ2xhYmVsJykpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgnbGFiZWwnKSkudG9FcXVhbCgnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25MYWJlbENoYW5nZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEl0ZW1BZGRGb3JtPig8SXRlbUFkZEZvcm0gey4uLnByb3BzfS8+KTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgbGFiZWw6ICcnIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgb25MYWJlbENoYW5nZSB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6ICdteVZhbHVlJyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgb25MYWJlbENoYW5nZShlbGVtZW50IGFzIHVua25vd24gYXMgQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgpLmxhYmVsKS50b0VxdWFsKCdteVZhbHVlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkJylcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==