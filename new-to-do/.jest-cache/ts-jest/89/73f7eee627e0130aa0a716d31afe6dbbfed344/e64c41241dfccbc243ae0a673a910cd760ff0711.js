"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var app_header_1 = require("../../../src/components/app-header");
// import { mapStateToProps } from '../../../src/components/app-header';
// import { store } from "../../../src/redux/store/store";
//import  { getToDoCount, getDoneCount } from "../../../src/redux/selectors/selectors";
var getToDoItemValueStub = sinon_1.default.stub().returns(3);
var getToDoneItemValueStub = sinon_1.default.stub().returns(0);
// const getToDoItemValueStub = sinon.replace(selectors, 'getToDoCount', function() {
//      return 123;
//  });
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        // const store = {
        //     todoList: [
        //         {
        //            // [sad : false, asdasd: 'asdasd'],
        //             label: 'asdasdas',
        //             important: false,
        //             done: false,
        //             id: 'asdasdas',
        //         },
        //         {
        //             // [sad : false, asdasd: 'asdasd'],
        //             label: 'asdasdas',
        //             important: false,
        //             done: true,
        //             id: 'asdasdas',
        //         }
        //     ],
        //     searchField: '',
        //     addField: '',
        //     filterBy: 'ALL',
        // } as IStore;
        var expected = {
            toDo: getToDoItemValueStub,
            done: getToDoneItemValueStub
        };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsaUVBQW1FO0FBRW5FLHdFQUF3RTtBQUN4RSwwREFBMEQ7QUFJMUQsdUZBQXVGO0FBR3ZGLElBQU0sb0JBQW9CLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxJQUFNLHNCQUFzQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQscUZBQXFGO0FBQ3JGLG1CQUFtQjtBQUNuQixPQUFPO0FBRVAsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBRWpDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBQzNCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlEQUFpRDtRQUNqRCxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLFlBQVk7UUFDWixrREFBa0Q7UUFDbEQsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQywwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixTQUFTO1FBQ1QsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLElBQU0sUUFBUSxHQUFHO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsc0JBQXNCO1NBQy9CLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7bWFwU3RhdGVUb1Byb3BzfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlclwiO1xyXG5pbXBvcnQge0lTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlc1wiO1xyXG4vLyBpbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJztcclxuLy8gaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3N0b3JlXCI7XHJcblxyXG5cclxuXHJcbi8vaW1wb3J0ICB7IGdldFRvRG9Db3VudCwgZ2V0RG9uZUNvdW50IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygzKTtcclxuY29uc3QgZ2V0VG9Eb25lSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoKS5yZXR1cm5zKDApO1xyXG4vLyBjb25zdCBnZXRUb0RvSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnJlcGxhY2Uoc2VsZWN0b3JzLCAnZ2V0VG9Eb0NvdW50JywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgcmV0dXJuIDEyMztcclxuLy8gIH0pO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcEhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIC8vIGNvbnN0IHN0b3JlID0ge1xyXG4gICAgICAgIC8vICAgICB0b2RvTGlzdDogW1xyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgLy8gW3NhZCA6IGZhbHNlLCBhc2Rhc2Q6ICdhc2Rhc2QnXSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBbc2FkIDogZmFsc2UsIGFzZGFzZDogJ2FzZGFzZCddLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAvLyAgICAgc2VhcmNoRmllbGQ6ICcnLFxyXG4gICAgICAgIC8vICAgICBhZGRGaWVsZDogJycsXHJcbiAgICAgICAgLy8gICAgIGZpbHRlckJ5OiAnQUxMJyxcclxuICAgICAgICAvLyB9IGFzIElTdG9yZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgdG9EbzogZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIsXHJcbiAgICAgICAgICAgIGRvbmU6IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==