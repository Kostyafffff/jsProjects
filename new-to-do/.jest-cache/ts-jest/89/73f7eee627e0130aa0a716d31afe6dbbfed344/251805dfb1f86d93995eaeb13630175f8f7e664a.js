"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var item_add_form_1 = require("components/item-add-form");
var action_creators_1 = require("redux/action-creators/action-creators");
// const getAddItemValueStub = sinon.stub(getAddItemValue, 'getAddItemValue').returns('field value');
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
        // expect(getAddItemValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
    it('mapDispatchToProps', function () {
        //Given
        var expectedMapDispatchToProps = {
            setAddFieldValue: action_creators_1.setAddFieldValue,
            addToDo: action_creators_1.addToDo,
        };
        //Then
        expect(item_add_form_1.mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsMERBQStFO0FBRy9FLHlFQUFrRjtBQUVsRixxR0FBcUc7QUFFckcsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDO1FBRS9DLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRywrQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLHlFQUF5RTtJQUM3RSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUNyQixPQUFPO1FBQ1AsSUFBTSwwQkFBMEIsR0FBRztZQUMvQixnQkFBZ0IsRUFBRSxrQ0FBZ0I7WUFDbEMsT0FBTyxFQUFFLHlCQUFPO1NBQ25CLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLGtDQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaW5kZXgudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybSc7XHJcbi8vIGltcG9ydCAqIGFzIGdldEFkZEl0ZW1WYWx1ZSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAncmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBhZGRUb0RvLCBzZXRBZGRGaWVsZFZhbHVlIH0gZnJvbSAncmVkdXgvYWN0aW9uLWNyZWF0b3JzL2FjdGlvbi1jcmVhdG9ycyc7XHJcblxyXG4vLyBjb25zdCBnZXRBZGRJdGVtVmFsdWVTdHViID0gc2lub24uc3R1YihnZXRBZGRJdGVtVmFsdWUsICdnZXRBZGRJdGVtVmFsdWUnKS5yZXR1cm5zKCdmaWVsZCB2YWx1ZScpO1xyXG5cclxuZGVzY3JpYmUoJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybScsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7IGZpZWxkVmFsdWU6ICdmaWVsZCB2YWx1ZScgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgLy8gZXhwZWN0KGdldEFkZEl0ZW1WYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcERpc3BhdGNoVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNldEFkZEZpZWxkVmFsdWU6IHNldEFkZEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgIGFkZFRvRG86IGFkZFRvRG8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykudG9FcXVhbChleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==