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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var sinon_1 = __importDefault(require("sinon"));
var App_1 = require("../../../src/components/app/App");
var state = {
    toDoData: [
        sinon_1.default.stub(),
        sinon_1.default.stub(),
        sinon_1.default.stub(),
        'asd',
        'asdasd'
    ]
};
describe('src/components/App/App', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, __assign({}, state)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    //createToDoItem
    it('createTodoItem check', function () {
        //Given
        var label = 'asdasdas';
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = {
            label: label,
            important: false,
            done: false,
            id: instance.maxId,
        };
        //When
        var actual = instance.createTodoItem(label);
        //Then
        expect(actual).toEqual(expected);
        expect(instance.maxId).toEqual(104);
    });
    it('onAddItem check', function () {
        //Given
        var text = 'hell';
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        //When
        var newItem = instance.onAddItem(text);
        console.log(instance.state);
        console.log(newItem);
    });
    //onAddItem
    //onToggleImportant
    //filter
    //search
    //deleteItem
    //toggleProperty
    //onToggleDone
    //onSearhChange
    //onFilterChange
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsMkNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQix1REFBc0Q7QUFFdEQsSUFBTSxLQUFLLEdBQUc7SUFDWixRQUFRLEVBQUU7UUFDTixlQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1osZUFBSyxDQUFDLElBQUksRUFBRTtRQUNaLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDWixLQUFLO1FBQ0wsUUFBUTtLQUNYO0NBQ0YsQ0FBQztBQUVGLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtJQUUvQixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFFbkMsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLFNBQUcsZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILGdCQUFnQjtJQUNoQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFNLFFBQVEsR0FBRyxjQUFLLENBQU0sb0JBQUMsU0FBRyxPQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFNLFFBQVEsR0FBRztZQUNiLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1NBQ3JCLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQU0sUUFBUSxHQUFHLGNBQUssQ0FBTSxvQkFBQyxTQUFHLE9BQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhELE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFekIsQ0FBQyxDQUFDLENBQUE7SUFDRixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixRQUFRO0lBQ1IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLXRlc3RcXGFwcC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC9BcHBcIjtcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIHRvRG9EYXRhOiBbXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgICdhc2QnLFxyXG4gICAgICAnYXNkYXNkJ1xyXG4gIF1cclxufTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHAvQXBwJywgKCkgPT4ge1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcCB7Li4uc3RhdGV9Lz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jcmVhdGVUb0RvSXRlbVxyXG4gICAgaXQoJ2NyZWF0ZVRvZG9JdGVtIGNoZWNrJywgKCkgPT57XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gJ2FzZGFzZGFzJztcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogaW5zdGFuY2UubWF4SWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuY3JlYXRlVG9kb0l0ZW0obGFiZWwpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoaW5zdGFuY2UubWF4SWQpLnRvRXF1YWwoMTA0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvbkFkZEl0ZW0gY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9ICdoZWxsJztcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGluc3RhbmNlLm9uQWRkSXRlbSh0ZXh0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaW5zdGFuY2Uuc3RhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0l0ZW0pO1xyXG5cclxuICAgIH0pXHJcbiAgICAvL29uQWRkSXRlbVxyXG4gICAgLy9vblRvZ2dsZUltcG9ydGFudFxyXG4gICAgLy9maWx0ZXJcclxuICAgIC8vc2VhcmNoXHJcbiAgICAvL2RlbGV0ZUl0ZW1cclxuICAgIC8vdG9nZ2xlUHJvcGVydHlcclxuICAgIC8vb25Ub2dnbGVEb25lXHJcbiAgICAvL29uU2VhcmhDaGFuZ2VcclxuICAgIC8vb25GaWx0ZXJDaGFuZ2VcclxufSk7Il0sInZlcnNpb24iOjN9