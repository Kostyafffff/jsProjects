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
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("redux/store/types");
// import sinon from 'sinon';
var reducer_1 = require("redux/reducers/reducer");
describe('redux/reducers', function () {
    // beforeEach(() => {
    //     sinon.resetHistory();
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsNkJBQTZCO0FBQzdCLGtEQUFpRDtBQUVqRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixNQUFNO0lBRU4sRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ2pCLE9BQU87UUFDUCxJQUFNLFNBQVMsR0FBRztZQUNkLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsc0NBQXNDO2lCQUM3QyxDQUFDO1lBQ0YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxNQUFNO1NBQzFCLENBQUM7UUFFRixJQUFNLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVOLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDTixJQUFNLFFBQVEseUJBQ1AsU0FBUyxLQUNaLFdBQVcsRUFBRSxPQUFPLEdBQ3ZCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxyZWR1Y2Vyc1xccmVkdWNlcnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIgfSBmcm9tICdyZWR1eC9zdG9yZS90eXBlcyc7XHJcbi8vIGltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICdyZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyJztcclxuXHJcbmRlc2NyaWJlKCdyZWR1eC9yZWR1Y2VycycsICgpID0+IHtcclxuXHJcbiAgICAvLyBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgIC8vICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGl0KCdzZXRGaWx0ZXIgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmVNb2NrID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICAgICAgYWRkRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgICAgIHRvZG9MaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkFDVElWRSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1NFQVJDSF9WQUxVRScsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndmFsdWUnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ3ZhbHVlJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==