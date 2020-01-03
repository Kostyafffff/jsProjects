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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("redux-utils/store/types");
var reducer_1 = require("redux-utils/reducers/reducer");
var v4_1 = __importDefault(require("uuid/v4"));
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
                    id: v4_1.default()
                }]) });
        //Then
        expect(actual.todoList[1].done).toEqual(expected.todoList[1].done);
        expect(actual.todoList[1].id).not.toEqual(expected.todoList[1].id);
        expect(actual.todoList[1].important).toEqual(expected.todoList[1].important);
        expect(actual.todoList[1].label).toEqual(expected.todoList[1].label);
        console.log.apply(console, expected.todoList);
        //expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlEO0FBQ2pELHdEQUF1RDtBQUN2RCwrQ0FBMkI7QUFFM0IsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZCLElBQU0sU0FBUyxHQUFHO1FBQ2QsV0FBVyxFQUFFLFVBQVU7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxLQUFLO2dCQUNYLEVBQUUsRUFBRSxzQ0FBc0M7YUFDN0MsQ0FBQztRQUNGLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtLQUMxQixDQUFDO0lBRUYsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQ3hCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVOLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxPQUFPLEdBQ3ZCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxjQUFNLENBQUMsSUFBSTtTQUN2QixDQUFDO1FBQ0YsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osUUFBUSxFQUFFLGNBQU0sQ0FBQyxJQUFJLEdBQ3hCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUUxQixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxZQUFZO1NBQ3hCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLFNBQVMsS0FDWixXQUFXLEVBQUUsWUFBWSxHQUM1QixDQUFDO1FBRUYsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFFakIsT0FBTztRQUNOLElBQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVILElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFFBQVEsaUJBQU0sU0FBUyxDQUFDLFFBQVEsR0FBRTtvQkFDOUIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUUsRUFBRSxZQUFJLEVBQUU7aUJBQ2IsS0FDSixDQUFDO1FBRUYsTUFBTTtRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSxPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sRUFBUSxRQUFRLENBQUMsUUFBUSxFQUFDO1FBR2hDLG1DQUFtQztJQUl2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxyZWR1Y2Vyc1xccmVkdWNlcnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIgfSBmcm9tICdyZWR1eC11dGlscy9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICdyZWR1eC11dGlscy9yZWR1Y2Vycy9yZWR1Y2VyJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcblxyXG5kZXNjcmliZSgncmVkdXgvcmVkdWNlcnMnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZU1vY2sgPSB7XHJcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgYWRkRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgdG9kb0xpc3Q6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnYXNkJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAnMWRkMzBmN2ItZjhmYS00YWE2LWE4NDctODZlMjU4MjQzNmZhJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGZpbHRlckJ5OiBGSUxURVIuQUNUSVZFLFxyXG4gICAgfTtcclxuXHJcbiAgICBpdCgnb25TZXRTZWFyY2hWYWx1ZSB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1NFQVJDSF9WQUxVRScsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndmFsdWUnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ3ZhbHVlJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3NldEZpbHRlciB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0ZJTFRFUl9WQUxVRScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IEZJTFRFUi5ET05FXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5ET05FXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25TZXRBZGRGaWVsZFZhbHVlIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfU0VBUkNIX1ZBTFVFJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ2xvcmVtSXBzdW0nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gcmVkdWNlcihzdG9yZU1vY2ssIGFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zdG9yZU1vY2ssXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkOiAnbG9yZW1JcHN1bScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25BZGRJdGVtIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPX0lURU0nLFxyXG4gICAgICAgICAgICAgcGF5bG9hZDogJ2xhYmVsJyxcclxuICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gcmVkdWNlcihzdG9yZU1vY2ssIGFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zdG9yZU1vY2ssXHJcbiAgICAgICAgICAgIHRvZG9MaXN0OiBbLi4uc3RvcmVNb2NrLnRvZG9MaXN0LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiB1dWlkKClcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgIGV4cGVjdChhY3R1YWwudG9kb0xpc3RbMV0uZG9uZSkudG9FcXVhbChleHBlY3RlZC50b2RvTGlzdFsxXS5kb25lKTtcclxuICAgICAgIGV4cGVjdChhY3R1YWwudG9kb0xpc3RbMV0uaWQpLm5vdC50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmlkKTtcclxuICAgICAgIGV4cGVjdChhY3R1YWwudG9kb0xpc3RbMV0uaW1wb3J0YW50KS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmltcG9ydGFudCk7XHJcbiAgICAgICBleHBlY3QoYWN0dWFsLnRvZG9MaXN0WzFdLmxhYmVsKS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmxhYmVsKTtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyguLi5leHBlY3RlZC50b2RvTGlzdClcclxuXHJcblxyXG4gICAgICAgIC8vZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9