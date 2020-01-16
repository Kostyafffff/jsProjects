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
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass              | expectedLength\n        ", " | ", "\n       \n        "], ["\n        expectedClass              | expectedLength\n        ", " | ", "\n       \n        "])), '.list-group.todo-list', 1)('should render $expectedClass', function (_a) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE2QjtBQUM3QixnREFBMEI7QUFDMUIsZ0RBQTBCO0FBRTFCLHlFQUF1RTtBQUN2RSx3REFBc0Q7QUFFdEQsUUFBUSxDQUFDLHdDQUF3QyxFQUFFO0lBQy9DLElBQU0sYUFBYSxHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFNLHFCQUFxQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQyxJQUFNLGdCQUFnQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxPQUFPO0lBQ1AsSUFBTSxhQUFhLEdBQWtCO1FBQ2pDLFFBQVEsRUFBRTtZQUNGO2dCQUNJLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEVBQUUsRUFBRSxzQ0FBc0M7YUFDN0M7U0FDSjtRQUNMLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxjQUFNLENBQUMsR0FBRztRQUN2QixTQUFTLEVBQUUsYUFBYTtRQUN4QixpQkFBaUIsRUFBRSxxQkFBcUI7UUFDeEMsWUFBWSxFQUFFLGdCQUFnQjtLQUNqQyxDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsb0JBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxhQUFhLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxrS0FBQSxpRUFFRCxFQUF1QixLQUFNLEVBQUMscUJBRS9CLEtBRkMsdUJBQXVCLEVBQU0sQ0FBQyxFQUU5Qiw4QkFBOEIsRUFBRSxVQUFFLEVBQWlCO1lBQWYsZ0NBQWE7UUFFbkQsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxhQUFhLENBQ25CLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLG9CQUFRLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUV0RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0XFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW91bnR9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7VG9kb0xpc3RQcm9wc30gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L3R5cGVzLXRvZG8tbGlzdCc7XHJcbmltcG9ydCB7IFRvZG9MaXN0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L2NvbXBvbmVudCc7XHJcbmltcG9ydCB7RklMVEVSfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3R5cGVzXCI7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC50c3gnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBvbkRlbGV0ZWRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVJbXBvcnRhbnRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVEb25lU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIC8vR2l2ZW5cclxuICAgIGNvbnN0IHRvRG9MaXN0UHJvcHM6IFRvZG9MaXN0UHJvcHMgPSB7XHJcbiAgICAgICAgdG9kb0xpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdhc3NzYScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2E4Y2RlNzY4LTcyMjctNDc3ZS1hMjZjLTc3MmY0MWIxOWE2ZicsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6ICdoZWxsbyB3b3JsZCcsXHJcbiAgICAgICAgZmlsdGVyVmFsdWU6IEZJTFRFUi5BTEwsXHJcbiAgICAgICAgb25EZWxldGVkOiBvbkRlbGV0ZWRTdHViLFxyXG4gICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50OiBvblRvZ2dsZUltcG9ydGFudFN0dWIsXHJcbiAgICAgICAgb25Ub2dnbGVEb25lOiBvblRvZ2dsZURvbmVTdHViLFxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoVG9kb0xpc3QpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdCB7Li4udG9Eb0xpc3RQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmxpc3QtZ3JvdXAudG9kby1saXN0J30gfCAkezF9XHJcbiAgICAgICBcclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzJywgKCB7IGV4cGVjdGVkQ2xhc3MgfSApID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4udG9Eb0xpc3RQcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3Qgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9