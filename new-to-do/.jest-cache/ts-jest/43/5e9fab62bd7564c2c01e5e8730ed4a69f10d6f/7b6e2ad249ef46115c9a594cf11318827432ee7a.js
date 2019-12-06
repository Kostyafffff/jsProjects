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
var enzyme_1 = require("enzyme");
var search_panel_1 = require("components/search-panel/search-panel");
var sinon_1 = __importDefault(require("sinon"));
var React = __importStar(require("react"));
describe('src/components/item-add-form/item-add-form.tsx', function () {
    var props = {
        term: '',
        onSearchChange: sinon_1.default.stub()
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should TodoListItemProps mount component', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(search_panel_1.SearchPanel, __assign({}, props)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('onSearchChange test', function () {
        //Given
        var term = 'loremIpsumText';
        var wrapper = enzyme_1.mount(React.createElement(search_panel_1.SearchPanel, __assign({}, props)));
        //When
        wrapper.setState({ term: term });
        props.onSearchChange(term);
        //Then
        expect(wrapper.state('term')).toEqual(term);
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                            | expectedLength\n        ", "               | ", "\n        ", "                | ", "\n        ", "  | ", "\n        ", "        | ", "\n        "], ["\n        expectedClass                            | expectedLength\n        ", "               | ", "\n        ", "                | ", "\n        ", "  | ", "\n        ", "        | ", "\n        "])), '.form-control-wrapper', 1, '.flex-search-element', 1, '.flex-search-element .form-control', 1, '.flex-searcsssh-element > input', 1)('should render $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.mount(React.createElement(search_panel_1.SearchPanel, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQixxRUFBbUU7QUFDbkUsZ0RBQTBCO0FBRTFCLDJDQUErQjtBQUUvQixRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFFdkQsSUFBTSxLQUFLLEdBQXNCO1FBQzdCLElBQUksRUFBRSxFQUFFO1FBQ1IsY0FBYyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7S0FDL0IsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUUzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLDBCQUFXLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFFdEIsT0FBTztRQUNQLElBQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBYyxvQkFBQywwQkFBVyxlQUFLLEtBQUssRUFBRyxDQUFDLENBQUM7UUFFOUQsTUFBTTtRQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFFLENBQUM7UUFFN0IsS0FBSyxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUU3QixNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSwyUUFBQSwrRUFFRCxFQUF1QixtQkFBb0IsRUFBQyxZQUM1QyxFQUFzQixvQkFBcUIsRUFBQyxZQUM1QyxFQUFvQyxNQUFPLEVBQUMsWUFDNUMsRUFBaUMsWUFBYSxFQUFDLFlBQ2hELEtBSkMsdUJBQXVCLEVBQW9CLENBQUMsRUFDNUMsc0JBQXNCLEVBQXFCLENBQUMsRUFDNUMsb0NBQW9DLEVBQU8sQ0FBQyxFQUM1QyxpQ0FBaUMsRUFBYSxDQUFDLEVBQy9DLDhCQUE4QixFQUFFLFVBQUUsRUFBaUM7WUFBL0IsZ0NBQWEsRUFBRSxrQ0FBYztRQUVuRSxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQywwQkFBVyxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFekQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICdjb21wb25lbnRzL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBJUHJvcHNTZWFyY2hQYW5lbCB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbC90eXBlcy1zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtLnRzeCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzU2VhcmNoUGFuZWwgPSB7XHJcbiAgICAgICAgdGVybTogJycsXHJcbiAgICAgICAgb25TZWFyY2hDaGFuZ2U6IHNpbm9uLnN0dWIoKVxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblNlYXJjaENoYW5nZSB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgdGVybSA9ICdsb3JlbUlwc3VtVGV4dCc7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PFNlYXJjaFBhbmVsPig8U2VhcmNoUGFuZWwgey4uLnByb3BzfS8+KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSggeyB0ZXJtIH0gKTtcclxuXHJcbiAgICAgICAgcHJvcHMub25TZWFyY2hDaGFuZ2UoIHRlcm0gKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ3Rlcm0nKSkudG9FcXVhbCh0ZXJtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmZvcm0tY29udHJvbC13cmFwcGVyJ30gICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuZmxleC1zZWFyY2gtZWxlbWVudCd9ICAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5mbGV4LXNlYXJjaC1lbGVtZW50IC5mb3JtLWNvbnRyb2wnfSAgfCAkezF9XHJcbiAgICAgICAgJHsnLmZsZXgtc2VhcmNzc3NoLWVsZW1lbnQgPiBpbnB1dCd9ICAgICAgICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzJywgKCB7IGV4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RoIH0gKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wc1NlYXJjaFBhbmVsID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8U2VhcmNoUGFuZWwgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==