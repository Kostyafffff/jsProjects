"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var v4_1 = __importDefault(require("uuid/v4"));
var redux_1 = require("redux");
var reducers_1 = require("../reducer/reducers");
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
exports.store = redux_1.createStore(reducers_1.reducer, redux_devtools_extension_1.composeWithDevTools());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXhcXHN0b3JlXFxzdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUF5QztBQUN6QywrQ0FBMkI7QUFDM0IsK0JBQW9DO0FBQ3BDLGlEQUErQztBQUMvQyxxRUFBK0Q7QUFFbEQsUUFBQSxZQUFZLEdBQVc7SUFDaEMsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsRUFBRTtJQUNmLFFBQVEsRUFBRSxjQUFNLENBQUMsR0FBRztJQUNwQixRQUFRLEVBQUU7UUFDTjtZQUNJLEtBQUssRUFBRSwrQkFBK0I7WUFDdEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2I7UUFDRDtZQUNJLEtBQUssRUFBRSxpQ0FBaUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2I7UUFDRDtZQUNJLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2I7S0FDSjtDQUNKLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRyxtQkFBVyxDQUFDLGtCQUFPLEVBQUUsOENBQW1CLEVBQUUsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXHJlZHV4XFxzdG9yZVxcc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSLCBJU3RvcmUgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdG9yZTogSVN0b3JlID0ge1xyXG4gICAgYWRkRmllbGQ6ICcnLFxyXG4gICAgc2VhcmNoRmllbGQ6ICcnLFxyXG4gICAgZmlsdGVyQnk6IEZJTFRFUi5BTEwsXHJcbiAgICB0b2RvTGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgcHJvamVjdCB3aXRoIFR5cGVTY3JpcHQnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdBZGQgUmVkdXggdG8gcHJvamVjdCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scygpKTtcclxuIl0sInZlcnNpb24iOjN9