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
        var store = {
            addField: 'field value',
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsMERBQStFO0FBRy9FLHlFQUFrRjtBQUVsRixxR0FBcUc7QUFFckcsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUc7WUFDVixRQUFRLEVBQUUsYUFBYTtTQUNoQixDQUFDO1FBQ1osSUFBTSxRQUFRLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUM7UUFFL0MsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLCtCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMseUVBQXlFO0lBQzdFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBQ3JCLE9BQU87UUFDUCxJQUFNLDBCQUEwQixHQUFHO1lBQy9CLGdCQUFnQixFQUFFLGtDQUFnQjtZQUNsQyxPQUFPLEVBQUUseUJBQU87U0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsa0NBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxpdGVtLWFkZC1mb3JtXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJztcclxuLy8gaW1wb3J0ICogYXMgZ2V0QWRkSXRlbVZhbHVlIGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7IGFkZFRvRG8sIHNldEFkZEZpZWxkVmFsdWUgfSBmcm9tICdyZWR1eC9hY3Rpb24tY3JlYXRvcnMvYWN0aW9uLWNyZWF0b3JzJztcclxuXHJcbi8vIGNvbnN0IGdldEFkZEl0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKGdldEFkZEl0ZW1WYWx1ZSwgJ2dldEFkZEl0ZW1WYWx1ZScpLnJldHVybnMoJ2ZpZWxkIHZhbHVlJyk7XHJcblxyXG5kZXNjcmliZSgnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJywgKCkgPT4ge1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHtcclxuICAgICAgICAgICAgYWRkRmllbGQ6ICdmaWVsZCB2YWx1ZScsXHJcbiAgICAgICAgfSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7IGZpZWxkVmFsdWU6ICdmaWVsZCB2YWx1ZScgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgLy8gZXhwZWN0KGdldEFkZEl0ZW1WYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcERpc3BhdGNoVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNldEFkZEZpZWxkVmFsdWU6IHNldEFkZEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgIGFkZFRvRG86IGFkZFRvRG8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykudG9FcXVhbChleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==