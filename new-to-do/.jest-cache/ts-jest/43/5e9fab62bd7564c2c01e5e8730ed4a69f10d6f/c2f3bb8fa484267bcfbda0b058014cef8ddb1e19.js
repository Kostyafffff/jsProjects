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
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                            | expectedLength\n        ", "               | ", "\n        ", "                | ", "\n        ", "  | ", "\n        "], ["\n        expectedClass                            | expectedLength\n        ", "               | ", "\n        ", "                | ", "\n        ", "  | ", "\n        "])), '.form-control-wrapper', 1, '.flex-search-element', 1, '.flex-search-element .form-control', 1)('should render $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass;
        //Given
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.mount(React.createElement(search_panel_1.SearchPanel, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQixxRUFBbUU7QUFDbkUsZ0RBQTBCO0FBRTFCLDJDQUErQjtBQUUvQixRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFFdkQsSUFBTSxLQUFLLEdBQXNCO1FBQzdCLElBQUksRUFBRSxFQUFFO1FBQ1IsY0FBYyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7S0FDL0IsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUUzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLDBCQUFXLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFFdEIsT0FBTztRQUNQLElBQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBYyxvQkFBQywwQkFBVyxlQUFLLEtBQUssRUFBRyxDQUFDLENBQUM7UUFFOUQsTUFBTTtRQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFFLENBQUM7UUFFN0IsS0FBSyxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUU3QixNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSwrT0FBQSwrRUFFRCxFQUF1QixtQkFBb0IsRUFBQyxZQUM1QyxFQUFzQixvQkFBcUIsRUFBQyxZQUM1QyxFQUFvQyxNQUFPLEVBQUMsWUFDN0MsS0FIQyx1QkFBdUIsRUFBb0IsQ0FBQyxFQUM1QyxzQkFBc0IsRUFBcUIsQ0FBQyxFQUM1QyxvQ0FBb0MsRUFBTyxDQUFDLEVBQzVDLDhCQUE4QixFQUFFLFVBQUUsRUFBaUI7WUFBZixnQ0FBYTtRQUVuRCxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQywwQkFBVyxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFekQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICdjb21wb25lbnRzL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBJUHJvcHNTZWFyY2hQYW5lbCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvdHlwZXMtc2VhcmNoLXBhbmVsXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2l0ZW0tYWRkLWZvcm0udHN4JywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb3BzOiBJUHJvcHNTZWFyY2hQYW5lbCA9IHtcclxuICAgICAgICB0ZXJtOiAnJyxcclxuICAgICAgICBvblNlYXJjaENoYW5nZTogc2lub24uc3R1YigpXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNlYXJjaFBhbmVsIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU2VhcmNoQ2hhbmdlIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB0ZXJtID0gJ2xvcmVtSXBzdW1UZXh0JztcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8U2VhcmNoUGFuZWw+KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9Lz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKCB7IHRlcm0gfSApO1xyXG5cclxuICAgICAgICBwcm9wcy5vblNlYXJjaENoYW5nZSggdGVybSApO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgndGVybScpKS50b0VxdWFsKHRlcm0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuZm9ybS1jb250cm9sLXdyYXBwZXInfSAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5mbGV4LXNlYXJjaC1lbGVtZW50J30gICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmZsZXgtc2VhcmNoLWVsZW1lbnQgLmZvcm0tY29udHJvbCd9ICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzJywgKCB7IGV4cGVjdGVkQ2xhc3MgfSApID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzU2VhcmNoUGFuZWwgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxTZWFyY2hQYW5lbCB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il0sInZlcnNpb24iOjN9