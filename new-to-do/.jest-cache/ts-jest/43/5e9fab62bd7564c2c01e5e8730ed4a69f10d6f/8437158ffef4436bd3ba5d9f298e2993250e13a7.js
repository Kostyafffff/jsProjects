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
    it('onToggleImportant check', function () {
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
        instance.onToggleImportant(99);
        //Then
        expect(instance.state.toDoData[0]).toEqual(expected);
    });
    //same as onToggleImportant
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
        //When
        var onAddItem = wrapper.instance().onAddItem;
        //Then
        var addItem = wrapper.find('[mock-id="item-add-form"]');
        expect(addItem.prop('onAddItem')).toEqual(onAddItem);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsYUFBYTtBQUNiLDBDQUEwQztBQUMxQyx1RkFBdUY7QUFDdkYsS0FBSztBQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDakQsU0FBUyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsWUFBWSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQXpDLENBQXlDO0NBQ3ZGLENBQUMsRUFGa0QsQ0FFbEQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNyRCxXQUFXLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxjQUFjLElBQUssS0FBSyxFQUFJLENBQUMsRUFBM0MsQ0FBMkM7Q0FDM0YsQ0FBQyxFQUZzRCxDQUV0RCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2pFLGdCQUFnQixFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsb0JBQW9CLElBQUssS0FBSyxFQUFJLENBQUMsRUFBakQsQ0FBaUQ7Q0FDdEcsQ0FBQyxFQUZrRSxDQUVsRSxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLGVBQWUsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUE1QyxDQUE0QztDQUM1RixDQUFDLEVBRndELENBRXhELENBQUMsQ0FBQztBQXZCSixpQ0FBK0I7QUFDL0Is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LFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJ2NvbXBvbmVudHMvYXBwL0FwcCc7XHJcblxyXG4vLyBqZXN0Lm1vY2soXHJcbi8vICAgICAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLFxyXG4vLyAgICAgKCkgPT4gKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyApO1xyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJywgKCkgPT4gKHtcclxuICAgIEFwcEhlYWRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbCcsICgpID0+ICh7XHJcbiAgICBTZWFyY2hQYW5lbDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwic2VhcmNoLXBhbmVsXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnY29tcG9uZW50cy9pdGVtLXN0YXR1cy1maWx0ZXIvaXRlbS1zdGF0dXMtZmlsdGVyJywgKCkgPT4gKHtcclxuICAgIEl0ZW1TdGF0dXNGaWx0ZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9pdGVtLWFkZC1mb3JtJywgKCkgPT4gKHtcclxuICAgIEl0ZW1BZGRGb3JtOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJpdGVtLWFkZC1mb3JtXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIHRvRG9EYXRhOiBbXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgICdhc2QnLFxyXG4gICAgICAnYWN0aXZlJ1xyXG4gIF1cclxufTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHAvQXBwJywgKCkgPT4ge1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnQXBwIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHAgey4uLnN0YXRlfS8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY3JlYXRlVG9Eb0l0ZW1cclxuICAgIGl0KCdjcmVhdGVUb2RvSXRlbSBjaGVjaycsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBsYWJlbCA9ICdhc2Rhc2Rhcyc7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IGluc3RhbmNlLm1heElkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLmNyZWF0ZVRvZG9JdGVtKGxhYmVsKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLm1heElkKS50b0VxdWFsKDEwNCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL29uQWRkSXRlbVxyXG4gICAgaXQoJ29uQWRkSXRlbSBjaGVjaycsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gJ3dha2UgdXAgaW4gaGVsbCc7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiB0ZXh0LFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IDEwMyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vbkFkZEl0ZW0odGV4dCk7XHJcblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50b0RvRGF0YVswXSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnb25Ub2dnbGVJbXBvcnRhbnQgY2hlY2snLCgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgdG9Eb0RhdGEgPSBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ2hlbGxvJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiA5OSxcclxuICAgICAgICB9XTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdoZWxsbycsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiA5OSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdyYXBwZXIuc2V0U3RhdGUoeyB0b0RvRGF0YSB9KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25Ub2dnbGVJbXBvcnRhbnQoOTkpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGFbMF0pLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zYW1lIGFzIG9uVG9nZ2xlSW1wb3J0YW50XHJcbiAgICBpdCgnb25Ub2dnbGVEb25lIGNoZWNrJywoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ2hlbGxvJyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAxMDMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25BZGRJdGVtKGV4cGVjdGVkLmxhYmVsKTtcclxuICAgICAgICBpbnN0YW5jZS5vblRvZ2dsZURvbmUoMTAzKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhWzBdLmRvbmUpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgaGF2ZSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgdG9Eb0RhdGE6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZSB0ZXN0cyB3aXRoIEplc3QgYW5kIEVuenltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0ZXJtOiAnJyxcclxuICAgICAgICAgICAgZmlsdGVyOiAnYWN0aXZlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoKSkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnZGVsZXRlSXRlbSBjaGVjaycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oMTAwKTtcclxuICAgICAgICBpbnN0YW5jZS5kZWxldGVJdGVtKDEwMSk7XHJcbiAgICAgICAgaW5zdGFuY2UuZGVsZXRlSXRlbSgxMDIpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGEubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvblNlYXJjaENoYW5nZSBjaGVjaycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSAnd2hpbGUnO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vblNlYXJjaENoYW5nZShleHBlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50ZXJtKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdvbkZpbHRlciBjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gJ3doaWxlJztcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25GaWx0ZXJDaGFuZ2UoZXhwZWN0ZWQpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUuZmlsdGVyKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdmaWx0ZXIgYWN0aXZlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGUgdGVzdHMgd2l0aCBKZXN0IGFuZCBFbnp5bWUnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IDEwMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleHBlY3RlZCxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5maWx0ZXIoaXRlbXMsICdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChbZXhwZWN0ZWRdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdmaWx0ZXIgZW1wdHknLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLmZpbHRlcihbXSwgJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKFtdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdmaWx0ZXIgZG9uZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuZmlsdGVyKGl0ZW1zLCAnZG9uZScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoWy4uLmFjdHVhbF0pLnRvRXF1YWwoWy4uLml0ZW1zXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2VhcmNoIGNoZWNrJywgKCkgPT57XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgVG9EbyBsaXN0IHdpdGggdHlwZXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGUgdGVzdHMgd2l0aCBKZXN0IGFuZCBFbnp5bWUnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2Uuc2VhcmNoKGl0ZW1zLCAndG9kbycpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsLmxlbmd0aCkudG9FcXVhbCgyKTtcclxuICAgICAgICBleHBlY3QoWy4uLmFjdHVhbF0pLnRvRXF1YWwoWy4uLmV4cGVjdGVkXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gQXBwSGVhZGVyJywgKCkgPT4ge1xyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBoZWFkZXIgPSB3cmFwcGVyLmZpbmQoJ1ttb2NrLWlkPVwiYXBwLWhlYWRlclwiXScpO1xyXG5cclxuICAgICAgICBleHBlY3QoaGVhZGVyLnByb3AoJ3RvRG8nKSkudG9FcXVhbCgzKTtcclxuICAgICAgICBleHBlY3QoaGVhZGVyLnByb3AoJ2RvbmUnKSkudG9FcXVhbCgwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBTZWFyY2hQYW5lbCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgdGVybSA9ICd0ZXJtJztcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcbiAgICAgICAgd3JhcHBlci5zZXRTdGF0ZSh7IHRlcm0gfSk7XHJcbiAgICAgICAgY29uc3QgeyBvblNlYXJjaENoYW5nZSB9ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBjb25zdCBzZWFyY2ggPSB3cmFwcGVyLmZpbmQoJ1ttb2NrLWlkPVwic2VhcmNoLXBhbmVsXCJdJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChzZWFyY2gucHJvcCgndGVybScpKS50b0VxdWFsKHRlcm0pO1xyXG4gICAgICAgIGV4cGVjdChzZWFyY2gucHJvcCgnb25TZWFyY2hDaGFuZ2UnKSkudG9FcXVhbChvblNlYXJjaENoYW5nZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIHBhc3MgcHJvcHMgdG8gSXRlbVN0YXR1c0ZpbHRlcicsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gJ3RvZG8nO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgZmlsdGVyIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgb25GaWx0ZXJDaGFuZ2UgfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ2hhbmdlID0gd3JhcHBlci5maW5kKCdbbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiXScpO1xyXG4gICAgICAgIGV4cGVjdChmaWx0ZXJDaGFuZ2UucHJvcCgnZmlsdGVyJykpLnRvRXF1YWwoZmlsdGVyKTtcclxuICAgICAgICBleHBlY3QoZmlsdGVyQ2hhbmdlLnByb3AoJ29uRmlsdGVyQ2hhbmdlJykpLnRvRXF1YWwob25GaWx0ZXJDaGFuZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBwYXNzIHByb3BzIHRvIEl0ZW1BZGRGb3JtJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQ8QXBwPig8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgeyBvbkFkZEl0ZW0gfSA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgY29uc3QgYWRkSXRlbSA9IHdyYXBwZXIuZmluZCgnW21vY2staWQ9XCJpdGVtLWFkZC1mb3JtXCJdJyk7XHJcbiAgICAgICAgZXhwZWN0KGFkZEl0ZW0ucHJvcCgnb25BZGRJdGVtJykpLnRvRXF1YWwob25BZGRJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgcGFzcyBwcm9wcyB0byBUb0RvTGlzdCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHsgb25BZGRJdGVtIH0gPSB3cmFwcGVyLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGNvbnN0IGFkZEl0ZW0gPSB3cmFwcGVyLmZpbmQoJ1ttb2NrLWlkPVwiaXRlbS1hZGQtZm9ybVwiXScpO1xyXG4gICAgICAgIGV4cGVjdChhZGRJdGVtLnByb3AoJ29uQWRkSXRlbScpKS50b0VxdWFsKG9uQWRkSXRlbSk7XHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=