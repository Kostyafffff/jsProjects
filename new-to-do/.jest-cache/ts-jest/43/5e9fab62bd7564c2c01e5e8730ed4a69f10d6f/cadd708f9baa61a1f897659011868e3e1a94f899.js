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
jest.mock('components/item-add-form/item-add-form', function () { return ({
    ItemAddForm: function (props) { return (React.createElement("div", __assign({ "mock-id": "item-add-form" }, props))); },
}); });
jest.mock('components/todo-list/todo-list', function () { return ({
    ToDoList: function (props) { return (React.createElement("div", __assign({ "mock-id": "todo-list" }, props))); },
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
    it('should pass props to ItemAddForm', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        //When
        var onAddItem = wrapper.instance().onAddItem;
        //Then
        var addItem = wrapper.find('[mock-id="item-add-form"]');
        expect(addItem.prop('onAddItem')).toEqual(onAddItem);
    });
    it('should pass props to ToDoList', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        var visibleItems = 'asdasdasd';
        //When
        var deleteItem = wrapper.instance().deleteItem;
        var onToggleImportant = wrapper.instance().toggleImportant;
        var onToggleDone = wrapper.instance().onToggleDone;
        //Then
        var addItem = wrapper.find('[mock-id="todo-list"]');
        expect(addItem.prop('onDeleted')).toEqual(deleteItem);
        expect(addItem.prop('todos')).toEqual(visibleItems);
        expect(addItem.prop('toggleImportant')).toEqual(onToggleImportant);
        expect(addItem.prop('onToggleDone')).toEqual(onToggleDone);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsYUFBYTtBQUNiLDBDQUEwQztBQUMxQyx1RkFBdUY7QUFDdkYsS0FBSztBQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDakQsU0FBUyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsWUFBWSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQXpDLENBQXlDO0NBQ3ZGLENBQUMsRUFGa0QsQ0FFbEQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNyRCxXQUFXLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxjQUFjLElBQUssS0FBSyxFQUFJLENBQUMsRUFBM0MsQ0FBMkM7Q0FDM0YsQ0FBQyxFQUZzRCxDQUV0RCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2pFLGdCQUFnQixFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsb0JBQW9CLElBQUssS0FBSyxFQUFJLENBQUMsRUFBakQsQ0FBaUQ7Q0FDdEcsQ0FBQyxFQUZrRSxDQUVsRSxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLGVBQWUsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUE1QyxDQUE0QztDQUM1RixDQUFDLEVBRndELENBRXhELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJ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QUssQ0FBTSxvQkFBQyxTQUFHLE9BQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUVqQyxNQUFNO1FBQ0UsSUFBQSwwQ0FBVSxDQUF3QjtRQUNsQyxJQUFBLHdEQUFpQixDQUF3QjtRQUN6QyxJQUFBLDhDQUFZLENBQXdCO1FBRTVDLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJ2NvbXBvbmVudHMvYXBwL0FwcCc7XHJcblxyXG4vLyBqZXN0Lm1vY2soXHJcbi8vICAgICAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLFxyXG4vLyAgICAgKCkgPT4gKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyApO1xyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJywgKCkgPT4gKHtcclxuICAgIEFwcEhlYWRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbCcsICgpID0+ICh7XHJcbiAgICBTZWFyY2hQYW5lbDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwic2VhcmNoLXBhbmVsXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnY29tcG9uZW50cy9pdGVtLXN0YXR1cy1maWx0ZXIvaXRlbS1zdGF0dXMtZmlsdGVyJywgKCkgPT4gKHtcclxuICAgIEl0ZW1TdGF0dXNGaWx0ZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtJywgKCkgPT4gKHtcclxuICAgIEl0ZW1BZGRGb3JtOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJpdGVtLWFkZC1mb3JtXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0JywgKCkgPT4gKHtcclxuICAgIFRvRG9MaXN0OiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJ0b2RvLWxpc3RcIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5jb25zdCBzdGF0ZSA9IHtcclxuICB0b0RvRGF0YTogW1xyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICAnYXNkJyxcclxuICAgICAgJ2FjdGl2ZSdcclxuICBdXHJcbn07XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwL0FwcCcsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwIHsuLi5zdGF0ZX0vPik7XHJcblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NyZWF0ZVRvRG9JdGVtXHJcbiAgICBpdCgnY3JlYXRlVG9kb0l0ZW0gY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSAnYXNkYXNkYXMnO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiBpbnN0YW5jZS5tYXhJZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5jcmVhdGVUb2RvSXRlbShsYWJlbCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5tYXhJZCkudG9FcXVhbCgxMDQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9vbkFkZEl0ZW1cclxuICAgIGl0KCdvbkFkZEl0ZW0gY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9ICd3YWtlIHVwIGluIGhlbGwnO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogdGV4dCxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAxMDMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25BZGRJdGVtKHRleHQpO1xyXG5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGFbMF0pLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uVG9nZ2xlSW1wb3J0YW50IGNoZWNrJywoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IHRvRG9EYXRhID0gW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdoZWxsbycsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogOTksXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaGVsbG8nLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogOTksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgdG9Eb0RhdGEgfSk7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uVG9nZ2xlSW1wb3J0YW50KDk5KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhWzBdKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2FtZSBhcyBvblRvZ2dsZUltcG9ydGFudFxyXG4gICAgaXQoJ29uVG9nZ2xlRG9uZSBjaGVjaycsKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdoZWxsbycsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogMTAzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uQWRkSXRlbShleHBlY3RlZC5sYWJlbCk7XHJcbiAgICAgICAgaW5zdGFuY2Uub25Ub2dnbGVEb25lKDEwMyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50b0RvRGF0YVswXS5kb25lKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGhhdmUgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRvRG9EYXRhOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGUgdGVzdHMgd2l0aCBKZXN0IGFuZCBFbnp5bWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEwMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGVybTogJycsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCkpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2RlbGV0ZUl0ZW0gY2hlY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5kZWxldGVJdGVtKDEwMCk7XHJcbiAgICAgICAgaW5zdGFuY2UuZGVsZXRlSXRlbSgxMDEpO1xyXG4gICAgICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oMTAyKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25TZWFyY2hDaGFuZ2UgY2hlY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gJ3doaWxlJztcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25TZWFyY2hDaGFuZ2UoZXhwZWN0ZWQpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudGVybSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25GaWx0ZXIgY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9ICd3aGlsZSc7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uRmlsdGVyQ2hhbmdlKGV4cGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLmZpbHRlcikudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZmlsdGVyIGFjdGl2ZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlIHRlc3RzIHdpdGggSmVzdCBhbmQgRW56eW1lJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAxMDJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwZWN0ZWQsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuZmlsdGVyKGl0ZW1zLCAnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoW2V4cGVjdGVkXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZmlsdGVyIGVtcHR5JywgKCkgPT57XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5maWx0ZXIoW10sICdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChbXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZmlsdGVyIGRvbmUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLmZpbHRlcihpdGVtcywgJ2RvbmUnKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KFsuLi5hY3R1YWxdKS50b0VxdWFsKFsuLi5pdGVtc10pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3NlYXJjaCBjaGVjaycsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlIHRlc3RzIHdpdGggSmVzdCBhbmQgRW56eW1lJyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLnNlYXJjaChpdGVtcywgJ3RvZG8nKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbC5sZW5ndGgpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgZXhwZWN0KFsuLi5hY3R1YWxdKS50b0VxdWFsKFsuLi5leHBlY3RlZF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIEFwcEhlYWRlcicsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gd3JhcHBlci5maW5kKCdbbW9jay1pZD1cImFwcC1oZWFkZXJcIl0nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGhlYWRlci5wcm9wKCd0b0RvJykpLnRvRXF1YWwoMyk7XHJcbiAgICAgICAgZXhwZWN0KGhlYWRlci5wcm9wKCdkb25lJykpLnRvRXF1YWwoMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gU2VhcmNoUGFuZWwnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHRlcm0gPSAndGVybSc7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0U3RhdGUoeyB0ZXJtIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgb25TZWFyY2hDaGFuZ2UgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gd3JhcHBlci5maW5kKCdbbW9jay1pZD1cInNlYXJjaC1wYW5lbFwiXScpO1xyXG5cclxuICAgICAgICBleHBlY3Qoc2VhcmNoLnByb3AoJ3Rlcm0nKSkudG9FcXVhbCh0ZXJtKTtcclxuICAgICAgICBleHBlY3Qoc2VhcmNoLnByb3AoJ29uU2VhcmNoQ2hhbmdlJykpLnRvRXF1YWwob25TZWFyY2hDaGFuZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIEl0ZW1TdGF0dXNGaWx0ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9ICd0b2RvJztcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSh7IGZpbHRlciB9KTtcclxuICAgICAgICBjb25zdCB7IG9uRmlsdGVyQ2hhbmdlIH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckNoYW5nZSA9IHdyYXBwZXIuZmluZCgnW21vY2staWQ9XCJpdGVtLXN0YXR1cy1maWx0ZXJcIl0nKTtcclxuICAgICAgICBleHBlY3QoZmlsdGVyQ2hhbmdlLnByb3AoJ2ZpbHRlcicpKS50b0VxdWFsKGZpbHRlcik7XHJcbiAgICAgICAgZXhwZWN0KGZpbHRlckNoYW5nZS5wcm9wKCdvbkZpbHRlckNoYW5nZScpKS50b0VxdWFsKG9uRmlsdGVyQ2hhbmdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBJdGVtQWRkRm9ybScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHsgb25BZGRJdGVtIH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGFkZEl0ZW0gPSB3cmFwcGVyLmZpbmQoJ1ttb2NrLWlkPVwiaXRlbS1hZGQtZm9ybVwiXScpO1xyXG4gICAgICAgIGV4cGVjdChhZGRJdGVtLnByb3AoJ29uQWRkSXRlbScpKS50b0VxdWFsKG9uQWRkSXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gVG9Eb0xpc3QnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVJdGVtcyA9ICdhc2Rhc2Rhc2QnO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB7IGRlbGV0ZUl0ZW0gfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCB7IG9uVG9nZ2xlSW1wb3J0YW50IH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgeyBvblRvZ2dsZURvbmUgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgYWRkSXRlbSA9IHdyYXBwZXIuZmluZCgnW21vY2staWQ9XCJ0b2RvLWxpc3RcIl0nKTtcclxuICAgICAgICBleHBlY3QoYWRkSXRlbS5wcm9wKCdvbkRlbGV0ZWQnKSkudG9FcXVhbChkZWxldGVJdGVtKTtcclxuICAgICAgICBleHBlY3QoYWRkSXRlbS5wcm9wKCd0b2RvcycpKS50b0VxdWFsKHZpc2libGVJdGVtcyk7XHJcbiAgICAgICAgZXhwZWN0KGFkZEl0ZW0ucHJvcCgnb25Ub2dnbGVJbXBvcnRhbnQnKSkudG9FcXVhbChvblRvZ2dsZUltcG9ydGFudCk7XHJcbiAgICAgICAgZXhwZWN0KGFkZEl0ZW0ucHJvcCgnb25Ub2dnbGVEb25lJykpLnRvRXF1YWwob25Ub2dnbGVEb25lKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==