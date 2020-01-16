"use strict";
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
var getSearchValue = __importStar(require("redux/selectors/selectors"));
var search_panel_1 = require("../../../src/components/search-panel");
var action_creators_1 = require("../../../src/redux/action-creators/action-creators");
var getSearchValueStub = sinon_1.default.stub(getSearchValue, 'getSearchValue').returns('honey i will find you');
describe('src/components/search-panel', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        var expected = { fieldValue: 'honey i will find you' };
        //When
        var actual = search_panel_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getSearchValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
    it('mapDispatchToProps', function () {
        //Given
        var expectedMapDispatchToProps = {
            setSearchValue: action_creators_1.setSearchValue
        };
        //Then
        expect(search_panel_1.mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcaW5kZXgtc2VhcmNoLXBhbmVsLnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQTBCO0FBQzFCLHdFQUE0RDtBQUM1RCxxRUFBeUY7QUFDekYsc0ZBQWtGO0FBQ2xGLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUV6RyxRQUFRLENBQUMsNkJBQTZCLEVBQUU7SUFDcEMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRyxFQUFZLENBQUM7UUFDM0IsSUFBTSxRQUFRLEdBQUcsRUFBRSxVQUFVLEVBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV4RCxNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsOEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6RSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUNyQixPQUFPO1FBQ1AsSUFBTSwwQkFBMEIsR0FBRztZQUMvQixjQUFjLGtDQUFBO1NBQ2pCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLGlDQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxpbmRleC1zZWFyY2gtcGFuZWwudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3R5cGVzXCI7XHJcbmltcG9ydCBzaW5vbiBmcm9tIFwic2lub25cIjtcclxuaW1wb3J0ICogYXMgZ2V0U2VhcmNoVmFsdWUgZnJvbSAncmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7bWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBTdGF0ZVRvUHJvcHN9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcGFuZWxcIjtcclxuaW1wb3J0IHtzZXRTZWFyY2hWYWx1ZX0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvYWN0aW9uLWNyZWF0b3JzXCI7XHJcbmNvbnN0IGdldFNlYXJjaFZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoZ2V0U2VhcmNoVmFsdWUsICdnZXRTZWFyY2hWYWx1ZScpLnJldHVybnMoJ2hvbmV5IGkgd2lsbCBmaW5kIHlvdScpO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbCcsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7IGZpZWxkVmFsdWU6J2hvbmV5IGkgd2lsbCBmaW5kIHlvdScgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgZXhwZWN0KGdldFNlYXJjaFZhbHVlU3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwRGlzcGF0Y2hUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgICAgICAgICAgc2V0U2VhcmNoVmFsdWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QobWFwRGlzcGF0Y2hUb1Byb3BzKS50b0VxdWFsKGV4cGVjdGVkTWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sInZlcnNpb24iOjN9