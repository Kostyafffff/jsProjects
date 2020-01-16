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
        // const expected = {
        //     toDo: getToDoItemValueStub,
        //     done: getToDoneItemValueStub
        // };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual({ toDo: getToDoItemValueStub, done: getToDoneItemValueStub });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBRTFCLGlFQUFxRTtBQUNyRSxnRkFBcUU7QUFFckUsdUZBQXVGO0FBR3ZGLElBQU0sb0JBQW9CLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLElBQU0sc0JBQXNCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWhGLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUVqQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxLQUFLO1FBRUwsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUUxRixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXInO1xyXG5pbXBvcnQgKiBhcyAgc2VsZWN0b3JzIGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1wiO1xyXG5cclxuLy9pbXBvcnQgIHsgZ2V0VG9Eb0NvdW50LCBnZXREb25lQ291bnQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNcIjtcclxuXHJcblxyXG5jb25zdCBnZXRUb0RvSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoc2VsZWN0b3JzLCAnZ2V0VG9Eb0NvdW50JykucmV0dXJucygzKTtcclxuY29uc3QgZ2V0VG9Eb25lSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoc2VsZWN0b3JzLCAnZ2V0RG9uZUNvdW50JykucmV0dXJucygwKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHBIZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHt9IGFzIElTdG9yZTtcclxuICAgICAgICAvLyBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAvLyAgICAgdG9EbzogZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIsXHJcbiAgICAgICAgLy8gICAgIGRvbmU6IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWJcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKCB7IHRvRG86IGdldFRvRG9JdGVtVmFsdWVTdHViLCBkb25lOiBnZXRUb0RvbmVJdGVtVmFsdWVTdHViIH0pO1xyXG5cclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==