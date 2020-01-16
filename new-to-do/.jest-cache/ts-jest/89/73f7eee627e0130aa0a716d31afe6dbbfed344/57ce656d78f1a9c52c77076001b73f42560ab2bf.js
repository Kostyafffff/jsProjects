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
        var store = {
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
        var action = { type: constants_1.SET_FILTER_VALUE, payload: types_1.FILTER.DONE };
        var actual = reducers_1.setFilter(store, action);
        //When
        var expected = __assign(__assign({}, store), { filterBy: types_1.FILTER.DONE });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsZ0RBQTBCO0FBQzFCLDhEQUE4RDtBQUM5RCwrREFBbUU7QUFFbkUsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUc7WUFDVixXQUFXLEVBQUUsVUFBVTtZQUN2QixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLHNDQUFzQztpQkFDN0MsQ0FBQztZQUNGLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtTQUMxQixDQUFDO1FBRUYsSUFBTSxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsNEJBQWdCLEVBQUUsT0FBTyxFQUFFLGNBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRCxJQUFNLE1BQU0sR0FBRyxvQkFBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4QyxNQUFNO1FBQ04sSUFBTSxRQUFRLHlCQUNQLEtBQUssS0FDUixRQUFRLEVBQUUsY0FBTSxDQUFDLElBQUksR0FDeEIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiB9IGZyb20gJy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IHNldEZpbHRlciB9IGZyb20gXCIuLi8uLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtTRVRfRklMVEVSX1ZBTFVFfSBmcm9tIFwiLi4vLi4vc3JjL3JlZHV4L2FjdGlvbnMvY29uc3RhbnRzXCI7XHJcblxyXG5kZXNjcmliZSgncmVkdXgvcmVkdWNlcnMnLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2V0RmlsdGVyIHRlc3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICdmb3IgdGVzdCcsXHJcbiAgICAgICAgICAgIGFkZEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgICAgICB0b2RvTGlzdDogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnYXNkJyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiAnMWRkMzBmN2ItZjhmYS00YWE2LWE4NDctODZlMjU4MjQzNmZhJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgZmlsdGVyQnk6IEZJTFRFUi5BQ1RJVkUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge3R5cGU6IFNFVF9GSUxURVJfVkFMVUUsIHBheWxvYWQ6IEZJTFRFUi5ET05FIH07XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gc2V0RmlsdGVyKHN0b3JlLCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3RvcmUsXHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBGSUxURVIuRE9ORVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==