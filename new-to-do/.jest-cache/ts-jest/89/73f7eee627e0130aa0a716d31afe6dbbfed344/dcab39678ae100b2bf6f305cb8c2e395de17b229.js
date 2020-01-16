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
var react_1 = __importDefault(require("react"));
var sinon_1 = __importDefault(require("sinon"));
var enzyme_1 = require("enzyme");
var component_1 = require("components/todo-list-item/component");
describe('src/components/todo-list-item/todo-list-item.tsx', function () {
    var onDeletedStub = sinon_1.default.stub();
    var onToggleDoneStub = sinon_1.default.stub();
    var onToggleImportantStub = sinon_1.default.stub();
    //Given
    var props = {
        done: true,
        important: false,
        label: 'All',
        onDeleted: onDeletedStub,
        onToggleDone: onToggleDoneStub,
        onToggleImportant: onToggleImportantStub,
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('should be defined', function () {
        //Then
        expect(component_1.TodoListItem).toBeDefined();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        done        |   important   |   expectedClass\n        ", "    |   ", "    |   ", "\n        ", "     |   ", "    |   ", "\n        ", "    |   ", "     |   ", "\n        ", "     |   ", "     |   ", "\n        "], ["\n        done        |   important   |   expectedClass\n        ", "    |   ", "    |   ", "\n        ", "     |   ", "    |   ", "\n        ", "    |   ", "     |   ", "\n        ", "     |   ", "     |   ", "\n        "])), false, false, '.todo-list-item', true, false, '.todo-list-item.done', false, true, '.todo-list-item.important', true, true, '.todo-list-item.done.important.todo-list-item.done.important')('should render $expectedClass when done = $done important = $important', function (_a) {
        var done = _a.done, important = _a.important, expectedClass = _a.expectedClass;
        //Given
        var currentProps = __assign(__assign({}, props), { done: done,
            important: important });
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
    it('should have classNames with params', function () {
        //When
        var wrapper = enzyme_1.shallow(react_1.default.createElement(component_1.TodoListItem, __assign({}, props)));
        //Then
        expect(wrapper.prop('className')).toStrictEqual('todo-list-item done');
    });
    it('should pass props to button', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, props)));
        //Then
        var button = wrapper.find('.btn.btn-outline-success.btn-sm');
        expect(button.prop('type')).toEqual('button');
        expect(button.prop('onClick')).toEqual(props.onToggleImportant);
    });
    it('should pass props item element', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, props)));
        //Then
        var label = wrapper.find('.todo-list-item-label');
        expect(label.prop('onClick')).toEqual(props.onToggleDone);
        expect(label.text()).toEqual(props.label);
    });
    it('should pass props to delete button', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, props)));
        //Then
        var label = wrapper.find('.btn.btn-outline-danger.btn-sm');
        expect(label.prop('onClick')).toEqual(props.onDeleted);
    });
    it('should pass props to delete button', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, props)));
        //Then
        var label = wrapper.find('.btn.btn-outline-danger.btn-sm');
        expect(label.prop('onClick')).toEqual(props.onDeleted);
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    expectedClass                 | expectedLength     \n    ", " |     ", "                        \n    ", "  |     ", "                               \n    ", "       |     ", "           \n    ", "           |     ", "            \n    ", "    |     ", "            \n    ", "          |     ", "            \n    ", " |     ", "            \n    "], ["\n    expectedClass                 | expectedLength     \n    ", " |     ", "                        \n    ", "  |     ", "                               \n    ", "       |     ", "           \n    ", "           |     ", "            \n    ", "    |     ", "            \n    ", "          |     ", "            \n    ", " |     ", "            \n    "])), '.btn.btn-outline-success', 1, '.btn.btn-outline-danger', 1, '.fa.fa-exclamation', 1, '.fa.fa-trash-o', 1, '.todo-list-item-label', 1, '.button-wrapper', 1, '.button-wrapper > button', 2)('elements of list should have expected class $expectedClass with $expectedLength', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, props);
        var wrapper = enzyme_1.mount(react_1.default.createElement(component_1.TodoListItem, __assign({}, currentProps)));
        //When
        var element = wrapper.find(expectedClass);
        //Then
        expect(element).toHaveLength(expectedLength);
    });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFx0b2RvLWxpc3QtaXRlbS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixnREFBMEI7QUFDMUIsaUNBQXNDO0FBRXRDLGlFQUFpRTtBQUVqRSxRQUFRLENBQUMsa0RBQWtELEVBQUU7SUFFekQsSUFBTSxhQUFhLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQU0sZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLElBQU0scUJBQXFCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLE9BQU87SUFDUCxJQUFNLEtBQUssR0FBc0I7UUFDN0IsSUFBSSxFQUFFLElBQUk7UUFDVixTQUFTLEVBQUUsS0FBSztRQUNoQixLQUFLLEVBQUUsS0FBSztRQUNaLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsaUJBQWlCLEVBQUUscUJBQXFCO0tBQzNDLENBQUM7SUFFRixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDM0MsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHdCQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLGtTQUFBLG1FQUVELEVBQUssVUFBVyxFQUFLLFVBQVcsRUFBaUIsWUFDakQsRUFBSSxXQUFZLEVBQUssVUFBVyxFQUFzQixZQUN0RCxFQUFLLFVBQVcsRUFBSSxXQUFZLEVBQTJCLFlBQzNELEVBQUksV0FBWSxFQUFJLFdBQVksRUFBOEQsWUFDL0YsS0FKQyxLQUFLLEVBQVcsS0FBSyxFQUFXLGlCQUFpQixFQUNqRCxJQUFJLEVBQVksS0FBSyxFQUFXLHNCQUFzQixFQUN0RCxLQUFLLEVBQVcsSUFBSSxFQUFZLDJCQUEyQixFQUMzRCxJQUFJLEVBQVksSUFBSSxFQUFZLDhEQUE4RCxFQUM5Rix1RUFBdUUsRUFBRSxVQUFDLEVBQWdDO1lBQS9CLGNBQUksRUFBRSx3QkFBUyxFQUFFLGdDQUFhO1FBQzNHLE9BQU87UUFDUCxJQUFNLFlBQVkseUJBQ1gsS0FBSyxLQUNSLElBQUksTUFBQTtZQUNKLFNBQVMsV0FBQSxHQUNaLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLHdCQUFZLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUUxRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGdCQUFPLENBQUMsOEJBQUMsd0JBQVksZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBRXBELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzlCLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsd0JBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDakMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxzYUFBQSxpRUFFTCxFQUEwQixTQUFVLEVBQUMsZ0NBQ3JDLEVBQXlCLFVBQVcsRUFBQyx1Q0FDckMsRUFBb0IsZUFBZ0IsRUFBQyxtQkFDckMsRUFBZ0IsbUJBQW9CLEVBQUMsb0JBQ3JDLEVBQXVCLFlBQWEsRUFBQyxvQkFDckMsRUFBaUIsa0JBQW1CLEVBQUMsb0JBQ3JDLEVBQTBCLFNBQVUsRUFBQyxvQkFDdEMsS0FQQywwQkFBMEIsRUFBVSxDQUFDLEVBQ3JDLHlCQUF5QixFQUFXLENBQUMsRUFDckMsb0JBQW9CLEVBQWdCLENBQUMsRUFDckMsZ0JBQWdCLEVBQW9CLENBQUMsRUFDckMsdUJBQXVCLEVBQWEsQ0FBQyxFQUNyQyxpQkFBaUIsRUFBbUIsQ0FBQyxFQUNyQywwQkFBMEIsRUFBVSxDQUFDLEVBQ3JDLGlGQUFpRixFQUFFLFVBQUUsRUFBK0I7WUFBOUIsZ0NBQWEsRUFBRSxrQ0FBYztRQUVqSCxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLHdCQUFZLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUUxRCxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFx0b2RvLWxpc3QtaXRlbVxcdG9kby1saXN0LWl0ZW0udGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHttb3VudCwgc2hhbGxvd30gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHtUb2RvTGlzdEl0ZW1Qcm9wc30gZnJvbSAnY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90eXBlcy10b2RvLWxpc3QtaXRlbSc7XHJcbmltcG9ydCB7VG9kb0xpc3RJdGVtfSBmcm9tICdjb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL2NvbXBvbmVudCc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdG9kby1saXN0LWl0ZW0udHN4JywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlZFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBvblRvZ2dsZURvbmVTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVJbXBvcnRhbnRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgLy9HaXZlblxyXG4gICAgY29uc3QgcHJvcHM6IFRvZG9MaXN0SXRlbVByb3BzID0ge1xyXG4gICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICBsYWJlbDogJ0FsbCcsXHJcbiAgICAgICAgb25EZWxldGVkOiBvbkRlbGV0ZWRTdHViLFxyXG4gICAgICAgIG9uVG9nZ2xlRG9uZTogb25Ub2dnbGVEb25lU3R1YixcclxuICAgICAgICBvblRvZ2dsZUltcG9ydGFudDogb25Ub2dnbGVJbXBvcnRhbnRTdHViLFxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChUb2RvTGlzdEl0ZW0pLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGRvbmUgICAgICAgIHwgICBpbXBvcnRhbnQgICB8ICAgZXhwZWN0ZWRDbGFzc1xyXG4gICAgICAgICR7ZmFsc2V9ICAgIHwgICAke2ZhbHNlfSAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtJ31cclxuICAgICAgICAke3RydWV9ICAgICB8ICAgJHtmYWxzZX0gICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5kb25lJ31cclxuICAgICAgICAke2ZhbHNlfSAgICB8ICAgJHt0cnVlfSAgICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5pbXBvcnRhbnQnfVxyXG4gICAgICAgICR7dHJ1ZX0gICAgIHwgICAke3RydWV9ICAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtLmRvbmUuaW1wb3J0YW50LnRvZG8tbGlzdC1pdGVtLmRvbmUuaW1wb3J0YW50J31cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzIHdoZW4gZG9uZSA9ICRkb25lIGltcG9ydGFudCA9ICRpbXBvcnRhbnQnLCAoe2RvbmUsIGltcG9ydGFudCwgZXhwZWN0ZWRDbGFzc30pID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgIGRvbmUsXHJcbiAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgaGF2ZSBjbGFzc05hbWVzIHdpdGggcGFyYW1zJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfS8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIucHJvcCgnY2xhc3NOYW1lJykpLnRvU3RyaWN0RXF1YWwoJ3RvZG8tbGlzdC1pdGVtIGRvbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHdyYXBwZXIuZmluZCgnLmJ0bi5idG4tb3V0bGluZS1zdWNjZXNzLmJ0bi1zbScpO1xyXG5cclxuICAgICAgICBleHBlY3QoYnV0dG9uLnByb3AoJ3R5cGUnKSkudG9FcXVhbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbi5wcm9wKCdvbkNsaWNrJykpLnRvRXF1YWwocHJvcHMub25Ub2dnbGVJbXBvcnRhbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIGl0ZW0gZWxlbWVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3cmFwcGVyLmZpbmQoJy50b2RvLWxpc3QtaXRlbS1sYWJlbCcpO1xyXG5cclxuICAgICAgICBleHBlY3QobGFiZWwucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uVG9nZ2xlRG9uZSk7XHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnRleHQoKSkudG9FcXVhbChwcm9wcy5sYWJlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gZGVsZXRlIGJ1dHRvbicsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtZGFuZ2VyLmJ0bi1zbScpO1xyXG5cclxuICAgICAgICBleHBlY3QobGFiZWwucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uRGVsZXRlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gZGVsZXRlIGJ1dHRvbicsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtZGFuZ2VyLmJ0bi1zbScpO1xyXG5cclxuICAgICAgICBleHBlY3QobGFiZWwucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uRGVsZXRlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aCAgICAgXHJcbiAgICAkeycuYnRuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MnfSB8ICAgICAkezF9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAkeycuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlcid9ICB8ICAgICAkezF9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgJHsnLmZhLmZhLWV4Y2xhbWF0aW9uJ30gICAgICAgfCAgICAgJHsxfSAgICAgICAgICAgXHJcbiAgICAkeycuZmEuZmEtdHJhc2gtbyd9ICAgICAgICAgICB8ICAgICAkezF9ICAgICAgICAgICAgXHJcbiAgICAkeycudG9kby1saXN0LWl0ZW0tbGFiZWwnfSAgICB8ICAgICAkezF9ICAgICAgICAgICAgXHJcbiAgICAkeycuYnV0dG9uLXdyYXBwZXInfSAgICAgICAgICB8ICAgICAkezF9ICAgICAgICAgICAgXHJcbiAgICAkeycuYnV0dG9uLXdyYXBwZXIgPiBidXR0b24nfSB8ICAgICAkezJ9ICAgICAgICAgICAgXHJcbiAgICBgKCdlbGVtZW50cyBvZiBsaXN0IHNob3VsZCBoYXZlIGV4cGVjdGVkIGNsYXNzICRleHBlY3RlZENsYXNzIHdpdGggJGV4cGVjdGVkTGVuZ3RoJywgKCB7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9ICkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChlbGVtZW50KS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=