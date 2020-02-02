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
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    expectedClass                 | expectedLength\n    ", " |     1\n    ", "  |     1\n    ", "       |     1\n    ", "           |     1\n    ", "         |     3\n    ", "    |     1\n    "], ["\n    expectedClass                 | expectedLength\n    ", " |     1\n    ", "  |     1\n    ", "       |     1\n    ", "           |     1\n    ", "         |     3\n    ", "    |     1\n    "])), '.btn.btn-outline-success', '.btn.btn-outline-danger', '.fa.fa-exclamation', '.fa.fa-trash-o', '.list-group-item', '.todo-list-item-label')('elements of list should have expected class $expectedClass ', function (_a) {
        var expectedClass = _a.expectedClass;
        //Given
        var expectedLength = 1;
        var currentProps = __assign({}, props);
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, __assign({}, currentProps)));
        //When
        var element = wrapper.find(expectedClass);
        //Then
        expect(element).toHaveLength(expectedLength);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFx0b2RvLWxpc3QtaXRlbS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixnREFBMEI7QUFDMUIsaUNBQXNDO0FBRXRDLDJFQUFzRTtBQUV0RSxRQUFRLENBQUMsa0RBQWtELEVBQUU7SUFFekQsT0FBTztJQUNQLElBQU0sS0FBSyxHQUFzQjtRQUM3QixJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLEtBQUssRUFBRSxLQUFLO1FBQ1osU0FBUyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDdkIsWUFBWSxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDMUIsaUJBQWlCLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUNsQyxDQUFDO0lBRUYsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsNkJBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTTtRQUNOLE1BQU0sQ0FBQyw2QkFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxrU0FBQSxtRUFFRCxFQUFLLFVBQVcsRUFBSyxVQUFXLEVBQWlCLFlBQ2pELEVBQUksV0FBWSxFQUFLLFVBQVcsRUFBc0IsWUFDdEQsRUFBSyxVQUFXLEVBQUksV0FBWSxFQUEyQixZQUMzRCxFQUFJLFdBQVksRUFBSSxXQUFZ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LENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFO1FBQ3JDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsNkJBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFO1FBQ3JDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsNkJBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdC1pdGVtXFx0b2RvLWxpc3QtaXRlbS50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQge21vdW50LCBzaGFsbG93fSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQge1RvZG9MaXN0SXRlbVByb3BzfSBmcm9tICdjb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3R5cGVzLXRvZG8tbGlzdC1pdGVtJztcclxuaW1wb3J0IHtUb2RvTGlzdEl0ZW19IGZyb20gJ2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdG9kby1saXN0LWl0ZW0nO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3RvZG8tbGlzdC1pdGVtLnRzeCcsICgpID0+IHtcclxuXHJcbiAgICAvL0dpdmVuXHJcbiAgICBjb25zdCBwcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnQWxsJyxcclxuICAgICAgICBvbkRlbGV0ZWQ6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICBvblRvZ2dsZURvbmU6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICBvblRvZ2dsZUltcG9ydGFudDogc2lub24uc3R1YigpLFxyXG4gICAgfTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoVG9kb0xpc3RJdGVtKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBkb25lICAgICAgICB8ICAgaW1wb3J0YW50ICAgfCAgIGV4cGVjdGVkQ2xhc3NcclxuICAgICAgICAke2ZhbHNlfSAgICB8ICAgJHtmYWxzZX0gICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbSd9XHJcbiAgICAgICAgJHt0cnVlfSAgICAgfCAgICR7ZmFsc2V9ICAgIHwgICAkeycudG9kby1saXN0LWl0ZW0uZG9uZSd9XHJcbiAgICAgICAgJHtmYWxzZX0gICAgfCAgICR7dHJ1ZX0gICAgIHwgICAkeycudG9kby1saXN0LWl0ZW0uaW1wb3J0YW50J31cclxuICAgICAgICAke3RydWV9ICAgICB8ICAgJHt0cnVlfSAgICAgfCAgICR7Jy50b2RvLWxpc3QtaXRlbS5kb25lLmltcG9ydGFudC50b2RvLWxpc3QtaXRlbS5kb25lLmltcG9ydGFudCd9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciAkZXhwZWN0ZWRDbGFzcyB3aGVuIGRvbmUgPSAkZG9uZSBpbXBvcnRhbnQgPSAkaW1wb3J0YW50JywgKHtkb25lLCBpbXBvcnRhbnQsIGV4cGVjdGVkQ2xhc3N9KSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICBkb25lLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/Rg9GC0L7Rh9C90LjRgtGMINC60L7RgNGA0LXQutGC0L3QvtGB0YLRjFxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICR7Jy5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcyd9IHwgICAgIDFcclxuICAgICR7Jy5idG4uYnRuLW91dGxpbmUtZGFuZ2VyJ30gIHwgICAgIDFcclxuICAgICR7Jy5mYS5mYS1leGNsYW1hdGlvbid9ICAgICAgIHwgICAgIDFcclxuICAgICR7Jy5mYS5mYS10cmFzaC1vJ30gICAgICAgICAgIHwgICAgIDFcclxuICAgICR7Jy5saXN0LWdyb3VwLWl0ZW0nfSAgICAgICAgIHwgICAgIDNcclxuICAgICR7Jy50b2RvLWxpc3QtaXRlbS1sYWJlbCd9ICAgIHwgICAgIDFcclxuICAgIGAoJ2VsZW1lbnRzIG9mIGxpc3Qgc2hvdWxkIGhhdmUgZXhwZWN0ZWQgY2xhc3MgJGV4cGVjdGVkQ2xhc3MgJywgKHtleHBlY3RlZENsYXNzfSkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZExlbmd0aCA9IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gd3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoZWxlbWVudCkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdCgnc2hvdWxkIGhhdmUgY2xhc3NOYW1lcyB3aXRoIHBhcmFtcycsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30vPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ2NsYXNzTmFtZScpKS50b1N0cmljdEVxdWFsKCd0b2RvLWxpc3QtaXRlbSBkb25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gYnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBidXR0b24gPSB3cmFwcGVyLmZpbmQoJy5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGJ1dHRvbi5wcm9wKCd0eXBlJykpLnRvRXF1YWwoJ2J1dHRvbicpO1xyXG4gICAgICAgIGV4cGVjdChidXR0b24ucHJvcCgnb25DbGljaycpKS50b0VxdWFsKHByb3BzLm9uVG9nZ2xlSW1wb3J0YW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyBpdGVtIGVsZW1lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcudG9kby1saXN0LWl0ZW0tbGFiZWwnKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vblRvZ2dsZURvbmUpO1xyXG4gICAgICAgIGV4cGVjdChsYWJlbC50ZXh0KCkpLnRvRXF1YWwocHJvcHMubGFiZWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGRlbGV0ZSBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlci5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vbkRlbGV0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIGRlbGV0ZSBidXR0b24nLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb2RvTGlzdEl0ZW0gey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gd3JhcHBlci5maW5kKCcuYnRuLmJ0bi1vdXRsaW5lLWRhbmdlci5idG4tc20nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxhYmVsLnByb3AoJ29uQ2xpY2snKSkudG9FcXVhbChwcm9wcy5vbkRlbGV0ZWQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=