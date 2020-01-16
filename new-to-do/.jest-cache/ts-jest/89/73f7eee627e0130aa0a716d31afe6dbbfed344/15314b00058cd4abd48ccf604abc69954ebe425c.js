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
var app_1 = require("../../../src/components/app");
describe('src/components/App', function () {
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.mount(React.createElement(app_1.App, null));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEVBQUU7QUFDRixhQUFhO0FBQ2IsMENBQTBDO0FBQzFDLHVGQUF1RjtBQUN2RixLQUFLO0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNoRCxTQUFTLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxZQUFZLElBQUssS0FBSyxFQUFJLENBQUMsRUFBekMsQ0FBeUM7Q0FDdkYsQ0FBQyxFQUZpRCxDQUVqRCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2xELFdBQVcsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLGNBQWMsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUEzQyxDQUEyQztDQUMzRixDQUFDLEVBRm1ELENBRW5ELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQXlDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDeEQsZ0JBQWdCLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxvQkFBb0IsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUFqRCxDQUFpRDtDQUN0RyxDQUFDLEVBRnlELENBRXpELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsb0NBQW9DLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDbkQsV0FBVyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsZUFBZSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQTVDLENBQTRDO0NBQzVGLENBQUMsRUFGb0QsQ0FFcEQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUMvQyxRQUFRLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxXQUFXLElBQUssS0FBSyxFQUFJLENBQUMsRUFBeEMsQ0FBd0M7Q0FDckYsQ0FBQyxFQUZnRCxDQUVoRCxDQUFDLENBQUM7QUExQkosaUNBQStCO0FBQy9CLDJDQUErQjtBQUMvQixtREFBZ0Q7QUEwQmhELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUMzQixFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDbkMsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLFNBQUcsT0FBRyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHBcIjtcclxuLy9cclxuLy8gamVzdC5tb2NrKFxyXG4vLyAgICAgJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJyxcclxuLy8gICAgICgpID0+IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cImFwcC1oZWFkZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxuLy8gKTtcclxuamVzdC5tb2NrKCdjb21wb25lbnRzL2FwcC1oZWFkZXIvY29tcG9uZW50JywgKCkgPT4gKHtcclxuICAgIEFwcEhlYWRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsL2NvbXBvbmVudCcsICgpID0+ICh7XHJcbiAgICBTZWFyY2hQYW5lbDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwic2VhcmNoLXBhbmVsXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnY29tcG9uZW50cy9pdGVtLXN0YXR1cy1maWx0ZXIvY29tcG9uZW50JywgKCkgPT4gKHtcclxuICAgIEl0ZW1TdGF0dXNGaWx0ZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJ2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybS9jb21wb25lbnQnLCAoKSA9PiAoe1xyXG4gICAgSXRlbUFkZEZvcm06IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tYWRkLWZvcm1cIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuamVzdC5tb2NrKCdjb21wb25lbnRzL3RvZG8tbGlzdC9jb21wb25lbnQnLCAoKSA9PiAoe1xyXG4gICAgVG9Eb0xpc3Q6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cInRvZG8tbGlzdFwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwJywgKCkgPT4ge1xyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=