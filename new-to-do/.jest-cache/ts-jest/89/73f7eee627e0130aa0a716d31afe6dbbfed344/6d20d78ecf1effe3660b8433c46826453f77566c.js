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
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass                   | expectedLength\n        ", "           | ", "\n        ", " | ", "\n        "], ["\n        expectedClass                   | expectedLength\n        ", "           | ", "\n        ", " | ", "\n        "])), '.list-group-item', 1, '.list-group-item.todo-list', 1)('should render $expectedClass', function (_a) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE2QjtBQUM3QixnREFBMEI7QUFDMUIsZ0RBQTBCO0FBRTFCLHlFQUF1RTtBQUN2RSx3REFBc0Q7QUFFdEQsUUFBUSxDQUFDLHdDQUF3QyxFQUFFO0lBQy9DLElBQU0sYUFBYSxHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFNLHFCQUFxQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQyxJQUFNLGdCQUFnQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxPQUFPO0lBQ1AsSUFBTSxhQUFhLEdBQWtCO1FBQ2pDLFFBQVEsRUFBRTtZQUNGO2dCQUNJLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEVBQUUsRUFBRSxzQ0FBc0M7YUFDN0M7U0FDSjtRQUNMLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxjQUFNLENBQUMsR0FBRztRQUN2QixTQUFTLEVBQUUsYUFBYTtRQUN4QixpQkFBaUIsRUFBRSxxQkFBcUI7UUFDeEMsWUFBWSxFQUFFLGdCQUFnQjtLQUNqQyxDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsb0JBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsb0JBQVEsZUFBSyxhQUFhLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSw2TEFBQSxzRUFFRCxFQUFrQixlQUFnQixFQUFDLFlBQ25DLEVBQTRCLEtBQU0sRUFBQyxZQUNwQyxLQUZDLGtCQUFrQixFQUFnQixDQUFDLEVBQ25DLDRCQUE0QixFQUFNLENBQUMsRUFDbkMsOEJBQThCLEVBQUUsVUFBRSxFQUFpQjtZQUFmLGdDQUFhO1FBRW5ELE9BQU87UUFDUCxJQUFNLFlBQVksZ0JBQ1gsYUFBYSxDQUNuQixDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyxvQkFBUSxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFdEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vdW50fSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQge1RvZG9MaXN0UHJvcHN9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90eXBlcy10b2RvLWxpc3QnO1xyXG5pbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC9jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZJTFRFUn0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlc1wiO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QudHN4JywgKCkgPT4ge1xyXG4gICAgY29uc3Qgb25EZWxldGVkU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlSW1wb3J0YW50U3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlRG9uZVN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICAvL0dpdmVuXHJcbiAgICBjb25zdCB0b0RvTGlzdFByb3BzOiBUb2RvTGlzdFByb3BzID0ge1xyXG4gICAgICAgIHRvZG9MaXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYXNzc2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdhOGNkZTc2OC03MjI3LTQ3N2UtYTI2Yy03NzJmNDFiMTlhNmYnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnaGVsbG8gd29ybGQnLFxyXG4gICAgICAgIGZpbHRlclZhbHVlOiBGSUxURVIuQUxMLFxyXG4gICAgICAgIG9uRGVsZXRlZDogb25EZWxldGVkU3R1YixcclxuICAgICAgICBvblRvZ2dsZUltcG9ydGFudDogb25Ub2dnbGVJbXBvcnRhbnRTdHViLFxyXG4gICAgICAgIG9uVG9nZ2xlRG9uZTogb25Ub2dnbGVEb25lU3R1YixcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KFRvZG9MaXN0KS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3Qgey4uLnRvRG9MaXN0UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmxpc3QtZ3JvdXAtaXRlbSd9ICAgICAgICAgICB8ICR7MX1cclxuICAgICAgICAkeycubGlzdC1ncm91cC1pdGVtLnRvZG8tbGlzdCd9IHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgJGV4cGVjdGVkQ2xhc3MnLCAoIHsgZXhwZWN0ZWRDbGFzcyB9ICkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdFByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi50b0RvTGlzdFByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdCB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=