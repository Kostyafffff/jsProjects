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
//import { IPropsSearchPanel } from '../../../src/components/search-panel/types-search-panel';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBc0M7QUFDdEMsZ0RBQTBCO0FBQzFCLDhGQUE4RjtBQUM5RiwyQ0FBK0I7QUFFL0IsNEVBQTJFO0FBRTNFLFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUV2RCxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV4QyxJQUFNLEtBQUssR0FBc0I7UUFDN0IsVUFBVSxFQUFFLE9BQU87UUFDbkIsY0FBYyxFQUFFLGtCQUFrQjtLQUNyQyxDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsdUJBQVcsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUV0QixPQUFPO1FBQ1AsSUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUIsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLG9CQUFDLHVCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUU5RCxNQUFNO1FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUUsQ0FBQztRQUc3QixNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSwyUUFBQSwrRUFFRCxFQUF1QixtQkFBb0IsRUFBQyxZQUM1QyxFQUFzQixvQkFBcUIsRUFBQyxZQUM1QyxFQUFvQyxNQUFPLEVBQUMsWUFDNUMsRUFBOEIsWUFBYSxFQUFDLFlBQzdDLEtBSkMsdUJBQXVCLEVBQW9CLENBQUMsRUFDNUMsc0JBQXNCLEVBQXFCLENBQUMsRUFDNUMsb0NBQW9DLEVBQU8sQ0FBQyxFQUM1Qyw4QkFBOEIsRUFBYSxDQUFDLEVBQzVDLDhCQUE4QixFQUFFLFVBQUUsRUFBaUM7WUFBL0IsZ0NBQWEsRUFBRSxrQ0FBYztRQUVuRSxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyx1QkFBVyxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFekQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBRXhDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUFDLG9CQUFDLHVCQUFXLGVBQU0sS0FBSyxFQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUV6RixNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxzZWFyY2gtcGFuZWxcXGNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb3VudCwgc2hhbGxvd30gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuLy9pbXBvcnQgeyBJUHJvcHNTZWFyY2hQYW5lbCB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbC90eXBlcy1zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SVByb3BzU2VhcmNoUGFuZWx9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbC90eXBlcyc7XHJcbmltcG9ydCB7U2VhcmNoUGFuZWx9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvY29tcG9uZW50XCI7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtLnRzeCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZXRTZWFyY2hWYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCk7XHJcblxyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wc1NlYXJjaFBhbmVsID0ge1xyXG4gICAgICAgIGZpZWxkVmFsdWU6ICdoZWxsbycsXHJcbiAgICAgICAgc2V0U2VhcmNoVmFsdWU6IHNldFNlYXJjaFZhbHVlU3R1YlxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblNlYXJjaENoYW5nZSB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgdGVybSA9ICdsb3JlbUlwc3VtVGV4dCc7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PFNlYXJjaFBhbmVsPig8U2VhcmNoUGFuZWwgey4uLnByb3BzfS8+KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSggeyB0ZXJtIH0gKTtcclxuXHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCd0ZXJtJykpLnRvRXF1YWwodGVybSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5mb3JtLWNvbnRyb2wtd3JhcHBlcid9ICAgICAgICAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmZsZXgtc2VhcmNoLWVsZW1lbnQnfSAgICAgICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycuZmxleC1zZWFyY2gtZWxlbWVudCAuZm9ybS1jb250cm9sJ30gIHwgJHsxfVxyXG4gICAgICAgICR7Jy5mbGV4LXNlYXJjaC1lbGVtZW50ID4gaW5wdXQnfSAgICAgICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciAkZXhwZWN0ZWRDbGFzcycsICggeyBleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aCB9ICkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHNTZWFyY2hQYW5lbCA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNlYXJjaFBhbmVsIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdjaGVjayBwbGFjZWhvbGRlciB0ZXh0IGluIHNlYXJjaCBmb3JtJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2hhbGxvdyg8U2VhcmNoUGFuZWwgeyAuLi5wcm9wcyB9IC8+KS5maW5kKCcuZm9ybS1jb250cm9sLnNlYXJjaC5pbnB1dCcpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoY29udGVudCkudG9IYXZlTGVuZ3RoKDEpO1xyXG4gICAgICAgIGV4cGVjdChjb250ZW50LnByb3BzKCkucGxhY2Vob2xkZXIpLnRvRXF1YWwoJ3NlYXJjaCcpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==