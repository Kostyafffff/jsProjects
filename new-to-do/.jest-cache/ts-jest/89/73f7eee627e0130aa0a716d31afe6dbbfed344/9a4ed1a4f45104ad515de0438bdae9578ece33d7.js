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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLGNBQU0sT0FBQSxNQUFNLEVBQU4sQ0FBTSxFQUFaLENBQVksQ0FBQyxDQUFDO0FBSHpDLGlEQUFpRDtBQUNqRCx3REFBdUQ7QUFJdkQsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZCLElBQU0sU0FBUyxHQUFHO1FBQ2QsV0FBVyxFQUFFLFVBQVU7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxLQUFLO2dCQUNYLEVBQUUsRUFBRSxzQ0FBc0M7YUFDN0MsQ0FBQztRQUNGLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtLQUMxQixDQUFDO0lBRUYsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQ3hCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVOLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxPQUFPLEdBQ3ZCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxjQUFNLENBQUMsSUFBSTtTQUN2QixDQUFDO1FBQ0YsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osUUFBUSxFQUFFLGNBQU0sQ0FBQyxJQUFJLEdBQ3hCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUUxQixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxZQUFZO1NBQ3hCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLFNBQVMsS0FDWixXQUFXLEVBQUUsWUFBWSxHQUM1QixDQUFDO1FBRUYsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFFakIsT0FBTztRQUNOLElBQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVILElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFFBQVEsaUJBQU0sU0FBUyxDQUFDLFFBQVEsR0FBRTtvQkFDOUIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUUsRUFBRSxNQUFNO2lCQUNiLEtBQ0osQ0FBQztRQUVGLE1BQU07UUFDUCxzRUFBc0U7UUFDdEUsa0VBQWtFO1FBQ2xFLGdGQUFnRjtRQUNoRix3RUFBd0U7UUFFeEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqQyxtQ0FBbUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxccmVkdWNlcnNcXHJlZHVjZXJzLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSIH0gZnJvbSAncmVkdXgtdXRpbHMvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAncmVkdXgtdXRpbHMvcmVkdWNlcnMvcmVkdWNlcic7XHJcblxyXG5qZXN0Lm1vY2soJ3V1aWQvdjQnLCAoKSA9PiAoKSA9PiAndXVpZCcpO1xyXG5cclxuZGVzY3JpYmUoJ3JlZHV4L3JlZHVjZXJzJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVNb2NrID0ge1xyXG4gICAgICAgIHNlYXJjaEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgIGFkZEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgIHRvZG9MaXN0OiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ2FzZCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogJzFkZDMwZjdiLWY4ZmEtNGFhNi1hODQ3LTg2ZTI1ODI0MzZmYSdcclxuICAgICAgICB9XSxcclxuICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkFDVElWRSxcclxuICAgIH07XHJcblxyXG4gICAgaXQoJ29uU2V0U2VhcmNoVmFsdWUgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9TRUFSQ0hfVkFMVUUnLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3ZhbHVlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICd2YWx1ZSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzZXRGaWx0ZXIgdGVzdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9GSUxURVJfVkFMVUUnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBGSUxURVIuRE9ORVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gcmVkdWNlcihzdG9yZU1vY2ssIGFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zdG9yZU1vY2ssXHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBGSUxURVIuRE9ORVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU2V0QWRkRmllbGRWYWx1ZSB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX1NFQVJDSF9WQUxVRScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICdsb3JlbUlwc3VtJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ2xvcmVtSXBzdW0nLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uQWRkSXRlbSB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ET19JVEVNJyxcclxuICAgICAgICAgICAgIHBheWxvYWQ6ICdsYWJlbCcsXHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICB0b2RvTGlzdDogWy4uLnN0b3JlTW9jay50b2RvTGlzdCwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpZDogJ3V1aWQnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAvLyBleHBlY3QoYWN0dWFsLnRvZG9MaXN0WzFdLmRvbmUpLnRvRXF1YWwoZXhwZWN0ZWQudG9kb0xpc3RbMV0uZG9uZSk7XHJcbiAgICAgICAvLyBleHBlY3QoYWN0dWFsLnRvZG9MaXN0WzFdLmlkKS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmlkKTtcclxuICAgICAgIC8vIGV4cGVjdChhY3R1YWwudG9kb0xpc3RbMV0uaW1wb3J0YW50KS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmltcG9ydGFudCk7XHJcbiAgICAgICAvLyBleHBlY3QoYWN0dWFsLnRvZG9MaXN0WzFdLmxhYmVsKS50b0VxdWFsKGV4cGVjdGVkLnRvZG9MaXN0WzFdLmxhYmVsKTtcclxuXHJcbiAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgIC8vZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9