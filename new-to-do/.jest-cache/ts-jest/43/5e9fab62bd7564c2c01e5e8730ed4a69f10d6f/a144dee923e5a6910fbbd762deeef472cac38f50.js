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
        expect(instance.state.toDoData).toContainEqual(newItem);
    });
    //onAddItem
    //toggleImportant
    //filter
    //search
    //deleteItem
    //toggleProperty
    //onToggleDone
    //onSearhChange
    //onFilterChange
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsMkNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQix1REFBc0Q7QUFFdEQsSUFBTSxLQUFLLEdBQUc7SUFDWixRQUFRLEVBQUU7UUFDTixlQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1osZUFBSyxDQUFDLElBQUksRUFBRTtRQUNaLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDWixLQUFLO1FBQ0wsUUFBUTtLQUNYO0NBQ0YsQ0FBQztBQUVGLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtJQUUvQixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFFbkMsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLFNBQUcsZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILGdCQUFnQjtJQUNoQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFNLFFBQVEsR0FBRyxjQUFLLENBQU0sb0JBQUMsU0FBRyxPQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFNLFFBQVEsR0FBRztZQUNiLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1NBQ3JCLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixPQUFPO1FBQ1AsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQU0sUUFBUSxHQUFHLGNBQUssQ0FBTSxvQkFBQyxTQUFHLE9BQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhELE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNGLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFFBQVE7SUFDUixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtdGVzdFxcYXBwLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcFwiO1xyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgdG9Eb0RhdGE6IFtcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgJ2FzZCcsXHJcbiAgICAgICdhc2Rhc2QnXHJcbiAgXVxyXG59O1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcC9BcHAnLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnQXBwIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwIHsuLi5zdGF0ZX0vPik7XHJcblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NyZWF0ZVRvRG9JdGVtXHJcbiAgICBpdCgnY3JlYXRlVG9kb0l0ZW0gY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSAnYXNkYXNkYXMnO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiBpbnN0YW5jZS5tYXhJZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5jcmVhdGVUb2RvSXRlbShsYWJlbCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5tYXhJZCkudG9FcXVhbCgxMDQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uQWRkSXRlbSBjaGVjaycsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gJ2hlbGwnO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gaW5zdGFuY2Uub25BZGRJdGVtKHRleHQpO1xyXG5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGEpLnRvQ29udGFpbkVxdWFsKG5ld0l0ZW0pO1xyXG4gICAgfSlcclxuICAgIC8vb25BZGRJdGVtXHJcbiAgICAvL29uVG9nZ2xlSW1wb3J0YW50XHJcbiAgICAvL2ZpbHRlclxyXG4gICAgLy9zZWFyY2hcclxuICAgIC8vZGVsZXRlSXRlbVxyXG4gICAgLy90b2dnbGVQcm9wZXJ0eVxyXG4gICAgLy9vblRvZ2dsZURvbmVcclxuICAgIC8vb25TZWFyaENoYW5nZVxyXG4gICAgLy9vbkZpbHRlckNoYW5nZVxyXG59KTsiXSwidmVyc2lvbiI6M30=