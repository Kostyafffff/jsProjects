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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsaUVBQW1FO0FBRW5FLHdFQUF3RTtBQUN4RSwwREFBMEQ7QUFJMUQsdUZBQXVGO0FBR3RGLElBQU0sb0JBQW9CLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxJQUFNLHNCQUFzQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQscUZBQXFGO0FBQ3JGLG1CQUFtQjtBQUNuQixPQUFPO0FBRVAsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBRWpDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBQzNCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlEQUFpRDtRQUNqRCxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLFlBQVk7UUFDWixrREFBa0Q7UUFDbEQsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQywwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixTQUFTO1FBQ1QsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLElBQU0sUUFBUSxHQUFHO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsc0JBQXNCO1NBQy9CLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7bWFwU3RhdGVUb1Byb3BzfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlclwiO1xyXG5pbXBvcnQge0lTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlc1wiO1xyXG4vLyBpbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJztcclxuLy8gaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3N0b3JlXCI7XHJcblxyXG5cclxuXHJcbi8vaW1wb3J0ICB7IGdldFRvRG9Db3VudCwgZ2V0RG9uZUNvdW50IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuIGNvbnN0IGdldFRvRG9JdGVtVmFsdWVTdHViID0gc2lub24uc3R1YigpLnJldHVybnMoMyk7XHJcbmNvbnN0IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygwKTtcclxuLy8gY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5yZXBsYWNlKHNlbGVjdG9ycywgJ2dldFRvRG9Db3VudCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgIHJldHVybiAxMjM7XHJcbi8vICB9KTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHBIZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHt9IGFzIElTdG9yZTtcclxuICAgICAgICAvLyBjb25zdCBzdG9yZSA9IHtcclxuICAgICAgICAvLyAgICAgdG9kb0xpc3Q6IFtcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIC8vIFtzYWQgOiBmYWxzZSwgYXNkYXNkOiAnYXNkYXNkJ10sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6ICdhc2Rhc2RhcycsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gW3NhZCA6IGZhbHNlLCBhc2Rhc2Q6ICdhc2Rhc2QnXSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ6ICdhc2Rhc2RhcycsXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gICAgIHNlYXJjaEZpZWxkOiAnJyxcclxuICAgICAgICAvLyAgICAgYWRkRmllbGQ6ICcnLFxyXG4gICAgICAgIC8vICAgICBmaWx0ZXJCeTogJ0FMTCcsXHJcbiAgICAgICAgLy8gfSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRvRG86IGdldFRvRG9JdGVtVmFsdWVTdHViLFxyXG4gICAgICAgICAgICBkb25lOiBnZXRUb0RvbmVJdGVtVmFsdWVTdHViXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=