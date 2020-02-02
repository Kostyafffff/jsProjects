"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var app_header_1 = require("components/app-header");
describe('src/components/AppHeader', function () {
    it('AppHeader component should be rendered', function () {
        //When
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, null));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQiwyQ0FBK0I7QUFDL0Isb0RBQWtEO0FBRWxELFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUNqQyxFQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDekMsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxzQkFBUyxPQUFHLENBQUMsQ0FBQztRQUVyQyxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcEhlYWRlcicsICgpID0+IHtcclxuICAgIGl0KCdBcHBIZWFkZXIgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCcsICgpID0+IHtcclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=