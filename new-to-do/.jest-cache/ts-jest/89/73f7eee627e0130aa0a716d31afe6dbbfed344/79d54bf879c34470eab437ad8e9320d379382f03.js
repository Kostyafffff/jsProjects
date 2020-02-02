"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./app-header.css");
exports.AppHeader = function (_a) {
    var toDo = _a.toDo, done = _a.done;
    return (React.createElement("div", { className: "app-header d-flex" },
        React.createElement("h1", null, "My ToDo List"),
        React.createElement("h2", null,
            toDo,
            " more to do, ",
            done)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFFL0IsNEJBQXlCO0FBRVosUUFBQSxTQUFTLEdBQXFCLFVBQUMsRUFBYztRQUFaLGNBQUksRUFBRSxjQUFJO0lBQ3BELE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQzlCLCtDQUFxQjtRQUNyQjtZQUFLLElBQUk7O1lBQWUsSUFBSSxDQUFNLENBQ2hDLENBQ1QsQ0FBQTtBQUNMLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxjb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnLi90eXBlcy1hcHAtaGVhZGVyJztcclxuaW1wb3J0ICcuL2FwcC1oZWFkZXIuY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcEhlYWRlcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHRvRG8sIGRvbmUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaGVhZGVyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8aDE+TXkgVG9EbyBMaXN0PC9oMT5cclxuICAgICAgICAgICAgPGgyPnt0b0RvfSBtb3JlIHRvIGRvLCB7ZG9uZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59OyJdLCJ2ZXJzaW9uIjozfQ==