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
var app_header_1 = require("../../../src/components/app-header");
var selectors = __importStar(require("../../../src/redux/selectors/selectors"));
//import  { getToDoCount, getDoneCount } from "../../../src/redux/selectors/selectors";
var getToDoItemValueStub = sinon_1.default.stub(selectors, 'getToDoCount').returns(3);
var getToDoneItemValueStub = sinon_1.default.stub(selectors, 'getDoneCount').returns(0);
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        var expected = {
            getToDoItemValueStub: getToDoItemValueStub,
            getToDoneItemValueStub: getToDoneItemValueStub
        };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBRTFCLGlFQUFxRTtBQUNyRSxnRkFBcUU7QUFFckUsdUZBQXVGO0FBR3ZGLElBQU0sb0JBQW9CLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLElBQU0sc0JBQXNCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWhGLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUVqQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRztZQUNaLG9CQUFvQixzQkFBQTtZQUNwQixzQkFBc0Isd0JBQUE7U0FDMUIsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyw0QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXJDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgbWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlcic7XHJcbmltcG9ydCAqIGFzICBzZWxlY3RvcnMgZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG4vL2ltcG9ydCAgeyBnZXRUb0RvQ291bnQsIGdldERvbmVDb3VudCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbmNvbnN0IGdldFRvRG9JdGVtVmFsdWVTdHViID0gc2lub24uc3R1YihzZWxlY3RvcnMsICdnZXRUb0RvQ291bnQnKS5yZXR1cm5zKDMpO1xyXG5jb25zdCBnZXRUb0RvbmVJdGVtVmFsdWVTdHViID0gc2lub24uc3R1YihzZWxlY3RvcnMsICdnZXREb25lQ291bnQnKS5yZXR1cm5zKDApO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcEhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIsXHJcbiAgICAgICAgICAgICBnZXRUb0RvbmVJdGVtVmFsdWVTdHViXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcblxyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9