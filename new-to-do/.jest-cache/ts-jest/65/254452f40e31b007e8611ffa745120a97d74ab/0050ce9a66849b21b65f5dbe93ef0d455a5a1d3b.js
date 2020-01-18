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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var component_1 = require("../../../src/components/item-status-filter/component");
describe('src/components/item-status-filter/item-status-filter', function () {
    var props = {
        filter: '',
        onFilterChange: sinon_1.default.stub()
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('Item status filter should be defined', function () {
        expect(component_1.ItemStatusFilter).toBeDefined();
    });
    it('should ItemStatusFilter mount component', function () {
        //When
        var wrapper = enzyme_1.mount(React.createElement(component_1.ItemStatusFilter, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                                       | expectedLength\n        ", "                                     | ", "\n        ", "                             | ", "\n        ", "      | ", "\n        ", "                   | ", "\n        "], ["\n        expectedClass                                       | expectedLength\n        ", "                                     | ", "\n        ", "                             | ", "\n        ", "      | ", "\n        ", "                   | ", "\n        "])), '.btn-group', 1, '.btn-group-wrapper', 1, '.btn-group-wrapper .btn-outline-secondary', 2, '.btn-group-wrapper .btn-info', 1)('should render in AppHeader $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        var currentProps = __assign(__assign({}, props), { filter: 'active' });
        //When
        var wrapper = enzyme_1.mount(React.createElement(component_1.ItemStatusFilter, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        index   |   propName        |   expected\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n    "], ["\n        index   |   propName        |   expected\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n        ", "    |   ", "  |   ", "\n    "])), 0, 'className', 'btn btn-outline-secondary', 0, 'accessKey', 'all', 1, 'className', 'btn btn-outline-secondary', 1, 'accessKey', 'active', 2, 'className', 'btn btn-outline-secondary', 2, 'accessKey', 'done')('should render button at $index with prop $propName', function (_a) {
        var index = _a.index, propName = _a.propName, expected = _a.expected;
        //When
        var wrapper = enzyme_1.mount(React.createElement(component_1.ItemStatusFilter, __assign({}, props)));
        var buttons = wrapper.find('[type="button"]');
        //Then
        expect(buttons.at(index).prop(propName)).toEqual(expected);
    });
    it.each(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        index   |   text\n        ", "    |   ", "\n        ", "    |   ", "\n        ", "    |   ", "\n    "], ["\n        index   |   text\n        ", "    |   ", "\n        ", "    |   ", "\n        ", "    |   ", "\n    "])), 0, 'All', 1, 'Active', 2, 'Done')('should render button at $index with text $text', function (_a) {
        var index = _a.index, text = _a.text;
        //Given
        var wrapper = enzyme_1.mount(React.createElement(component_1.ItemStatusFilter, __assign({}, props)));
        var onButtonClick = wrapper.instance().onButtonClick;
        //When
        var buttons = wrapper.find('[type="button"]');
        //Then
        expect(buttons.at(index).text()).toEqual(text);
        expect(buttons.at(index).prop('onClick')).toEqual(onButtonClick);
    });
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1zdGF0dXMtZmlsdGVyXFxjb21wb25lbnQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLGlDQUFnQztBQUNoQywyQ0FBK0I7QUFDL0Isa0ZBQXdGO0FBRXhGLFFBQVEsQ0FBQyxzREFBc0QsRUFBRTtJQUM3RCxJQUFNLEtBQUssR0FBRztRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsY0FBYyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7S0FDL0IsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNSLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtRQUN2QyxNQUFNLENBQUMsNEJBQWdCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtRQUMxQyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLDRCQUFnQixlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFdkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLHdVQUFBLDBGQUVELEVBQVkseUNBQTBDLEVBQUMsWUFDdkQsRUFBb0IsaUNBQWtDLEVBQUMsWUFDdkQsRUFBMkMsVUFBVyxFQUFDLFlBQ3ZELEVBQThCLHVCQUF3QixFQUFDLFlBQ3hELEtBSkMsWUFBWSxFQUEwQyxDQUFDLEVBQ3ZELG9CQUFvQixFQUFrQyxDQUFDLEVBQ3ZELDJDQUEyQyxFQUFXLENBQUMsRUFDdkQsOEJBQThCLEVBQXdCLENBQUMsRUFDdkQsMkNBQTJDLEVBQUUsVUFBQyxFQUErQjtZQUE5QixnQ0FBYSxFQUFFLGtDQUFjO1FBQzlFLElBQU0sWUFBWSx5QkFDVixLQUFLLEtBQ1QsTUFBTSxFQUFFLFFBQVEsR0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsNEJBQWdCLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUU5RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxxVkFBQSw4REFFRCxFQUFDLFVBQVcsRUFBVyxRQUFTLEVBQTJCLFlBQzNELEVBQUMsVUFBVyxFQUFXLFFBQVMsRUFBSyxZQUNyQyxFQUFDLFVBQVcsRUFBVyxRQUFTLEVBQTJCLFlBQzNELEVBQUMsVUFBVyxFQUFXLFFBQVMsRUFBUSxZQUN4QyxFQUFDLFVBQVcsRUFBVyxRQUFTLEVBQTJCLFlBQzNELEVBQUMsVUFBVyxFQUFXLFFBQVMsRUFBTSxRQUMzQyxLQU5LLENBQUMsRUFBVyxXQUFXLEVBQVMsMkJBQTJCLEVBQzNELENBQUMsRUFBVyxXQUFXLEVBQVMsS0FBSyxFQUNyQyxDQUFDLEVBQVcsV0FBVyxFQUFTLDJCQUEyQixFQUMzRCxDQUFDLEVBQVcsV0FBVyxFQUFTLFFBQVEsRUFDeEMsQ0FBQyxFQUFXLFdBQVcsRUFBUywyQkFBMkIsRUFDM0QsQ0FBQyxFQUFXLFdBQVcsRUFBUyxNQUFNLEVBQzFDLG9EQUFvRCxFQUFFLFVBQUMsRUFJeEQ7WUFIRyxnQkFBSyxFQUNMLHNCQUFRLEVBQ1Isc0JBQVE7UUFFUixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLDRCQUFnQixlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRWhELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxtTEFBQSxzQ0FFRCxFQUFDLFVBQVcsRUFBSyxZQUNqQixFQUFDLFVBQVcsRUFBUSxZQUNwQixFQUFDLFVBQVcsRUFBTSxRQUN2QixLQUhLLENBQUMsRUFBVyxLQUFLLEVBQ2pCLENBQUMsRUFBVyxRQUFRLEVBQ3BCLENBQUMsRUFBVyxNQUFNLEVBQ3RCLGdEQUFnRCxFQUFFLFVBQUMsRUFBZTtZQUFiLGdCQUFLLEVBQUUsY0FBSTtRQUM5RCxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFtQixvQkFBQyw0QkFBZ0IsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUEsZ0RBQWEsQ0FBd0I7UUFFN0MsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1zdGF0dXMtZmlsdGVyXFxjb21wb25lbnQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0ICB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJdGVtU3RhdHVzRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0tc3RhdHVzLWZpbHRlci9jb21wb25lbnRcIjtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9pdGVtLXN0YXR1cy1maWx0ZXIvaXRlbS1zdGF0dXMtZmlsdGVyJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvcHMgPSB7XHJcbiAgICAgICAgZmlsdGVyOiAnJyxcclxuICAgICAgICBvbkZpbHRlckNoYW5nZTogc2lub24uc3R1YigpXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnSXRlbSBzdGF0dXMgZmlsdGVyIHNob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIGV4cGVjdChJdGVtU3RhdHVzRmlsdGVyKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBJdGVtU3RhdHVzRmlsdGVyIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEl0ZW1TdGF0dXNGaWx0ZXIgey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmJ0bi1ncm91cCd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5idG4tZ3JvdXAtd3JhcHBlcid9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuYnRuLWdyb3VwLXdyYXBwZXIgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSd9ICAgICAgfCAkezJ9XHJcbiAgICAgICAgJHsnLmJ0bi1ncm91cC13cmFwcGVyIC5idG4taW5mbyd9ICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgaW4gQXBwSGVhZGVyICRleHBlY3RlZENsYXNzJywgKHtleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aH0pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAuLi5wcm9wcyAsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJdGVtU3RhdHVzRmlsdGVyIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgaW5kZXggICB8ICAgcHJvcE5hbWUgICAgICAgIHwgICBleHBlY3RlZFxyXG4gICAgICAgICR7MH0gICAgfCAgICR7J2NsYXNzTmFtZSd9ICB8ICAgJHsnYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSd9XHJcbiAgICAgICAgJHswfSAgICB8ICAgJHsnYWNjZXNzS2V5J30gIHwgICAkeydhbGwnfVxyXG4gICAgICAgICR7MX0gICAgfCAgICR7J2NsYXNzTmFtZSd9ICB8ICAgJHsnYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSd9XHJcbiAgICAgICAgJHsxfSAgICB8ICAgJHsnYWNjZXNzS2V5J30gIHwgICAkeydhY3RpdmUnfVxyXG4gICAgICAgICR7Mn0gICAgfCAgICR7J2NsYXNzTmFtZSd9ICB8ICAgJHsnYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSd9XHJcbiAgICAgICAgJHsyfSAgICB8ICAgJHsnYWNjZXNzS2V5J30gIHwgICAkeydkb25lJ31cclxuICAgIGAoJ3Nob3VsZCByZW5kZXIgYnV0dG9uIGF0ICRpbmRleCB3aXRoIHByb3AgJHByb3BOYW1lJywgKHtcclxuICAgICAgICBpbmRleCxcclxuICAgICAgICBwcm9wTmFtZSxcclxuICAgICAgICBleHBlY3RlZCxcclxuICAgIH0pID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEl0ZW1TdGF0dXNGaWx0ZXIgey4uLnByb3BzfSAvPik7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHdyYXBwZXIuZmluZCgnW3R5cGU9XCJidXR0b25cIl0nKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbnMuYXQoaW5kZXgpLnByb3AocHJvcE5hbWUpKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgaW5kZXggICB8ICAgdGV4dFxyXG4gICAgICAgICR7MH0gICAgfCAgICR7J0FsbCd9XHJcbiAgICAgICAgJHsxfSAgICB8ICAgJHsnQWN0aXZlJ31cclxuICAgICAgICAkezJ9ICAgIHwgICAkeydEb25lJ31cclxuICAgIGAoJ3Nob3VsZCByZW5kZXIgYnV0dG9uIGF0ICRpbmRleCB3aXRoIHRleHQgJHRleHQnLCAoeyBpbmRleCwgdGV4dCB9KSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxJdGVtU3RhdHVzRmlsdGVyPig8SXRlbVN0YXR1c0ZpbHRlciB7Li4ucHJvcHN9IC8+KTtcclxuICAgICAgICBjb25zdCB7IG9uQnV0dG9uQ2xpY2sgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHdyYXBwZXIuZmluZCgnW3R5cGU9XCJidXR0b25cIl0nKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbnMuYXQoaW5kZXgpLnRleHQoKSkudG9FcXVhbCh0ZXh0KTtcclxuICAgICAgICBleHBlY3QoYnV0dG9ucy5hdChpbmRleCkucHJvcCgnb25DbGljaycpKS50b0VxdWFsKG9uQnV0dG9uQ2xpY2spO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==