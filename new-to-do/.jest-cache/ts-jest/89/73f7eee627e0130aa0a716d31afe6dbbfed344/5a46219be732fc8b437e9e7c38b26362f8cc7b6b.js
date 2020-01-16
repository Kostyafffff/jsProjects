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
var getToDoCountStub = sinon_1.default.stub(selectors, 'getToDoCount').returns(10);
var getDoneCountStub = sinon_1.default.stub(selectors, 'getDoneCount').returns(100);
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        var expected = {
            toDo: 10,
            done: 100
        };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getDoneCountStub.calledOnceWithExactly(store)).toBeTruthy();
        expect(getToDoCountStub.calledOnceWithExactly(store)).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLGlFQUFtRTtBQUduRSxnRkFBb0U7QUFFcEUsSUFBTSxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFM0UsSUFBTSxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFNUUsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBRWpDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBRTNCLElBQU0sUUFBUSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RSxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7bWFwU3RhdGVUb1Byb3BzfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlclwiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5jb25zdCBnZXRUb0RvQ291bnRTdHViID0gc2lub24uc3R1YihzZWxlY3RvcnMsICdnZXRUb0RvQ291bnQnKS5yZXR1cm5zKDEwKTtcclxuXHJcbmNvbnN0IGdldERvbmVDb3VudFN0dWIgPSBzaW5vbi5zdHViKHNlbGVjdG9ycywgJ2dldERvbmVDb3VudCcpLnJldHVybnMoMTAwKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHBIZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHt9IGFzIElTdG9yZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRvRG86IDEwLFxyXG4gICAgICAgICAgICBkb25lOiAxMDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoZ2V0RG9uZUNvdW50U3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KGdldFRvRG9Db3VudFN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9