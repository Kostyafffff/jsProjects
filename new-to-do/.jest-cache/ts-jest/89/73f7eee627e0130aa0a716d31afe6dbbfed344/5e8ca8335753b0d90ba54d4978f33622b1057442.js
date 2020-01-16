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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXhcXHJlZHVjZXJzXFxyZWR1Y2Vycy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx3Q0FBOEM7QUFDOUMsNERBQWdEO0FBR2hELCtDQUEyQjtBQUVkLFFBQUEsT0FBTyxHQUFpQyxVQUFDLEtBQW9CLEVBQUUsTUFBTTtJQUE1QixzQkFBQSxFQUFBLFFBQVEsb0JBQVk7SUFDdEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUN6QixPQUFPLHdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFOUQsS0FBSyxPQUFPLENBQUMsbUJBQW1CO1lBQzVCLE9BQU8sMEJBQWtCLENBQUMsS0FBSyxFQUFFLE1BQXlCLENBQUMsQ0FBQztRQUVoRSxLQUFNLE9BQU8sQ0FBQyxhQUFhO1lBQ3ZCLE9BQU8saUJBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRXZELEtBQUssT0FBTyxDQUFDLHFCQUFxQjtZQUM5QixPQUFPLHlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFL0QsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8sb0JBQVksQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRTFELEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUN6QixPQUFPLHdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUF5QixDQUFDLENBQUM7UUFFOUQsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQ3pCLE9BQU8saUJBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBeUIsQ0FBQyxDQUFDO1FBRXZEO1lBQ0ksT0FBTyxLQUFLLENBQUM7S0FDcEI7QUFDTCxDQUFDLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQ3RFLEtBQUssS0FDUixRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDMUIsRUFIMkUsQ0FHM0UsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUM3RSxLQUFLLEtBQ1IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzdCLEVBSGtGLENBR2xGLENBQUM7QUFFVSxRQUFBLGtCQUFrQixHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDL0UsS0FBSyxLQUNSLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMxQixFQUhvRixDQUdwRixDQUFDO0FBRVUsUUFBQSxTQUFTLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUN0RSxLQUFLLEtBQ1IsUUFBUSxpQkFBTyxLQUFLLENBQUMsUUFBUSxHQUFFO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTztZQUNyQixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEVBQUUsRUFBRSxZQUFJLEVBQUU7U0FDYixNQUNILEVBUjJFLENBUTNFLENBQUM7QUFFVSxRQUFBLGdCQUFnQixHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQXVCLElBQWEsT0FBQSx1QkFDN0UsS0FBSyxLQUNSLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBeEIsQ0FBd0IsQ0FBQyxJQUNqRSxFQUhrRixDQUdsRixDQUFDO0FBRUgsSUFBTSxjQUFjLEdBQUcsVUFDbkIsR0FBeUIsRUFDekIsRUFBVSxFQUNWLFFBQWdCLElBQ08sT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTzs7SUFDdEMsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNuQiw2QkFDTyxPQUFPLGdCQUNULFFBQVEsSUFBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FDaEM7S0FDTDtJQUVELG9CQUFZLE9BQU8sRUFBRztBQUMxQixDQUFDLENBQUMsRUFUeUIsQ0FTekIsQ0FBQztBQUVVLFFBQUEsaUJBQWlCLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBdUIsSUFBYSxPQUFBLHVCQUM5RSxLQUFLLEtBQ1IsUUFBUSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQ3ZFLEVBSG1GLENBR25GLENBQUM7QUFFVSxRQUFBLFlBQVksR0FBRyxVQUFDLEtBQWEsRUFBRSxNQUF1QixJQUFhLE9BQUEsdUJBQ3pFLEtBQUssS0FDUixRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFDbEUsRUFIOEUsQ0FHOUUsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxyZWR1eFxccmVkdWNlcnNcXHJlZHVjZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUiwgSVN0b3JlLCBJU3RvcmVUb2RvTGlzdEl0ZW0gfSBmcm9tICcuLi9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgaW5pdGlhbFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgSUFjdGlvbiwgSUFjdGlvbkJhc2UgfSBmcm9tICcuLi9hY3Rpb24tY3JlYXRvcnMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxJU3RvcmUsIElBY3Rpb25CYXNlPiA9IChzdG9yZSA9IGluaXRpYWxTdG9yZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9TRUFSQ0hfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiBvblNldFNlYXJjaFZhbHVlKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxzdHJpbmc+KTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9BRERfRklFTERfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiBvblNldEFkZEZpZWxkVmFsdWUoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlICBhY3Rpb25zLkFERF9UT0RPX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiBvbkFkZEl0ZW0oc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0lNUE9SVEFOVF9JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25Ub2dnbGVJbXBvcnRhbnQoc3RvcmUsIGFjdGlvbiBhcyBJQWN0aW9uPHN0cmluZz4pO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0RPTkVfSVRFTTpcclxuICAgICAgICAgICAgcmV0dXJuIG9uVG9nZ2xlRG9uZShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5ERUxFVEVfVE9ET19JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gb25EZWxldGVUb0RvSXRlbShzdG9yZSwgYWN0aW9uIGFzIElBY3Rpb248c3RyaW5nPik7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfRklMVEVSX1ZBTFVFOlxyXG4gICAgICAgICAgICByZXR1cm4gc2V0RmlsdGVyKHN0b3JlLCBhY3Rpb24gYXMgSUFjdGlvbjxGSUxURVI+KTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEZpbHRlciA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248RklMVEVSPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICBmaWx0ZXJCeTogYWN0aW9uLnBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25TZXRTZWFyY2hWYWx1ZSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICBzZWFyY2hGaWVsZDogYWN0aW9uLnBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uU2V0QWRkRmllbGRWYWx1ZSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICBhZGRGaWVsZDogYWN0aW9uLnBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uQWRkSXRlbSA9IChzdG9yZTogSVN0b3JlLCBhY3Rpb246IElBY3Rpb248c3RyaW5nPik6IElTdG9yZSA9PiAoe1xyXG4gICAgLi4uc3RvcmUsXHJcbiAgICB0b2RvTGlzdCA6IFsuLi5zdG9yZS50b2RvTGlzdCwge1xyXG4gICAgICAgIGxhYmVsOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgIGlkOiB1dWlkKCksXHJcbiAgICB9XVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkRlbGV0ZVRvRG9JdGVtID0gKHN0b3JlOiBJU3RvcmUsIGFjdGlvbjogSUFjdGlvbjxzdHJpbmc+KTogSVN0b3JlID0+ICh7XHJcbiAgICAuLi5zdG9yZSxcclxuICAgIHRvZG9MaXN0OiBzdG9yZS50b2RvTGlzdC5maWx0ZXIoaXQgPT4gaXQuaWQgIT09IGFjdGlvbi5wYXlsb2FkKSxcclxufSk7XHJcblxyXG5jb25zdCB0b2dnbGVQcm9wZXJ0eSA9IChcclxuICAgIGFycjogSVN0b3JlVG9kb0xpc3RJdGVtW10sXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgcHJvcE5hbWU6IHN0cmluZyxcclxuKTogSVN0b3JlVG9kb0xpc3RJdGVtW10gPT4gYXJyLm1hcChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50LmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIFtwcm9wTmFtZV06ICFlbGVtZW50W3Byb3BOYW1lXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IC4uLmVsZW1lbnQgfTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb25Ub2dnbGVJbXBvcnRhbnQgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3Q6IHRvZ2dsZVByb3BlcnR5KHN0b3JlLnRvZG9MaXN0LCBhY3Rpb24ucGF5bG9hZCwgJ2ltcG9ydGFudCcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblRvZ2dsZURvbmUgPSAoc3RvcmU6IElTdG9yZSwgYWN0aW9uOiBJQWN0aW9uPHN0cmluZz4pOiBJU3RvcmUgPT4gKHtcclxuICAgIC4uLnN0b3JlLFxyXG4gICAgdG9kb0xpc3Q6IHRvZ2dsZVByb3BlcnR5KHN0b3JlLnRvZG9MaXN0LCBhY3Rpb24ucGF5bG9hZCwgJ2RvbmUnKSxcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==