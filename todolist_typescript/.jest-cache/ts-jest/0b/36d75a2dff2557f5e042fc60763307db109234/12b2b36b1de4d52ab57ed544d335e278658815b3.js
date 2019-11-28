"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var sinon_1 = require("sinon");
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
            onDeleted: sinon_1.default.stub(),
            onToggleDone: sinon_1.default.stub(),
            onToggleImportant: sinon_1.default.stub(),
        };
        //When
        var wrapper = enzyme_1.mount(react_1.default.createElement(todo_list_item_1.TodoListItem, tslib_1.__assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFx0b2RvbGlzdF90eXBlc2NyaXB0XFx0ZXN0XFxmdW5jdGlvbnMudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUMxQixpQ0FBK0I7QUFDL0IsOENBQXVDO0FBQ3ZDLGtGQUErRTtBQUcvRSxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDUCxPQUFPO1FBQ1AsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyxnQkFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixPQUFPO1FBQ1AsSUFBTSxLQUFLLEdBQXNCO1lBQzdCLElBQUksRUFBRSxJQUFJO1lBQ1YsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLFlBQVksRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO1lBQzFCLGlCQUFpQixFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7U0FDbEMsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsOEJBQUMsNkJBQVksdUJBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVuRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFx0b2RvbGlzdF90eXBlc2NyaXB0XFx0ZXN0XFxmdW5jdGlvbnMudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgeyBtdWx0IH0gZnJvbSAnLi4vc3JjL2Z1bmN0aW9ucydcclxuaW1wb3J0IHsgVG9kb0xpc3RJdGVtIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0LWl0ZW0vdG9kby1saXN0LWl0ZW0nO1xyXG5pbXBvcnQgeyBUb2RvTGlzdEl0ZW1Qcm9wcyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3R5cGVzLXRvZG8tbGlzdC1pdGVtJztcclxuXHJcbmRlc2NyaWJlKCdtdWx0IHdvcmtzJywgKCkgPT4ge1xyXG4gICAgaXQoJ25hbWUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGEgPSAyO1xyXG4gICAgICAgIGNvbnN0IGIgPSAzO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gNjtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtdWx0KGEsIGIpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBwcm9wczogVG9kb0xpc3RJdGVtUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXHJcbiAgICAgICAgICAgIG9uRGVsZXRlZDogc2lub24uc3R1YigpLFxyXG4gICAgICAgICAgICBvblRvZ2dsZURvbmU6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICAgICAgb25Ub2dnbGVJbXBvcnRhbnQ6IHNpbm9uLnN0dWIoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRvZG9MaXN0SXRlbSB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=