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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxyZWR1eC11dGlsc1xcc3RvcmVcXHN0b3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQXlDO0FBQ3pDLCtDQUEyQjtBQUVkLFFBQUEsWUFBWSxHQUFXO0lBQ2hDLFFBQVEsRUFBRSxFQUFFO0lBQ1osV0FBVyxFQUFFLEVBQUU7SUFDZixRQUFRLEVBQUUsY0FBTSxDQUFDLEdBQUc7SUFDcEIsUUFBUSxFQUFFO1FBQ047WUFDSSxLQUFLLEVBQUUsK0JBQStCO1lBQ3RDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFlBQUksRUFBRTtTQUNiO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFlBQUksRUFBRTtTQUNiO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFlBQUksRUFBRTtTQUNiO0tBQ0o7Q0FDSixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXgtdXRpbHNcXHN0b3JlXFxzdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIsIElTdG9yZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RvcmU6IElTdG9yZSA9IHtcclxuICAgIGFkZEZpZWxkOiAnJyxcclxuICAgIHNlYXJjaEZpZWxkOiAnJyxcclxuICAgIGZpbHRlckJ5OiBGSUxURVIuQUxMLFxyXG4gICAgdG9kb0xpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIHByb2plY3Qgd2l0aCBUeXBlU2NyaXB0JyxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiB1dWlkKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQWRkIFJlZHV4IHRvIHByb2plY3QnLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuIl0sInZlcnNpb24iOjN9