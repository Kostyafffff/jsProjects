"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var functions_1 = require("../src/functions");
var todo_list_item_1 = require("../src/components/todo-list-item/todo-list-item");
describe('mult works', function () {
    it('name', function () {
        //Given
        var a = 2;
        var b = 3;
        var expected = 6;
        //When
        var actual = functions_1.mult(a, b);
        //Then
        expect(actual).toEqual(expected);
    });
    it('should mount component', function () {
        //Given
        var props = {
            done: true,
            important: true,
            label: 'Label',
            onDeleted: function () { },
            onToggleDone: function () { },
            onToggleImportant: function () { },
        };
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, tslib_1.__assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFx0b2RvbGlzdF90eXBlc2NyaXB0XFx0ZXN0XFxmdW5jdGlvbnMudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTBCO0FBQzFCLGlDQUErQjtBQUMvQiw4Q0FBdUM7QUFDdkMsa0ZBQStFO0FBRy9FLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNQLE9BQU87UUFDUCxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLGdCQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFCLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQ3pCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBc0I7WUFDN0IsSUFBSSxFQUFFLElBQUk7WUFDVixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLGNBQWEsQ0FBQztZQUN6QixZQUFZLEVBQUUsY0FBYSxDQUFDO1lBQzVCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztTQUNwQyxDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyw2QkFBWSx1QkFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXHRvZG9saXN0X3R5cGVzY3JpcHRcXHRlc3RcXGZ1bmN0aW9ucy50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCB7IG11bHQgfSBmcm9tICcuLi9zcmMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBUb2RvTGlzdEl0ZW0gfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbSc7XHJcbmltcG9ydCB7IFRvZG9MaXN0SXRlbVByb3BzIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdHlwZXMtdG9kby1saXN0LWl0ZW0nO1xyXG5cclxuZGVzY3JpYmUoJ211bHQgd29ya3MnLCAoKSA9PiB7XHJcbiAgICBpdCgnbmFtZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgYSA9IDI7XHJcbiAgICAgICAgY29uc3QgYiA9IDM7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSA2O1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG11bHQoYSwgYik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHByb3BzOiBUb2RvTGlzdEl0ZW1Qcm9wcyA9IHtcclxuICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcclxuICAgICAgICAgICAgb25EZWxldGVkOiAoKTogdm9pZCA9PiB7fSxcclxuICAgICAgICAgICAgb25Ub2dnbGVEb25lOiAoKTogdm9pZCA9PiB7fSxcclxuICAgICAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ6ICgpOiB2b2lkID0+IHt9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9kb0xpc3RJdGVtIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==