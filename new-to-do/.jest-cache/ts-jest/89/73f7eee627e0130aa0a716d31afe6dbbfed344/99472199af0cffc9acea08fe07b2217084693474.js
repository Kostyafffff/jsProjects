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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLGlFQUFxRTtBQUdyRSxnRkFBb0U7QUFFcEUsSUFBTSxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFM0UsSUFBTSxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFNUUsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBRWpDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBRTNCLElBQU0sUUFBUSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXInO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzJztcclxuXHJcbmNvbnN0IGdldFRvRG9Db3VudFN0dWIgPSBzaW5vbi5zdHViKHNlbGVjdG9ycywgJ2dldFRvRG9Db3VudCcpLnJldHVybnMoMTApO1xyXG5cclxuY29uc3QgZ2V0RG9uZUNvdW50U3R1YiA9IHNpbm9uLnN0dWIoc2VsZWN0b3JzLCAnZ2V0RG9uZUNvdW50JykucmV0dXJucygxMDApO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcEhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgdG9EbzogMTAsXHJcbiAgICAgICAgICAgIGRvbmU6IDEwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChnZXREb25lQ291bnRTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICBleHBlY3QoZ2V0VG9Eb0NvdW50U3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9