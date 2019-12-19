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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
// jest.mock(
//     'components/app-header/app-header',
//     () => (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
// );
jest.mock('components/app-header/app-header', function () { return ({
    AppHeader: function (props) { return (React.createElement("div", __assign({ "mock-id": "app-header" }, props))); },
}); });
jest.mock('components/search-panel/search-panel', function () { return ({
    SearchPanel: function (props) { return (React.createElement("div", __assign({ "mock-id": "search-panel" }, props))); },
}); });
jest.mock('components/item-status-filter/item-status-filter', function () { return ({
    ItemStatusFilter: function (props) { return (React.createElement("div", __assign({ "mock-id": "item-status-filter" }, props))); },
}); });
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
    it('filter done', function () {
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
        expect(__spreadArrays(actual)).toEqual(__spreadArrays(items));
    });
    it('search check', function () {
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
            },
            {
                label: 'Create tests with Jest and Enzyme',
                important: false,
                done: false,
                id: 102
            },
        ];
        var expected = [
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
        ];
        //When
        var actual = instance.search(items, 'todo');
        //Then
        expect(actual.length).toEqual(2);
        expect(__spreadArrays(actual)).toEqual(__spreadArrays(expected));
    });
    it('should pass props to AppHeader', function () {
        //When
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        //Then
        var header = wrapper.find('[mock-id="app-header"]');
        expect(header.prop('toDo')).toEqual(3);
        expect(header.prop('done')).toEqual(0);
    });
    it('should pass props to SearchPanel', function () {
        //Given
        var term = 'term';
        //When
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        wrapper.setState({ term: term });
        var onSearchChange = wrapper.instance().onSearchChange;
        //Then
        var search = wrapper.find('[mock-id="search-panel"]');
        expect(search.prop('term')).toEqual(term);
        expect(search.prop('onSearchChange')).toEqual(onSearchChange);
    });
    it('should pass props to ItemStatusFilter', function () {
        //Given
        var filter = 'todo';
        //When
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        wrapper.setState({ filter: filter });
        var onFilterChange = wrapper.instance().onFilterChange;
        //Then
        var filterChange = wrapper.find('[mock-id="item-status-filter"]');
        expect(filterChange.prop('filter')).toEqual(filter);
        expect(filterChange.prop('onFilterChange')).toEqual(onFilterChange);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsYUFBYTtBQUNiLDBDQUEwQztBQUMxQyx1RkFBdUY7QUFDdkYsS0FBSztBQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDakQsU0FBUyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsWUFBWSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQXpDLENBQXlDO0NBQ3ZGLENBQUMsRUFGa0QsQ0FFbEQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNyRCxXQUFXLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxjQUFjLElBQUssS0FBSyxFQUFJLENBQUMsRUFBM0MsQ0FBMkM7Q0FDM0YsQ0FBQyxFQUZzRCxDQUV0RCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2pFLGdCQUFnQixFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsb0JBQW9CLElBQUssS0FBSyxFQUFJLENBQUMsRUFBakQsQ0FBaUQ7Q0FDdEcsQ0FBQyxFQUZrRSxDQUVsRSxDQUFDLENBQUM7QUFuQkosaUNBQStCO0FBQy9CLDJDQUErQjtBQUMvQixnREFBMEI7QUFDMUIsMENBQXlDO0FBa0J6QyxJQUFNLEtBQUssR0FBRztJQUNaLFFBQVEsRUFBRTtRQUNOLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDWixlQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1osZUFBSyxDQUFDLElBQUksRUFBRTtRQUNaLEtBQUs7UUFDTCxRQUFRO0tBQ1g7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LGdDQUFnQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtdGVzdFxcYXBwLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL2FwcC9BcHAnO1xyXG5cclxuLy8gamVzdC5tb2NrKFxyXG4vLyAgICAgJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJyxcclxuLy8gICAgICgpID0+IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cImFwcC1oZWFkZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxuLy8gKTtcclxuamVzdC5tb2NrKCdjb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+ICh7XHJcbiAgICBBcHBIZWFkZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cImFwcC1oZWFkZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuamVzdC5tb2NrKCdjb21wb25lbnRzL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwnLCAoKSA9PiAoe1xyXG4gICAgU2VhcmNoUGFuZWw6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cInNlYXJjaC1wYW5lbFwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyL2l0ZW0tc3RhdHVzLWZpbHRlcicsICgpID0+ICh7XHJcbiAgICBJdGVtU3RhdHVzRmlsdGVyOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJpdGVtLXN0YXR1cy1maWx0ZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgdG9Eb0RhdGE6IFtcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgJ2FzZCcsXHJcbiAgICAgICdhY3RpdmUnXHJcbiAgXVxyXG59O1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcC9BcHAnLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdBcHAgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcCB7Li4uc3RhdGV9Lz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jcmVhdGVUb0RvSXRlbVxyXG4gICAgaXQoJ2NyZWF0ZVRvZG9JdGVtIGNoZWNrJywgKCkgPT57XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gJ2FzZGFzZGFzJztcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogaW5zdGFuY2UubWF4SWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuY3JlYXRlVG9kb0l0ZW0obGFiZWwpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoaW5zdGFuY2UubWF4SWQpLnRvRXF1YWwoMTA0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vb25BZGRJdGVtXHJcbiAgICBpdCgnb25BZGRJdGVtIGNoZWNrJywgKCkgPT57XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSAnd2FrZSB1cCBpbiBoZWxsJztcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IHRleHQsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogMTAzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uQWRkSXRlbSh0ZXh0KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhWzBdKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblRvZ2dsZUltcG9ydGFudCBjaGVjaycsKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCB0b0RvRGF0YSA9IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaGVsbG8nLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IDk5LFxyXG4gICAgICAgIH1dO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ2hlbGxvJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IDk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSh7IHRvRG9EYXRhIH0pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vblRvZ2dsZUltcG9ydGFudCg5OSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50b0RvRGF0YVswXSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3NhbWUgYXMgb25Ub2dnbGVJbXBvcnRhbnRcclxuICAgIGl0KCdvblRvZ2dsZURvbmUgY2hlY2snLCgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaGVsbG8nLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IDEwMyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vbkFkZEl0ZW0oZXhwZWN0ZWQubGFiZWwpO1xyXG4gICAgICAgIGluc3RhbmNlLm9uVG9nZ2xlRG9uZSgxMDMpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGFbMF0uZG9uZSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBoYXZlIGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICB0b0RvRGF0YTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEwMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlIHRlc3RzIHdpdGggSmVzdCBhbmQgRW56eW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRlcm06ICcnLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdhY3RpdmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgpKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdkZWxldGVJdGVtIGNoZWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2UuZGVsZXRlSXRlbSgxMDApO1xyXG4gICAgICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oMTAxKTtcclxuICAgICAgICBpbnN0YW5jZS5kZWxldGVJdGVtKDEwMik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50b0RvRGF0YS5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uU2VhcmNoQ2hhbmdlIGNoZWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9ICd3aGlsZSc7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uU2VhcmNoQ2hhbmdlKGV4cGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRlcm0pLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uRmlsdGVyIGNoYW5nZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSAnd2hpbGUnO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vbkZpbHRlckNoYW5nZShleHBlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS5maWx0ZXIpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2ZpbHRlciBhY3RpdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZSB0ZXN0cyB3aXRoIEplc3QgYW5kIEVuenltZScsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogMTAyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4cGVjdGVkLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLmZpbHRlcihpdGVtcywgJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKFtleHBlY3RlZF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2ZpbHRlciBlbXB0eScsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuZmlsdGVyKFtdLCAnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoW10pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2ZpbHRlciBkb25lJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5maWx0ZXIoaXRlbXMsICdkb25lJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChbLi4uYWN0dWFsXSkudG9FcXVhbChbLi4uaXRlbXNdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzZWFyY2ggY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZSB0ZXN0cyB3aXRoIEplc3QgYW5kIEVuenltZScsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5zZWFyY2goaXRlbXMsICd0b2RvJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwubGVuZ3RoKS50b0VxdWFsKDIpO1xyXG4gICAgICAgIGV4cGVjdChbLi4uYWN0dWFsXSkudG9FcXVhbChbLi4uZXhwZWN0ZWRdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBBcHBIZWFkZXInLCAoKSA9PiB7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHdyYXBwZXIuZmluZCgnW21vY2staWQ9XCJhcHAtaGVhZGVyXCJdJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChoZWFkZXIucHJvcCgndG9EbycpKS50b0VxdWFsKDMpO1xyXG4gICAgICAgIGV4cGVjdChoZWFkZXIucHJvcCgnZG9uZScpKS50b0VxdWFsKDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIFNlYXJjaFBhbmVsJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB0ZXJtID0gJ3Rlcm0nO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgdGVybSB9KTtcclxuICAgICAgICBjb25zdCB7IG9uU2VhcmNoQ2hhbmdlIH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IHdyYXBwZXIuZmluZCgnW21vY2staWQ9XCJzZWFyY2gtcGFuZWxcIl0nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHNlYXJjaC5wcm9wKCd0ZXJtJykpLnRvRXF1YWwodGVybSk7XHJcbiAgICAgICAgZXhwZWN0KHNlYXJjaC5wcm9wKCdvblNlYXJjaENoYW5nZScpKS50b0VxdWFsKG9uU2VhcmNoQ2hhbmdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBJdGVtU3RhdHVzRmlsdGVyJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSAndG9kbyc7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0U3RhdGUoeyBmaWx0ZXIgfSk7XHJcbiAgICAgICAgY29uc3QgeyBvbkZpbHRlckNoYW5nZSB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBmaWx0ZXJDaGFuZ2UgPSB3cmFwcGVyLmZpbmQoJ1ttb2NrLWlkPVwiaXRlbS1zdGF0dXMtZmlsdGVyXCJdJyk7XHJcbiAgICAgICAgZXhwZWN0KGZpbHRlckNoYW5nZS5wcm9wKCdmaWx0ZXInKSkudG9FcXVhbChmaWx0ZXIpO1xyXG4gICAgICAgIGV4cGVjdChmaWx0ZXJDaGFuZ2UucHJvcCgnb25GaWx0ZXJDaGFuZ2UnKSkudG9FcXVhbChvbkZpbHRlckNoYW5nZSk7XHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=