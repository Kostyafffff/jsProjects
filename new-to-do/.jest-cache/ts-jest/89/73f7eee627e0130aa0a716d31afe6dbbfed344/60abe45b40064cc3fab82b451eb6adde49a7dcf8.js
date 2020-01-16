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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGluZGV4LWl0ZW0tc3RhdHVzLWZpbHRlci50ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiwwREFBK0U7QUFDL0UseUVBQTZEO0FBRTdELHlFQUFrRjtBQUVsRixJQUFNLG1CQUFtQixHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRWxHLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUNqQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQztRQUUvQyxNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsK0JBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUMxQixPQUFPO1FBQ1AsSUFBTSwwQkFBMEIsR0FBRztZQUMvQixnQkFBZ0IsRUFBRSxrQ0FBZ0I7WUFDbEMsT0FBTyxFQUFFLHlCQUFPO1NBQ25CLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxDQUFDLGtDQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcaXRlbS1hZGQtZm9ybVxcaW5kZXgtaXRlbS1zdGF0dXMtZmlsdGVyLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0nO1xyXG5pbXBvcnQgKiBhcyBnZXRBZGRJdGVtVmFsdWUgZnJvbSAncmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJ3JlZHV4L3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgYWRkVG9Ebywgc2V0QWRkRmllbGRWYWx1ZSB9IGZyb20gJ3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9hY3Rpb24tY3JlYXRvcnMnO1xyXG5cclxuY29uc3QgZ2V0QWRkSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoZ2V0QWRkSXRlbVZhbHVlLCAnZ2V0QWRkSXRlbVZhbHVlJykucmV0dXJucygnZmllbGQgdmFsdWUnKTtcclxuXHJcbmRlc2NyaWJlKCdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0nLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0geyBmaWVsZFZhbHVlOiAnZmllbGQgdmFsdWUnIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChnZXRBZGRJdGVtVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBEaXNwYXRjaFRvUHJvcHMgdGVzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNldEFkZEZpZWxkVmFsdWU6IHNldEFkZEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgIGFkZFRvRG86IGFkZFRvRG8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykudG9FcXVhbChleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==