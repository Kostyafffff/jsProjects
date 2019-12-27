"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var app_header_1 = require("../../../src/components/app-header");
// import * as  selectors from "../../../src/redux/selectors/selectors";
//import  { getToDoCount, getDoneCount } from "../../../src/redux/selectors/selectors";
var getToDoItemValueStub = sinon_1.default.stub().returns(3);
var getToDoneItemValueStub = sinon_1.default.stub().returns(0);
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {
            todoList: [{
                    // [sad : false, asdasd: 'asdasd'],
                    label: 'asdasdas',
                    important: false,
                    done: false,
                    id: 'asdasdas',
                }],
            searchField: '',
            addField: '',
            filterBy: 'ALL',
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsaUVBQW1FO0FBQ25FLHdFQUF3RTtBQUV4RSx1RkFBdUY7QUFHdkYsSUFBTSxvQkFBb0IsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELElBQU0sc0JBQXNCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV2RCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFFakMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRztZQUNWLFFBQVEsRUFBRSxDQUFDO29CQUNSLG1DQUFtQztvQkFDbEMsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsVUFBVTtpQkFDakIsQ0FBQztZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsS0FBSztTQUNSLENBQUM7UUFDWixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxLQUFLO1FBRUwsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQztJQUV2RixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7SVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQge21hcFN0YXRlVG9Qcm9wc30gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlcic7XHJcbi8vIGltcG9ydCAqIGFzICBzZWxlY3RvcnMgZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG4vL2ltcG9ydCAgeyBnZXRUb0RvQ291bnQsIGdldERvbmVDb3VudCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbmNvbnN0IGdldFRvRG9JdGVtVmFsdWVTdHViID0gc2lub24uc3R1YigpLnJldHVybnMoMyk7XHJcbmNvbnN0IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygwKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHBIZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHtcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgIC8vIFtzYWQgOiBmYWxzZSwgYXNkYXNkOiAnYXNkYXNkJ10sXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICcnLFxyXG4gICAgICAgICAgICBhZGRGaWVsZDogJycsXHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiAnQUxMJyxcclxuICAgICAgICB9IGFzIElTdG9yZTtcclxuICAgICAgICAvLyBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAvLyAgICAgdG9EbzogZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIsXHJcbiAgICAgICAgLy8gICAgIGRvbmU6IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWJcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKHt0b0RvOiBnZXRUb0RvSXRlbVZhbHVlU3R1YiwgZG9uZTogZ2V0VG9Eb25lSXRlbVZhbHVlU3R1Yn0pO1xyXG5cclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==