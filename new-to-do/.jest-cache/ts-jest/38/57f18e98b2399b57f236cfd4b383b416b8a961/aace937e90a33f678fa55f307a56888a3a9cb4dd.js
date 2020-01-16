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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var search_panel_1 = require("components/search-panel/search-panel");
var sinon_1 = __importDefault(require("sinon"));
var React = __importStar(require("react"));
describe('src/components/item-add-form/item-add-form.tsx', function () {
    var props = {
        term: 'asdasd',
        onSearchChange: sinon_1.default.stub()
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should TodoListItemProps mount component', function () {
        var wrapper = enzyme_1.mount(React.createElement(search_panel_1.SearchPanel, __assign({}, props)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLHFFQUFtRTtBQUNuRSxnREFBMEI7QUFFMUIsMkNBQStCO0FBRS9CLFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUN2RCxJQUFNLEtBQUssR0FBc0I7UUFDOUIsSUFBSSxFQUFFLFFBQVE7UUFDZCxjQUFjLEVBQUUsZUFBSyxDQUFDLElBQUksRUFBRTtLQUM5QixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQywwQkFBVyxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWwgfSBmcm9tICdjb21wb25lbnRzL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBJUHJvcHNTZWFyY2hQYW5lbCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvdHlwZXMtc2VhcmNoLXBhbmVsXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9pdGVtLWFkZC1mb3JtL2l0ZW0tYWRkLWZvcm0udHN4JywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wc1NlYXJjaFBhbmVsID0ge1xyXG4gICAgICAgdGVybTogJ2FzZGFzZCcsXHJcbiAgICAgICBvblNlYXJjaENoYW5nZTogc2lub24uc3R1YigpXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxTZWFyY2hQYW5lbCB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il0sInZlcnNpb24iOjN9