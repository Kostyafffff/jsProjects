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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLGdEQUEwQjtBQUMxQixpQ0FBc0M7QUFFdEMsaUVBQWlFO0FBRWpFLFFBQVEsQ0FBQyxrREFBa0QsRUFBRTtJQUV6RCxJQUFNLGFBQWEsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsSUFBTSxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEMsSUFBTSxxQkFBcUIsR0FBRyxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFM0MsT0FBTztJQUNQLElBQU0sS0FBSyxHQUFzQjtRQUM3QixJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLEtBQUssRUFBRSxLQUFLO1FBQ1osU0FBUyxFQUFFLGFBQWE7UUFDeEIsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixpQkFBaUIsRUFBRSxxQkFBcUI7S0FDM0MsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLHdCQUFZLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVuRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsd0JBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUMs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LE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTVDLE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7bW91bnQsIHNoYWxsb3d9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCB7VG9kb0xpc3RJdGVtUHJvcHN9IGZyb20gJ2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdHlwZXMtdG9kby1saXN0LWl0ZW0nO1xyXG5pbXBvcnQge1RvZG9MaXN0SXRlbX0gZnJvbSAnY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS9jb21wb25lbnQnO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3RvZG8tbGlzdC1pdGVtLnRzeCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZWRTdHViID0gc2lub24uc3R1YigpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVEb25lU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlSW1wb3J0YW50U3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuXHJcbiAgICAvL0dpdmVuXHJcbiAgICBjb25zdCBwcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnQWxsJyxcclxuICAgICAgICBvbkRlbGV0ZWQ6IG9uRGVsZXRlZFN0dWIsXHJcbiAgICAgICAgb25Ub2dnbGVEb25lOiBvblRvZ2dsZURvbmVTdHViLFxyXG4gICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50OiBvblRvZ2dsZUltcG9ydGFudFN0dWIsXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KFRvZG9MaXN0SXRlbSkudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZG9uZSAgICAgICAgfCAgIGltcG9ydGFudCAgIHwgICBleHBlY3RlZENsYXNzXHJcbiAgICAgICAgJHtmYWxzZX0gICAgfCAgICR7ZmFsc2V9ICAgIHwgICAkeycudG9kby1saXN0LWl0ZW0nfVxyXG4gICAgICAgICR7dHJ1ZX0gICAgIHwgICAke2ZhbHNlfSAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtLmRvbmUnfVxyXG4gICAgICAgICR7ZmFsc2V9ICAgIHwgICAke3RydWV9ICAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtLmltcG9ydGFudCd9XHJcbiAgICAgICAgJHt0cnVlfSAgICAgfCAgICR7dHJ1ZX0gICAgIHwgICAkeycudG9kby1saXN0LWl0ZW0uZG9uZS5pbXBvcnRhbnQudG9kby1saXN0LWl0ZW0uZG9uZS5pbXBvcnRhbnQnfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgJGV4cGVjdGVkQ2xhc3Mgd2hlbiBkb25lID0gJGRvbmUgaW1wb3J0YW50ID0gJGltcG9ydGFudCcsICh7ZG9uZSwgaW1wb3J0YW50LCBleHBlY3RlZENsYXNzfSkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IFRvZG9MaXN0SXRlbVByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgZG9uZSxcclxuICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBoYXZlIGNsYXNzTmFtZXMgd2l0aCBwYXJhbXMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9Lz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCdjbGFzc05hbWUnKSkudG9TdHJpY3RFcXVhbCgndG9kby1saXN0LWl0ZW0gZG9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGJ1dHRvbicsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuYnRuLXNtJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChidXR0b24ucHJvcCgndHlwZScpKS50b0VxdWFsKCdidXR0b24nKTtcclxuICAgICAgICBleHBlY3QoYnV0dG9uLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vblRvZ2dsZUltcG9ydGFudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgaXRlbSBlbGVtZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IHdyYXBwZXIuZmluZCgnLnRvZG8tbGlzdC1pdGVtLWxhYmVsJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChsYWJlbC5wcm9wKCdvbkNsaWNrJykpLnRvRXF1YWwocHJvcHMub25Ub2dnbGVEb25lKTtcclxuICAgICAgICBleHBlY3QobGFiZWwudGV4dCgpKS50b0VxdWFsKHByb3BzLmxhYmVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBkZWxldGUgYnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IHdyYXBwZXIuZmluZCgnLmJ0bi5idG4tb3V0bGluZS1kYW5nZXIuYnRuLXNtJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChsYWJlbC5wcm9wKCdvbkNsaWNrJykpLnRvRXF1YWwocHJvcHMub25EZWxldGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBkZWxldGUgYnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IHdyYXBwZXIuZmluZCgnLmJ0bi5idG4tb3V0bGluZS1kYW5nZXIuYnRuLXNtJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChsYWJlbC5wcm9wKCdvbkNsaWNrJykpLnRvRXF1YWwocHJvcHMub25EZWxldGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICBleHBlY3RlZENsYXNzICAgICAgICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoICAgICBcclxuICAgICR7Jy5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcyd9IHwgICAgICR7MX0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICR7Jy5idG4uYnRuLW91dGxpbmUtZGFuZ2VyJ30gIHwgICAgICR7MX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAkeycuZmEuZmEtZXhjbGFtYXRpb24nfSAgICAgICB8ICAgICAkezF9ICAgICAgICAgICBcclxuICAgICR7Jy5mYS5mYS10cmFzaC1vJ30gICAgICAgICAgIHwgICAgICR7MX0gICAgICAgICAgICBcclxuICAgICR7Jy50b2RvLWxpc3QtaXRlbS1sYWJlbCd9ICAgIHwgICAgICR7MX0gICAgICAgICAgICBcclxuICAgICR7Jy5idXR0b24td3JhcHBlcid9ICAgICAgICAgIHwgICAgICR7MX0gICAgICAgICAgICBcclxuICAgICR7Jy5idXR0b24td3JhcHBlciA+IGJ1dHRvbid9IHwgICAgICR7Mn0gICAgICAgICAgICBcclxuICAgIGAoJ2VsZW1lbnRzIG9mIGxpc3Qgc2hvdWxkIGhhdmUgZXhwZWN0ZWQgY2xhc3MgJGV4cGVjdGVkQ2xhc3Mgd2l0aCAkZXhwZWN0ZWRMZW5ndGgnLCAoIHtleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aH0gKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IFRvZG9MaXN0SXRlbVByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGVsZW1lbnQpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==