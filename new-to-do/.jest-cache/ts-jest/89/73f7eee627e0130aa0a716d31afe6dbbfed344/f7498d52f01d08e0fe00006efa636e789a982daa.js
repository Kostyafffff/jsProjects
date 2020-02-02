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
var action_creators_1 = require("../../../src/redux/action-creators/action-creators");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGl0ZW0tYWRkLWZvcm1cXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLDBEQUErRTtBQUMvRSx5RUFBNkQ7QUFFN0Qsc0ZBQTZGO0FBRTdGLElBQU0sbUJBQW1CLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbEcsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQUcsRUFBWSxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDO1FBRS9DLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRywrQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBQ3JCLE9BQU87UUFDUCxJQUFNLDBCQUEwQixHQUFHO1lBQy9CLGdCQUFnQixFQUFFLGtDQUFnQjtZQUNsQyxPQUFPLEVBQUUseUJBQU87U0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsa0NBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxpdGVtLWFkZC1mb3JtXFxpbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtJztcclxuaW1wb3J0ICogYXMgZ2V0QWRkSXRlbVZhbHVlIGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQge0lTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlc1wiO1xyXG5pbXBvcnQge2FkZFRvRG8sIHNldEFkZEZpZWxkVmFsdWV9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvYWN0aW9uLWNyZWF0b3JzL2FjdGlvbi1jcmVhdG9yc1wiO1xyXG5cclxuY29uc3QgZ2V0QWRkSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoZ2V0QWRkSXRlbVZhbHVlLCAnZ2V0QWRkSXRlbVZhbHVlJykucmV0dXJucygnZmllbGQgdmFsdWUnKTtcclxuXHJcbmRlc2NyaWJlKCdjb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0nLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0geyBmaWVsZFZhbHVlOiAnZmllbGQgdmFsdWUnIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChnZXRBZGRJdGVtVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBEaXNwYXRjaFRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkTWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgICAgICAgICBzZXRBZGRGaWVsZFZhbHVlOiBzZXRBZGRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICBhZGRUb0RvOiBhZGRUb0RvLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChtYXBEaXNwYXRjaFRvUHJvcHMpLnRvRXF1YWwoZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=