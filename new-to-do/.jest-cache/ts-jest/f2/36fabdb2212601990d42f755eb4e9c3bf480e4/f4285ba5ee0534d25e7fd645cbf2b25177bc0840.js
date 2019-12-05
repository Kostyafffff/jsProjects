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
var todo_list_item_1 = require("components/todo-list-item/todo-list-item");
describe('src/components/todo-list-item/todo-list-item.tsx', function () {
    //Given
    var props = {
        done: true,
        important: false,
        label: 'All',
        onDeleted: sinon_1.default.stub(),
        onToggleDone: sinon_1.default.stub(),
        onToggleImportant: sinon_1.default.stub(),
    };
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it('should be defined', function () {
        //Then
        expect(todo_list_item_1.TodoListItem).toBeDefined();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        done        |   important   |   expectedClass\n        ", "    |   ", "    |   ", "\n        ", "     |   ", "    |   ", "\n        ", "    |   ", "     |   ", "\n        ", "     |   ", "     |   ", "\n        "], ["\n        done        |   important   |   expectedClass\n        ", "    |   ", "    |   ", "\n        ", "     |   ", "    |   ", "\n        ", "    |   ", "     |   ", "\n        ", "     |   ", "     |   ", "\n        "])), false, false, '.todo-list-item', true, false, '.todo-list-item.done', false, true, '.todo-list-item.important', true, true, '.todo-list-item.done.important.todo-list-item.done.important')('should render $expectedClass when done = $done important = $important', function (_a) {
        var done = _a.done, important = _a.important, expectedClass = _a.expectedClass;
        //Given
        var currentProps = __assign(__assign({}, props), { done: done,
            important: important });
        //уточнить корректность
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          expectedClass                     |\n          ", "     |\n          ", "      |\n          ", "           |\n          ", "                |\n          \n          "], ["\n          expectedClass                     |\n          ", "     |\n          ", "      |\n          ", "           |\n          ", "                |\n          \n          "])), '.btn.btn-outline-success', '.btn.btn-outline-danger', '.fa.fa-exclamation', '.fa.fa-threshhh')('buttons should have expected class ${ expectedClass }', function (_a) {
        var expectedClass = _a.expectedClass;
        var currentProps = __assign({}, props);
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
    it('should have classNames with params', function () {
        //When
        var wrapper = enzyme_1.shallow(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, props)));
        //Then
        expect(wrapper.prop('className')).toStrictEqual('todo-list-item done');
    });
    it('should pass props to button', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, props)));
        //Then
        var button = wrapper.find('.btn.btn-outline-success.btn-sm');
        expect(button.prop('type')).toEqual('button');
        expect(button.prop('onClick')).toEqual(props.onToggleImportant);
    });
    it('should pass props item element', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, props)));
        //Then
        var label = wrapper.find('.todo-list-item-label');
        expect(label.prop('onClick')).toEqual(props.onToggleDone);
        expect(label.text()).toEqual(props.label);
    });
    it('should pass props to delete button', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, props)));
        //Then
        var label = wrapper.find('.btn.btn-outline-danger.btn-sm');
        expect(label.prop('onClick')).toEqual(props.onDeleted);
    });
    it('should pass props to delete button', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, props)));
        //Then
        var label = wrapper.find('.btn.btn-outline-danger.btn-sm');
        expect(label.prop('onClick')).toEqual(props.onDeleted);
    });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFx0b2RvLWxpc3QtaXRlbS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixnREFBMEI7QUFDMUIsaUNBQXNDO0FBRXRDLDJFQUFzRTtBQUV0RSxRQUFRLENBQUMsa0RBQWtELEVBQUU7SUFFekQsT0FBTztJQUNQLElBQU0sS0FBSyxHQUFzQjtRQUM3QixJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLEtBQUssRUFBRSxLQUFLO1FBQ1osU0FBUyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDdkIsWUFBWSxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDMUIsaUJBQWlCLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUNsQyxDQUFDO0lBRUYsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsNkJBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTTtRQUNOLE1BQU0sQ0FBQyw2QkFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxrU0FBQSxtRUFFRCxFQUFLLFVBQVcsRUFBSyxVQUFXLEVBQWlCLFlBQ2pELEVBQUksV0FBWSxFQUFLLFVBQVcsRUFBc0IsWUFDdEQsRUFBSyxVQUFXLEVBQUksV0FBWSxFQUEyQixZQUMzRCxFQUFJLFdBQVksRUFBSSxXQUFZ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QUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyw2QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDckMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyw2QkFBWSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTTtRQUNOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcdG9kby1saXN0LWl0ZW1cXHRvZG8tbGlzdC1pdGVtLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7bW91bnQsIHNoYWxsb3d9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCB7VG9kb0xpc3RJdGVtUHJvcHN9IGZyb20gJ2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdHlwZXMtdG9kby1saXN0LWl0ZW0nO1xyXG5pbXBvcnQge1RvZG9MaXN0SXRlbX0gZnJvbSAnY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbSc7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdG9kby1saXN0LWl0ZW0udHN4JywgKCkgPT4ge1xyXG5cclxuICAgIC8vR2l2ZW5cclxuICAgIGNvbnN0IHByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICdBbGwnLFxyXG4gICAgICAgIG9uRGVsZXRlZDogc2lub24uc3R1YigpLFxyXG4gICAgICAgIG9uVG9nZ2xlRG9uZTogc2lub24uc3R1YigpLFxyXG4gICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50OiBzaW5vbi5zdHViKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChUb2RvTGlzdEl0ZW0pLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGRvbmUgICAgICAgIHwgICBpbXBvcnRhbnQgICB8ICAgZXhwZWN0ZWRDbGFzc1xyXG4gICAgICAgICR7ZmFsc2V9ICAgIHwgICAke2ZhbHNlfSAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtJ31cclxuICAgICAgICAke3RydWV9ICAgICB8ICAgJHtmYWxzZX0gICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5kb25lJ31cclxuICAgICAgICAke2ZhbHNlfSAgICB8ICAgJHt0cnVlfSAgICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5pbXBvcnRhbnQnfVxyXG4gICAgICAgICR7dHJ1ZX0gICAgIHwgICAke3RydWV9ICAgICB8ICAgJHsnLnRvZG8tbGlzdC1pdGVtLmRvbmUuaW1wb3J0YW50LnRvZG8tbGlzdC1pdGVtLmRvbmUuaW1wb3J0YW50J31cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyICRleHBlY3RlZENsYXNzIHdoZW4gZG9uZSA9ICRkb25lIGltcG9ydGFudCA9ICRpbXBvcnRhbnQnLCAoe2RvbmUsIGltcG9ydGFudCwgZXhwZWN0ZWRDbGFzc30pID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgIGRvbmUsXHJcbiAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL9GD0YLQvtGH0L3QuNGC0Ywg0LrQvtGA0YDQtdC60YLQvdC+0YHRgtGMXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgICAgICAgICAgIHxcclxuICAgICAgICAgICR7Jy5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcyd9ICAgICB8XHJcbiAgICAgICAgICAkeycuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlcid9ICAgICAgfFxyXG4gICAgICAgICAgJHsnLmZhLmZhLWV4Y2xhbWF0aW9uJ30gICAgICAgICAgIHxcclxuICAgICAgICAgICR7Jy5mYS5mYS10aHJlc2hoaCd9ICAgICAgICAgICAgICAgIHxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYCgnYnV0dG9ucyBzaG91bGQgaGF2ZSBleHBlY3RlZCBjbGFzcyAkeyBleHBlY3RlZENsYXNzIH0nLCAoeyBleHBlY3RlZENsYXNzIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKDEpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdCgnc2hvdWxkIGhhdmUgY2xhc3NOYW1lcyB3aXRoIHBhcmFtcycsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30vPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ2NsYXNzTmFtZScpKS50b1N0cmljdEVxdWFsKCd0b2RvLWxpc3QtaXRlbSBkb25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gYnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBidXR0b24gPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbi5wcm9wKCd0eXBlJykpLnRvRXF1YWwoJ2J1dHRvbicpO1xyXG4gICAgICAgIGV4cGVjdChidXR0b24ucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uVG9nZ2xlSW1wb3J0YW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyBpdGVtIGVsZW1lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcudG9kby1saXN0LWl0ZW0tbGFiZWwnKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vblRvZ2dsZURvbmUpO1xyXG4gICAgICAgIGV4cGVjdChsYWJlbC50ZXh0KCkpLnRvRXF1YWwocHJvcHMubGFiZWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGRlbGV0ZSBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlci5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vbkRlbGV0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGRlbGV0ZSBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlci5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vbkRlbGV0ZWQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=