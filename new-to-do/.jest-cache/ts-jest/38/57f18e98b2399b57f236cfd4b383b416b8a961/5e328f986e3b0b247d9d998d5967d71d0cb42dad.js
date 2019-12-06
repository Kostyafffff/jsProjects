"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var sinon_1 = __importDefault(require("sinon"));
var todo_list_1 = require("../../../src/components/todo-list/todo-list");
describe('src/components/todo-list/todo-list.tsx', function () {
    //Given
    var toDoListProps = {
        todos: [{ key: 'asssa', label: 'all', done: false, important: true, id: 1, }],
        onDeleted: sinon_1.default.stub(),
        onToggleImportant: sinon_1.default.stub(),
        onToggleDone: sinon_1.default.stub(),
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should be defined', function () {
        //Then
        expect(todo_list_1.ToDoList).toBeDefined();
    });
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_1.ToDoList, __assign({}, toDoListProps)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass              | expectedLength\n        ", "      | ", "\n        ", " | ", "\n        "], ["\n        expectedClass              | expectedLength\n        ", "      | ", "\n        ", " | ", "\n        "])), '.list-group-item', 1, '.list-group.todo-list', 1)('should render $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass;
        //Given
        var currentProps = __assign({}, toDoListProps);
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_1.ToDoList, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQixnREFBMEI7QUFFMUIseUVBQXFFO0FBRXJFLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUUvQyxPQUFPO0lBQ1AsSUFBTSxhQUFhLEdBQWtCO1FBQ2pDLEtBQUssRUFBRSxDQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFDL0UsU0FBUyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDdkIsaUJBQWlCLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtRQUMvQixZQUFZLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUM3QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsb0JBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxhQUFhLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxtTEFBQSxpRUFFRCxFQUFrQixVQUFXLEVBQUMsWUFDOUIsRUFBdUIsS0FBTSxFQUFDLFlBQy9CLEtBRkMsa0JBQWtCLEVBQVcsQ0FBQyxFQUM5Qix1QkFBdUIsRUFBTSxDQUFDLEVBQzlCLDhCQUE4QixFQUFFLFVBQUUsRUFBaUI7WUFBZixnQ0FBYTtRQUVuRCxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLGFBQWEsQ0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXRELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IFRvZG9MaXN0UHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvdHlwZXMtdG9kby1saXN0JztcclxuaW1wb3J0IHtUb0RvTGlzdH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3RcIjtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LnRzeCcsICgpID0+IHtcclxuXHJcbiAgICAvL0dpdmVuXHJcbiAgICBjb25zdCB0b0RvTGlzdFByb3BzOiBUb2RvTGlzdFByb3BzID0ge1xyXG4gICAgICAgIHRvZG9zOiBbIHsga2V5OiAnYXNzc2EnLCBsYWJlbDogJ2FsbCcsIGRvbmU6IGZhbHNlLCBpbXBvcnRhbnQ6IHRydWUsIGlkOiAxLCB9IF0sXHJcbiAgICAgICAgb25EZWxldGVkOiBzaW5vbi5zdHViKCksXHJcbiAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICBvblRvZ2dsZURvbmU6IHNpbm9uLnN0dWIoKSxcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KFRvRG9MaXN0KS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9Eb0xpc3Qgey4uLnRvRG9MaXN0UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5saXN0LWdyb3VwLWl0ZW0nfSAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5saXN0LWdyb3VwLnRvZG8tbGlzdCd9IHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgJGV4cGVjdGVkQ2xhc3MnLCAoIHsgZXhwZWN0ZWRDbGFzcyB9KSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IFRvZG9MaXN0UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRvRG9MaXN0UHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvRG9MaXN0IHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKDEpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==