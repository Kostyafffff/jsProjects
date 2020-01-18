"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var item_add_form_1 = require("components/item-add-form");
var getAddItemValue = __importStar(require("redux-utils/selectors/selectors"));
var action_creators_1 = require("redux-utils/action-creators/action-creators");
var getAddItemValueStub = sinon_1.default.stub(getAddItemValue, 'getAddItemValue').returns('field value');
describe('components/item-add-form', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        var expected = { fieldValue: 'field value' };
        //When
        var actual = item_add_form_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getAddItemValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
    it('mapDispatchToProps test', function () {
        //Given
        var expectedMapDispatchToProps = {
            setAddFieldValue: action_creators_1.setAddFieldValue,
            addToDo: action_creators_1.addToDo,
        };
        //Then
        expect(item_add_form_1.mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaW5kZXgudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsMERBQStFO0FBQy9FLCtFQUFtRTtBQUVuRSwrRUFBd0Y7QUFFeEYsSUFBTSxtQkFBbUIsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVsRyxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFDakMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRyxFQUFZLENBQUM7UUFDM0IsSUFBTSxRQUFRLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUM7UUFFL0MsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLCtCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDMUIsT0FBTztRQUNQLElBQU0sMEJBQTBCLEdBQUc7WUFDL0IsZ0JBQWdCLEVBQUUsa0NBQWdCO1lBQ2xDLE9BQU8sRUFBRSx5QkFBTztTQUNuQixDQUFDO1FBRUYsTUFBTTtRQUNOLE1BQU0sQ0FBQyxrQ0FBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaW5kZXgudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybSc7XHJcbmltcG9ydCAqIGFzIGdldEFkZEl0ZW1WYWx1ZSBmcm9tICdyZWR1eC11dGlscy9zZWxlY3RvcnMvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAncmVkdXgtdXRpbHMvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBhZGRUb0RvLCBzZXRBZGRGaWVsZFZhbHVlIH0gZnJvbSAncmVkdXgtdXRpbHMvYWN0aW9uLWNyZWF0b3JzL2FjdGlvbi1jcmVhdG9ycyc7XHJcblxyXG5jb25zdCBnZXRBZGRJdGVtVmFsdWVTdHViID0gc2lub24uc3R1YihnZXRBZGRJdGVtVmFsdWUsICdnZXRBZGRJdGVtVmFsdWUnKS5yZXR1cm5zKCdmaWVsZCB2YWx1ZScpO1xyXG5cclxuZGVzY3JpYmUoJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybScsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7IGZpZWxkVmFsdWU6ICdmaWVsZCB2YWx1ZScgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgZXhwZWN0KGdldEFkZEl0ZW1WYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcERpc3BhdGNoVG9Qcm9wcyB0ZXN0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgICAgICAgICAgc2V0QWRkRmllbGRWYWx1ZTogc2V0QWRkRmllbGRWYWx1ZSxcclxuICAgICAgICAgICAgYWRkVG9EbzogYWRkVG9EbyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QobWFwRGlzcGF0Y2hUb1Byb3BzKS50b0VxdWFsKGV4cGVjdGVkTWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sInZlcnNpb24iOjN9