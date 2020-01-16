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
var types_1 = require("../../../src/redux/store/types");
var sinon_1 = __importDefault(require("sinon"));
var getToDoList = __importStar(require("../../../src/redux/selectors/selectors"));
var getSearchValue = __importStar(require("../../../src/redux/selectors/selectors"));
var getFilterValue = __importStar(require("../../../src/redux/selectors/selectors"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcaW5kZXgtdG9kby1saXN0LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQWdFO0FBQ2hFLGdEQUEwQjtBQUMxQixrRkFBc0U7QUFDdEUscUZBQXlFO0FBQ3pFLHFGQUF5RTtBQUN6RSwrREFBb0U7QUFFcEUsSUFBTSxlQUFlLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQy9EO1FBQ0ksS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxzQ0FBc0M7S0FDN0M7Q0FDSixDQUFDLENBQUM7QUFDUCxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9GLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdGLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtJQUNoQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsc0NBQXNDO2lCQUM3QyxDQUFDO1lBQ0YsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxJQUFJO1NBQzNCLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsMkJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0XFxpbmRleC10b2RvLWxpc3QudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIsIElTdG9yZSB9IGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCAqIGFzIGdldFRvRG9MaXN0IGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzJztcclxuaW1wb3J0ICogYXMgZ2V0U2VhcmNoVmFsdWUgZnJvbSAnLi4vLi4vLi4vc3JjL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgKiBhcyBnZXRGaWx0ZXJWYWx1ZSBmcm9tICcuLi8uLi8uLi9zcmMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdCc7XHJcblxyXG5jb25zdCBnZXRUb0RvTGlzdFN0dWIgPSBzaW5vbi5zdHViKGdldFRvRG9MaXN0LCAnZ2V0VG9Eb0xpc3QnKS5yZXR1cm5zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnYXNkJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAnMWRkMzBmN2ItZjhmYS00YWE2LWE4NDctODZlMjU4MjQzNmZhJ1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5jb25zdCBnZXRTZWFyY2hWYWx1ZVN0dWIgPSBzaW5vbi5zdHViKGdldFNlYXJjaFZhbHVlLCAnZ2V0U2VhcmNoVmFsdWUnKS5yZXR1cm5zKCdoZWxsbyB3b3JsZCcpO1xyXG5jb25zdCBnZXRGaWx0ZXJWYWx1ZVN0dWIgPSBzaW5vbi5zdHViKGdldEZpbHRlclZhbHVlLCAnZ2V0RmlsdGVyVmFsdWUnKS5yZXR1cm5zKEZJTFRFUi5ET05FKTtcclxuXHJcbmRlc2NyaWJlKCdjb21wb25lbnRzL3NlYXJjaC1wYW5lbCcsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcyB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHt9IGFzIElTdG9yZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2FzZCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpZDogJzFkZDMwZjdiLWY4ZmEtNGFhNi1hODQ3LTg2ZTI1ODI0MzZmYSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnaGVsbG8gd29ybGQnLFxyXG4gICAgICAgICAgICBmaWx0ZXJWYWx1ZTogRklMVEVSLkRPTkUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgZXhwZWN0KGdldFRvRG9MaXN0U3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KGdldFNlYXJjaFZhbHVlU3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgZXhwZWN0KGdldEZpbHRlclZhbHVlU3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=