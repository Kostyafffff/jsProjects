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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFxjb21wb25lbnQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsZ0RBQTBCO0FBQzFCLGlDQUFzQztBQUV0QyxpRUFBaUU7QUFFakUsUUFBUSxDQUFDLGtEQUFrRCxFQUFFO0lBRXpELElBQU0sYUFBYSxHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFNLGdCQUFnQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxJQUFNLHFCQUFxQixHQUFHLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUUzQyxPQUFPO0lBQ1AsSUFBTSxLQUFLLEdBQXNCO1FBQzdCLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLEtBQUs7UUFDaEIsS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsYUFBYTtRQUN4QixZQUFZLEVBQUUsZ0JBQWdCO1FBQzlCLGlCQUFpQixFQUFFLHFCQUFxQjtLQUMzQyxDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsd0JBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTTtRQUNOLE1BQU0sQ0FBQyx3QkFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMs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LElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXGNvbXBvbmVudC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQge21vdW50LCBzaGFsbG93fSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQge1RvZG9MaXN0SXRlbVByb3BzfSBmcm9tICdjb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3R5cGVzLXRvZG8tbGlzdC1pdGVtJztcclxuaW1wb3J0IHtUb2RvTGlzdEl0ZW19IGZyb20gJ2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vY29tcG9uZW50JztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbS50c3gnLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb25EZWxldGVkU3R1YiA9IHNpbm9uLnN0dWIoKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlRG9uZVN0dWIgPSBzaW5vbi5zdHViKCk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUltcG9ydGFudFN0dWIgPSBzaW5vbi5zdHViKCk7XHJcblxyXG4gICAgLy9HaXZlblxyXG4gICAgY29uc3QgcHJvcHM6IFRvZG9MaXN0SXRlbVByb3BzID0ge1xyXG4gICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICBsYWJlbDogJ0FsbCcsXHJcbiAgICAgICAgb25EZWxldGVkOiBvbkRlbGV0ZWRTdHViLFxyXG4gICAgICAgIG9uVG9nZ2xlRG9uZTogb25Ub2dnbGVEb25lU3R1YixcclxuICAgICAgICBvblRvZ2dsZUltcG9ydGFudDogb25Ub2dnbGVJbXBvcnRhbnRTdHViLFxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChUb2RvTGlzdEl0ZW0pLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGRvbmUgICAgICAgIHwgICBpbXBvcnRhbnQgICB8ICAgZXhwZWN0ZWRDbGFzc1xyXG4gICAgICAgICR7ZmFsc2V9ICAgIHwgICAke2ZhbHNlfSAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtJ31cclxuICAgICAgICAke3RydWV9ICAgICB8ICAgJHtmYWxzZX0gICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5kb25lJ31cclxuICAgICAgICAke2ZhbHNlfSAgICB8ICAgJHt0cnVlfSAgICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5pbXBvcnRhbnQnfVxyXG4gICAgICAgICR7dHJ1ZX0gICAgIHwgICAke3RydWV9ICAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtLmRvbmUuaW1wb3J0YW50LnRvZG8tbGlzdC1pdGVtLmRvbmUuaW1wb3J0YW50J31cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzIHdoZW4gZG9uZSA9ICRkb25lIGltcG9ydGFudCA9ICRpbXBvcnRhbnQnLCAoe2RvbmUsIGltcG9ydGFudCwgZXhwZWN0ZWRDbGFzc30pID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgIGRvbmUsXHJcbiAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aCgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgaGF2ZSBjbGFzc05hbWVzIHdpdGggcGFyYW1zJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfS8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIucHJvcCgnY2xhc3NOYW1lJykpLnRvU3RyaWN0RXF1YWwoJ3RvZG8tbGlzdC1pdGVtIGRvbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHdyYXBwZXIuZmluZCgnLmJ0bi5idG4tb3V0bGluZS1zdWNjZXNzLmJ0bi1zbScpO1xyXG5cclxuICAgICAgICBleHBlY3QoYnV0dG9uLnByb3AoJ3R5cGUnKSkudG9FcXVhbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbi5wcm9wKCdvbkNsaWNrJykpLnRvRXF1YWwocHJvcHMub25Ub2dnbGVJbXBvcnRhbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIGl0ZW0gZWxlbWVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3cmFwcGVyLmZpbmQoJy50b2RvLWxpc3QtaXRlbS1sYWJlbCcpO1xyXG5cclxuICAgICAgICBleHBlY3QobGFiZWwucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uVG9nZ2xlRG9uZSk7XHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnRleHQoKSkudG9FcXVhbChwcm9wcy5sYWJlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gZGVsZXRlIGJ1dHRvbicsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtZGFuZ2VyLmJ0bi1zbScpO1xyXG5cclxuICAgICAgICBleHBlY3QobGFiZWwucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uRGVsZXRlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gZGVsZXRlIGJ1dHRvbicsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtZGFuZ2VyLmJ0bi1zbScpO1xyXG5cclxuICAgICAgICBleHBlY3QobGFiZWwucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uRGVsZXRlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aCAgICAgXHJcbiAgICAkeycuYnRuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MnfSB8ICAgICAkezF9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAkeycuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlcid9ICB8ICAgICAkezF9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgJHsnLmZhLmZhLWV4Y2xhbWF0aW9uJ30gICAgICAgfCAgICAgJHsxfSAgICAgICAgICAgXHJcbiAgICAkeycuZmEuZmEtdHJhc2gtbyd9ICAgICAgICAgICB8ICAgICAkezF9ICAgICAgICAgICAgXHJcbiAgICAkeycudG9kby1saXN0LWl0ZW0tbGFiZWwnfSAgICB8ICAgICAkezF9ICAgICAgICAgICAgXHJcbiAgICAkeycuYnV0dG9uLXdyYXBwZXInfSAgICAgICAgICB8ICAgICAkezF9ICAgICAgICAgICAgXHJcbiAgICAkeycuYnV0dG9uLXdyYXBwZXIgPiBidXR0b24nfSB8ICAgICAkezJ9ICAgICAgICAgICAgXHJcbiAgICBgKCdlbGVtZW50cyBvZiBsaXN0IHNob3VsZCBoYXZlIGV4cGVjdGVkIGNsYXNzICRleHBlY3RlZENsYXNzIHdpdGggJGV4cGVjdGVkTGVuZ3RoJywgKCB7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9ICkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChlbGVtZW50KS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=