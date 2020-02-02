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
var component_1 = require("../../../src/components/todo-list/component");
var types_1 = require("../../../src/redux/store/types");
describe('src/components/todo-list/todo-list.tsx', function () {
    var onDeletedStub = sinon_1.default.stub();
    var onToggleImportantStub = sinon_1.default.stub();
    var onToggleDoneStub = sinon_1.default.stub();
    //Given
    var toDoListProps = {
        todoList: [
            {
                key: 'asssa',
                label: 'all',
                done: false,
                important: true,
                id: 'a8cde768-7227-477e-a26c-772f41b19a6f',
            }
        ],
        searchValue: 'hello world',
        filterValue: types_1.FILTER.ALL,
        onDeleted: onDeletedStub,
        onToggleImportant: onToggleImportantStub,
        onToggleDone: onToggleDoneStub,
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should be defined', function () {
        //Then
        expect(component_1.TodoList).toBeDefined();
    });
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoList, __assign({}, toDoListProps)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass              | expectedLength\n        ", " | ", "\n        ", "      | ", "\n        "], ["\n        expectedClass              | expectedLength\n        ", " | ", "\n        ", "      | ", "\n        "])), '.list-group.todo-list', 1, '.list-group-item', 1)('should render $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass;
        //Given
        var currentProps = __assign({}, toDoListProps);
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoList, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE2QjtBQUM3QixnREFBMEI7QUFDMUIsZ0RBQTBCO0FBRTFCLHlFQUF1RTtBQUN2RSx3REFBc0Q7QUFFdEQsUUFBUSxDQUFDLHdDQUF3QyxFQUFFO0lBQy9DLElBQU0sYUFBYSxHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFNLHFCQUFxQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQyxJQUFNLGdCQUFnQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxPQUFPO0lBQ1AsSUFBTSxhQUFhLEdBQWtCO1FBQ2pDLFFBQVEsRUFBRTtZQUNGO2dCQUNJLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEVBQUUsRUFBRSxzQ0FBc0M7YUFDN0M7U0FDSjtRQUNMLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxjQUFNLENBQUMsR0FBRztRQUN2QixTQUFTLEVBQUUsYUFBYTtRQUN4QixpQkFBaUIsRUFBRSxxQkFBcUI7UUFDeEMsWUFBWSxFQUFFLGdCQUFnQjtLQUNqQyxDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsb0JBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxhQUFhLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxtTEFBQSxpRUFFRCxFQUF1QixLQUFNLEVBQUMsWUFDOUIsRUFBa0IsVUFBVyxFQUFDLFlBQy9CLEtBRkMsdUJBQXVCLEVBQU0sQ0FBQyxFQUM5QixrQkFBa0IsRUFBVyxDQUFDLEVBQzlCLDhCQUE4QixFQUFFLFVBQUUsRUFBaUI7WUFBZixnQ0FBYTtRQUVuRCxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLGFBQWEsQ0FDbkIsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXRELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXGNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb3VudH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHtUb2RvTGlzdFByb3BzfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvdHlwZXMtdG9kby1saXN0JztcclxuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvY29tcG9uZW50JztcclxuaW1wb3J0IHtGSUxURVJ9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXNcIjtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LnRzeCcsICgpID0+IHtcclxuICAgIGNvbnN0IG9uRGVsZXRlZFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUltcG9ydGFudFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBvblRvZ2dsZURvbmVTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgLy9HaXZlblxyXG4gICAgY29uc3QgdG9Eb0xpc3RQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICB0b2RvTGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2Fzc3NhJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2FsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnYThjZGU3NjgtNzIyNy00NzdlLWEyNmMtNzcyZjQxYjE5YTZmJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogJ2hlbGxvIHdvcmxkJyxcclxuICAgICAgICBmaWx0ZXJWYWx1ZTogRklMVEVSLkFMTCxcclxuICAgICAgICBvbkRlbGV0ZWQ6IG9uRGVsZXRlZFN0dWIsXHJcbiAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ6IG9uVG9nZ2xlSW1wb3J0YW50U3R1YixcclxuICAgICAgICBvblRvZ2dsZURvbmU6IG9uVG9nZ2xlRG9uZVN0dWIsXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChUb2RvTGlzdCkudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0IHsuLi50b0RvTGlzdFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycubGlzdC1ncm91cC50b2RvLWxpc3QnfSB8ICR7MX1cclxuICAgICAgICAkeycubGlzdC1ncm91cC1pdGVtJ30gICAgICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzJywgKCB7IGV4cGVjdGVkQ2xhc3MgfSApID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4udG9Eb0xpc3RQcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3Qgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9