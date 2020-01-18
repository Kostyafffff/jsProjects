"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('uuid/v4', function () { return function () { return 'uuid'; }; });
var types_1 = require("redux-utils/store/types");
var reducer_1 = require("redux-utils/reducers/reducer");
describe('redux/reducers', function () {
    var storeMock = {
        searchField: 'for test',
        addField: 'for test',
        todoList: [{
                label: 'asd',
                important: false,
                done: false,
                id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
            }],
        filterBy: types_1.FILTER.ACTIVE,
    };
    it('onSetSearchValue test', function () {
        //Given
        var action = {
            type: 'SET_SEARCH_VALUE',
            payload: 'value'
        };
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { searchField: 'value' });
        //Then
        expect(actual).toEqual(expected);
    });
    it('setFilter test', function () {
        //Given
        var action = {
            type: 'SET_FILTER_VALUE',
            payload: types_1.FILTER.DONE
        };
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { filterBy: types_1.FILTER.DONE });
        //Then
        expect(actual).toEqual(expected);
    });
    it('onSetAddFieldValue test', function () {
        //Given
        var action = {
            type: 'SET_SEARCH_VALUE',
            payload: 'loremIpsum',
        };
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { searchField: 'loremIpsum' });
        //Then
        expect(actual).toEqual(expected);
    });
    it('onAddItem test', function () {
        //Given
        var action = {
            type: 'ADD_TODO_ITEM',
            payload: 'label',
        };
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { todoList: __spreadArrays(storeMock.todoList, [{
                    label: 'label',
                    important: false,
                    done: false,
                    id: 'uuid'
                }]) });
        //Then
        // expect(actual.todoList[1].done).toEqual(expected.todoList[1].done);
        // expect(actual.todoList[1].id).toEqual(expected.todoList[1].id);
        // expect(actual.todoList[1].important).toEqual(expected.todoList[1].important);
        // expect(actual.todoList[1].label).toEqual(expected.todoList[1].label);
        expect(actual).toEqual(expected);
        //expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxccmVkdWNlcnNcXHJlZHVjZXJzLnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLEVBQVosQ0FBWSxDQUFDLENBQUM7QUFIekMsaURBQWlEO0FBQ2pELHdEQUF1RDtBQUl2RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDdkIsSUFBTSxTQUFTLEdBQUc7UUFDZCxXQUFXLEVBQUUsVUFBVTtRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsRUFBRSxFQUFFLHNDQUFzQzthQUM3QyxDQUFDO1FBQ0YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxNQUFNO0tBQzFCLENBQUM7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDeEIsT0FBTztRQUNQLElBQU0sTUFBTSxHQUFHO1lBQ1AsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRU4sSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osV0FBVyxFQUFFLE9BQU8sR0FDdkIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBRWpCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNYLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLGNBQU0sQ0FBQyxJQUFJO1NBQ3ZCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLFNBQVMsS0FDWixRQUFRLEVBQUUsY0FBTSxDQUFDLElBQUksR0FDeEIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlCQUF5QixFQUFFO1FBRTFCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNYLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLFlBQVk7U0FDeEIsQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxZQUFZLEdBQzVCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ04sSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsZUFBZTtZQUNyQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRUgsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osUUFBUSxpQkFBTSxTQUFTLENBQUMsUUFBUSxHQUFFO29CQUM5QixLQUFLLEVBQUUsT0FBTztvQkFDZCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLE1BQU07aUJBQ2IsS0FDSixDQUFDO1FBRUYsTUFBTTtRQUNQLHNFQUFzRTtRQUN0RSxrRUFBa0U7UUFDbEUsZ0ZBQWdGO1FBQ2hGLHdFQUF3RTtRQUV4RSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpDLG1DQUFtQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiB9IGZyb20gJ3JlZHV4LXV0aWxzL3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJ3JlZHV4LXV0aWxzL3JlZHVjZXJzL3JlZHVjZXInO1xyXG5cclxuamVzdC5tb2NrKCd1dWlkL3Y0JywgKCkgPT4gKCkgPT4gJ3V1aWQnKTtcclxuXHJcbmRlc2NyaWJlKCdyZWR1eC9yZWR1Y2VycycsICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlTW9jayA9IHtcclxuICAgICAgICBzZWFyY2hGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICBhZGRGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICB0b2RvTGlzdDogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5BQ1RJVkUsXHJcbiAgICB9O1xyXG5cclxuICAgIGl0KCdvblNldFNlYXJjaFZhbHVlIHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfU0VBUkNIX1ZBTFVFJyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd2YWx1ZSdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gcmVkdWNlcihzdG9yZU1vY2ssIGFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zdG9yZU1vY2ssXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkOiAndmFsdWUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2V0RmlsdGVyIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfRklMVEVSX1ZBTFVFJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogRklMVEVSLkRPTkVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkRPTkVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblNldEFkZEZpZWxkVmFsdWUgdGVzdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9TRUFSQ0hfVkFMVUUnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAnbG9yZW1JcHN1bScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICdsb3JlbUlwc3VtJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvbkFkZEl0ZW0gdGVzdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICB0eXBlOiAnQUREX1RPRE9fSVRFTScsXHJcbiAgICAgICAgICAgICBwYXlsb2FkOiAnbGFiZWwnLFxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFsuLi5zdG9yZU1vY2sudG9kb0xpc3QsIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICd1dWlkJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgLy8gZXhwZWN0KGFjdHVhbC50b2RvTGlzdFsxXS5kb25lKS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmRvbmUpO1xyXG4gICAgICAgLy8gZXhwZWN0KGFjdHVhbC50b2RvTGlzdFsxXS5pZCkudG9FcXVhbChleHBlY3RlZC50b2RvTGlzdFsxXS5pZCk7XHJcbiAgICAgICAvLyBleHBlY3QoYWN0dWFsLnRvZG9MaXN0WzFdLmltcG9ydGFudCkudG9FcXVhbChleHBlY3RlZC50b2RvTGlzdFsxXS5pbXBvcnRhbnQpO1xyXG4gICAgICAgLy8gZXhwZWN0KGFjdHVhbC50b2RvTGlzdFsxXS5sYWJlbCkudG9FcXVhbChleHBlY3RlZC50b2RvTGlzdFsxXS5sYWJlbCk7XHJcblxyXG4gICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcblxyXG4gICAgICAgLy9leHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=