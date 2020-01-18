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
var getFilterValue = __importStar(require("redux-utils/selectors/selectors"));
var types_1 = require("../../../src/redux-utils/store/types");
var item_status_filter_1 = require("../../../src/components/item-status-filter");
var action_creators_1 = require("../../../src/redux-utils/action-creators/action-creators");
var getFilterValueStub = sinon_1.default.stub(getFilterValue, 'getFilterValue').returns(types_1.FILTER.DONE);
describe('src/components/app-header', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps test', function () {
        //Given
        var store = {};
        var expected = { filter: types_1.FILTER.DONE };
        //When
        var actual = item_status_filter_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getFilterValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
    it('mapDispatchToProps test', function () {
        //Given
        var expectedMapDispatchToProps = {
            onFilterChange: action_creators_1.setFilter
        };
        //Then
        expect(item_status_filter_1.mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1zdGF0dXMtZmlsdGVyXFxpbmRleC1pdGVtLXN0YXR1cy1maWx0ZXIudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsOEVBQWtFO0FBQ2xFLDhEQUFzRTtBQUN0RSxpRkFBaUc7QUFDakcsNEZBQXFGO0FBRXJGLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdGLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNsQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxjQUFNLENBQUMsSUFBSSxFQUFDLENBQUM7UUFFdkMsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLG9DQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDMUIsT0FBTztRQUNQLElBQU0sMEJBQTBCLEdBQUc7WUFDL0IsY0FBYyxFQUFFLDJCQUFTO1NBQzVCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLHVDQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJFOlxcSnNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxpdGVtLXN0YXR1cy1maWx0ZXJcXGluZGV4LWl0ZW0tc3RhdHVzLWZpbHRlci50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCAqIGFzIGdldEZpbHRlclZhbHVlIGZyb20gJ3JlZHV4LXV0aWxzL3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBGSUxURVIsIElTdG9yZSB9IGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC11dGlscy9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7IG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJztcclxuaW1wb3J0IHsgc2V0RmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC11dGlscy9hY3Rpb24tY3JlYXRvcnMvYWN0aW9uLWNyZWF0b3JzXCI7XHJcblxyXG5jb25zdCBnZXRGaWx0ZXJWYWx1ZVN0dWIgPSBzaW5vbi5zdHViKGdldEZpbHRlclZhbHVlLCAnZ2V0RmlsdGVyVmFsdWUnKS5yZXR1cm5zKEZJTFRFUi5ET05FKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJywgKCkgPT4ge1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzIHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge2ZpbHRlcjogRklMVEVSLkRPTkV9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoZ2V0RmlsdGVyVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBEaXNwYXRjaFRvUHJvcHMgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlOiBzZXRGaWx0ZXJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QobWFwRGlzcGF0Y2hUb1Byb3BzKS50b0VxdWFsKGV4cGVjdGVkTWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=