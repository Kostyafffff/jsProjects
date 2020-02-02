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
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        h1           | h2\n        ", " | ", "\n    "], ["\n        h1           | h2\n        ", " | ", "\n    "])), 'My ToDo List', 'more to do,')('should check text in AppHeader $h1 and $h2', function (_a) {
        var h1 = _a.h1, h2 = _a.h2;
        var currentProps = __assign({}, props);
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //When
        expect(h1.trim()).toEqual(wrapper.find('h1').text());
        expect(h2.trim()).toEqual(wrapper.find('h2').text());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQiwrREFBNkQ7QUFDN0QsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksb01BQUEsOERBRUQsRUFBb0IsS0FBTSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDNUIsS0FIQyxvQkFBb0IsRUFBTSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSwyQkFBMkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSwySEFBQSx1Q0FFRCxFQUFjLEtBQU0sRUFBYSxRQUN0QyxLQURLLGNBQWMsRUFBTSxhQUFhLEVBQ3JDLDRDQUE0QyxFQUFFLFVBQUMsRUFBVTtZQUFSLFVBQUUsRUFBRSxVQUFFO1FBQ3JELElBQU0sWUFBWSxnQkFDVixLQUFLLENBQ1osQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxzQkFBUyxlQUFNLFlBQVksRUFBSyxDQUFDLENBQUM7UUFFekQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRXpELENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLElBQUksMmdCQUFBLHNGQUVELEVBQUMsY0FBZSxFQUFDLGFBQWMsRUFBQyxjQUFlLEVBQUMsaUJBQ2hELEVBQUcsWUFBYSxFQUFHLFdBQVksRUFBRyxZQUFhLEVBQUcsaUJBQ2xELEVBQUUsYUFBYyxFQUFFLFlBQWEsRUFBRSxhQUFjLEVBQUUsY0FDakQsRUFBSSxXQUFZLEVBQUMsYUFBYyxFQUFJLFdBQVksRUFBQyx3QkFDaEQsRUFBQyxjQUFlLEVBQUMsYUFBYyxFQUFDLGNBQWUsRUFBQyxhQUNoRCxFQUFDLGNBQWUsRUFBSSxVQUFXLEVBQUMsY0FBZSxFQUFJLFNBQ3hELEtBTkssQ0FBQyxFQUFlLENBQUMsRUFBYyxDQUFDLEVBQWUsQ0FBQyxFQUNoRCxHQUFHLEVBQWEsR0FBRyxFQUFZLEdBQUcsRUFBYSxHQUFHLEVBQ2xELENBQUMsQ0FBQyxFQUFjLENBQUMsQ0FBQyxFQUFhLENBQUMsQ0FBQyxFQUFjLENBQUMsQ0FBQyxFQUNqRCxJQUFJLEVBQVksQ0FBQyxFQUFjLElBQUksRUFBWSxDQUFDLEVBQ2hELENBQUMsRUFBZSxDQUFDLEVBQWMsQ0FBQyxFQUFlLENBQUMsRUFDaEQsQ0FBQyxFQUFlLElBQUksRUFBVyxDQUFDLEVBQWUsSUFBSSxFQUN2RCxrQ0FBa0MsRUFBRSxVQUFDLEVBQXNEO1lBQXBELDBCQUFVLEVBQUUsMEJBQVUsRUFBRSw4QkFBWSxFQUFFLDhCQUFZO1FBRXRGLE9BQU87UUFDUixJQUFNLFlBQVksR0FBVztZQUMxQixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsVUFBVTtTQUNuQixDQUFDO1FBRUQsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBRSxzQkFBUyxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFeEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86ICcnLFxyXG4gICAgICAgIGRvbmU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChBcHBIZWFkZXIpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuYXBwLWhlYWRlci5kLWZsZXgnfSB8ICR7MX1cclxuICAgICAgICAkeycuYXBwLWhlYWRlciA+IGgxJ30gICB8ICR7MX1cclxuICAgICAgICAkeycuYXBwLWhlYWRlciA+IGgyJ30gICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyIGluIEFwcEhlYWRlciAkZXhwZWN0ZWRDbGFzcycsICh7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9KSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcblxyXG4gICAgICAgIC8v0L/RgNC+0YLQtdGB0YLQuNGC0Ywg0YLQtdC60YHRgiDQsiBoMSwgaDJcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgaDEgICAgICAgICAgIHwgaDJcclxuICAgICAgICAkeydNeSBUb0RvIExpc3QnfSB8ICR7J21vcmUgdG8gZG8sJ31cclxuICAgIGAoJ3Nob3VsZCBjaGVjayB0ZXh0IGluIEFwcEhlYWRlciAkaDEgYW5kICRoMicsICh7IGgxLCBoMiB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgeyAuLi5jdXJyZW50UHJvcHMgfSAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGV4cGVjdChoMS50cmltKCkpLnRvRXF1YWwod3JhcHBlci5maW5kKCdoMScpLnRleHQoKSk7XHJcbiAgICAgICAgZXhwZWN0KGgyLnRyaW0oKSkudG9FcXVhbCh3cmFwcGVyLmZpbmQoJ2gyJykudGV4dCgpKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICB0b0RvQWN0dWFsICAgIHwgZG9uZUFjdHVhbCB8IHRvRG9FeHBlY3RlZCAgfCBkb25lRXhwZWN0ZWQgICAgICAgXHJcbiAgICAgICAgJHsxfSAgICAgICAgICB8ICR7Mn0gICAgICAgfCAgICR7MX0gICAgICAgIHwgICAkezJ9ICAgICBcclxuICAgICAgICAkeycxJ30gICAgICAgIHwgJHsnMid9ICAgICB8ICAgJHsnMSd9ICAgICAgfCAgICR7JzInfSAgICAgXHJcbiAgICAgICAgJHstMX0gICAgICAgICB8ICR7LTJ9ICAgICAgfCAgICR7LTF9ICAgICAgIHwgICAkey0yfSAgXHJcbiAgICAgICAgJHsxMTIzfSAgICAgICB8ICR7MH0gICAgICAgfCAgICR7MTEyM30gICAgIHwgICAkezB9ICAgICAgICAgICAgXHJcbiAgICAgICAgJHswfSAgICAgICAgICB8ICR7MH0gICAgICAgfCAgICR7MH0gICAgICAgIHwgICAkezB9IFxyXG4gICAgICAgICR7MH0gICAgICAgICAgfCAkezExMjN9ICAgIHwgICAkezB9ICAgICAgICB8ICAgJHsxMTIzfSBcclxuICAgIGAoJ1Nob3VsZCBjaGFuZ2UgcHJvcHMgb2YgQXBwSGVhZGVyJywgKHsgdG9Eb0FjdHVhbCwgZG9uZUFjdHVhbCwgdG9Eb0V4cGVjdGVkLCBkb25lRXhwZWN0ZWQgfSkgPT4ge1xyXG5cclxuICAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgICAgIHRvRG86IHRvRG9BY3R1YWwsXHJcbiAgICAgICAgICAgZG9uZTogZG9uZUFjdHVhbFxyXG4gICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDwgQXBwSGVhZGVyIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIucHJvcCgndG9EbycpKS50b0VxdWFsKHRvRG9FeHBlY3RlZCk7XHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIucHJvcCgnZG9uZScpKS50b0VxdWFsKGRvbmVFeHBlY3RlZCk7XHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=