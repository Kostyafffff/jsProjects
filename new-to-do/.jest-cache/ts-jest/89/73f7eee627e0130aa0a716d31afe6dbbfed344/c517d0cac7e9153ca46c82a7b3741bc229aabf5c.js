"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var v4_1 = __importDefault(require("uuid/v4"));
var redux_1 = require("redux");
var reducer_1 = require("../reducers/reducer");
var redux_devtools_extension_1 = require("redux-devtools-extension");
exports.initialStore = {
    addField: '',
    searchField: '',
    filterBy: types_1.FILTER.ALL,
    todoList: [
        {
            label: 'Setup React project ToDo List',
            important: false,
            done: false,
            id: v4_1.default(),
        },
        {
            label: 'Rewrite project with TypeScript',
            important: false,
            done: false,
            id: v4_1.default(),
        },
        {
            label: 'Add Redux to project',
            important: false,
            done: false,
            id: v4_1.default(),
        },
    ],
};
exports.store = redux_1.createStore(reducer_1.reducer, redux_devtools_extension_1.composeWithDevTools());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXhcXHN0b3JlXFxzdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUF5QztBQUN6QywrQ0FBMkI7QUFDM0IsK0JBQW9DO0FBQ3BDLCtDQUE4QztBQUM5QyxxRUFBK0Q7QUFFbEQsUUFBQSxZQUFZLEdBQVc7SUFDaEMsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsRUFBRTtJQUNmLFFBQVEsRUFBRSxjQUFNLENBQUMsR0FBRztJQUNwQixRQUFRLEVBQUU7UUFDTjtZQUNJLEtBQUssRUFBRSwrQkFBK0I7WUFDdEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2I7UUFDRDtZQUNJLEtBQUssRUFBRSxpQ0FBaUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2I7UUFDRDtZQUNJLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2I7S0FDSjtDQUNKLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRyxtQkFBVyxDQUFDLGlCQUFPLEVBQUUsOENBQW1CLEVBQUUsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXHJlZHV4XFxzdG9yZVxcc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSLCBJU3RvcmUgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9yZWR1Y2VyJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0b3JlOiBJU3RvcmUgPSB7XHJcbiAgICBhZGRGaWVsZDogJycsXHJcbiAgICBzZWFyY2hGaWVsZDogJycsXHJcbiAgICBmaWx0ZXJCeTogRklMVEVSLkFMTCxcclxuICAgIHRvZG9MaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1NldHVwIFJlYWN0IHByb2plY3QgVG9EbyBMaXN0JyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiB1dWlkKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBwcm9qZWN0IHdpdGggVHlwZVNjcmlwdCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0FkZCBSZWR1eCB0byBwcm9qZWN0JyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiB1dWlkKCksXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKCkpO1xyXG4iXSwidmVyc2lvbiI6M30=