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
var sinon_1 = __importDefault(require("sinon"));
var React = __importStar(require("react"));
var component_1 = require("../../../src/components/search-panel/component");
describe('src/components/item-add-form/item-add-form.tsx', function () {
    var setSearchValueStub = sinon_1.default.stub();
    var props = {
        fieldValue: 'hello',
        setSearchValue: setSearchValueStub
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should TodoListItemProps mount component', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(component_1.SearchPanel, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('onSearchChange test', function () {
        //Given
        var term = 'loremIpsumText';
        var wrapper = enzyme_1.mount(React.createElement(component_1.SearchPanel, __assign({}, props)));
        //When
        wrapper.setState({ term: term });
        //Then
        expect(wrapper.state('term')).toEqual(term);
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                            | expectedLength\n        ", "               | ", "\n        ", "                | ", "\n        ", "  | ", "\n        ", "        | ", "\n        "], ["\n        expectedClass                            | expectedLength\n        ", "               | ", "\n        ", "                | ", "\n        ", "  | ", "\n        ", "        | ", "\n        "])), '.form-control-wrapper', 1, '.flex-search-element', 1, '.flex-search-element .form-control', 1, '.flex-search-element > input', 1)('should render $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.mount(React.createElement(component_1.SearchPanel, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
    it('check placeholder text in search form', function () {
        //When
        var content = enzyme_1.shallow(React.createElement(component_1.SearchPanel, __assign({}, props))).find('.form-control.search.input');
        //Then
        expect(content).toHaveLength(1);
        expect(content.props().placeholder).toEqual('search');
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFzQztBQUN0QyxnREFBMEI7QUFDMUIsMkNBQStCO0FBRS9CLDRFQUEyRTtBQUUzRSxRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFFdkQsSUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFeEMsSUFBTSxLQUFLLEdBQXNCO1FBQzdCLFVBQVUsRUFBRSxPQUFPO1FBQ25CLGNBQWMsRUFBRSxrQkFBa0I7S0FDckMsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUUzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHVCQUFXLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBRXRCLE9BQU87UUFDUCxJQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQWMsb0JBQUMsdUJBQVcsZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBRTlELE1BQU07UUFDTixPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBRSxDQUFDO1FBRTdCLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLDJRQUFBLCtFQUVELEVBQXVCLG1CQUFvQixFQUFDLFlBQzVDLEVBQXNCLG9CQUFxQixFQUFDLFlBQzVDLEVBQW9DLE1BQU8sRUFBQyxZQUM1QyxFQUE4QixZQUFhLEVBQUMsWUFDN0MsS0FKQyx1QkFBdUIsRUFBb0IsQ0FBQyxFQUM1QyxzQkFBc0IsRUFBcUIsQ0FBQyxFQUM1QyxvQ0FBb0MsRUFBTyxDQUFDLEVBQzVDLDhCQUE4QixFQUFhLENBQUMsRUFDNUMsOEJBQThCLEVBQUUsVUFBRSxFQUFpQztZQUEvQixnQ0FBYSxFQUFFLGtDQUFjO1FBRW5FLE9BQU87UUFDUCxJQUFNLFlBQVksZ0JBQ1gsS0FBSyxDQUNYLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHVCQUFXLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUV6RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUU7UUFFeEMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGdCQUFPLENBQUMsb0JBQUMsdUJBQVcsZUFBTSxLQUFLLEVBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRXpGLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW91bnQsIHNoYWxsb3d9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtJUHJvcHNTZWFyY2hQYW5lbH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsL3R5cGVzJztcclxuaW1wb3J0IHtTZWFyY2hQYW5lbH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbC9jb21wb25lbnRcIjtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2l0ZW0tYWRkLWZvcm0udHN4JywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNldFNlYXJjaFZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzU2VhcmNoUGFuZWwgPSB7XHJcbiAgICAgICAgZmllbGRWYWx1ZTogJ2hlbGxvJyxcclxuICAgICAgICBzZXRTZWFyY2hWYWx1ZTogc2V0U2VhcmNoVmFsdWVTdHViXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNlYXJjaFBhbmVsIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU2VhcmNoQ2hhbmdlIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB0ZXJtID0gJ2xvcmVtSXBzdW1UZXh0JztcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8U2VhcmNoUGFuZWw+KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9Lz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKCB7IHRlcm0gfSApO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgndGVybScpKS50b0VxdWFsKHRlcm0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuZm9ybS1jb250cm9sLXdyYXBwZXInfSAgICAgICAgICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5mbGV4LXNlYXJjaC1lbGVtZW50J30gICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmZsZXgtc2VhcmNoLWVsZW1lbnQgLmZvcm0tY29udHJvbCd9ICB8ICR7MX1cclxuICAgICAgICAkeycuZmxleC1zZWFyY2gtZWxlbWVudCA+IGlucHV0J30gICAgICAgIHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgJGV4cGVjdGVkQ2xhc3MnLCAoIHsgZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGggfSApID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzU2VhcmNoUGFuZWwgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxTZWFyY2hQYW5lbCB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnY2hlY2sgcGxhY2Vob2xkZXIgdGV4dCBpbiBzZWFyY2ggZm9ybScsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNoYWxsb3coPFNlYXJjaFBhbmVsIHsgLi4ucHJvcHMgfSAvPikuZmluZCgnLmZvcm0tY29udHJvbC5zZWFyY2guaW5wdXQnKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGNvbnRlbnQpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgICAgICBleHBlY3QoY29udGVudC5wcm9wcygpLnBsYWNlaG9sZGVyKS50b0VxdWFsKCdzZWFyY2gnKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=