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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxyZWR1eC11dGlsc1xccmVkdWNlcnNcXHJlZHVjZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0NBQThDO0FBQzlDLDREQUFnRDtBQUdoRCwrQ0FBMkI7QUFFZCxRQUFBLE9BQU8sR0FBRyxVQUFDLEtBQW9CLEVBQUUsTUFBbUI7SUFBekMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBQ3hDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyx3QkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRTlELEtBQUssT0FBTyxDQUFDLG1CQUFtQjtZQUM1QixPQUFPLDBCQUFrQixDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFaEUsS0FBTSxPQUFPLENBQUMsYUFBYTtZQUN2QixPQUFPLGlCQUFTLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUV2RCxLQUFLLE9BQU8sQ0FBQyxxQkFBcUI7WUFDOUIsT0FBTyx5QkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRS9ELEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUN6QixPQUFPLG9CQUFZLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUUxRCxLQUFLLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDekIsT0FBTyx3QkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRTlELEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUN6QixPQUFPLGlCQUFTLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUV2RDtZQUNJLE9BQU8sS0FBSyxDQUFDO0tBQ3BCO0FBQ0wsQ0FBQyxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUN0RSxLQUFLLEtBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzFCLEVBSDJFLENBRzNFLENBQUM7QUFFVSxRQUFBLGdCQUFnQixHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDN0UsS0FBSyxLQUNSLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUM3QixFQUhrRixDQUdsRixDQUFDO0FBRVUsUUFBQSxrQkFBa0IsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQy9FLEtBQUssS0FDUixRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDMUIsRUFIb0YsQ0FHcEYsQ0FBQztBQUVVLFFBQUEsU0FBUyxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDdEUsS0FBSyxLQUNSLFFBQVEsaUJBQU8sS0FBSyxDQUFDLFFBQVEsR0FBRTtZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsWUFBSSxFQUFFO1NBQ2IsTUFDSCxFQVIyRSxDQVEzRSxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQzdFLEtBQUssS0FDUixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQXhCLENBQXdCLENBQUMsSUFDakUsRUFIa0YsQ0FHbEYsQ0FBQztBQUVILElBQU0sY0FBYyxHQUFHLFVBQ25CLEdBQXlCLEVBQ3pCLEVBQVUsRUFDVixRQUFnQixJQUNPLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87O0lBQ3RDLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDbkIsNkJBQ08sT0FBTyxnQkFDVCxRQUFRLElBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQ2hDO0tBQ0w7SUFFRCxvQkFBWSxPQUFPLEVBQUc7QUFDMUIsQ0FBQyxDQUFDLEVBVHlCLENBU3pCLENBQUM7QUFFVSxRQUFBLGlCQUFpQixHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDOUUsS0FBSyxLQUNSLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUN2RSxFQUhtRixDQUduRixDQUFDO0FBRVUsUUFBQSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUN6RSxLQUFLLEtBQ1IsUUFBUSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQ2xFLEVBSDhFLENBRzlFLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxyZWR1eC11dGlsc1xccmVkdWNlcnNcXHJlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSLCBJU3RvcmUsIElTdG9yZVRvZG9MaXN0SXRlbSB9IGZyb20gJy4uL3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgaW5pdGlhbFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgSUFjdGlvbiwgSUFjdGlvbkJhc2UgfSBmcm9tICcuLi9hY3Rpb24tY3JlYXRvcnMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdG9yZSA9IGluaXRpYWxTdG9yZSwgYWN0aW9uOiBJQWN0aW9uQmFzZSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfU0VBUkNIX1ZBTFVFOlxyXG4gICAgICAgICAgICByZXR1cm4gb25TZXRTZWFyY2hWYWx1ZShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfQUREX0ZJRUxEX1ZBTFVFOlxyXG4gICAgICAgICAgICByZXR1cm4gb25TZXRBZGRGaWVsZFZhbHVlKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSAgYWN0aW9ucy5BRERfVE9ET19JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25BZGRJdGVtKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9JTVBPUlRBTlRfSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uVG9nZ2xlSW1wb3J0YW50KHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9ET05FX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiBvblRvZ2dsZURvbmUoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuREVMRVRFX1RPRE9fSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uRGVsZXRlVG9Eb0l0ZW0oc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuU0VUX0ZJTFRFUl9WQUxVRTpcclxuICAgICAgICAgICAgcmV0dXJuIHNldEZpbHRlcihzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248RklMVEVSPik7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGaWx0ZXIgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPEZJTFRFUj4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgZmlsdGVyQnk6IGFjdGlvbi5wYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uU2V0U2VhcmNoVmFsdWUgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgc2VhcmNoRmllbGQ6IGFjdGlvbi5wYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblNldEFkZEZpZWxkVmFsdWUgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgYWRkRmllbGQ6IGFjdGlvbi5wYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkFkZEl0ZW0gPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3QgOiBbLi4uc3RvcmUudG9kb0xpc3QsIHtcclxuICAgICAgICBsYWJlbDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgfV1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25EZWxldGVUb0RvSXRlbSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICB0b2RvTGlzdDogc3RvcmUudG9kb0xpc3QuZmlsdGVyKGl0ID0+IGl0LmlkICE9PSBhY3Rpb24ucGF5bG9hZCksXHJcbn0pO1xyXG5cclxuY29uc3QgdG9nZ2xlUHJvcGVydHkgPSAoXHJcbiAgICBhcnI6IElTdG9yZVRvZG9MaXN0SXRlbVtdLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIHByb3BOYW1lOiBzdHJpbmcsXHJcbik6IElTdG9yZVRvZG9MaXN0SXRlbVtdID0+IGFyci5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50LFxyXG4gICAgICAgICAgICBbcHJvcE5hbWVdOiAhZWxlbWVudFtwcm9wTmFtZV0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyAuLi5lbGVtZW50IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uVG9nZ2xlSW1wb3J0YW50ID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0OiB0b2dnbGVQcm9wZXJ0eShzdG9yZS50b2RvTGlzdCwgYWN0aW9uLnBheWxvYWQsICdpbXBvcnRhbnQnKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25Ub2dnbGVEb25lID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0OiB0b2dnbGVQcm9wZXJ0eShzdG9yZS50b2RvTGlzdCwgYWN0aW9uLnBheWxvYWQsICdkb25lJyksXHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=