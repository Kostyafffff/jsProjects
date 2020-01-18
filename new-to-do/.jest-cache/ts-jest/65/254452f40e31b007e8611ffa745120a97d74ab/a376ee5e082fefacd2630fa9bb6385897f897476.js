"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var action_creators_1 = require("redux-utils/action-creators/action-creators");
var selectors_1 = require("../../redux-utils/selectors/selectors");
var component_1 = require("./component");
exports.mapStateToProps = function (store) { return ({
    todoList: selectors_1.getToDoList(store),
    searchValue: selectors_1.getSearchValue(store),
    filterValue: selectors_1.getFilterValue(store),
}); };
exports.mapDispatchToProps = {
    onToggleImportant: action_creators_1.toggleImportant,
    onToggleDone: action_creators_1.toggleDone,
    onDeleted: action_creators_1.deleteItem
};
exports.TodoList = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(component_1.TodoList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXGluZGV4LnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXNDO0FBQ3RDLCtFQUFzRztBQUN0RyxtRUFBb0c7QUFDcEcseUNBQW9EO0FBRXZDLFFBQUEsZUFBZSxHQUFHLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQztJQUMvQyxRQUFRLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLENBQUM7SUFDNUIsV0FBVyxFQUFFLDBCQUFjLENBQUMsS0FBSyxDQUFDO0lBQ2xDLFdBQVcsRUFBRSwwQkFBYyxDQUFDLEtBQUssQ0FBQztDQUNyQyxDQUFDLEVBSmdELENBSWhELENBQUM7QUFFVSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLGlCQUFpQixFQUFFLGlDQUFlO0lBQ2xDLFlBQVksRUFBRSw0QkFBVTtJQUN4QixTQUFTLEVBQUUsNEJBQVU7Q0FDeEIsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUFHLHFCQUFPLENBQUMsdUJBQWUsRUFBRSwwQkFBa0IsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJFOlxcSnNQcm9qZWN0c1xcbmV3LXRvLWRvXFxzcmNcXGNvbXBvbmVudHNcXHRvZG8tbGlzdFxcaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIi4uLy4uL3JlZHV4LXV0aWxzL3N0b3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZGVsZXRlSXRlbSwgdG9nZ2xlRG9uZSwgdG9nZ2xlSW1wb3J0YW50IH0gZnJvbSAncmVkdXgtdXRpbHMvYWN0aW9uLWNyZWF0b3JzL2FjdGlvbi1jcmVhdG9ycyc7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRTZWFyY2hWYWx1ZSwgZ2V0VG9Eb0xpc3R9ICBmcm9tICcuLi8uLi9yZWR1eC11dGlscy9zZWxlY3RvcnMvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVG9kb0xpc3QgYXMgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlOiBJU3RvcmUpID0+ICh7XHJcbiAgICB0b2RvTGlzdDogZ2V0VG9Eb0xpc3Qoc3RvcmUpLFxyXG4gICAgc2VhcmNoVmFsdWU6IGdldFNlYXJjaFZhbHVlKHN0b3JlKSxcclxuICAgIGZpbHRlclZhbHVlOiBnZXRGaWx0ZXJWYWx1ZShzdG9yZSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIG9uVG9nZ2xlSW1wb3J0YW50OiB0b2dnbGVJbXBvcnRhbnQsXHJcbiAgICBvblRvZ2dsZURvbmU6IHRvZ2dsZURvbmUsXHJcbiAgICBvbkRlbGV0ZWQ6IGRlbGV0ZUl0ZW1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvTGlzdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbXBvbmVudCk7Il0sInZlcnNpb24iOjN9