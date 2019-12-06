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
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass              | expectedLength\n        ", "      | ", "\n        ", " | ", "\n        ", " | ", "\n        "], ["\n        expectedClass              | expectedLength\n        ", "      | ", "\n        ", " | ", "\n        ", " | ", "\n        "])), '.list-group-item', 1, '.list-group.todo-list', 1, '.list-group.todo-list.todo-list-item-label', 1)('should render $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass;
        console.log("aaaaaaaaa");
        //Given
        var currentProps = __assign({}, toDoListProps);
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_1.ToDoList, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQixnREFBMEI7QUFFMUIseUVBQXFFO0FBRXJFLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUUvQyxPQUFPO0lBQ1AsSUFBTSxhQUFhLEdBQWtCO1FBQ2pDLEtBQUssRUFBRSxDQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFDL0UsU0FBUyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDdkIsaUJBQWlCLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtRQUMvQixZQUFZLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUM3QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsb0JBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxhQUFhLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSx3TUFBQSxpRUFFRCxFQUFrQixVQUFXLEVBQUMsWUFDOUIsRUFBdUIsS0FBTSxFQUFDLFlBQzlCLEVBQTRDLEtBQU0sRUFBQyxZQUNwRCxLQUhDLGtCQUFrQixFQUFXLENBQUMsRUFDOUIsdUJBQXVCLEVBQU0sQ0FBQyxFQUM5Qiw0Q0FBNEMsRUFBTSxDQUFDLEVBQ25ELDhCQUE4QixFQUFFLFVBQUUsRUFBaUI7WUFBZixnQ0FBYTtRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLE9BQU87UUFDUCxJQUFNLFlBQVksZ0JBQ1gsYUFBYSxDQUNuQixDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyxvQkFBUSxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFdEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgVG9kb0xpc3RQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90eXBlcy10b2RvLWxpc3QnO1xyXG5pbXBvcnQge1RvRG9MaXN0fSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdFwiO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QudHN4JywgKCkgPT4ge1xyXG5cclxuICAgIC8vR2l2ZW5cclxuICAgIGNvbnN0IHRvRG9MaXN0UHJvcHM6IFRvZG9MaXN0UHJvcHMgPSB7XHJcbiAgICAgICAgdG9kb3M6IFsgeyBrZXk6ICdhc3NzYScsIGxhYmVsOiAnYWxsJywgZG9uZTogZmFsc2UsIGltcG9ydGFudDogdHJ1ZSwgaWQ6IDEsIH0gXSxcclxuICAgICAgICBvbkRlbGV0ZWQ6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICBvblRvZ2dsZUltcG9ydGFudDogc2lub24uc3R1YigpLFxyXG4gICAgICAgIG9uVG9nZ2xlRG9uZTogc2lub24uc3R1YigpLFxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoVG9Eb0xpc3QpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb0RvTGlzdCB7Li4udG9Eb0xpc3RQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmxpc3QtZ3JvdXAtaXRlbSd9ICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmxpc3QtZ3JvdXAudG9kby1saXN0J30gfCAkezF9XHJcbiAgICAgICAgJHsnLmxpc3QtZ3JvdXAudG9kby1saXN0LnRvZG8tbGlzdC1pdGVtLWxhYmVsJ30gfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciAkZXhwZWN0ZWRDbGFzcycsICggeyBleHBlY3RlZENsYXNzIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhYWFhYWFhYWFcIik7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4udG9Eb0xpc3RQcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9Eb0xpc3Qgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9