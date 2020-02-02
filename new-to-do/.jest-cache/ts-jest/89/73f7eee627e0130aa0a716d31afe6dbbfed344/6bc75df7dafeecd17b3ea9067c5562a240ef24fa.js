"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var v4_1 = __importDefault(require("uuid/v4"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXgtdXRpbHNcXHN0b3JlXFxzdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUF5QztBQUN6QywrQ0FBMkI7QUFFZCxRQUFBLFlBQVksR0FBVztJQUNoQyxRQUFRLEVBQUUsRUFBRTtJQUNaLFdBQVcsRUFBRSxFQUFFO0lBQ2YsUUFBUSxFQUFFLGNBQU0sQ0FBQyxHQUFHO0lBQ3BCLFFBQVEsRUFBRTtRQUNOO1lBQ0ksS0FBSyxFQUFFLCtCQUErQjtZQUN0QyxTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEVBQUUsRUFBRSxZQUFJLEVBQUU7U0FDYjtRQUNEO1lBQ0ksS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEVBQUUsRUFBRSxZQUFJLEVBQUU7U0FDYjtRQUNEO1lBQ0ksS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEVBQUUsRUFBRSxZQUFJLEVBQUU7U0FDYjtLQUNKO0NBQ0osQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxyZWR1eC11dGlsc1xcc3RvcmVcXHN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiwgSVN0b3JlIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdG9yZTogSVN0b3JlID0ge1xyXG4gICAgYWRkRmllbGQ6ICcnLFxyXG4gICAgc2VhcmNoRmllbGQ6ICcnLFxyXG4gICAgZmlsdGVyQnk6IEZJTFRFUi5BTEwsXHJcbiAgICB0b2RvTGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1Jld3JpdGUgcHJvamVjdCB3aXRoIFR5cGVTY3JpcHQnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdBZGQgUmVkdXggdG8gcHJvamVjdCcsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG4iXSwidmVyc2lvbiI6M30=