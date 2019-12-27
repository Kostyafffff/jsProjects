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
// import { mapStateToProps } from '../../../src/components/app-header';
// import { store } from "../../../src/redux/store/store";
var selectors = __importStar(require("../../../src/redux/selectors/selectors"));
var getToDoItemValueStub = sinon_1.default.stub().returns(10);
sinon_1.default.replace(selectors, 'getToDoCount', getToDoItemValueStub);
var getToDoneItemValueStub = sinon_1.default.stub().returns(100);
sinon_1.default.replace(selectors, 'getDoneCount', getToDoneItemValueStub);
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
            toDo: 10,
            done: 100
        };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLGlFQUFtRTtBQUVuRSx3RUFBd0U7QUFDeEUsMERBQTBEO0FBSTFELGdGQUFvRTtBQUdwRSxJQUFNLG9CQUFvQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEQsZUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFL0QsSUFBTSxzQkFBc0IsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pELGVBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBRWpFLHFGQUFxRjtBQUNyRixtQkFBbUI7QUFDbkIsT0FBTztBQUVQLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUVqQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixpREFBaUQ7UUFDakQsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQywyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLGFBQWE7UUFDYixZQUFZO1FBQ1osa0RBQWtEO1FBQ2xELGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixZQUFZO1FBQ1osU0FBUztRQUNULHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixJQUFNLFFBQVEsR0FBRztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEdBQUc7U0FDWixDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcaW5kZXgudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQge21hcFN0YXRlVG9Qcm9wc30gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXJcIjtcclxuaW1wb3J0IHtJU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXNcIjtcclxuLy8gaW1wb3J0IHsgbWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlcic7XHJcbi8vIGltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS9zdG9yZVwiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygxMCk7XHJcbnNpbm9uLnJlcGxhY2Uoc2VsZWN0b3JzLCAnZ2V0VG9Eb0NvdW50JywgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIpO1xyXG5cclxuY29uc3QgZ2V0VG9Eb25lSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoKS5yZXR1cm5zKDEwMCk7XHJcbnNpbm9uLnJlcGxhY2Uoc2VsZWN0b3JzLCAnZ2V0RG9uZUNvdW50JywgZ2V0VG9Eb25lSXRlbVZhbHVlU3R1Yik7XHJcblxyXG4vLyBjb25zdCBnZXRUb0RvSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnJlcGxhY2Uoc2VsZWN0b3JzLCAnZ2V0VG9Eb0NvdW50JywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgcmV0dXJuIDEyMztcclxuLy8gIH0pO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcEhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIC8vIGNvbnN0IHN0b3JlID0ge1xyXG4gICAgICAgIC8vICAgICB0b2RvTGlzdDogW1xyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgLy8gW3NhZCA6IGZhbHNlLCBhc2Rhc2Q6ICdhc2Rhc2QnXSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBbc2FkIDogZmFsc2UsIGFzZGFzZDogJ2FzZGFzZCddLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAvLyAgICAgc2VhcmNoRmllbGQ6ICcnLFxyXG4gICAgICAgIC8vICAgICBhZGRGaWVsZDogJycsXHJcbiAgICAgICAgLy8gICAgIGZpbHRlckJ5OiAnQUxMJyxcclxuICAgICAgICAvLyB9IGFzIElTdG9yZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgdG9EbzogMTAsXHJcbiAgICAgICAgICAgIGRvbmU6IDEwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9