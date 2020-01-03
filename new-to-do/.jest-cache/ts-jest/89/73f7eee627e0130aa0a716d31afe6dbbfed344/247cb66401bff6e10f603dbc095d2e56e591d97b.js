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
            id: 'uqweuqewuqew'
        };
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { todoList: __spreadArrays(storeMock.todoList, [{
                    label: 'label',
                    important: false,
                    done: false,
                    id: 'uqweuqewuqew'
                }]) });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlEO0FBQ2pELHdEQUF1RDtBQUl2RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDdkIsSUFBTSxTQUFTLEdBQUc7UUFDZCxXQUFXLEVBQUUsVUFBVTtRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsRUFBRSxFQUFFLHNDQUFzQzthQUM3QyxDQUFDO1FBQ0YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxNQUFNO0tBQzFCLENBQUM7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDeEIsT0FBTztRQUNQLElBQU0sTUFBTSxHQUFHO1lBQ1AsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRU4sSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osV0FBVyxFQUFFLE9BQU8sR0FDdkIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBRWpCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNYLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLGNBQU0sQ0FBQyxJQUFJO1NBQ3ZCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLFNBQVMsS0FDWixRQUFRLEVBQUUsY0FBTSxDQUFDLElBQUksR0FDeEIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlCQUF5QixFQUFFO1FBRTFCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNYLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLFlBQVk7U0FDeEIsQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxZQUFZLEdBQzVCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ04sSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsZUFBZTtZQUNyQixPQUFPLEVBQUUsT0FBTztZQUNoQixFQUFFLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBRUgsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osUUFBUSxpQkFBTSxTQUFTLENBQUMsUUFBUSxHQUFFO29CQUM5QixLQUFLLEVBQUUsT0FBTztvQkFDZCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLGNBQWM7aUJBQ3JCLEtBQ0osQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiB9IGZyb20gJ3JlZHV4LXV0aWxzL3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJ3JlZHV4LXV0aWxzL3JlZHVjZXJzL3JlZHVjZXInO1xyXG5cclxuXHJcblxyXG5kZXNjcmliZSgncmVkdXgvcmVkdWNlcnMnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZU1vY2sgPSB7XHJcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgYWRkRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgdG9kb0xpc3Q6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnYXNkJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAnMWRkMzBmN2ItZjhmYS00YWE2LWE4NDctODZlMjU4MjQzNmZhJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGZpbHRlckJ5OiBGSUxURVIuQUNUSVZFLFxyXG4gICAgfTtcclxuXHJcbiAgICBpdCgnb25TZXRTZWFyY2hWYWx1ZSB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1NFQVJDSF9WQUxVRScsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndmFsdWUnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ3ZhbHVlJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3NldEZpbHRlciB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0ZJTFRFUl9WQUxVRScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IEZJTFRFUi5ET05FXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5ET05FXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25TZXRBZGRGaWVsZFZhbHVlIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfU0VBUkNIX1ZBTFVFJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ2xvcmVtSXBzdW0nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gcmVkdWNlcihzdG9yZU1vY2ssIGFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zdG9yZU1vY2ssXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkOiAnbG9yZW1JcHN1bScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25BZGRJdGVtIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPX0lURU0nLFxyXG4gICAgICAgICAgICAgcGF5bG9hZDogJ2xhYmVsJyxcclxuICAgICAgICAgICAgIGlkOiAndXF3ZXVxZXd1cWV3J1xyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFsuLi5zdG9yZU1vY2sudG9kb0xpc3QsIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICd1cXdldXFld3VxZXcnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9