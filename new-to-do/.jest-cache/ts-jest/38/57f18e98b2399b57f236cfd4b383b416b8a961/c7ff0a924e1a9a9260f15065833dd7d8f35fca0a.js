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
describe('src/components/todo-list-item/todo-list-item.tsx', function () {
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
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass          | expectedLength\n        ", " | ", "\n        ", " | ", "\n        "], ["\n        expectedClass          | expectedLength\n        ", " | ", "\n        ", " | ", "\n        "])), '.list-group-item', 1, '.list-group.todo-list', 1)('should render $expectedClass when done = $done important = $important', function (_a) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQixnREFBMEI7QUFFMUIseUVBQXFFO0FBRXJFLFFBQVEsQ0FBQyxrREFBa0QsRUFBRTtJQUV6RCxPQUFPO0lBQ1AsSUFBTSxhQUFhLEdBQWtCO1FBQ2pDLEtBQUssRUFBRSxDQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFDL0UsU0FBUyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDdkIsaUJBQWlCLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtRQUMvQixZQUFZLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUM3QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsb0JBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxhQUFhLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsSUFBSSwwS0FBQSw2REFFRCxFQUFrQixLQUFNLEVBQUMsWUFDekIsRUFBdUIsS0FBTSxFQUFDLFlBQy9CLEtBRkMsa0JBQWtCLEVBQU0sQ0FBQyxFQUN6Qix1QkFBdUIsRUFBTSxDQUFDLEVBQzlCLHVFQUF1RSxFQUFFLFVBQUUsRUFBaUI7WUFBZixnQ0FBYTtRQUU1RixPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLGFBQWEsQ0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXRELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IFRvZG9MaXN0UHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvdHlwZXMtdG9kby1saXN0JztcclxuaW1wb3J0IHtUb0RvTGlzdH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3RcIjtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbS50c3gnLCAoKSA9PiB7XHJcblxyXG4gICAgLy9HaXZlblxyXG4gICAgY29uc3QgdG9Eb0xpc3RQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICB0b2RvczogWyB7IGtleTogJ2Fzc3NhJywgbGFiZWw6ICdhbGwnLCBkb25lOiBmYWxzZSwgaW1wb3J0YW50OiB0cnVlLCBpZDogMSwgfSBdLFxyXG4gICAgICAgIG9uRGVsZXRlZDogc2lub24uc3R1YigpLFxyXG4gICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50OiBzaW5vbi5zdHViKCksXHJcbiAgICAgICAgb25Ub2dnbGVEb25lOiBzaW5vbi5zdHViKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChUb0RvTGlzdCkudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvRG9MaXN0IHsuLi50b0RvTGlzdFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycubGlzdC1ncm91cC1pdGVtJ30gfCAkezF9XHJcbiAgICAgICAgJHsnLmxpc3QtZ3JvdXAudG9kby1saXN0J30gfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciAkZXhwZWN0ZWRDbGFzcyB3aGVuIGRvbmUgPSAkZG9uZSBpbXBvcnRhbnQgPSAkaW1wb3J0YW50JywgKCB7IGV4cGVjdGVkQ2xhc3MgfSkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdFByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi50b0RvTGlzdFByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb0RvTGlzdCB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il0sInZlcnNpb24iOjN9