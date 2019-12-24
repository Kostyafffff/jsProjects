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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEVBQUU7QUFDRixhQUFhO0FBQ2IsMENBQTBDO0FBQzFDLHVGQUF1RjtBQUN2RixLQUFLO0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNuRCxTQUFTLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxZQUFZLElBQUssS0FBSyxFQUFJLENBQUMsRUFBekMsQ0FBeUM7Q0FDdkYsQ0FBQyxFQUZvRCxDQUVwRCxDQUFDLENBQUM7QUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ3JELFdBQVcsRUFBRSxVQUFDLEtBQWEsSUFBa0IsT0FBQSxDQUFDLGlEQUFhLGNBQWMsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUEzQyxDQUEyQztDQUMzRixDQUFDLEVBRnNELENBRXRELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDM0QsZ0JBQWdCLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxvQkFBb0IsSUFBSyxLQUFLLEVBQUksQ0FBQyxFQUFqRCxDQUFpRDtDQUN0RyxDQUFDLEVBRjRELENBRTVELENBQUMsQ0FBQztBQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDdEQsV0FBVyxFQUFFLFVBQUMsS0FBYSxJQUFrQixPQUFBLENBQUMsaURBQWEsZUFBZSxJQUFLLEtBQUssRUFBSSxDQUFDLEVBQTVDLENBQTRDO0NBQzVGLENBQUMsRUFGdUQsQ0FFdkQsQ0FBQyxDQUFDO0FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUNsRCxRQUFRLEVBQUUsVUFBQyxLQUFhLElBQWtCLE9BQUEsQ0FBQyxpREFBYSxXQUFXLElBQUssS0FBSyxFQUFJLENBQUMsRUFBeEMsQ0FBd0M7Q0FDckYsQ0FBQyxFQUZtRCxDQUVuRCxDQUFDLENBQUM7QUExQkosaUNBQStCO0FBQy9CLDJDQUErQjtBQUMvQixtREFBa0Q7QUEwQmxELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUMzQixFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDbkMsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLFNBQUcsT0FBRyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcFwiO1xyXG4vL1xyXG4vLyBqZXN0Lm1vY2soXHJcbi8vICAgICAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLFxyXG4vLyAgICAgKCkgPT4gKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiYXBwLWhlYWRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyApO1xyXG5qZXN0Lm1vY2soJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXInLCAoKSA9PiAoe1xyXG4gICAgQXBwSGVhZGVyOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJhcHAtaGVhZGVyXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsJywgKCkgPT4gKHtcclxuICAgIFNlYXJjaFBhbmVsOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJzZWFyY2gtcGFuZWxcIiB7Li4ucHJvcHN9IC8+KSxcclxufSkpO1xyXG5cclxuamVzdC5tb2NrKCcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9pdGVtLXN0YXR1cy1maWx0ZXInLCAoKSA9PiAoe1xyXG4gICAgSXRlbVN0YXR1c0ZpbHRlcjogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiaXRlbS1zdGF0dXMtZmlsdGVyXCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybScsICgpID0+ICh7XHJcbiAgICBJdGVtQWRkRm9ybTogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiaXRlbS1hZGQtZm9ybVwiIHsuLi5wcm9wc30gLz4pLFxyXG59KSk7XHJcblxyXG5qZXN0Lm1vY2soJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdCcsICgpID0+ICh7XHJcbiAgICBUb0RvTGlzdDogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwidG9kby1saXN0XCIgey4uLnByb3BzfSAvPiksXHJcbn0pKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHAnLCAoKSA9PiB7XHJcbiAgICBpdCgnQXBwIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHAgLz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==