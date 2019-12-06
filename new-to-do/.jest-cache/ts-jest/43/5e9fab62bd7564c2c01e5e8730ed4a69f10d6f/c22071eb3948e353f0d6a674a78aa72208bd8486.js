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
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.ItemAddForm, __assign({}, props)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('onSubmit test', function () {
        //Given
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.ItemAddForm, __assign({}, props)));
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
        var wrapper = enzyme_1.mount(react_1.default.createElement(item_add_form_1.ItemAddForm, __assign({}, props)));
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGl0ZW0tYWRkLWZvcm0udGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQixnREFBMkM7QUFDM0Msd0VBQXFFO0FBRXJFLGdEQUEwQjtBQUUxQixRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFDdkQsSUFBTSxhQUFhLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQU0sS0FBSyxHQUFzQjtRQUM1QixTQUFTLEVBQUUsYUFBYTtLQUM1QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQywyQkFBVyxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNoQixPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLDhCQUFDLDJCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBQSxzQ0FBUSxDQUF3QjtRQUN4QyxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFNLEtBQUsseUJBQ0osSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQ3BCLGNBQWMsRUFBRSxrQkFBa0IsR0FDckMsQ0FBQztRQUVGLE1BQU07UUFDTixRQUFRLENBQUMsS0FBb0QsQ0FBQyxDQUFDO1FBRS9ELE1BQU07UUFDTixNQUFNLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFFaEIsT0FBTztRQUNQLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBYyw4QkFBQywyQkFBVyxlQUFLLEtBQUssRUFBRyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUEsZ0RBQWEsQ0FBd0I7UUFDN0MsSUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1NBQzdCLENBQUM7UUFFRixNQUFNO1FBQ04sYUFBYSxDQUFDLE9BQW1ELENBQUMsQ0FBQztRQUVuRSxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaXRlbS1hZGQtZm9ybS50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSXRlbUFkZEZvcm0gfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCB7IElQcm9wc0l0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL3R5cGVzLWl0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vaXRlbS1hZGQtZm9ybS50c3gnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBvbkFkZEl0ZW1TdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wc0l0ZW1BZGRGb3JtID0ge1xyXG4gICAgICAgICBvbkFkZEl0ZW06IG9uQWRkSXRlbVN0dWIsXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJdGVtQWRkRm9ybSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblN1Ym1pdCB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8SXRlbUFkZEZvcm0+KDxJdGVtQWRkRm9ybSB7Li4ucHJvcHN9Lz4pO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0U3RhdGUoeyBsYWJlbDogJ2xhYmVsJyB9KTtcclxuICAgICAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgcHJldmVudERlZmF1bHRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xyXG4gICAgICAgICAgICAuLi5uZXcgRXZlbnQoJ2Zvcm0nKSxcclxuICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6IHByZXZlbnREZWZhdWx0U3R1YixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBvblN1Ym1pdChldmVudCBhcyB1bmtub3duIGFzIFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHByZXZlbnREZWZhdWx0U3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIGV4cGVjdChvbkFkZEl0ZW1TdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseSgnbGFiZWwnKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdsYWJlbCcpKS50b0VxdWFsKCcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvbkxhYmVsQ2hhbmdlJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEl0ZW1BZGRGb3JtPig8SXRlbUFkZEZvcm0gey4uLnByb3BzfS8+KTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgbGFiZWw6ICcnIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgb25MYWJlbENoYW5nZSB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6ICdteVZhbHVlJyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgb25MYWJlbENoYW5nZShlbGVtZW50IGFzIHVua25vd24gYXMgQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgpLmxhYmVsKS50b0VxdWFsKCdteVZhbHVlJyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==