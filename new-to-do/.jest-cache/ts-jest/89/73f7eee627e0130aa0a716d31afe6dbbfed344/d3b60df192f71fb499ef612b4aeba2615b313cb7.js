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
var getFilterValue = __importStar(require("redux/selectors/selectors"));
var types_1 = require("../../../src/redux/store/types");
var item_status_filter_1 = require("../../../src/components/item-status-filter");
var action_creators_1 = require("../../../src/redux/action-creators/action-creators");
var getFilterValueStub = sinon_1.default.stub(getFilterValue, 'getFilterValue').returns(types_1.FILTER.DONE);
describe('src/components/app-header', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        var expected = { filter: types_1.FILTER.DONE };
        //When
        var actual = item_status_filter_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getFilterValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
    it('mapDispatchToProps', function () {
        //Given
        var expectedMapDispatchToProps = {
            onFilterChange: action_creators_1.setFilter
        };
        //Then
        expect(item_status_filter_1.mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tc3RhdHVzLWZpbHRlclxcaW5kZXgtaXRlbS1zdGF0dXMtZmlsdGVyLnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLHdFQUE0RDtBQUM1RCx3REFBZ0U7QUFDaEUsaUZBQStGO0FBQy9GLHNGQUE2RTtBQUU3RSxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3RixRQUFRLENBQUMsMkJBQTJCLEVBQUU7SUFDbEMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRyxFQUFZLENBQUM7UUFDM0IsSUFBTSxRQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsY0FBTSxDQUFDLElBQUksRUFBQyxDQUFDO1FBRXZDLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyxvQ0FBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBQ3JCLE9BQU87UUFDUCxJQUFNLDBCQUEwQixHQUFHO1lBQy9CLGNBQWMsRUFBRSwyQkFBUztTQUM1QixDQUFDO1FBRUYsTUFBTTtRQUNOLE1BQU0sQ0FBQyx1Q0FBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tc3RhdHVzLWZpbHRlclxcaW5kZXgtaXRlbS1zdGF0dXMtZmlsdGVyLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0ICogYXMgZ2V0RmlsdGVyVmFsdWUgZnJvbSAncmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IEZJTFRFUiwgSVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHttYXBEaXNwYXRjaFRvUHJvcHMsIG1hcFN0YXRlVG9Qcm9wc30gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0IHtzZXRGaWx0ZXJ9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvYWN0aW9uLWNyZWF0b3JzL2FjdGlvbi1jcmVhdG9yc1wiO1xyXG5cclxuY29uc3QgZ2V0RmlsdGVyVmFsdWVTdHViID0gc2lub24uc3R1YihnZXRGaWx0ZXJWYWx1ZSwgJ2dldEZpbHRlclZhbHVlJykucmV0dXJucyhGSUxURVIuRE9ORSk7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlcicsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7ZmlsdGVyOiBGSUxURVIuRE9ORX07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChnZXRGaWx0ZXJWYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcERpc3BhdGNoVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlOiBzZXRGaWx0ZXJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QobWFwRGlzcGF0Y2hUb1Byb3BzKS50b0VxdWFsKGV4cGVjdGVkTWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=