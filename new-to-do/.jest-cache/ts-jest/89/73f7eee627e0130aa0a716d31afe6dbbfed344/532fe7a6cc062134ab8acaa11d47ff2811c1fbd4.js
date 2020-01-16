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
//
// jest.mock(
//     'components/app-header/app-header',
//     () => (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
// );
jest.mock('../app-header', function () { return ({
    AppHeader: function (props) { return (React.createElement("div", __assign({ "mock-id": "app-header" }, props))); },
}); });
jest.mock('../../../src/components/search-panel', function () { return ({
    SearchPanel: function (props) { return (React.createElement("div", __assign({ "mock-id": "search-panel" }, props))); },
}); });
jest.mock('../../../src/components/item-status-filter', function () { return ({
    ItemStatusFilter: function (props) { return (React.createElement("div", __assign({ "mock-id": "item-status-filter" }, props))); },
}); });
jest.mock('../../../src/components/item-add-form', function () { return ({
    ItemAddForm: function (props) { return (React.createElement("div", __assign({ "mock-id": "item-add-form" }, props))); },
}); });
jest.mock('../../../src/components/todo-list', function () { return ({
    ToDoList: function (props) { return (React.createElement("div", __assign({ "mock-id": "todo-list" }, props))); },
}); });
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var app_1 = require("../../../src/components/app");
describe('src/components/App', function () {
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.mount(React.createElement(app_1.App, null));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEVBQUU7QUFDRixhQUFhO0FBQ2IsMENBQTBDO0FBQzFDLHVGQUF1RjtBQUN2RixLQUFLO0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDOUIsU0FBUyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsWUFBWSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQXpDLENBQXlDO0NBQ3ZGLENBQUMsRUFGK0IsQ0FFL0IsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNyRCxXQUFXLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxjQUFjLElBQUssS0FBSyxFQUFJLENBQUMsRUFBM0MsQ0FBMkM7Q0FDM0YsQ0FBQyxFQUZzRCxDQUV0RCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQzNELGdCQUFnQixFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsb0JBQW9CLElBQUssS0FBSyxFQUFJLENBQUMsRUFBakQsQ0FBaUQ7Q0FDdEcsQ0FBQyxFQUY0RCxDQUU1RCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ3RELFdBQVcsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLGVBQWUsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUE1QyxDQUE0QztDQUM1RixDQUFDLEVBRnVELENBRXZELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDbEQsUUFBUSxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsV0FBVyxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQXhDLENBQXdDO0NBQ3JGLENBQUMsRUFGbUQsQ0FFbkQsQ0FBQyxDQUFDO0FBMUJKLGlDQUErQjtBQUMvQiwyQ0FBK0I7QUFDL0IsbURBQWtEO0FBMEJsRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ25DLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxTQUFHLE9BQUcsQ0FBQyxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtdGVzdFxcaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHBcIjtcclxuLy9cclxuLy8gamVzdC5tb2NrKFxyXG4vLyAgICAgJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJyxcclxuLy8gICAgICgpID0+IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cImFwcC1oZWFkZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxuLy8gKTtcclxuamVzdC5tb2NrKCcuLi9hcHAtaGVhZGVyJywgKCkgPT4gKHtcclxuICAgIEFwcEhlYWRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbCcsICgpID0+ICh7XHJcbiAgICBTZWFyY2hQYW5lbDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwic2VhcmNoLXBhbmVsXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJywgKCkgPT4gKHtcclxuICAgIEl0ZW1TdGF0dXNGaWx0ZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0nLCAoKSA9PiAoe1xyXG4gICAgSXRlbUFkZEZvcm06IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tYWRkLWZvcm1cIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuamVzdC5tb2NrKCcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QnLCAoKSA9PiAoe1xyXG4gICAgVG9Eb0xpc3Q6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cInRvZG8tbGlzdFwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwJywgKCkgPT4ge1xyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=