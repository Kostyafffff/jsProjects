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
var constants_1 = require("../../src/redux/actions/constants");
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
            type: constants_1.SET_FILTER_VALUE,
            payload: types_1.FILTER.DONE
        };
        var actual = reducers_1.reducer(storeMock, action);
        //When
        var expected = __assign(__assign({}, storeMock), { filterBy: types_1.FILTER.DONE });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsZ0RBQTBCO0FBQzFCLDhEQUE0RDtBQUM1RCwrREFBcUU7QUFFckUsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ1AsSUFBTSxTQUFTLEdBQUc7WUFDZCxXQUFXLEVBQUUsVUFBVTtZQUN2QixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLHNDQUFzQztpQkFDN0MsQ0FBQztZQUNGLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtTQUMxQixDQUFDO1FBRUYsSUFBTSxNQUFNLEdBQUc7WUFDUCxJQUFJLEVBQUUsNEJBQWdCO1lBQ3RCLE9BQU8sRUFBRSxjQUFNLENBQUMsSUFBSTtTQUN2QixDQUFDO1FBQ04sSUFBTSxNQUFNLEdBQUcsa0JBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxTQUFTLEtBQ1osUUFBUSxFQUFFLGNBQU0sQ0FBQyxJQUFJLEdBQ3hCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxyZWR1Y2Vyc1xccmVkdWNlcnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIgfSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4uLy4uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTRVRfRklMVEVSX1ZBTFVFIH0gZnJvbSBcIi4uLy4uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuZGVzY3JpYmUoJ3JlZHV4L3JlZHVjZXJzJywgKCkgPT4ge1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3NldEZpbHRlciB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmVNb2NrID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICAgICAgYWRkRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgICAgIHRvZG9MaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdhc2QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICcxZGQzMGY3Yi1mOGZhLTRhYTYtYTg0Ny04NmUyNTgyNDM2ZmEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkFDVElWRSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfRklMVEVSX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogRklMVEVSLkRPTkVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSByZWR1Y2VyKHN0b3JlTW9jaywgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlTW9jayxcclxuICAgICAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5ET05FXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9