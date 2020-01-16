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
jest.mock('../../../src/components/app-header', function () { return ({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEVBQUU7QUFDRixhQUFhO0FBQ2IsMENBQTBDO0FBQzFDLHVGQUF1RjtBQUN2RixLQUFLO0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNuRCxTQUFTLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxZQUFZLElBQUssS0FBSyxFQUFJLENBQUMsRUFBekMsQ0FBeUM7Q0FDdkYsQ0FBQyxFQUZvRCxDQUVwRCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ3JELFdBQVcsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLGNBQWMsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUEzQyxDQUEyQztDQUMzRixDQUFDLEVBRnNELENBRXRELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDM0QsZ0JBQWdCLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxvQkFBb0IsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUFqRCxDQUFpRDtDQUN0RyxDQUFDLEVBRjRELENBRTVELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDdEQsV0FBVyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsZUFBZSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQTVDLENBQTRDO0NBQzVGLENBQUMsRUFGdUQsQ0FFdkQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNsRCxRQUFRLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxXQUFXLElBQUssS0FBSyxFQUFJLENBQUMsRUFBeEMsQ0FBd0M7Q0FDckYsQ0FBQyxFQUZtRCxDQUVuRCxDQUFDLENBQUM7QUExQkosaUNBQStCO0FBQy9CLDJDQUErQjtBQUMvQixtREFBZ0Q7QUEwQmhELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUMzQixFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDbkMsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLFNBQUcsT0FBRyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHBcIjtcclxuLy9cclxuLy8gamVzdC5tb2NrKFxyXG4vLyAgICAgJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJyxcclxuLy8gICAgICgpID0+IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cImFwcC1oZWFkZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxuLy8gKTtcclxuamVzdC5tb2NrKCcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJywgKCkgPT4gKHtcclxuICAgIEFwcEhlYWRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbCcsICgpID0+ICh7XHJcbiAgICBTZWFyY2hQYW5lbDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwic2VhcmNoLXBhbmVsXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJywgKCkgPT4gKHtcclxuICAgIEl0ZW1TdGF0dXNGaWx0ZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0tYWRkLWZvcm0nLCAoKSA9PiAoe1xyXG4gICAgSXRlbUFkZEZvcm06IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tYWRkLWZvcm1cIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuamVzdC5tb2NrKCcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QnLCAoKSA9PiAoe1xyXG4gICAgVG9Eb0xpc3Q6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cInRvZG8tbGlzdFwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwJywgKCkgPT4ge1xyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=