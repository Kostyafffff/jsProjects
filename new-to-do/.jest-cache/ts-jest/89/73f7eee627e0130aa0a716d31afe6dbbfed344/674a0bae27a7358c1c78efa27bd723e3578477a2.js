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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXgtdXRpbHNcXHJlZHVjZXJzXFxyZWR1Y2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHdDQUE4QztBQUM5Qyw0REFBZ0Q7QUFHaEQsK0NBQTJCO0FBRWQsUUFBQSxPQUFPLEdBQWlDLFVBQUMsS0FBb0IsRUFBRSxNQUFNO0lBQTVCLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUN0RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sd0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE9BQU8sQ0FBQyxtQkFBbUI7WUFDNUIsT0FBTywwQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRWhFLEtBQU0sT0FBTyxDQUFDLGFBQWE7WUFDdkIsT0FBTyxpQkFBUyxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFdkQsS0FBSyxPQUFPLENBQUMscUJBQXFCO1lBQzlCLE9BQU8seUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUUvRCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyxvQkFBWSxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFMUQsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sd0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyxpQkFBUyxDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFdkQ7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDdEUsS0FBSyxLQUNSLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMxQixFQUgyRSxDQUczRSxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzdFLEtBQUssS0FDUixXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDN0IsRUFIa0YsQ0FHbEYsQ0FBQztBQUVVLFFBQUEsa0JBQWtCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUMvRSxLQUFLLEtBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzFCLEVBSG9GLENBR3BGLENBQUM7QUFFVSxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQ3RFLEtBQUssS0FDUixRQUFRLGlCQUFPLEtBQUssQ0FBQyxRQUFRLEdBQUU7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLFlBQUksRUFBRTtTQUNiLE1BQ0gsRUFSMkUsQ0FRM0UsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUM3RSxLQUFLLEtBQ1IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUF4QixDQUF3QixDQUFDLElBQ2pFLEVBSGtGLENBR2xGLENBQUM7QUFFSCxJQUFNLGNBQWMsR0FBRyxVQUNuQixHQUF5QixFQUN6QixFQUFVLEVBQ1YsUUFBZ0IsSUFDTyxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPOztJQUN0QyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ25CLDZCQUNPLE9BQU8sZ0JBQ1QsUUFBUSxJQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUNoQztLQUNMO0lBRUQsb0JBQVksT0FBTyxFQUFHO0FBQzFCLENBQUMsQ0FBQyxFQVR5QixDQVN6QixDQUFDO0FBRVUsUUFBQSxpQkFBaUIsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzlFLEtBQUssS0FDUixRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFDdkUsRUFIbUYsQ0FHbkYsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDekUsS0FBSyxLQUNSLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUNsRSxFQUg4RSxDQUc5RSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXHJlZHV4LXV0aWxzXFxyZWR1Y2Vyc1xccmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGSUxURVIsIElTdG9yZSwgSVN0b3JlVG9kb0xpc3RJdGVtIH0gZnJvbSAnLi4vc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBJQWN0aW9uLCBJQWN0aW9uQmFzZSB9IGZyb20gJy4uL2FjdGlvbi1jcmVhdG9ycy90eXBlcyc7XHJcblxyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPElTdG9yZSwgSUFjdGlvbkJhc2U+ID0gKHN0b3JlID0gaW5pdGlhbFN0b3JlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvbnMuU0VUX1NFQVJDSF9WQUxVRTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uU2V0U2VhcmNoVmFsdWUoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuU0VUX0FERF9GSUVMRF9WQUxVRTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uU2V0QWRkRmllbGRWYWx1ZShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgIGFjdGlvbnMuQUREX1RPRE9fSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uQWRkSXRlbShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfSU1QT1JUQU5UX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiBvblRvZ2dsZUltcG9ydGFudChzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfRE9ORV9JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25Ub2dnbGVEb25lKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLkRFTEVURV9UT0RPX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiBvbkRlbGV0ZVRvRG9JdGVtKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9GSUxURVJfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRGaWx0ZXIoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPEZJTFRFUj4pO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxGSUxURVI+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIGZpbHRlckJ5OiBhY3Rpb24ucGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblNldFNlYXJjaFZhbHVlID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHNlYXJjaEZpZWxkOiBhY3Rpb24ucGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25TZXRBZGRGaWVsZFZhbHVlID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIGFkZEZpZWxkOiBhY3Rpb24ucGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25BZGRJdGVtID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0IDogWy4uLnN0b3JlLnRvZG9MaXN0LCB7XHJcbiAgICAgICAgbGFiZWw6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgaWQ6IHV1aWQoKSxcclxuICAgIH1dXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uRGVsZXRlVG9Eb0l0ZW0gPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3Q6IHN0b3JlLnRvZG9MaXN0LmZpbHRlcihpdCA9PiBpdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQpLFxyXG59KTtcclxuXHJcbmNvbnN0IHRvZ2dsZVByb3BlcnR5ID0gKFxyXG4gICAgYXJyOiBJU3RvcmVUb2RvTGlzdEl0ZW1bXSxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBwcm9wTmFtZTogc3RyaW5nLFxyXG4pOiBJU3RvcmVUb2RvTGlzdEl0ZW1bXSA9PiBhcnIubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudCxcclxuICAgICAgICAgICAgW3Byb3BOYW1lXTogIWVsZW1lbnRbcHJvcE5hbWVdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgLi4uZWxlbWVudCB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblRvZ2dsZUltcG9ydGFudCA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICB0b2RvTGlzdDogdG9nZ2xlUHJvcGVydHkoc3RvcmUudG9kb0xpc3QsIGFjdGlvbi5wYXlsb2FkLCAnaW1wb3J0YW50JyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uVG9nZ2xlRG9uZSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICB0b2RvTGlzdDogdG9nZ2xlUHJvcGVydHkoc3RvcmUudG9kb0xpc3QsIGFjdGlvbi5wYXlsb2FkLCAnZG9uZScpLFxyXG59KTtcclxuIl0sInZlcnNpb24iOjN9