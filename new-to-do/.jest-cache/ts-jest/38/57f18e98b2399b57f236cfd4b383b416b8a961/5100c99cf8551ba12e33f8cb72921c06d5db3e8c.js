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
    //Given
    var toDoListProps = {
        todos: [{ key: 'asssa', label: 'all', done: false, important: true, id: 1, }],
        onDeleted: sinon_1.default.stub(),
        onToggleImportant: sinon_1.default.stub(),
        onToggleDone: sinon_1.default.stub(),
    };
    it('should be defined', function () {
        //Then
        expect(todo_list_1.ToDoList).toBeDefined();
    });
    it('should TodoListItemProps mount component', function () {
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_1.ToDoList, __assign({}, toDoListProps)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcdG9kby1saXN0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsZ0RBQTBCO0FBQzFCLGdEQUEwQjtBQUUxQix5RUFBcUU7QUFFckUsUUFBUSxDQUFDLGtEQUFrRCxFQUFFO0lBRXpELE9BQU87SUFDUCxJQUFNLGFBQWEsR0FBa0I7UUFDakMsS0FBSyxFQUFFLENBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBRTtRQUMvRSxTQUFTLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtRQUN2QixpQkFBaUIsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO1FBQy9CLFlBQVksRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO0tBQzdCLENBQUM7SUFFRixFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTTtRQUNOLE1BQU0sQ0FBQyxvQkFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFFM0MsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyw4QkFBQyxvQkFBUSxlQUFLLGFBQWEsRUFBSSxDQUFDLENBQUM7UUFFdkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IFRvZG9MaXN0UHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvdHlwZXMtdG9kby1saXN0JztcclxuaW1wb3J0IHtUb0RvTGlzdH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3RcIjtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbS50c3gnLCAoKSA9PiB7XHJcblxyXG4gICAgLy9HaXZlblxyXG4gICAgY29uc3QgdG9Eb0xpc3RQcm9wczogVG9kb0xpc3RQcm9wcyA9IHtcclxuICAgICAgICB0b2RvczogWyB7IGtleTogJ2Fzc3NhJywgbGFiZWw6ICdhbGwnLCBkb25lOiBmYWxzZSwgaW1wb3J0YW50OiB0cnVlLCBpZDogMSwgfSBdLFxyXG4gICAgICAgIG9uRGVsZXRlZDogc2lub24uc3R1YigpLFxyXG4gICAgICAgIG9uVG9nZ2xlSW1wb3J0YW50OiBzaW5vbi5zdHViKCksXHJcbiAgICAgICAgb25Ub2dnbGVEb25lOiBzaW5vbi5zdHViKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoVG9Eb0xpc3QpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUb0RvTGlzdCB7Li4udG9Eb0xpc3RQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==