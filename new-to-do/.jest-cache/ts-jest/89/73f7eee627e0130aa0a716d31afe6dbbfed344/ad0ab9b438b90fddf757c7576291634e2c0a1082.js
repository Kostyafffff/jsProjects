"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var enzyme_1 = require("enzyme");
var app_1 = require("components/app");
//
// jest.mock(
//     'components/app-header/app-header',
//     () => (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
// );
// jest.mock('components/app-header', () => ({
//     AppHeader: (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
// }));
//
// jest.mock('../../../src/components/search-panel', () => ({
//     SearchPanel: (props: object): JSX.Element => (<div mock-id="search-panel" {...props} />),
// }));
//
// jest.mock('../../../src/components/item-status-filter', () => ({
//     ItemStatusFilter: (props: object): JSX.Element => (<div mock-id="item-status-filter" {...props} />),
// }));
//
// jest.mock('../../../src/components/item-add-form', () => ({
//     ItemAddForm: (props: object): JSX.Element => (<div mock-id="item-add-form" {...props} />),
// }));
//
// jest.mock('../../../src/components/todo-list', () => ({
//     ToDoList: (props: object): JSX.Element => (<div mock-id="todo-list" {...props} />),
// }));
describe('src/components/App', function () {
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.shallow(React.createElement(app_1.App, null));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxpbmRleC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLHNDQUFxQztBQUNyQyxFQUFFO0FBQ0YsYUFBYTtBQUNiLDBDQUEwQztBQUMxQyx1RkFBdUY7QUFDdkYsS0FBSztBQUNMLDhDQUE4QztBQUM5Qyw0RkFBNEY7QUFDNUYsT0FBTztBQUNQLEVBQUU7QUFDRiw2REFBNkQ7QUFDN0QsZ0dBQWdHO0FBQ2hHLE9BQU87QUFDUCxFQUFFO0FBQ0YsbUVBQW1FO0FBQ25FLDJHQUEyRztBQUMzRyxPQUFPO0FBQ1AsRUFBRTtBQUNGLDhEQUE4RDtBQUM5RCxpR0FBaUc7QUFDakcsT0FBTztBQUNQLEVBQUU7QUFDRiwwREFBMEQ7QUFDMUQsMEZBQTBGO0FBQzFGLE9BQU87QUFFUCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ25DLElBQU0sT0FBTyxHQUFHLGdCQUFPLENBQUMsb0JBQUMsU0FBRyxPQUFHLENBQUMsQ0FBQztRQUVqQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLXRlc3RcXGluZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJ2NvbXBvbmVudHMvYXBwJztcclxuLy9cclxuLy8gamVzdC5tb2NrKFxyXG4vLyAgICAgJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJyxcclxuLy8gICAgICgpID0+IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cImFwcC1oZWFkZXJcIiB7Li4ucHJvcHN9IC8+KSxcclxuLy8gKTtcclxuLy8gamVzdC5tb2NrKCdjb21wb25lbnRzL2FwcC1oZWFkZXInLCAoKSA9PiAoe1xyXG4vLyAgICAgQXBwSGVhZGVyOiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJhcHAtaGVhZGVyXCIgey4uLnByb3BzfSAvPiksXHJcbi8vIH0pKTtcclxuLy9cclxuLy8gamVzdC5tb2NrKCcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwnLCAoKSA9PiAoe1xyXG4vLyAgICAgU2VhcmNoUGFuZWw6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cInNlYXJjaC1wYW5lbFwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyB9KSk7XHJcbi8vXHJcbi8vIGplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1zdGF0dXMtZmlsdGVyJywgKCkgPT4gKHtcclxuLy8gICAgIEl0ZW1TdGF0dXNGaWx0ZXI6IChwcm9wczogb2JqZWN0KTogSlNYLkVsZW1lbnQgPT4gKDxkaXYgbW9jay1pZD1cIml0ZW0tc3RhdHVzLWZpbHRlclwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyB9KSk7XHJcbi8vXHJcbi8vIGplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaXRlbS1hZGQtZm9ybScsICgpID0+ICh7XHJcbi8vICAgICBJdGVtQWRkRm9ybTogKHByb3BzOiBvYmplY3QpOiBKU1guRWxlbWVudCA9PiAoPGRpdiBtb2NrLWlkPVwiaXRlbS1hZGQtZm9ybVwiIHsuLi5wcm9wc30gLz4pLFxyXG4vLyB9KSk7XHJcbi8vXHJcbi8vIGplc3QubW9jaygnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9kby1saXN0JywgKCkgPT4gKHtcclxuLy8gICAgIFRvRG9MaXN0OiAocHJvcHM6IG9iamVjdCk6IEpTWC5FbGVtZW50ID0+ICg8ZGl2IG1vY2staWQ9XCJ0b2RvLWxpc3RcIiB7Li4ucHJvcHN9IC8+KSxcclxuLy8gfSkpO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcCcsICgpID0+IHtcclxuICAgIGl0KCdBcHAgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8QXBwIC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG59KTsiXSwidmVyc2lvbiI6M30=