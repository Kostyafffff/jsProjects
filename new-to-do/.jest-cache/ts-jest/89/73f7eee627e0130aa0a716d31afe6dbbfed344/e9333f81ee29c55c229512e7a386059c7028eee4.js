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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXgtdXRpbHNcXHJlZHVjZXJzXFxyZWR1Y2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdDQUE4QztBQUM5Qyw0REFBZ0Q7QUFHaEQsK0NBQTJCO0FBRWQsUUFBQSxPQUFPLEdBQUcsVUFBQyxLQUFvQixFQUFFLE1BQW1CO0lBQXpDLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUN4QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sd0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE9BQU8sQ0FBQyxtQkFBbUI7WUFDNUIsT0FBTywwQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRWhFLEtBQU0sT0FBTyxDQUFDLGFBQWE7WUFDdkIsT0FBTyxpQkFBUyxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFdkQsS0FBSyxPQUFPLENBQUMscUJBQXFCO1lBQzlCLE9BQU8seUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUUvRCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyxvQkFBWSxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFMUQsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sd0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyxpQkFBUyxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFdkQ7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDdEUsS0FBSyxLQUNSLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMxQixFQUgyRSxDQUczRSxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzdFLEtBQUssS0FDUixXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDN0IsRUFIa0YsQ0FHbEYsQ0FBQztBQUVVLFFBQUEsa0JBQWtCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUMvRSxLQUFLLEtBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzFCLEVBSG9GLENBR3BGLENBQUM7QUFFVSxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQ3RFLEtBQUssS0FDUixRQUFRLGlCQUFPLEtBQUssQ0FBQyxRQUFRLEdBQUU7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFlBQUksRUFBRTtTQUNiLE1BQ0gsRUFSMkUsQ0FRM0UsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUM3RSxLQUFLLEtBQ1IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUF4QixDQUF3QixDQUFDLElBQ2pFLEVBSGtGLENBR2xGLENBQUM7QUFFSCxJQUFNLGNBQWMsR0FBRyxVQUNuQixHQUF5QixFQUN6QixFQUFVLEVBQ1YsUUFBZ0IsSUFDTyxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPOztJQUN0QyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ25CLDZCQUNPLE9BQU8sZ0JBQ1QsUUFBUSxJQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUNoQztLQUNMO0lBRUQsb0JBQVksT0FBTyxFQUFHO0FBQzFCLENBQUMsQ0FBQyxFQVR5QixDQVN6QixDQUFDO0FBRVUsUUFBQSxpQkFBaUIsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzlFLEtBQUssS0FDUixRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFDdkUsRUFIbUYsQ0FHbkYsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDekUsS0FBSyxLQUNSLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUNsRSxFQUg4RSxDQUc5RSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXHJlZHV4LXV0aWxzXFxyZWR1Y2Vyc1xccmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIsIElTdG9yZSwgSVN0b3JlVG9kb0xpc3RJdGVtIH0gZnJvbSAnLi4vc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBJQWN0aW9uLCBJQWN0aW9uQmFzZSB9IGZyb20gJy4uL2FjdGlvbi1jcmVhdG9ycy90eXBlcyc7XHJcblxyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0b3JlID0gaW5pdGlhbFN0b3JlLCBhY3Rpb246IElBY3Rpb25CYXNlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9TRUFSQ0hfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiBvblNldFNlYXJjaFZhbHVlKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9BRERfRklFTERfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiBvblNldEFkZEZpZWxkVmFsdWUoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlICBhY3Rpb25zLkFERF9UT0RPX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiBvbkFkZEl0ZW0oc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0lNUE9SVEFOVF9JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25Ub2dnbGVJbXBvcnRhbnQoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0RPTkVfSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uVG9nZ2xlRG9uZShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5ERUxFVEVfVE9ET19JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25EZWxldGVUb0RvSXRlbShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfRklMVEVSX1ZBTFVFOlxyXG4gICAgICAgICAgICByZXR1cm4gc2V0RmlsdGVyKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxGSUxURVI+KTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEZpbHRlciA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248RklMVEVSPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICBmaWx0ZXJCeTogYWN0aW9uLnBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25TZXRTZWFyY2hWYWx1ZSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICBzZWFyY2hGaWVsZDogYWN0aW9uLnBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uU2V0QWRkRmllbGRWYWx1ZSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICBhZGRGaWVsZDogYWN0aW9uLnBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uQWRkSXRlbSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICB0b2RvTGlzdCA6IFsuLi5zdG9yZS50b2RvTGlzdCwge1xyXG4gICAgICAgIGxhYmVsOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIGlkOiB1dWlkKCksXHJcbiAgICB9XVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkRlbGV0ZVRvRG9JdGVtID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0OiBzdG9yZS50b2RvTGlzdC5maWx0ZXIoaXQgPT4gaXQuaWQgIT09IGFjdGlvbi5wYXlsb2FkKSxcclxufSk7XHJcblxyXG5jb25zdCB0b2dnbGVQcm9wZXJ0eSA9IChcclxuICAgIGFycjogSVN0b3JlVG9kb0xpc3RJdGVtW10sXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgcHJvcE5hbWU6IHN0cmluZyxcclxuKTogSVN0b3JlVG9kb0xpc3RJdGVtW10gPT4gYXJyLm1hcChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50LmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIFtwcm9wTmFtZV06ICFlbGVtZW50W3Byb3BOYW1lXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IC4uLmVsZW1lbnQgfTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25Ub2dnbGVJbXBvcnRhbnQgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3Q6IHRvZ2dsZVByb3BlcnR5KHN0b3JlLnRvZG9MaXN0LCBhY3Rpb24ucGF5bG9hZCwgJ2ltcG9ydGFudCcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblRvZ2dsZURvbmUgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3Q6IHRvZ2dsZVByb3BlcnR5KHN0b3JlLnRvZG9MaXN0LCBhY3Rpb24ucGF5bG9hZCwgJ2RvbmUnKSxcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==