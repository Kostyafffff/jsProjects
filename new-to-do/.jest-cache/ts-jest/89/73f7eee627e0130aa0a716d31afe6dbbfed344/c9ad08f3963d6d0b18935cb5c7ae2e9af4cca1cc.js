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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tc3RhdHVzLWZpbHRlclxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsaUNBQWdDO0FBQ2hDLDJDQUErQjtBQUMvQixrRkFBd0Y7QUFFeEYsUUFBUSxDQUFDLHNEQUFzRCxFQUFFO0lBQzdELElBQU0sS0FBSyxHQUFHO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixjQUFjLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUMvQixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1IsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNDQUFzQyxFQUFFO1FBQ3ZDLE1BQU0sQ0FBQyw0QkFBZ0IsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO1FBQzFDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsNEJBQWdCLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUV2RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksd1VBQUEsMEZBRUQsRUFBWSx5Q0FBMEMsRUFBQyxZQUN2RCxFQUFvQixpQ0FBa0MsRUFBQyxZQUN2RCxFQUEyQyxVQUFXLEVBQUMsWUFDdkQsRUFBOEIsdUJBQXdCLEVBQUMsWUFDeEQsS0FKQyxZQUFZLEVBQTBDLENBQUMsRUFDdkQsb0JBQW9CLEVBQWtDLENBQUMsRUFDdkQsMkNBQTJDLEVBQVcsQ0FBQyxFQUN2RCw4QkFBOEIsRUFBd0IsQ0FBQyxFQUN2RCwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFDOUUsSUFBTSxZQUFZLHlCQUNWLEtBQUssS0FDVCxNQUFNLEVBQUUsUUFBUSxHQUNuQixDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyw0QkFBZ0IsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRTlELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLHFWQUFBLDhEQUVELEVBQUMsVUFBVyxFQUFXLFFBQVMsRUFBMkIsWUFDM0QsRUFBQyxVQUFXLEVBQVcsUUFBUyxFQUFLLFlBQ3JDLEVBQUMsVUFBVyxFQUFXLFFBQVMsRUFBMkIsWUFDM0QsRUFBQyxVQUFXLEVBQVcsUUFBUyxFQUFRLFlBQ3hDLEVBQUMsVUFBVyxFQUFXLFFBQVMsRUFBMkIsWUFDM0QsRUFBQyxVQUFXLEVBQVcsUUFBUyxFQUFNLFFBQzNDLEtBTkssQ0FBQyxFQUFXLFdBQVcsRUFBUywyQkFBMkIsRUFDM0QsQ0FBQyxFQUFXLFdBQVcsRUFBUyxLQUFLLEVBQ3JDLENBQUMsRUFBVyxXQUFXLEVBQVMsMkJBQTJCLEVBQzNELENBQUMsRUFBVyxXQUFXLEVBQVMsUUFBUSxFQUN4QyxDQUFDLEVBQVcsV0FBVyxFQUFTLDJCQUEyQixFQUMzRCxDQUFDLEVBQVcsV0FBVyxFQUFTLE1BQU0sRUFDMUMsb0RBQW9ELEVBQUUsVUFBQyxFQUl4RDtZQUhHLGdCQUFLLEVBQ0wsc0JBQVEsRUFDUixzQkFBUTtRQUVSLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsNEJBQWdCLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFaEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLG1MQUFBLHNDQUVELEVBQUMsVUFBVyxFQUFLLFlBQ2pCLEVBQUMsVUFBVyxFQUFRLFlBQ3BCLEVBQUMsVUFBVyxFQUFNLFFBQ3ZCLEtBSEssQ0FBQyxFQUFXLEtBQUssRUFDakIsQ0FBQyxFQUFXLFFBQVEsRUFDcEIsQ0FBQyxFQUFXLE1BQU0sRUFDdEIsZ0RBQWdELEVBQUUsVUFBQyxFQUFlO1lBQWIsZ0JBQUssRUFBRSxjQUFJO1FBQzlELE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQW1CLG9CQUFDLDRCQUFnQixlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFDakUsSUFBQSxnREFBYSxDQUF3QjtRQUU3QyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRWhELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1zdGF0dXMtZmlsdGVyXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCAgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSXRlbVN0YXR1c0ZpbHRlciB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9pdGVtLXN0YXR1cy1maWx0ZXIvY29tcG9uZW50XCI7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyL2l0ZW0tc3RhdHVzLWZpbHRlcicsICgpID0+IHtcclxuICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICAgIGZpbHRlcjogJycsXHJcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IHNpbm9uLnN0dWIoKVxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ0l0ZW0gc3RhdHVzIGZpbHRlciBzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICBleHBlY3QoSXRlbVN0YXR1c0ZpbHRlcikudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgSXRlbVN0YXR1c0ZpbHRlciBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJdGVtU3RhdHVzRmlsdGVyIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5idG4tZ3JvdXAnfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuYnRuLWdyb3VwLXdyYXBwZXInfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmJ0bi1ncm91cC13cmFwcGVyIC5idG4tb3V0bGluZS1zZWNvbmRhcnknfSAgICAgIHwgJHsyfVxyXG4gICAgICAgICR7Jy5idG4tZ3JvdXAtd3JhcHBlciAuYnRuLWluZm8nfSAgICAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyIGluIEFwcEhlYWRlciAkZXhwZWN0ZWRDbGFzcycsICh7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzID0ge1xyXG4gICAgICAgICAgICAgLi4ucHJvcHMgLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdhY3RpdmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8SXRlbVN0YXR1c0ZpbHRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGluZGV4ICAgfCAgIHByb3BOYW1lICAgICAgICB8ICAgZXhwZWN0ZWRcclxuICAgICAgICAkezB9ICAgIHwgICAkeydjbGFzc05hbWUnfSAgfCAgICR7J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknfVxyXG4gICAgICAgICR7MH0gICAgfCAgICR7J2FjY2Vzc0tleSd9ICB8ICAgJHsnYWxsJ31cclxuICAgICAgICAkezF9ICAgIHwgICAkeydjbGFzc05hbWUnfSAgfCAgICR7J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknfVxyXG4gICAgICAgICR7MX0gICAgfCAgICR7J2FjY2Vzc0tleSd9ICB8ICAgJHsnYWN0aXZlJ31cclxuICAgICAgICAkezJ9ICAgIHwgICAkeydjbGFzc05hbWUnfSAgfCAgICR7J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknfVxyXG4gICAgICAgICR7Mn0gICAgfCAgICR7J2FjY2Vzc0tleSd9ICB8ICAgJHsnZG9uZSd9XHJcbiAgICBgKCdzaG91bGQgcmVuZGVyIGJ1dHRvbiBhdCAkaW5kZXggd2l0aCBwcm9wICRwcm9wTmFtZScsICh7XHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgcHJvcE5hbWUsXHJcbiAgICAgICAgZXhwZWN0ZWQsXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJdGVtU3RhdHVzRmlsdGVyIHsuLi5wcm9wc30gLz4pO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB3cmFwcGVyLmZpbmQoJ1t0eXBlPVwiYnV0dG9uXCJdJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChidXR0b25zLmF0KGluZGV4KS5wcm9wKHByb3BOYW1lKSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGluZGV4ICAgfCAgIHRleHRcclxuICAgICAgICAkezB9ICAgIHwgICAkeydBbGwnfVxyXG4gICAgICAgICR7MX0gICAgfCAgICR7J0FjdGl2ZSd9XHJcbiAgICAgICAgJHsyfSAgICB8ICAgJHsnRG9uZSd9XHJcbiAgICBgKCdzaG91bGQgcmVuZGVyIGJ1dHRvbiBhdCAkaW5kZXggd2l0aCB0ZXh0ICR0ZXh0JywgKHsgaW5kZXgsIHRleHQgfSkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8SXRlbVN0YXR1c0ZpbHRlcj4oPEl0ZW1TdGF0dXNGaWx0ZXIgey4uLnByb3BzfSAvPik7XHJcbiAgICAgICAgY29uc3QgeyBvbkJ1dHRvbkNsaWNrIH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB3cmFwcGVyLmZpbmQoJ1t0eXBlPVwiYnV0dG9uXCJdJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChidXR0b25zLmF0KGluZGV4KS50ZXh0KCkpLnRvRXF1YWwodGV4dCk7XHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbnMuYXQoaW5kZXgpLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChvbkJ1dHRvbkNsaWNrKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=