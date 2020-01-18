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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcY29tcG9uZW50LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQXNDO0FBQ3RDLGdEQUEyQztBQUMzQyxnRUFBaUU7QUFFakUsZ0RBQTBCO0FBRTFCLFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUN2RCxJQUFNLG9CQUFvQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxJQUFNLFdBQVcsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsSUFBTSxLQUFLLEdBQXNCO1FBQzdCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLGdCQUFnQixFQUFFLG9CQUFvQjtRQUN0QyxPQUFPLEVBQUUsV0FBVztLQUN2QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFO1FBQ3JDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsdUJBQVcsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWxELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFO1FBQ2hCLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQWMsOEJBQUMsdUJBQVcsZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUEsc0NBQVEsQ0FBd0I7UUFDeEMsSUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsSUFBTSxLQUFLLHlCQUNKLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUNwQixjQUFjLEVBQUUsa0JBQWtC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XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGNvbXBvbmVudC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vdW50LCBzaGFsbG93fSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IElQcm9wc0l0ZW1BZGRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL3R5cGVzLWl0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vaXRlbS1hZGQtZm9ybS50c3gnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzZXRBZGRGaWVsZFZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIGNvbnN0IGFkZFRvRG9TdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wc0l0ZW1BZGRGb3JtID0ge1xyXG4gICAgICAgIGZpZWxkVmFsdWU6ICdmaWVsZCB2YWx1ZScsXHJcbiAgICAgICAgc2V0QWRkRmllbGRWYWx1ZTogc2V0QWRkRmllbGRWYWx1ZVN0dWIsXHJcbiAgICAgICAgYWRkVG9EbzogYWRkVG9Eb1N0dWIsXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBJdGVtQWRkRm9ybSBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJdGVtQWRkRm9ybSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblN1Ym1pdCB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8SXRlbUFkZEZvcm0+KDxJdGVtQWRkRm9ybSB7Li4ucHJvcHN9Lz4pO1xyXG4gICAgICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgICAgICAgIC4uLm5ldyBFdmVudCgnZm9ybScpLFxyXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogcHJldmVudERlZmF1bHRTdHViLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIG9uU3VibWl0KGV2ZW50IGFzIHVua25vd24gYXMgUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QocHJldmVudERlZmF1bHRTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseSgpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KGFkZFRvRG9TdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseSgnZmllbGQgdmFsdWUnKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIGV4cGVjdChzZXRBZGRGaWVsZFZhbHVlU3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoJycpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25MYWJlbENoYW5nZSBjaGVjaycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEl0ZW1BZGRGb3JtPig8SXRlbUFkZEZvcm0gey4uLnByb3BzfS8+KTtcclxuICAgICAgICBjb25zdCB7IG9uTGFiZWxDaGFuZ2UgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0ge1xyXG4gICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiAnbXlWYWx1ZScgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIG9uTGFiZWxDaGFuZ2UoZWxlbWVudCBhcyB1bmtub3duIGFzIENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHNldEFkZEZpZWxkVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseSgnbXlWYWx1ZScpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDRgdC10LvQtdC60YLQvtGA0YtcclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5pdGVtLWFkZC1mb3JtJ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5pdGVtLWFkZC1mb3JtLXdyYXBwZXInfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5pdGVtLWFkZC1mb3JtLXdyYXBwZXIgPiBpbnB1dCd9ICAgICAgICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5pdGVtLWFkZC1mb3JtLXdyYXBwZXIgPiBidXR0b24nfSAgICAgICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgaW4gQXBwSGVhZGVyICRleHBlY3RlZENsYXNzJywgKHtleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aH0pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wcyAsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJdGVtQWRkRm9ybSB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnY2hlY2sgcGxhY2Vob2xkZXIgdGV4dCBpbiBhZGQgZm9ybScsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2hhbGxvdyg8SXRlbUFkZEZvcm0geyAuLi5wcm9wcyB9IC8+KS5maW5kKCcuaXRlbS1hZGQtZm9ybS13cmFwcGVyID4gaW5wdXQnKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGNvbnRlbnQpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgICAgICBleHBlY3QoY29udGVudC5wcm9wcygpLnBsYWNlaG9sZGVyKS50b0VxdWFsKCdOZWVkcyB0byBiZSBEb25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnY2hlY2sgYWRkIGJ1dHRvbiB0ZXh0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gbW91bnQ8SXRlbUFkZEZvcm0+KDxJdGVtQWRkRm9ybSB7IC4uLnByb3BzIH0gLz4pO1xyXG4gICAgICAgIC8vV2hlblxyXG5cclxuICAgICAgICBjb25zdCBidXR0b24gPSBjb250ZW50LmZpbmQoJy5hZGQtaXRlbS1lbGVtZW50Jyk7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbi50ZXh0KCkpLnRvRXF1YWwoJ0FkZCcpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=