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
var sinon_1 = __importDefault(require("sinon"));
var app_header_1 = require("../../../src/components/app-header/app-header");
var React = __importStar(require("react"));
describe('src/components/app-header/app-header', function () {
    var props = {
        toDo: '',
        done: ''
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should TodoListItemProps mount component', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, props)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsZ0RBQTBCO0FBQzFCLDRFQUEwRTtBQUMxRSwyQ0FBK0I7QUFHL0IsUUFBUSxDQUFDLHNDQUFzQyxFQUFFO0lBRTdDLElBQU0sS0FBSyxHQUFXO1FBQ2xCLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7S0FDWCxDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxhcHAtaGVhZGVyLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86ICcnLFxyXG4gICAgICAgIGRvbmU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il0sInZlcnNpb24iOjN9