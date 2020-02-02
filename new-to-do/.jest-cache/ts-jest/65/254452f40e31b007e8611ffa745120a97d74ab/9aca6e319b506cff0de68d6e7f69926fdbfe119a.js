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
var types_1 = require("../../../src/redux-utils/store/types");
var sinon_1 = __importDefault(require("sinon"));
var getToDoList = __importStar(require("../../../src/redux-utils/selectors/selectors"));
var getSearchValue = __importStar(require("../../../src/redux-utils/selectors/selectors"));
var getFilterValue = __importStar(require("../../../src/redux-utils/selectors/selectors"));
var todo_list_1 = require("../../../src/components/todo-list");
var getToDoListStub = sinon_1.default.stub(getToDoList, 'getToDoList').returns([
    {
        label: 'asd',
        important: false,
        done: false,
        id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
    }
]);
var getSearchValueStub = sinon_1.default.stub(getSearchValue, 'getSearchValue').returns('hello world');
var getFilterValueStub = sinon_1.default.stub(getFilterValue, 'getFilterValue').returns(types_1.FILTER.DONE);
describe('components/search-panel', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps test', function () {
        //Given
        var store = {};
        var expected = {
            todoList: [{
                    label: 'asd',
                    important: false,
                    done: false,
                    id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
                }],
            searchValue: 'hello world',
            filterValue: types_1.FILTER.DONE,
        };
        //When
        var actual = todo_list_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getToDoListStub.calledOnceWithExactly(store)).toBeTruthy();
        expect(getSearchValueStub.calledOnceWithExactly(store)).toBeTruthy();
        expect(getFilterValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0XFxpbmRleC10b2RvLWxpc3QudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4REFBc0U7QUFDdEUsZ0RBQTBCO0FBQzFCLHdGQUE0RTtBQUM1RSwyRkFBK0U7QUFDL0UsMkZBQStFO0FBQy9FLCtEQUFvRTtBQUVwRSxJQUFNLGVBQWUsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDL0Q7UUFDSSxLQUFLLEVBQUUsS0FBSztRQUNaLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLElBQUksRUFBRSxLQUFLO1FBQ1gsRUFBRSxFQUFFLHNDQUFzQztLQUM3QztDQUNKLENBQUMsQ0FBQztBQUNQLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0YsSUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0YsUUFBUSxDQUFDLHlCQUF5QixFQUFFO0lBQ2hDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTtRQUN2QixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUM7b0JBQ1AsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUUsRUFBRSxzQ0FBc0M7aUJBQzdDLENBQUM7WUFDRixXQUFXLEVBQUUsYUFBYTtZQUMxQixXQUFXLEVBQUUsY0FBTSxDQUFDLElBQUk7U0FDM0IsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRywyQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRSxNQUFNLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyRSxNQUFNLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6RSxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcaW5kZXgtdG9kby1saXN0LnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSLCBJU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zcmMvcmVkdXgtdXRpbHMvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgKiBhcyBnZXRUb0RvTGlzdCBmcm9tICcuLi8uLi8uLi9zcmMvcmVkdXgtdXRpbHMvc2VsZWN0b3JzL3NlbGVjdG9ycyc7XHJcbmltcG9ydCAqIGFzIGdldFNlYXJjaFZhbHVlIGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC11dGlscy9zZWxlY3RvcnMvc2VsZWN0b3JzJztcclxuaW1wb3J0ICogYXMgZ2V0RmlsdGVyVmFsdWUgZnJvbSAnLi4vLi4vLi4vc3JjL3JlZHV4LXV0aWxzL3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QnO1xyXG5cclxuY29uc3QgZ2V0VG9Eb0xpc3RTdHViID0gc2lub24uc3R1YihnZXRUb0RvTGlzdCwgJ2dldFRvRG9MaXN0JykucmV0dXJucyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ2FzZCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogJzFkZDMwZjdiLWY4ZmEtNGFhNi1hODQ3LTg2ZTI1ODI0MzZmYSdcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuY29uc3QgZ2V0U2VhcmNoVmFsdWVTdHViID0gc2lub24uc3R1YihnZXRTZWFyY2hWYWx1ZSwgJ2dldFNlYXJjaFZhbHVlJykucmV0dXJucygnaGVsbG8gd29ybGQnKTtcclxuY29uc3QgZ2V0RmlsdGVyVmFsdWVTdHViID0gc2lub24uc3R1YihnZXRGaWx0ZXJWYWx1ZSwgJ2dldEZpbHRlclZhbHVlJykucmV0dXJucyhGSUxURVIuRE9ORSk7XHJcblxyXG5kZXNjcmliZSgnY29tcG9uZW50cy9zZWFyY2gtcGFuZWwnLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJ2hlbGxvIHdvcmxkJyxcclxuICAgICAgICAgICAgZmlsdGVyVmFsdWU6IEZJTFRFUi5ET05FLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChnZXRUb0RvTGlzdFN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIGV4cGVjdChnZXRTZWFyY2hWYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIGV4cGVjdChnZXRGaWx0ZXJWYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9