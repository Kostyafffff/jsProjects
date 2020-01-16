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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcaW5kZXgtdG9kby1saXN0LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQWdFO0FBQ2hFLGdEQUEwQjtBQUMxQixrRkFBc0U7QUFDdEUscUZBQXlFO0FBQ3pFLHFGQUF5RTtBQUN6RSwrREFBb0U7QUFFcEUsSUFBTSxlQUFlLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQy9EO1FBQ0ksS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxzQ0FBc0M7S0FDN0M7Q0FDSixDQUFDLENBQUM7QUFDUCxJQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9GLElBQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdGLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtJQUNoQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsc0NBQXNDO2lCQUM3QyxDQUFDO1lBQ0YsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxJQUFJO1NBQzNCLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsMkJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0XFxpbmRleC10b2RvLWxpc3QudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIsIElTdG9yZSB9IGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCAqIGFzIGdldFRvRG9MaXN0IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1wiO1xyXG5pbXBvcnQgKiBhcyBnZXRTZWFyY2hWYWx1ZSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNcIjtcclxuaW1wb3J0ICogYXMgZ2V0RmlsdGVyVmFsdWUgZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3RcIjtcclxuXHJcbmNvbnN0IGdldFRvRG9MaXN0U3R1YiA9IHNpbm9uLnN0dWIoZ2V0VG9Eb0xpc3QsICdnZXRUb0RvTGlzdCcpLnJldHVybnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbmNvbnN0IGdldFNlYXJjaFZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoZ2V0U2VhcmNoVmFsdWUsICdnZXRTZWFyY2hWYWx1ZScpLnJldHVybnMoJ2hlbGxvIHdvcmxkJyk7XHJcbmNvbnN0IGdldEZpbHRlclZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoZ2V0RmlsdGVyVmFsdWUsICdnZXRGaWx0ZXJWYWx1ZScpLnJldHVybnMoRklMVEVSLkRPTkUpO1xyXG5cclxuZGVzY3JpYmUoJ2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsJywgKCkgPT4ge1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzIHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICB0b2RvTGlzdDogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnYXNkJyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiAnMWRkMzBmN2ItZjhmYS00YWE2LWE4NDctODZlMjU4MjQzNmZhJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICdoZWxsbyB3b3JsZCcsXHJcbiAgICAgICAgICAgIGZpbHRlclZhbHVlOiBGSUxURVIuRE9ORSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoZ2V0VG9Eb0xpc3RTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICBleHBlY3QoZ2V0U2VhcmNoVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICBleHBlY3QoZ2V0RmlsdGVyVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==