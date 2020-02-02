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
    // const state = {
    //     term: ''
    // };
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
        var term = 'loremImpsumText';
        var wrapper = enzyme_1.mount(React.createElement(search_panel_1.SearchPanel, __assign({}, props)));
        //When
        wrapper.setState({ term: term });
        props.onSearchChange(term);
        //Then
        expect(wrapper.state('term')).toEqual(term);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLHFFQUFtRTtBQUNuRSxnREFBMEI7QUFFMUIsMkNBQStCO0FBRS9CLFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUN2RCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLEtBQUs7SUFFTCxJQUFNLEtBQUssR0FBc0I7UUFDN0IsSUFBSSxFQUFFLEVBQUU7UUFDUixjQUFjLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUMvQixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsMEJBQVcsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN0QixPQUFPO1FBRVAsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFFL0IsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLG9CQUFDLDBCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUU5RCxNQUFNO1FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUUsQ0FBQztRQUU3QixLQUFLLENBQUMsY0FBYyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRTdCLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxzZWFyY2gtcGFuZWxcXHNlYXJjaC1wYW5lbC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCB7IFNlYXJjaFBhbmVsIH0gZnJvbSAnY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvc2VhcmNoLXBhbmVsJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgSVByb3BzU2VhcmNoUGFuZWwgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsL3R5cGVzLXNlYXJjaC1wYW5lbFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtLnRzeCcsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgLy8gICAgIHRlcm06ICcnXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IHByb3BzOiBJUHJvcHNTZWFyY2hQYW5lbCA9IHtcclxuICAgICAgICB0ZXJtOiAnJyxcclxuICAgICAgICBvblNlYXJjaENoYW5nZTogc2lub24uc3R1YigpXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNlYXJjaFBhbmVsIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU2VhcmNoQ2hhbmdlIHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG5cclxuICAgICAgICBjb25zdCB0ZXJtID0gJ2xvcmVtSW1wc3VtVGV4dCc7XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxTZWFyY2hQYW5lbD4oPFNlYXJjaFBhbmVsIHsuLi5wcm9wc30vPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIHdyYXBwZXIuc2V0U3RhdGUoIHsgdGVybSB9ICk7XHJcblxyXG4gICAgICAgIHByb3BzLm9uU2VhcmNoQ2hhbmdlKCB0ZXJtICk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCd0ZXJtJykpLnRvRXF1YWwodGVybSk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=