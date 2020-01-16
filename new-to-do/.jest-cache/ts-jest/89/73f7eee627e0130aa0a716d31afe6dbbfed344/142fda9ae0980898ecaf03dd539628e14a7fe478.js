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
var types_1 = require("redux-utils/store/types");
// import sinon from 'sinon';
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
            payload: types_1.FILTER.ACTIVE
        };
        var actual = reducer_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { filterBy: types_1.FILTER.DONE });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBaUQ7QUFDakQsNkJBQTZCO0FBQzdCLHdEQUF1RDtBQUV2RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDdkIsSUFBTSxTQUFTLEdBQUc7UUFDZCxXQUFXLEVBQUUsVUFBVTtRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsRUFBRSxFQUFFLHNDQUFzQzthQUM3QyxDQUFDO1FBQ0YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxNQUFNO0tBQzFCLENBQUM7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDeEIsT0FBTztRQUNQLElBQU0sTUFBTSxHQUFHO1lBQ1AsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRU4sSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osV0FBVyxFQUFFLE9BQU8sR0FDdkIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ2pCLE9BQU87UUFDUCxJQUFNLE1BQU0sR0FBRztZQUNYLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsT0FBTyxFQUFFLGNBQU0sQ0FBQyxNQUFNO1NBQ3pCLENBQUM7UUFDRixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLFNBQVMsS0FDWixRQUFRLEVBQUUsY0FBTSxDQUFDLElBQUksR0FDeEIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiB9IGZyb20gJ3JlZHV4LXV0aWxzL3N0b3JlL3R5cGVzJztcclxuLy8gaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJ3JlZHV4LXV0aWxzL3JlZHVjZXJzL3JlZHVjZXInO1xyXG5cclxuZGVzY3JpYmUoJ3JlZHV4L3JlZHVjZXJzJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVNb2NrID0ge1xyXG4gICAgICAgIHNlYXJjaEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgIGFkZEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgIHRvZG9MaXN0OiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ2FzZCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogJzFkZDMwZjdiLWY4ZmEtNGFhNi1hODQ3LTg2ZTI1ODI0MzZmYSdcclxuICAgICAgICB9XSxcclxuICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkFDVElWRSxcclxuICAgIH07XHJcblxyXG4gICAgaXQoJ29uU2V0U2VhcmNoVmFsdWUgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9TRUFSQ0hfVkFMVUUnLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3ZhbHVlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICd2YWx1ZSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzZXRGaWx0ZXIgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0ZJTFRFUl9WQUxVRScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IEZJTFRFUi5BQ1RJVkVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHJlZHVjZXIoc3RvcmVNb2NrLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmVNb2NrLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkRPTkVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==