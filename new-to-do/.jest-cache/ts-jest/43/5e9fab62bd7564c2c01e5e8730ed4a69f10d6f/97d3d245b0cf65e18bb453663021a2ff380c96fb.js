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
var App_1 = require("components/app/App");
var state = {
    toDoData: [
        sinon_1.default.stub(),
        sinon_1.default.stub(),
        sinon_1.default.stub(),
        'asd',
        'active'
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
    //onAddItem
    it('onAddItem check', function () {
        //Given
        var text = 'wake up in hell';
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = {
            label: text,
            important: false,
            done: false,
            id: 103,
        };
        //When
        instance.onAddItem(text);
        expect(instance.state.toDoData[0]).toEqual(expected);
    });
    it('toggleImportant check', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        var instance = wrapper.instance();
        var toDoData = [{
                label: 'hello',
                important: false,
                done: false,
                id: 99,
            }];
        var expected = {
            label: 'hello',
            important: true,
            done: false,
            id: 99,
        };
        wrapper.setState({ toDoData: toDoData });
        //When
        instance.toggleImportant(99);
        //Then
        expect(instance.state.toDoData[0]).toEqual(expected);
    });
    //same as toggleImportant
    it('onToggleDone check', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = {
            label: 'hello',
            important: false,
            done: false,
            id: 103,
        };
        //When
        instance.onAddItem(expected.label);
        instance.onToggleDone(103);
        //Then
        expect(instance.state.toDoData[0].done).toBeTruthy();
    });
    it('should have default state', function () {
        //Given
        var expected = {
            toDoData: [
                {
                    label: 'Setup React project ToDo List',
                    important: false,
                    done: false,
                    id: 100
                },
                {
                    label: 'Rewrite ToDo list with typescript',
                    important: false,
                    done: false,
                    id: 101
                },
                {
                    label: 'Create tests with Jest and Enzyme',
                    important: false,
                    done: false,
                    id: 102
                },
            ],
            term: '',
            filter: 'active',
        };
        //When
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        //Then
        expect(wrapper.state()).toEqual(expected);
    });
    it('deleteItem check', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = 0;
        //When
        instance.deleteItem(100);
        instance.deleteItem(101);
        instance.deleteItem(102);
        //Then
        expect(instance.state.toDoData.length).toEqual(expected);
    });
    it('onSearchChange check', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = 'while';
        //When
        instance.onSearchChange(expected);
        //Then
        expect(instance.state.term).toEqual(expected);
    });
    it('onFilter change', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = 'while';
        //When
        instance.onFilterChange(expected);
        //Then
        expect(instance.state.filter).toEqual(expected);
    });
    it('filter active', function () {
        //Given
        var expected = {
            label: 'Create tests with Jest and Enzyme',
            important: false,
            done: false,
            id: 102
        };
        var items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            },
            expected,
        ];
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        //When
        var actual = instance.filter(items, 'active');
        //Then
        expect(actual).toEqual([expected]);
    });
    it('filter empty', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        //When
        var actual = instance.filter([], 'active');
        //Then
        expect(actual).toEqual([]);
    });
    it('filter empty', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            }
        ];
        //When
        var actual = instance.filter(items, 'done');
        //Then
        expect(actual.length).toEqual(items.length);
    });
    //filter
    //search
    //toggleProperty
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsMkNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQiwwQ0FBeUM7QUFFekMsSUFBTSxLQUFLLEdBQUc7SUFDWixRQUFRLEVBQUU7UUFDTixlQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1osZUFBSyxDQUFDLElBQUksRUFBRTtRQUNaLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDWixLQUFLO1FBQ0wsUUFBUTtLQUNYO0NBQ0YsQ0FBQztBQUVGLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtJQUMvQixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDbkMsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLFNBQUcsZUFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILGdCQUFnQjtJQUNoQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFNLFFBQVEsR0FBRyxjQUFLLENBQU0sb0JBQUMsU0FBRyxPQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFNLFFBQVEsR0FBRztZQUNiLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1NBQ3JCLENBQUM7UUFFRixNQUFNO1FBQ04sSUFB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QUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTlDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRO0lBQ1IsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLXRlc3RcXGFwcC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnY29tcG9uZW50cy9hcHAvQXBwJztcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIHRvRG9EYXRhOiBbXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgICdhc2QnLFxyXG4gICAgICAnYWN0aXZlJ1xyXG4gIF1cclxufTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHAvQXBwJywgKCkgPT4ge1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnQXBwIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHAgey4uLnN0YXRlfS8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY3JlYXRlVG9Eb0l0ZW1cclxuICAgIGl0KCdjcmVhdGVUb2RvSXRlbSBjaGVjaycsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBsYWJlbCA9ICdhc2Rhc2Rhcyc7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IGluc3RhbmNlLm1heElkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLmNyZWF0ZVRvZG9JdGVtKGxhYmVsKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLm1heElkKS50b0VxdWFsKDEwNCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL29uQWRkSXRlbVxyXG4gICAgaXQoJ29uQWRkSXRlbSBjaGVjaycsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gJ3dha2UgdXAgaW4gaGVsbCc7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiB0ZXh0LFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IDEwMyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vbkFkZEl0ZW0odGV4dCk7XHJcblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50b0RvRGF0YVswXSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25Ub2dnbGVJbXBvcnRhbnQgY2hlY2snLCgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgdG9Eb0RhdGEgPSBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ2hlbGxvJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiA5OSxcclxuICAgICAgICB9XTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdoZWxsbycsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiA5OSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdyYXBwZXIuc2V0U3RhdGUoeyB0b0RvRGF0YSB9KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25Ub2dnbGVJbXBvcnRhbnQoOTkpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGFbMF0pLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zYW1lIGFzIG9uVG9nZ2xlSW1wb3J0YW50XHJcbiAgICBpdCgnb25Ub2dnbGVEb25lIGNoZWNrJywoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ2hlbGxvJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAxMDMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25BZGRJdGVtKGV4cGVjdGVkLmxhYmVsKTtcclxuICAgICAgICBpbnN0YW5jZS5vblRvZ2dsZURvbmUoMTAzKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhWzBdLmRvbmUpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgaGF2ZSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgdG9Eb0RhdGE6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZSB0ZXN0cyB3aXRoIEplc3QgYW5kIEVuenltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0ZXJtOiAnJyxcclxuICAgICAgICAgICAgZmlsdGVyOiAnYWN0aXZlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoKSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZGVsZXRlSXRlbSBjaGVjaycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oMTAwKTtcclxuICAgICAgICBpbnN0YW5jZS5kZWxldGVJdGVtKDEwMSk7XHJcbiAgICAgICAgaW5zdGFuY2UuZGVsZXRlSXRlbSgxMDIpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGEubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdCgnb25TZWFyY2hDaGFuZ2UgY2hlY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gJ3doaWxlJztcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25TZWFyY2hDaGFuZ2UoZXhwZWN0ZWQpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudGVybSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25GaWx0ZXIgY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9ICd3aGlsZSc7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uRmlsdGVyQ2hhbmdlKGV4cGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLmZpbHRlcikudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZmlsdGVyIGFjdGl2ZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlIHRlc3RzIHdpdGggSmVzdCBhbmQgRW56eW1lJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAxMDJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZWN0ZWQsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuZmlsdGVyKGl0ZW1zLCAnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoW2V4cGVjdGVkXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZmlsdGVyIGVtcHR5JywgKCkgPT57XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5maWx0ZXIoW10sICdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChbXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZmlsdGVyIGVtcHR5JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5maWx0ZXIoaXRlbXMsICdkb25lJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwubGVuZ3RoKS50b0VxdWFsKGl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2ZpbHRlclxyXG4gICAgLy9zZWFyY2hcclxuICAgIC8vdG9nZ2xlUHJvcGVydHlcclxufSk7Il0sInZlcnNpb24iOjN9