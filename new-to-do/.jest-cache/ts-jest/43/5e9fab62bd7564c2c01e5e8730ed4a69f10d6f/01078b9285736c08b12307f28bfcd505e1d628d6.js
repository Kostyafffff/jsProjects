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
        console.log('wrapper keys ' + Object.keys(wrapper));
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLHFFQUFtRTtBQUNuRSxnREFBMEI7QUFFMUIsMkNBQStCO0FBRS9CLFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUN2RCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLEtBQUs7SUFFTCxJQUFNLEtBQUssR0FBc0I7UUFDN0IsSUFBSSxFQUFFLEVBQUU7UUFDUixjQUFjLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUMvQixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsMEJBQVcsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN0QixPQUFPO1FBRVAsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFFL0IsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFjLG9CQUFDLDBCQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUU5RCxNQUFNO1FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUUsQ0FBQztRQUU3QixLQUFLLENBQUMsY0FBYyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRTdCLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxzZWFyY2gtcGFuZWwudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgeyBTZWFyY2hQYW5lbCB9IGZyb20gJ2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IElQcm9wc1NlYXJjaFBhbmVsIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbC90eXBlcy1zZWFyY2gtcGFuZWxcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0vaXRlbS1hZGQtZm9ybS50c3gnLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBzdGF0ZSA9IHtcclxuICAgIC8vICAgICB0ZXJtOiAnJ1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzU2VhcmNoUGFuZWwgPSB7XHJcbiAgICAgICAgdGVybTogJycsXHJcbiAgICAgICAgb25TZWFyY2hDaGFuZ2U6IHNpbm9uLnN0dWIoKVxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblNlYXJjaENoYW5nZSB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuXHJcbiAgICAgICAgY29uc3QgdGVybSA9ICdsb3JlbUltcHN1bVRleHQnO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8U2VhcmNoUGFuZWw+KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9Lz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKCB7IHRlcm0gfSApO1xyXG5cclxuICAgICAgICBwcm9wcy5vblNlYXJjaENoYW5nZSggdGVybSApO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgndGVybScpKS50b0VxdWFsKHRlcm0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3cmFwcGVyIGtleXMgJyArIE9iamVjdC5rZXlzKHdyYXBwZXIpKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==