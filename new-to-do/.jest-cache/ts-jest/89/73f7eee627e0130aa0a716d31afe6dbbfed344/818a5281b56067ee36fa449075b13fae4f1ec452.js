"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions = __importStar(require("../actions/constants"));
exports.setSearchValue = function (value) { return ({
    type: actions.SET_SEARCH_VALUE,
    payload: value,
}); };
exports.setAddFieldValue = function (value) { return ({
    type: actions.SET_ADD_FIELD_VALUE,
    payload: value,
}); };
exports.addToDo = function (value) { return ({
    type: actions.ADD_TODO_ITEM,
    payload: value,
}); };
exports.setFilter = function (value) { return ({
    type: actions.SET_FILTER_VALUE,
    payload: value,
}); };
exports.toggleImportant = function (value) { return ({
    type: actions.TOGGLE_IMPORTANT_ITEM,
    payload: value,
}); };
exports.deleteItem = function (value) { return ({
    type: actions.DELETE_TODO_ITEM,
    payload: value
}); };
exports.toggleDone = function (value) { return ({
    type: actions.TOGGLE_DONE_ITEM,
    payload: value,
}); };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xccmVkdXhcXGFjdGlvbi1jcmVhdG9yc1xcYWN0aW9uLWNyZWF0b3JzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLDREQUFnRDtBQUVuQyxRQUFBLGNBQWMsR0FBRyxVQUFDLEtBQWEsSUFBc0IsT0FBQSxDQUFDO0lBQy9ELElBQUksRUFBRSxPQUFPLENBQUMsZ0JBQWdCO0lBQzlCLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUMsRUFIZ0UsQ0FHaEUsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxLQUFhLElBQXNCLE9BQUEsQ0FBQztJQUNqRSxJQUFJLEVBQUUsT0FBTyxDQUFDLG1CQUFtQjtJQUNqQyxPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDLEVBSGtFLENBR2xFLENBQUM7QUFFVSxRQUFBLE9BQU8sR0FBRyxVQUFDLEtBQWEsSUFBc0IsT0FBQSxDQUFDO0lBQ3hELElBQUksRUFBRSxPQUFPLENBQUMsYUFBYTtJQUMzQixPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDLEVBSHlELENBR3pELENBQUM7QUFFVSxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQWEsSUFBc0IsT0FBQSxDQUFDO0lBQzFELElBQUksRUFBRSxPQUFPLENBQUMsZ0JBQWdCO0lBQzlCLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUMsRUFIMkQsQ0FHM0QsQ0FBQztBQUVVLFFBQUEsZUFBZSxHQUFHLFVBQUMsS0FBYSxJQUFzQixPQUFBLENBQUM7SUFDaEUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUI7SUFDbkMsT0FBTyxFQUFFLEtBQUs7Q0FDakIsQ0FBQyxFQUhpRSxDQUdqRSxDQUFDO0FBRVUsUUFBQSxVQUFVLEdBQUcsVUFBQyxLQUFhLElBQXNCLE9BQUEsQ0FBQztJQUMzRCxJQUFJLEVBQUUsT0FBTyxDQUFDLGdCQUFnQjtJQUM5QixPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDLEVBSDRELENBRzVELENBQUM7QUFFVSxRQUFBLFVBQVUsR0FBRyxVQUFDLEtBQWEsSUFBc0IsT0FBQSxDQUFDO0lBQzNELElBQUksRUFBRSxPQUFPLENBQUMsZ0JBQWdCO0lBQzlCLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUMsRUFINEQsQ0FHNUQsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxyZWR1eFxcYWN0aW9uLWNyZWF0b3JzXFxhY3Rpb24tY3JlYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTZWFyY2hWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKTogSUFjdGlvbjxzdHJpbmc+ID0+ICh7XHJcbiAgICB0eXBlOiBhY3Rpb25zLlNFVF9TRUFSQ0hfVkFMVUUsXHJcbiAgICBwYXlsb2FkOiB2YWx1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWRkRmllbGRWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKTogSUFjdGlvbjxzdHJpbmc+ID0+ICh7XHJcbiAgICB0eXBlOiBhY3Rpb25zLlNFVF9BRERfRklFTERfVkFMVUUsXHJcbiAgICBwYXlsb2FkOiB2YWx1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9EbyA9ICh2YWx1ZTogc3RyaW5nKTogSUFjdGlvbjxzdHJpbmc+ID0+ICh7XHJcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9UT0RPX0lURU0sXHJcbiAgICBwYXlsb2FkOiB2YWx1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyID0gKHZhbHVlOiBzdHJpbmcpOiBJQWN0aW9uPHN0cmluZz4gPT4gKHtcclxuICAgIHR5cGU6IGFjdGlvbnMuU0VUX0ZJTFRFUl9WQUxVRSxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVJbXBvcnRhbnQgPSAodmFsdWU6IHN0cmluZyk6IElBY3Rpb248c3RyaW5nPiA9PiAoe1xyXG4gICAgdHlwZTogYWN0aW9ucy5UT0dHTEVfSU1QT1JUQU5UX0lURU0sXHJcbiAgICBwYXlsb2FkOiB2YWx1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9ICh2YWx1ZTogc3RyaW5nKTogSUFjdGlvbjxzdHJpbmc+ID0+ICh7XHJcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9UT0RPX0lURU0sXHJcbiAgICBwYXlsb2FkOiB2YWx1ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVEb25lID0gKHZhbHVlOiBzdHJpbmcpOiBJQWN0aW9uPHN0cmluZz4gPT4gKHtcclxuICAgIHR5cGU6IGFjdGlvbnMuVE9HR0xFX0RPTkVfSVRFTSxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG59KTtcclxuXHJcbiJdLCJ2ZXJzaW9uIjozfQ==