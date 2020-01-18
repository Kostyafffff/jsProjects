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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXGNvbXBvbmVudC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixnREFBMEI7QUFDMUIsaUNBQXNDO0FBRXRDLGlFQUFpRTtBQUVqRSxRQUFRLENBQUMsa0RBQWtELEVBQUU7SUFFekQsSUFBTSxhQUFhLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQU0sZ0JBQWdCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLElBQU0scUJBQXFCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRTNDLE9BQU87SUFDUCxJQUFNLEtBQUssR0FBc0I7UUFDN0IsSUFBSSxFQUFFLElBQUk7UUFDVixTQUFTLEVBQUUsS0FBSztRQUNoQixLQUFLLEVBQUUsS0FBSztRQUNaLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsaUJBQWlCLEVBQUUscUJBQXFCO0tBQzNDLENBQUM7SUFFRixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDM0MsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHdCQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLGtTQUFBLG1FQUVELEVBQUssVUFBVyxFQUFLLFVBQVcsRUFBaUIsWUFDakQsRUFBSSxXQUFZLEVBQUssVUFBVyxFQUFzQixZQUN0RCxFQUFLLFVBQVcsRUFBSSxXQUFZLEVBQTJCLFlBQzNELEVBQUksV0FBWSxFQUFJLFdBQVksRUFBOEQsWUFDL0YsS0FKQyxLQUFLLEVBQVcsS0FBSyxFQUFXLGlCQUFpQixFQUNqRCxJQUFJLEVBQVksS0FBSyxFQUFXLHNCQUFzQixFQUN0RCxLQUFLLEVBQVcsSUFBSSxFQUFZLDJCQUEyQixFQUMzRCxJQUFJLEVBQVksSUFBSSxFQUFZLDhEQUE4RCxFQUM5Rix1RUFBdUUsRUFBRSxVQUFDLEVBQWdDO1lBQS9CLGNBQUksRUFBRSx3QkFBUyxFQUFFLGdDQUFhO1FBQzNHLE9BQU87UUFDUCxJQUFNLFlBQVkseUJBQ1gsS0FBSyxLQUNSLElBQUksTUFBQTtZQUNKLFNBQVMsV0FBQSxHQUNaLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLHdCQUFZLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUUxRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGdCQUFPLENBQUMsOEJBQUMsd0JBQVksZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBRXBELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzlCLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsd0JBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDakMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyx3QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxzYUFBQSxpRUFFTCxFQUEwQixTQUFVLEVBQUMsZ0NBQ3JDLEVBQXlCLFVBQVcsRUFBQyx1Q0FDckMsRUFBb0IsZUFBZ0IsRUFBQyxtQkFDckMsRUFBZ0IsbUJBQW9CLEVBQUMsb0JBQ3JDLEVBQXVCLFlBQWEsRUFBQyxvQkFDckMsRUFBaUIsa0JBQW1CLEVBQUMsb0JBQ3JDLEVBQTBCLFNBQVUsRUFBQyxvQkFDdEMsS0FQQywwQkFBMEIsRUFBVSxDQUFDLEVBQ3JDLHlCQUF5QixFQUFXLENBQUMsRUFDckMsb0JBQW9CLEVBQWdCLENBQUMsRUFDckMsZ0JBQWdCLEVBQW9CLENBQUMsRUFDckMsdUJBQXVCLEVBQWEsQ0FBQyxFQUNyQyxpQkFBaUIsRUFBbUIsQ0FBQyxFQUNyQywwQkFBMEIsRUFBVSxDQUFDLEVBQ3JDLGlGQUFpRixFQUFFLFVBQUUsRUFBK0I7WUFBOUIsZ0NBQWEsRUFBRSxrQ0FBYztRQUVqSCxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLHdCQUFZLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUUxRCxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFxjb21wb25lbnQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHttb3VudCwgc2hhbGxvd30gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHtUb2RvTGlzdEl0ZW1Qcm9wc30gZnJvbSAnY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90eXBlcy10b2RvLWxpc3QtaXRlbSc7XHJcbmltcG9ydCB7VG9kb0xpc3RJdGVtfSBmcm9tICdjb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL2NvbXBvbmVudCc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdG9kby1saXN0LWl0ZW0udHN4JywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlZFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBvblRvZ2dsZURvbmVTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVJbXBvcnRhbnRTdHViID0gc2lub24uc3R1YigpO1xyXG5cclxuICAgIC8vR2l2ZW5cclxuICAgIGNvbnN0IHByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICdBbGwnLFxyXG4gICAgICAgIG9uRGVsZXRlZDogb25EZWxldGVkU3R1YixcclxuICAgICAgICBvblRvZ2dsZURvbmU6IG9uVG9nZ2xlRG9uZVN0dWIsXHJcbiAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ6IG9uVG9nZ2xlSW1wb3J0YW50U3R1YixcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoVG9kb0xpc3RJdGVtKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBkb25lICAgICAgICB8ICAgaW1wb3J0YW50ICAgfCAgIGV4cGVjdGVkQ2xhc3NcclxuICAgICAgICAke2ZhbHNlfSAgICB8ICAgJHtmYWxzZX0gICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbSd9XHJcbiAgICAgICAgJHt0cnVlfSAgICAgfCAgICR7ZmFsc2V9ICAgIHwgICAkeycudG9kby1saXN0LWl0ZW0uZG9uZSd9XHJcbiAgICAgICAgJHtmYWxzZX0gICAgfCAgICR7dHJ1ZX0gICAgIHwgICAkeycudG9kby1saXN0LWl0ZW0uaW1wb3J0YW50J31cclxuICAgICAgICAke3RydWV9ICAgICB8ICAgJHt0cnVlfSAgICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5kb25lLmltcG9ydGFudC50b2RvLWxpc3QtaXRlbS5kb25lLmltcG9ydGFudCd9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciAkZXhwZWN0ZWRDbGFzcyB3aGVuIGRvbmUgPSAkZG9uZSBpbXBvcnRhbnQgPSAkaW1wb3J0YW50JywgKHtkb25lLCBpbXBvcnRhbnQsIGV4cGVjdGVkQ2xhc3N9KSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICBkb25lLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGhhdmUgY2xhc3NOYW1lcyB3aXRoIHBhcmFtcycsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30vPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ2NsYXNzTmFtZScpKS50b1N0cmljdEVxdWFsKCd0b2RvLWxpc3QtaXRlbSBkb25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gYnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBidXR0b24gPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbi5wcm9wKCd0eXBlJykpLnRvRXF1YWwoJ2J1dHRvbicpO1xyXG4gICAgICAgIGV4cGVjdChidXR0b24ucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uVG9nZ2xlSW1wb3J0YW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyBpdGVtIGVsZW1lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcudG9kby1saXN0LWl0ZW0tbGFiZWwnKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vblRvZ2dsZURvbmUpO1xyXG4gICAgICAgIGV4cGVjdChsYWJlbC50ZXh0KCkpLnRvRXF1YWwocHJvcHMubGFiZWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGRlbGV0ZSBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlci5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vbkRlbGV0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGRlbGV0ZSBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlci5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vbkRlbGV0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGggICAgIFxyXG4gICAgJHsnLmJ0bi5idG4tb3V0bGluZS1zdWNjZXNzJ30gfCAgICAgJHsxfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgJHsnLmJ0bi5idG4tb3V0bGluZS1kYW5nZXInfSAgfCAgICAgJHsxfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICR7Jy5mYS5mYS1leGNsYW1hdGlvbid9ICAgICAgIHwgICAgICR7MX0gICAgICAgICAgIFxyXG4gICAgJHsnLmZhLmZhLXRyYXNoLW8nfSAgICAgICAgICAgfCAgICAgJHsxfSAgICAgICAgICAgIFxyXG4gICAgJHsnLnRvZG8tbGlzdC1pdGVtLWxhYmVsJ30gICAgfCAgICAgJHsxfSAgICAgICAgICAgIFxyXG4gICAgJHsnLmJ1dHRvbi13cmFwcGVyJ30gICAgICAgICAgfCAgICAgJHsxfSAgICAgICAgICAgIFxyXG4gICAgJHsnLmJ1dHRvbi13cmFwcGVyID4gYnV0dG9uJ30gfCAgICAgJHsyfSAgICAgICAgICAgIFxyXG4gICAgYCgnZWxlbWVudHMgb2YgbGlzdCBzaG91bGQgaGF2ZSBleHBlY3RlZCBjbGFzcyAkZXhwZWN0ZWRDbGFzcyB3aXRoICRleHBlY3RlZExlbmd0aCcsICgge2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSApID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gd3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoZWxlbWVudCkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sInZlcnNpb24iOjN9