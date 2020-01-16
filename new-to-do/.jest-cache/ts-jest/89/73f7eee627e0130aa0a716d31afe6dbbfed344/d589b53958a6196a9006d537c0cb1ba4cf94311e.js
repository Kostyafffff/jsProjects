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
var types_1 = require("redux/store/types");
var sinon_1 = __importDefault(require("sinon"));
var reducer_1 = require("redux/reducers/reducer");
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
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { searchField: 'value' });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsZ0RBQTBCO0FBQzFCLGtEQUFpRDtBQUVqRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBRWpCLE9BQU87UUFDUCxJQUFNLFNBQVMsR0FBRztZQUNkLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsc0NBQXNDO2lCQUM3QyxDQUFDO1lBQ0YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxNQUFNO1NBQzFCLENBQUM7UUFFRixJQUFNLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVOLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxPQUFPLEdBQ3ZCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxyZWR1Y2Vyc1xccmVkdWNlcnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIgfSBmcm9tICdyZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICdyZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyJztcclxuXHJcbmRlc2NyaWJlKCdyZWR1eC9yZWR1Y2VycycsICgpID0+IHtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzZXRGaWx0ZXIgdGVzdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlTW9jayA9IHtcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgICAgIGFkZEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgICAgICB0b2RvTGlzdDogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnYXNkJyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiAnMWRkMzBmN2ItZjhmYS00YWE2LWE4NDctODZlMjU4MjQzNmZhJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5BQ1RJVkUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9TRUFSQ0hfVkFMVUUnLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3ZhbHVlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICd2YWx1ZSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=