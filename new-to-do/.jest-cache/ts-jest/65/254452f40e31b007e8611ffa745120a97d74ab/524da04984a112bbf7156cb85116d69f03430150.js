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
var types_1 = require("../../../src/redux-utils/store/types");
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
            },
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
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, toDoListProps);
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoList, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
});
var templateObject_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0XFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTZCO0FBQzdCLGdEQUEwQjtBQUMxQixnREFBMEI7QUFFMUIseUVBQXVFO0FBQ3ZFLDhEQUE0RDtBQUU1RCxRQUFRLENBQUMsd0NBQXdDLEVBQUU7SUFDL0MsSUFBTSxhQUFhLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQU0scUJBQXFCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLElBQU0sZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLE9BQU87SUFDUCxJQUFNLGFBQWEsR0FBa0I7UUFDakMsUUFBUSxFQUFFO1lBQ0Y7Z0JBQ0ksR0FBRyxFQUFFLE9BQU87Z0JBQ1osS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsRUFBRSxFQUFFLHNDQUFzQzthQUM3QztTQUNKO1FBQ0wsV0FBVyxFQUFFLGFBQWE7UUFDMUIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxHQUFHO1FBQ3ZCLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLGlCQUFpQixFQUFFLHFCQUFxQjtRQUN4QyxZQUFZLEVBQUUsZ0JBQWdCO0tBQ2pDLENBQUM7SUFFRixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTTtRQUNOLE1BQU0sQ0FBQyxvQkFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFFM0MsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyxvQkFBUSxlQUFLLGFBQWEsRUFBSSxDQUFDLENBQUM7UUFFdkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLG1MQUFBLGlFQUVELEVBQXVCLEtBQU0sRUFBQyxZQUM5QixFQUFrQixVQUFXLEVBQUMsWUFDL0IsS0FGQyx1QkFBdUIsRUFBTSxDQUFDLEVBQzlCLGtCQUFrQixFQUFXLENBQUMsRUFDOUIsOEJBQThCLEVBQUUsVUFBRSxFQUFpQztZQUEvQixnQ0FBYSxFQUFFLGtDQUFjO1FBRW5FLE9BQU87UUFDUCxJQUFNLFlBQVksZ0JBQ1gsYUFBYSxDQUNuQixDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyxvQkFBUSxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFdEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0XFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW91bnR9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7VG9kb0xpc3RQcm9wc30gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L3R5cGVzLXRvZG8tbGlzdCc7XHJcbmltcG9ydCB7IFRvZG9MaXN0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L2NvbXBvbmVudCc7XHJcbmltcG9ydCB7RklMVEVSfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4LXV0aWxzL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC50c3gnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBvbkRlbGV0ZWRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVJbXBvcnRhbnRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVEb25lU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIC8vR2l2ZW5cclxuICAgIGNvbnN0IHRvRG9MaXN0UHJvcHM6IFRvZG9MaXN0UHJvcHMgPSB7XHJcbiAgICAgICAgdG9kb0xpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdhc3NzYScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2E4Y2RlNzY4LTcyMjctNDc3ZS1hMjZjLTc3MmY0MWIxOWE2ZicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnaGVsbG8gd29ybGQnLFxyXG4gICAgICAgIGZpbHRlclZhbHVlOiBGSUxURVIuQUxMLFxyXG4gICAgICAgIG9uRGVsZXRlZDogb25EZWxldGVkU3R1YixcclxuICAgICAgICBvblRvZ2dsZUltcG9ydGFudDogb25Ub2dnbGVJbXBvcnRhbnRTdHViLFxyXG4gICAgICAgIG9uVG9nZ2xlRG9uZTogb25Ub2dnbGVEb25lU3R1YixcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KFRvZG9MaXN0KS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3Qgey4uLnRvRG9MaXN0UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5saXN0LWdyb3VwLnRvZG8tbGlzdCd9IHwgJHsxfVxyXG4gICAgICAgICR7Jy5saXN0LWdyb3VwLWl0ZW0nfSAgICAgIHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgJGV4cGVjdGVkQ2xhc3MnLCAoIHsgZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGggfSApID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4udG9Eb0xpc3RQcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3Qgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==