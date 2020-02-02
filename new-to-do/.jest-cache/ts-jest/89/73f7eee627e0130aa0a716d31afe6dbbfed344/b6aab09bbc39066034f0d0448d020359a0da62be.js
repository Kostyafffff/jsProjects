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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../src/redux/store/types");
var sinon_1 = __importDefault(require("sinon"));
var reducers_1 = require("../../src/redux/reducers/reducers");
describe('redux/reducers', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('setFilter test', function () {
        //Given
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
        var action = {
            type: 'SET_SEARCH_VALUE',
            payload: 'value'
        };
        var actual = reducers_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { searchField: 'value' });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsZ0RBQTBCO0FBQzFCLDhEQUE0RDtBQUU1RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBRWpCLE9BQU87UUFDUCxJQUFNLFNBQVMsR0FBRztZQUNkLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsc0NBQXNDO2lCQUM3QyxDQUFDO1lBQ0YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxNQUFNO1NBQzFCLENBQUM7UUFFRixJQUFNLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVOLElBQU0sTUFBTSxHQUFHLGtCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxPQUFPLEdBQ3ZCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxyZWR1Y2Vyc1xccmVkdWNlcnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIgfSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4uLy4uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xyXG5cclxuZGVzY3JpYmUoJ3JlZHV4L3JlZHVjZXJzJywgKCkgPT4ge1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3NldEZpbHRlciB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmVNb2NrID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICAgICAgYWRkRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgICAgIHRvZG9MaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkFDVElWRSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1NFQVJDSF9WQUxVRScsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndmFsdWUnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ3ZhbHVlJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==