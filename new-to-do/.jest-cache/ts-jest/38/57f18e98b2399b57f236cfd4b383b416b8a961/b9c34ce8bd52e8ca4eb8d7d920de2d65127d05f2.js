"use strict";
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
var todo_list_1 = require("../../../src/components/todo-list/todo-list");
describe('src/components/todo-list-item/todo-list-item.tsx', function () {
    var toDoListProps = {
        todos: [{ key: 'asssa', label: 'all', done: false, important: true, id: 1, }],
        onDeleted: sinon_1.default.stub(),
        onToggleImportant: sinon_1.default.stub(),
        onToggleDone: sinon_1.default.stub(),
    };
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_1.ToDoList, __assign({}, toDoListProps)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsZ0RBQTBCO0FBQzFCLGdEQUEwQjtBQUUxQix5RUFBcUU7QUFFckUsUUFBUSxDQUFDLGtEQUFrRCxFQUFFO0lBRXpELElBQU0sYUFBYSxHQUFrQjtRQUNqQyxLQUFLLEVBQUUsQ0FBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFFO1FBQy9FLFNBQVMsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO1FBQ3ZCLGlCQUFpQixFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDL0IsWUFBWSxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7S0FDN0IsQ0FBQztJQUVGLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUUzQyxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLDhCQUFDLG9CQUFRLGVBQUssYUFBYSxFQUFJLENBQUMsQ0FBQztRQUV2RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgVG9kb0xpc3RQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90eXBlcy10b2RvLWxpc3QnO1xyXG5pbXBvcnQge1RvRG9MaXN0fSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdFwiO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3RvZG8tbGlzdC1pdGVtLnRzeCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0b0RvTGlzdFByb3BzOiBUb2RvTGlzdFByb3BzID0ge1xyXG4gICAgICAgIHRvZG9zOiBbIHsga2V5OiAnYXNzc2EnLCBsYWJlbDogJ2FsbCcsIGRvbmU6IGZhbHNlLCBpbXBvcnRhbnQ6IHRydWUsIGlkOiAxLCB9IF0sXHJcbiAgICAgICAgb25EZWxldGVkOiBzaW5vbi5zdHViKCksXHJcbiAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICBvblRvZ2dsZURvbmU6IHNpbm9uLnN0dWIoKSxcclxuICAgIH07XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VG9Eb0xpc3Qgey4uLnRvRG9MaXN0UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=