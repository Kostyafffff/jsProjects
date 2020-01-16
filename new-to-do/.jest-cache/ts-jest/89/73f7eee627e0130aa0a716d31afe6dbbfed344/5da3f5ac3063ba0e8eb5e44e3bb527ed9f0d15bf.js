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
        var action = {
            type: constants_1.SET_FILTER_VALUE,
            payload: types_1.FILTER.DONE
        };
        var actual = reducers_1.setFilter(store, action);
        //When
        var expected = __assign(__assign({}, store), { filterBy: types_1.FILTER.DONE });
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXHJlZHVjZXJzXFxyZWR1Y2Vycy50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsZ0RBQTBCO0FBQzFCLDhEQUE4RDtBQUM5RCwrREFBbUU7QUFFbkUsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVqQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUc7WUFDVixXQUFXLEVBQUUsVUFBVTtZQUN2QixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLHNDQUFzQztpQkFDN0MsQ0FBQztZQUNGLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtTQUMxQixDQUFDO1FBRUYsSUFBTSxNQUFNLEdBQUc7WUFDUCxJQUFJLEVBQUUsNEJBQWdCO1lBQ3RCLE9BQU8sRUFBRSxjQUFNLENBQUMsSUFBSTtTQUN2QixDQUFDO1FBQ04sSUFBTSxNQUFNLEdBQUcsb0JBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFeEMsTUFBTTtRQUNOLElBQU0sUUFBUSx5QkFDUCxLQUFLLEtBQ1IsUUFBUSxFQUFFLGNBQU0sQ0FBQyxJQUFJLEdBQ3hCLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxyZWR1Y2Vyc1xccmVkdWNlcnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIgfSBmcm9tICcuLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBzZXRGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vc3JjL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7U0VUX0ZJTFRFUl9WQUxVRX0gZnJvbSBcIi4uLy4uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuZGVzY3JpYmUoJ3JlZHV4L3JlZHVjZXJzJywgKCkgPT4ge1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3NldEZpbHRlciB0ZXN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkOiAnZm9yIHRlc3QnLFxyXG4gICAgICAgICAgICBhZGRGaWVsZDogJ2ZvciB0ZXN0JyxcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2FzZCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpZDogJzFkZDMwZjdiLWY4ZmEtNGFhNi1hODQ3LTg2ZTI1ODI0MzZmYSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBGSUxURVIuQUNUSVZFLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9GSUxURVJfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBGSUxURVIuRE9ORVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHNldEZpbHRlcihzdG9yZSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogRklMVEVSLkRPTkVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=