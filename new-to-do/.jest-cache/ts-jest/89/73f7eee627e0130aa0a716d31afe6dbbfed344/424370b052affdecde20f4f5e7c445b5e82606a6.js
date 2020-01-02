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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tc3RhdHVzLWZpbHRlclxcY29tcG9uZW50LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixpQ0FBZ0M7QUFDaEMsMkNBQStCO0FBQy9CLGtGQUF3RjtBQUV4RixRQUFRLENBQUMsc0RBQXNELEVBQUU7SUFDN0QsSUFBTSxLQUFLLEdBQUc7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLGNBQWMsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO0tBQy9CLENBQUM7SUFFRixVQUFVLENBQUM7UUFDUixlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUU7UUFDdkMsTUFBTSxDQUFDLDRCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUU7UUFDMUMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyw0QkFBZ0IsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSx3VUFBQSwwRkFFRCxFQUFZLHlDQUEwQyxFQUFDLFlBQ3ZELEVBQW9CLGlDQUFrQyxFQUFDLFlBQ3ZELEVBQTJDLFVBQVcsRUFBQyxZQUN2RCxFQUE4Qix1QkFBd0IsRUFBQyxZQUN4RCxLQUpDLFlBQVksRUFBMEMsQ0FBQyxFQUN2RCxvQkFBb0IsRUFBa0MsQ0FBQyxFQUN2RCwyQ0FBMkMsRUFBVyxDQUFDLEVBQ3ZELDhCQUE4QixFQUF3QixDQUFDLEVBQ3ZELDJDQUEyQyxFQUFFLFVBQUMsRUFBK0I7WUFBOUIsZ0NBQWEsRUFBRSxrQ0FBYztRQUM5RSxJQUFNLFlBQVkseUJBQ1YsS0FBSyxLQUNULE1BQU0sRUFBRSxRQUFRLEdBQ25CLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLDRCQUFnQixlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFOUQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUkscVZBQUEsOERBRUQsRUFBQyxVQUFXLEVBQVcsUUFBUyxFQUEyQixZQUMzRCxFQUFDLFVBQVcsRUFBVyxRQUFTLEVBQUssWUFDckMsRUFBQyxVQUFXLEVBQVcsUUFBUyxFQUEyQixZQUMzRCxFQUFDLFVBQVcsRUFBVyxRQUFTLEVBQVEsWUFDeEMsRUFBQyxVQUFXLEVBQVcsUUFBUyxFQUEyQixZQUMzRCxFQUFDLFVBQVcsRUFBVyxRQUFTLEVBQU0sUUFDM0MsS0FOSyxDQUFDLEVBQVcsV0FBVyxFQUFTLDJCQUEyQixFQUMzRCxDQUFDLEVBQVcsV0FBVyxFQUFTLEtBQUssRUFDckMsQ0FBQyxFQUFXLFdBQVcsRUFBUywyQkFBMkIsRUFDM0QsQ0FBQyxFQUFXLFdBQVcsRUFBUyxRQUFRLEVBQ3hDLENBQUMsRUFBVyxXQUFXLEVBQVMsMkJBQTJCLEVBQzNELENBQUMsRUFBVyxXQUFXLEVBQVMsTUFBTSxFQUMxQyxvREFBb0QsRUFBRSxVQUFDLEVBSXhEO1lBSEcsZ0JBQUssRUFDTCxzQkFBUSxFQUNSLHNCQUFRO1FBRVIsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyw0QkFBZ0IsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksbUxBQUEsc0NBRUQsRUFBQyxVQUFXLEVBQUssWUFDakIsRUFBQyxVQUFXLEVBQVEsWUFDcEIsRUFBQyxVQUFXLEVBQU0sUUFDdkIsS0FISyxDQUFDLEVBQVcsS0FBSyxFQUNqQixDQUFDLEVBQVcsUUFBUSxFQUNwQixDQUFDLEVBQVcsTUFBTSxFQUN0QixnREFBZ0QsRUFBRSxVQUFDLEVBQWU7WUFBYixnQkFBSyxFQUFFLGNBQUk7UUFDOUQsT0FBTztRQUNQLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBbUIsb0JBQUMsNEJBQWdCLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFBLGdEQUFhLENBQXdCO1FBRTdDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFaEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxpdGVtLXN0YXR1cy1maWx0ZXJcXGNvbXBvbmVudC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgIHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1TdGF0dXNGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyL2NvbXBvbmVudFwiO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2l0ZW0tc3RhdHVzLWZpbHRlci9pdGVtLXN0YXR1cy1maWx0ZXInLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHtcclxuICAgICAgICBmaWx0ZXI6ICcnLFxyXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiBzaW5vbi5zdHViKClcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdJdGVtIHN0YXR1cyBmaWx0ZXIgc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwZWN0KEl0ZW1TdGF0dXNGaWx0ZXIpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIEl0ZW1TdGF0dXNGaWx0ZXIgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8SXRlbVN0YXR1c0ZpbHRlciB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuYnRuLWdyb3VwJ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmJ0bi1ncm91cC13cmFwcGVyJ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5idG4tZ3JvdXAtd3JhcHBlciAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5J30gICAgICB8ICR7Mn1cclxuICAgICAgICAkeycuYnRuLWdyb3VwLXdyYXBwZXIgLmJ0bi1pbmZvJ30gICAgICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wcyA9IHtcclxuICAgICAgICAgICAgIC4uLnByb3BzICxcclxuICAgICAgICAgICAgZmlsdGVyOiAnYWN0aXZlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEl0ZW1TdGF0dXNGaWx0ZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBpbmRleCAgIHwgICBwcm9wTmFtZSAgICAgICAgfCAgIGV4cGVjdGVkXHJcbiAgICAgICAgJHswfSAgICB8ICAgJHsnY2xhc3NOYW1lJ30gIHwgICAkeydidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J31cclxuICAgICAgICAkezB9ICAgIHwgICAkeydhY2Nlc3NLZXknfSAgfCAgICR7J2FsbCd9XHJcbiAgICAgICAgJHsxfSAgICB8ICAgJHsnY2xhc3NOYW1lJ30gIHwgICAkeydidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J31cclxuICAgICAgICAkezF9ICAgIHwgICAkeydhY2Nlc3NLZXknfSAgfCAgICR7J2FjdGl2ZSd9XHJcbiAgICAgICAgJHsyfSAgICB8ICAgJHsnY2xhc3NOYW1lJ30gIHwgICAkeydidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J31cclxuICAgICAgICAkezJ9ICAgIHwgICAkeydhY2Nlc3NLZXknfSAgfCAgICR7J2RvbmUnfVxyXG4gICAgYCgnc2hvdWxkIHJlbmRlciBidXR0b24gYXQgJGluZGV4IHdpdGggcHJvcCAkcHJvcE5hbWUnLCAoe1xyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIHByb3BOYW1lLFxyXG4gICAgICAgIGV4cGVjdGVkLFxyXG4gICAgfSkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8SXRlbVN0YXR1c0ZpbHRlciB7Li4ucHJvcHN9IC8+KTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gd3JhcHBlci5maW5kKCdbdHlwZT1cImJ1dHRvblwiXScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYnV0dG9ucy5hdChpbmRleCkucHJvcChwcm9wTmFtZSkpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBpbmRleCAgIHwgICB0ZXh0XHJcbiAgICAgICAgJHswfSAgICB8ICAgJHsnQWxsJ31cclxuICAgICAgICAkezF9ICAgIHwgICAkeydBY3RpdmUnfVxyXG4gICAgICAgICR7Mn0gICAgfCAgICR7J0RvbmUnfVxyXG4gICAgYCgnc2hvdWxkIHJlbmRlciBidXR0b24gYXQgJGluZGV4IHdpdGggdGV4dCAkdGV4dCcsICh7IGluZGV4LCB0ZXh0IH0pID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEl0ZW1TdGF0dXNGaWx0ZXI+KDxJdGVtU3RhdHVzRmlsdGVyIHsuLi5wcm9wc30gLz4pO1xyXG4gICAgICAgIGNvbnN0IHsgb25CdXR0b25DbGljayB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gd3JhcHBlci5maW5kKCdbdHlwZT1cImJ1dHRvblwiXScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYnV0dG9ucy5hdChpbmRleCkudGV4dCgpKS50b0VxdWFsKHRleHQpO1xyXG4gICAgICAgIGV4cGVjdChidXR0b25zLmF0KGluZGV4KS5wcm9wKCdvbkNsaWNrJykpLnRvRXF1YWwob25CdXR0b25DbGljayk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9