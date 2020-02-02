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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcc3JjXFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxjb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUUvQiw0QkFBeUI7QUFFWixRQUFBLFNBQVMsR0FBcUIsVUFBQyxFQUFjO1FBQVosY0FBSSxFQUFFLGNBQUk7SUFDcEQsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyxtQkFBbUI7UUFDOUIsK0NBQXFCO1FBQ3JCO1lBQUssSUFBSTs7WUFBZSxJQUFJLENBQU0sQ0FDaEMsQ0FDVCxDQUFBO0FBQ0wsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHNyY1xcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wcyB9IGZyb20gJy4vdHlwZXMtYXBwLWhlYWRlcic7XHJcbmltcG9ydCAnLi9hcHAtaGVhZGVyLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBIZWFkZXI6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0b0RvLCBkb25lIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWhlYWRlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGgxPk15IFRvRG8gTGlzdDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj57dG9Eb30gbW9yZSB0byBkbywge2RvbmV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTsiXSwidmVyc2lvbiI6M30=