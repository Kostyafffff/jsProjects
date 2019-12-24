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
var getAddItemValue = __importStar(require("redux/selectors/selectors"));
var action_creators_1 = require("redux/action-creators/action-creators");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLDBEQUErRTtBQUMvRSx5RUFBNkQ7QUFFN0QseUVBQWtGO0FBRWxGLElBQU0sbUJBQW1CLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbEcsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDO1FBRS9DLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRywrQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBQ3JCLE9BQU87UUFDUCxJQUFNLDBCQUEwQixHQUFHO1lBQy9CLGdCQUFnQixFQUFFLGtDQUFnQjtZQUNsQyxPQUFPLEVBQUUseUJBQU87U0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsa0NBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxpdGVtLWFkZC1mb3JtXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0ICogYXMgZ2V0QWRkSXRlbVZhbHVlIGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7IGFkZFRvRG8sIHNldEFkZEZpZWxkVmFsdWUgfSBmcm9tICdyZWR1eC9hY3Rpb24tY3JlYXRvcnMvYWN0aW9uLWNyZWF0b3JzJztcclxuXHJcbmNvbnN0IGdldEFkZEl0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKGdldEFkZEl0ZW1WYWx1ZSwgJ2dldEFkZEl0ZW1WYWx1ZScpLnJldHVybnMoJ2ZpZWxkIHZhbHVlJyk7XHJcblxyXG5kZXNjcmliZSgnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJywgKCkgPT4ge1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHt9IGFzIElTdG9yZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHsgZmllbGRWYWx1ZTogJ2ZpZWxkIHZhbHVlJyB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoZ2V0QWRkSXRlbVZhbHVlU3R1Yi5jYWxsZWRPbmNlV2l0aEV4YWN0bHkoc3RvcmUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwRGlzcGF0Y2hUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgICAgICAgICAgc2V0QWRkRmllbGRWYWx1ZTogc2V0QWRkRmllbGRWYWx1ZSxcclxuICAgICAgICAgICAgYWRkVG9EbzogYWRkVG9EbyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QobWFwRGlzcGF0Y2hUb1Byb3BzKS50b0VxdWFsKGV4cGVjdGVkTWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sInZlcnNpb24iOjN9