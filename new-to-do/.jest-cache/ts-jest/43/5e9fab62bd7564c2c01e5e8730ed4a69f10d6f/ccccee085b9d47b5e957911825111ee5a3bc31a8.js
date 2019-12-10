"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var app_header_1 = require("components/app-header/app-header");
var React = __importStar(require("react"));
describe('src/components/app-header/app-header', function () {
    var props = {
        toDo: '',
        done: ''
    };
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('should be defined', function () {
        //Then
        expect(app_header_1.AppHeader).toBeDefined();
    });
    it('should TodoListItemProps mount component', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass           | expectedLength\n        ", " | ", "\n        ", "   | ", "\n        ", "   | ", "\n        "], ["\n        expectedClass           | expectedLength\n        ", " | ", "\n        ", "   | ", "\n        ", "   | ", "\n        "])), '.app-header.d-flex', 1, '.app-header > h1', 1, '.app-header > h2', 1)('should render in AppHeader $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
        //протестить текст в h1, h2
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        h1                | h2\n        ", " | ", "\n    "], ["\n        h1                | h2\n        ", " | ", "\n    "])), 'My ToDo List', 'more to do,')('should check text in AppHeader $h1 and $h2', function (_a) {
        var h1 = _a.h1, h2 = _a.h2;
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.shallow(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        expect(wrapper.text()).toEqual('My ToDo List');
        expect(wrapper.text()).toEqual('more to do');
    });
    it.each(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        toDoActual    | doneActual | toDoExpected  | doneExpected       \n        ", "          | ", "       |   ", "        |   ", "     \n        ", "        | ", "     |   ", "      |   ", "     \n        ", "         | ", "      |   ", "       |   ", "  \n        ", "       | ", "       |   ", "     |   ", "            \n        ", "          | ", "       |   ", "        |   ", " \n        ", "          | ", "    |   ", "        |   ", " \n    "], ["\n        toDoActual    | doneActual | toDoExpected  | doneExpected       \n        ", "          | ", "       |   ", "        |   ", "     \n        ", "        | ", "     |   ", "      |   ", "     \n        ", "         | ", "      |   ", "       |   ", "  \n        ", "       | ", "       |   ", "     |   ", "            \n        ", "          | ", "       |   ", "        |   ", " \n        ", "          | ", "    |   ", "        |   ", " \n    "])), 1, 2, 1, 2, '1', '2', '1', '2', -1, -2, -1, -2, 1123, 0, 1123, 0, 0, 0, 0, 0, 0, 1123, 0, 1123)('Should change props of AppHeader', function (_a) {
        var toDoActual = _a.toDoActual, doneActual = _a.doneActual, toDoExpected = _a.toDoExpected, doneExpected = _a.doneExpected;
        //Given
        var currentProps = {
            toDo: toDoActual,
            done: doneActual
        };
        //When
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //Then
        expect(wrapper.prop('toDo')).toEqual(toDoExpected);
        expect(wrapper.prop('done')).toEqual(doneExpected);
    });
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQXNDO0FBQ3RDLGdEQUEwQjtBQUMxQiwrREFBNkQ7QUFDN0QsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksb01BQUEsOERBRUQsRUFBb0IsS0FBTSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDNUIsS0FIQyxvQkFBb0IsRUFBTSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSwyQkFBMkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxnSUFBQSw0Q0FFRCxFQUFjLEtBQU0sRUFBYSxRQUN0QyxLQURLLGNBQWMsRUFBTSxhQUFhLEVBQ3JDLDRDQUE0QyxFQUFFLFVBQUMsRUFBVTtZQUFSLFVBQUUsRUFBRSxVQUFFO1FBQ3JELElBQU0sWUFBWSxnQkFDVixLQUFLLENBQ1osQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsSUFBSSwyZ0JBQUEsc0ZBRUQsRUFBQyxjQUFlLEVBQUMsYUFBYyxFQUFDLGNBQWUsRUFBQyxpQkFDaEQsRUFBRyxZQUFhLEVBQUcsV0FBWSxFQUFHLFlBQWEsRUFBRyxpQkFDbEQsRUFBRSxhQUFjLEVBQUUsWUFBYSxFQUFFLGFBQWMsRUFBRSxjQUNqRCxFQUFJLFdBQVksRUFBQyxhQUFjLEVBQUksV0FBWSxFQUFDLHdCQUNoRCxFQUFDLGNBQWUsRUFBQyxhQUFjLEVBQUMsY0FBZSxFQUFDLGFBQ2hELEVBQUMsY0FBZSxFQUFJLFVBQVcsRUFBQyxjQUFlLEVBQUksU0FDeEQsS0FOSyxDQUFDLEVBQWUsQ0FBQyxFQUFjLENBQUMsRUFBZSxDQUFDLEVBQ2hELEdBQUcsRUFBYSxHQUFHLEVBQVksR0FBRyxFQUFhLEdBQUcsRUFDbEQsQ0FBQyxDQUFDLEVBQWMsQ0FBQyxDQUFDLEVBQWEsQ0FBQyxDQUFDLEVBQWMsQ0FBQyxDQUFDLEVBQ2pELElBQUksRUFBWSxDQUFDLEVBQWMsSUFBSSxFQUFZLENBQUMsRUFDaEQsQ0FBQyxFQUFlLENBQUMsRUFBYyxDQUFDLEVBQWUsQ0FBQyxFQUNoRCxDQUFDLEVBQWUsSUFBSSxFQUFXLENBQUMsRUFBZSxJQUFJLEVBQ3ZELGtDQUFrQyxFQUFFLFVBQUMsRUFBc0Q7WUFBcEQsMEJBQVUsRUFBRSwwQkFBVSxFQUFFLDhCQUFZLEVBQUUsOEJBQVk7UUFFdEYsT0FBTztRQUNSLElBQU0sWUFBWSxHQUFXO1lBQzFCLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7UUFFRCxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFFLHNCQUFTLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUV4RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcYXBwLWhlYWRlci50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vdW50LCBzaGFsbG93fSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86ICcnLFxyXG4gICAgICAgIGRvbmU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChBcHBIZWFkZXIpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuYXBwLWhlYWRlci5kLWZsZXgnfSB8ICR7MX1cclxuICAgICAgICAkeycuYXBwLWhlYWRlciA+IGgxJ30gICB8ICR7MX1cclxuICAgICAgICAkeycuYXBwLWhlYWRlciA+IGgyJ30gICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyIGluIEFwcEhlYWRlciAkZXhwZWN0ZWRDbGFzcycsICh7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9KSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcblxyXG4gICAgICAgIC8v0L/RgNC+0YLQtdGB0YLQuNGC0Ywg0YLQtdC60YHRgiDQsiBoMSwgaDJcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgaDEgICAgICAgICAgICAgICAgfCBoMlxyXG4gICAgICAgICR7J015IFRvRG8gTGlzdCd9IHwgJHsnbW9yZSB0byBkbywnfVxyXG4gICAgYCgnc2hvdWxkIGNoZWNrIHRleHQgaW4gQXBwSGVhZGVyICRoMSBhbmQgJGgyJywgKHsgaDEsIGgyIH0pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPEFwcEhlYWRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpKS50b0VxdWFsKCdNeSBUb0RvIExpc3QnKTtcclxuICAgICAgICBleHBlY3Qod3JhcHBlci50ZXh0KCkpLnRvRXF1YWwoJ21vcmUgdG8gZG8nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIHRvRG9BY3R1YWwgICAgfCBkb25lQWN0dWFsIHwgdG9Eb0V4cGVjdGVkICB8IGRvbmVFeHBlY3RlZCAgICAgICBcclxuICAgICAgICAkezF9ICAgICAgICAgIHwgJHsyfSAgICAgICB8ICAgJHsxfSAgICAgICAgfCAgICR7Mn0gICAgIFxyXG4gICAgICAgICR7JzEnfSAgICAgICAgfCAkeycyJ30gICAgIHwgICAkeycxJ30gICAgICB8ICAgJHsnMid9ICAgICBcclxuICAgICAgICAkey0xfSAgICAgICAgIHwgJHstMn0gICAgICB8ICAgJHstMX0gICAgICAgfCAgICR7LTJ9ICBcclxuICAgICAgICAkezExMjN9ICAgICAgIHwgJHswfSAgICAgICB8ICAgJHsxMTIzfSAgICAgfCAgICR7MH0gICAgICAgICAgICBcclxuICAgICAgICAkezB9ICAgICAgICAgIHwgJHswfSAgICAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MH0gXHJcbiAgICAgICAgJHswfSAgICAgICAgICB8ICR7MTEyM30gICAgfCAgICR7MH0gICAgICAgIHwgICAkezExMjN9IFxyXG4gICAgYCgnU2hvdWxkIGNoYW5nZSBwcm9wcyBvZiBBcHBIZWFkZXInLCAoeyB0b0RvQWN0dWFsLCBkb25lQWN0dWFsLCB0b0RvRXhwZWN0ZWQsIGRvbmVFeHBlY3RlZCB9KSA9PiB7XHJcblxyXG4gICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgdG9EbzogdG9Eb0FjdHVhbCxcclxuICAgICAgICAgICBkb25lOiBkb25lQWN0dWFsXHJcbiAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPCBBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCd0b0RvJykpLnRvRXF1YWwodG9Eb0V4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCdkb25lJykpLnRvRXF1YWwoZG9uZUV4cGVjdGVkKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==