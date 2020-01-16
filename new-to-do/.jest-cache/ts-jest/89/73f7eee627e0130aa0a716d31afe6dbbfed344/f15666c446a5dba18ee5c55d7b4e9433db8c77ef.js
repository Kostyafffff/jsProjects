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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../store/store");
var actions = __importStar(require("../actions/constants"));
var v4_1 = __importDefault(require("uuid/v4"));
exports.reducer = function (store, action) {
    if (store === void 0) { store = store_1.initialStore; }
    switch (action.type) {
        case actions.SET_SEARCH_VALUE:
            return exports.onSetSearchValue(store, action);
        case actions.SET_ADD_FIELD_VALUE:
            return exports.onSetAddFieldValue(store, action);
        case actions.ADD_TODO_ITEM:
            return exports.onAddItem(store, action);
        case actions.TOGGLE_IMPORTANT_ITEM:
            return exports.onToggleImportant(store, action);
        case actions.TOGGLE_DONE_ITEM:
            return exports.onToggleDone(store, action);
        case actions.DELETE_TODO_ITEM:
            return exports.onDeleteToDoItem(store, action);
        case actions.SET_FILTER_VALUE:
            return exports.setFilter(store, action);
        default:
            return store;
    }
};
exports.setFilter = function (store, action) { return (__assign(__assign({}, store), { filterBy: action.payload })); };
exports.onSetSearchValue = function (store, action) { return (__assign(__assign({}, store), { searchField: action.payload })); };
exports.onSetAddFieldValue = function (store, action) { return (__assign(__assign({}, store), { addField: action.payload })); };
exports.onAddItem = function (store, action) { return (__assign(__assign({}, store), { todoList: __spreadArrays(store.todoList, [{
            label: action.payload,
            important: false,
            done: false,
            id: v4_1.default(),
        }]) })); };
exports.onDeleteToDoItem = function (store, action) { return (__assign(__assign({}, store), { todoList: store.todoList.filter(function (it) { return it.id !== action.payload; }) })); };
var toggleProperty = function (arr, id, propName) { return arr.map(function (element) {
    var _a;
    if (element.id === id) {
        return __assign(__assign({}, element), (_a = {}, _a[propName] = !element[propName], _a));
    }
    return __assign({}, element);
}); };
exports.onToggleImportant = function (store, action) { return (__assign(__assign({}, store), { todoList: toggleProperty(store.todoList, action.payload, 'important') })); };
exports.onToggleDone = function (store, action) { return (__assign(__assign({}, store), { todoList: toggleProperty(store.todoList, action.payload, 'done') })); };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXhcXHJlZHVjZXJzXFxyZWR1Y2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHdDQUE4QztBQUM5Qyw0REFBZ0Q7QUFHaEQsK0NBQTJCO0FBRWQsUUFBQSxPQUFPLEdBQWlDLFVBQUMsS0FBb0IsRUFBRSxNQUFNO0lBQTVCLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUN0RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sd0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE9BQU8sQ0FBQyxtQkFBbUI7WUFDNUIsT0FBTywwQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRWhFLEtBQU0sT0FBTyxDQUFDLGFBQWE7WUFDdkIsT0FBTyxpQkFBUyxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFdkQsS0FBSyxPQUFPLENBQUMscUJBQXFCO1lBQzlCLE9BQU8seUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUUvRCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyxvQkFBWSxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFMUQsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sd0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyxpQkFBUyxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFdkQ7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDdEUsS0FBSyxLQUNSLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMxQixFQUgyRSxDQUczRSxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzdFLEtBQUssS0FDUixXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDN0IsRUFIa0YsQ0FHbEYsQ0FBQztBQUVVLFFBQUEsa0JBQWtCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUMvRSxLQUFLLEtBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzFCLEVBSG9GLENBR3BGLENBQUM7QUFFVSxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQ3RFLEtBQUssS0FDUixRQUFRLGlCQUFPLEtBQUssQ0FBQyxRQUFRLEdBQUU7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFlBQUksRUFBRTtTQUNiLE1BQ0gsRUFSMkUsQ0FRM0UsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUM3RSxLQUFLLEtBQ1IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUF4QixDQUF3QixDQUFDLElBQ2pFLEVBSGtGLENBR2xGLENBQUM7QUFFSCxJQUFNLGNBQWMsR0FBRyxVQUNuQixHQUF5QixFQUN6QixFQUFVLEVBQ1YsUUFBZ0IsSUFDTyxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPOztJQUN0QyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ25CLDZCQUNPLE9BQU8sZ0JBQ1QsUUFBUSxJQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUNoQztLQUNMO0lBRUQsb0JBQVksT0FBTyxFQUFHO0FBQzFCLENBQUMsQ0FBQyxFQVR5QixDQVN6QixDQUFDO0FBRVUsUUFBQSxpQkFBaUIsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzlFLEtBQUssS0FDUixRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFDdkUsRUFIbUYsQ0FHbkYsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDekUsS0FBSyxLQUNSLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUNsRSxFQUg4RSxDQUc5RSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXHJlZHV4XFxyZWR1Y2Vyc1xccmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIsIElTdG9yZSwgSVN0b3JlVG9kb0xpc3RJdGVtIH0gZnJvbSAnLi4vc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGluaXRpYWxTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IElBY3Rpb24sIElBY3Rpb25CYXNlIH0gZnJvbSAnLi4vYWN0aW9uLWNyZWF0b3JzL3R5cGVzJztcclxuXHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8SVN0b3JlLCBJQWN0aW9uQmFzZT4gPSAoc3RvcmUgPSBpbml0aWFsU3RvcmUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfU0VBUkNIX1ZBTFVFOlxyXG4gICAgICAgICAgICByZXR1cm4gb25TZXRTZWFyY2hWYWx1ZShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfQUREX0ZJRUxEX1ZBTFVFOlxyXG4gICAgICAgICAgICByZXR1cm4gb25TZXRBZGRGaWVsZFZhbHVlKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSAgYWN0aW9ucy5BRERfVE9ET19JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25BZGRJdGVtKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9JTVBPUlRBTlRfSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uVG9nZ2xlSW1wb3J0YW50KHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9ET05FX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiBvblRvZ2dsZURvbmUoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuREVMRVRFX1RPRE9fSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uRGVsZXRlVG9Eb0l0ZW0oc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuU0VUX0ZJTFRFUl9WQUxVRTpcclxuICAgICAgICAgICAgcmV0dXJuIHNldEZpbHRlcihzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248RklMVEVSPik7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGaWx0ZXIgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPEZJTFRFUj4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgZmlsdGVyQnk6IGFjdGlvbi5wYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uU2V0U2VhcmNoVmFsdWUgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgc2VhcmNoRmllbGQ6IGFjdGlvbi5wYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblNldEFkZEZpZWxkVmFsdWUgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgYWRkRmllbGQ6IGFjdGlvbi5wYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkFkZEl0ZW0gPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3QgOiBbLi4uc3RvcmUudG9kb0xpc3QsIHtcclxuICAgICAgICBsYWJlbDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgfV1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25EZWxldGVUb0RvSXRlbSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICB0b2RvTGlzdDogc3RvcmUudG9kb0xpc3QuZmlsdGVyKGl0ID0+IGl0LmlkICE9PSBhY3Rpb24ucGF5bG9hZCksXHJcbn0pO1xyXG5cclxuY29uc3QgdG9nZ2xlUHJvcGVydHkgPSAoXHJcbiAgICBhcnI6IElTdG9yZVRvZG9MaXN0SXRlbVtdLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIHByb3BOYW1lOiBzdHJpbmcsXHJcbik6IElTdG9yZVRvZG9MaXN0SXRlbVtdID0+IGFyci5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50LFxyXG4gICAgICAgICAgICBbcHJvcE5hbWVdOiAhZWxlbWVudFtwcm9wTmFtZV0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyAuLi5lbGVtZW50IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uVG9nZ2xlSW1wb3J0YW50ID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0OiB0b2dnbGVQcm9wZXJ0eShzdG9yZS50b2RvTGlzdCwgYWN0aW9uLnBheWxvYWQsICdpbXBvcnRhbnQnKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25Ub2dnbGVEb25lID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0OiB0b2dnbGVQcm9wZXJ0eShzdG9yZS50b2RvTGlzdCwgYWN0aW9uLnBheWxvYWQsICdkb25lJyksXHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=