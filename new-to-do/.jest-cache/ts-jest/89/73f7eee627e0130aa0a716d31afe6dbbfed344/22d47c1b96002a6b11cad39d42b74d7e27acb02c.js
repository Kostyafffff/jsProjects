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
Object.defineProperty(exports, "__esModule", { value: true });
// jest.mock(
//     'components/app-header/app-header',
//     () => (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
// );
jest.mock('components/app-header/component', function () { return ({
    AppHeader: function (props) { return (React.createElement("div", __assign({ "mock-id": "app-header" }, props))); },
}); });
jest.mock('components/search-panel/component', function () { return ({
    SearchPanel: function (props) { return (React.createElement("div", __assign({ "mock-id": "search-panel" }, props))); },
}); });
jest.mock('components/item-status-filter/component', function () { return ({
    ItemStatusFilter: function (props) { return (React.createElement("div", __assign({ "mock-id": "item-status-filter" }, props))); },
}); });
jest.mock('components/item-add-form/component', function () { return ({
    ItemAddForm: function (props) { return (React.createElement("div", __assign({ "mock-id": "item-add-form" }, props))); },
}); });
jest.mock('components/todo-list/component', function () { return ({
    ToDoList: function (props) { return (React.createElement("div", __assign({ "mock-id": "todo-list" }, props))); },
}); });
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var index_1 = require("components/app/index");
describe('src/components/App/index', function () {
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.mount(React.createElement(index_1.App, null));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLGFBQWE7QUFDYiwwQ0FBMEM7QUFDMUMsdUZBQXVGO0FBQ3ZGLEtBQUs7QUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2hELFNBQVMsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLFlBQVksSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUF6QyxDQUF5QztDQUN2RixDQUFDLEVBRmlELENBRWpELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDbEQsV0FBVyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsY0FBYyxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQTNDLENBQTJDO0NBQzNGLENBQUMsRUFGbUQsQ0FFbkQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUN4RCxnQkFBZ0IsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLG9CQUFvQixJQUFLLEtBQUssRUFBSSxDQUFDLEVBQWpELENBQWlEO0NBQ3RHLENBQUMsRUFGeUQsQ0FFekQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNuRCxXQUFXLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxlQUFlLElBQUssS0FBSyxFQUFJLENBQUMsRUFBNUMsQ0FBNEM7Q0FDNUYsQ0FBQyxFQUZvRCxDQUVwRCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQy9DLFFBQVEsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLFdBQVcsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUF4QyxDQUF3QztDQUNyRixDQUFDLEVBRmdELENBRWhELENBQUMsQ0FBQztBQTFCSixpQ0FBK0I7QUFDL0IsMkNBQStCO0FBQy9CLDhDQUEyQztBQTBCM0MsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtRQUNuQyxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsV0FBRyxPQUFHLENBQUMsQ0FBQztRQUUvQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLXRlc3RcXGluZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL2FwcC9pbmRleCc7XHJcblxyXG4vLyBqZXN0Lm1vY2soXHJcbi8vICAgICAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLFxyXG4vLyAgICAgKCkgPT4gKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyApO1xyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9jb21wb25lbnQnLCAoKSA9PiAoe1xyXG4gICAgQXBwSGVhZGVyOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJhcHAtaGVhZGVyXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvY29tcG9uZW50JywgKCkgPT4gKHtcclxuICAgIFNlYXJjaFBhbmVsOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJzZWFyY2gtcGFuZWxcIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuamVzdC5tb2NrKCdjb21wb25lbnRzL2l0ZW0tc3RhdHVzLWZpbHRlci9jb21wb25lbnQnLCAoKSA9PiAoe1xyXG4gICAgSXRlbVN0YXR1c0ZpbHRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiaXRlbS1zdGF0dXMtZmlsdGVyXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2NvbXBvbmVudCcsICgpID0+ICh7XHJcbiAgICBJdGVtQWRkRm9ybTogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiaXRlbS1hZGQtZm9ybVwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvdG9kby1saXN0L2NvbXBvbmVudCcsICgpID0+ICh7XHJcbiAgICBUb0RvTGlzdDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwidG9kby1saXN0XCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHAvaW5kZXgnLCAoKSA9PiB7XHJcbiAgICBpdCgnQXBwIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHAgLz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==