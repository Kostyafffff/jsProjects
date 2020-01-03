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
        for (var actualProperty in actual) {
            console.log(actualProperty);
        }
        //expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlEO0FBQ2pELHdEQUF1RDtBQUN2RCwrQ0FBMkI7QUFFM0IsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZCLElBQU0sU0FBUyxHQUFHO1FBQ2QsV0FBVyxFQUFFLFVBQVU7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxLQUFLO2dCQUNYLEVBQUUsRUFBRSxzQ0FBc0M7YUFDN0MsQ0FBQztRQUNGLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtLQUMxQixDQUFDO0lBRUYsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQ3hCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVOLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxPQUFPLEdBQ3ZCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxjQUFNLENBQUMsSUFBSTtTQUN2QixDQUFDO1FBQ0YsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osUUFBUSxFQUFFLGNBQU0sQ0FBQyxJQUFJLEdBQ3hCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUUxQixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxZQUFZO1NBQ3hCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLFNBQVMsS0FDWixXQUFXLEVBQUUsWUFBWSxHQUM1QixDQUFDO1FBRUYsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFFakIsT0FBTztRQUNOLElBQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVILElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFFBQVEsaUJBQU0sU0FBUyxDQUFDLFFBQVEsR0FBRTtvQkFDOUIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUUsRUFBRSxZQUFJLEVBQUU7aUJBQ2IsS0FDSixDQUFDO1FBRUYsTUFBTTtRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSxLQUFJLElBQU0sY0FBYyxJQUFJLE1BQU0sRUFBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9CO1FBRUEsbUNBQW1DO0lBSXZDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiB9IGZyb20gJ3JlZHV4LXV0aWxzL3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJ3JlZHV4LXV0aWxzL3JlZHVjZXJzL3JlZHVjZXInO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcclxuXHJcbmRlc2NyaWJlKCdyZWR1eC9yZWR1Y2VycycsICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlTW9jayA9IHtcclxuICAgICAgICBzZWFyY2hGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICBhZGRGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICB0b2RvTGlzdDogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5BQ1RJVkUsXHJcbiAgICB9O1xyXG5cclxuICAgIGl0KCdvblNldFNlYXJjaFZhbHVlIHRlc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfU0VBUkNIX1ZBTFVFJyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd2YWx1ZSdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gcmVkdWNlcihzdG9yZU1vY2ssIGFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zdG9yZU1vY2ssXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkOiAndmFsdWUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2V0RmlsdGVyIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfRklMVEVSX1ZBTFVFJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogRklMVEVSLkRPTkVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkRPTkVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblNldEFkZEZpZWxkVmFsdWUgdGVzdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9TRUFSQ0hfVkFMVUUnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAnbG9yZW1JcHN1bScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICdsb3JlbUlwc3VtJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvbkFkZEl0ZW0gdGVzdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICB0eXBlOiAnQUREX1RPRE9fSVRFTScsXHJcbiAgICAgICAgICAgICBwYXlsb2FkOiAnbGFiZWwnLFxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFsuLi5zdG9yZU1vY2sudG9kb0xpc3QsIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQoKVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgZXhwZWN0KGFjdHVhbC50b2RvTGlzdFsxXS5kb25lKS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmRvbmUpO1xyXG4gICAgICAgZXhwZWN0KGFjdHVhbC50b2RvTGlzdFsxXS5pZCkubm90LnRvRXF1YWwoZXhwZWN0ZWQudG9kb0xpc3RbMV0uaWQpO1xyXG4gICAgICAgZXhwZWN0KGFjdHVhbC50b2RvTGlzdFsxXS5pbXBvcnRhbnQpLnRvRXF1YWwoZXhwZWN0ZWQudG9kb0xpc3RbMV0uaW1wb3J0YW50KTtcclxuICAgICAgIGV4cGVjdChhY3R1YWwudG9kb0xpc3RbMV0ubGFiZWwpLnRvRXF1YWwoZXhwZWN0ZWQudG9kb0xpc3RbMV0ubGFiZWwpO1xyXG5cclxuICAgICAgIGZvcihjb25zdCBhY3R1YWxQcm9wZXJ0eSBpbiBhY3R1YWwpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGFjdHVhbFByb3BlcnR5KTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9leHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=