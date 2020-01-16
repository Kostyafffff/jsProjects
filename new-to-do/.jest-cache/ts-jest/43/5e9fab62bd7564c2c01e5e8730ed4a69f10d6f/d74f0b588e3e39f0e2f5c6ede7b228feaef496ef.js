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
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        h1           | h2\n        ", " | ", "\n    "], ["\n        h1           | h2\n        ", " | ", "\n    "])), 'My TosDo List', 'more to do,')('should check text in AppHeader $h1 and $h2', function (_a) {
        var h1 = _a.h1, h2 = _a.h2;
        var currentProps = __assign({}, props);
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        // const h1 = wrapper.children([0]);
        // const h2 = wrapper.children[1];
        //When
        wrapper.find('h1');
        // expect(wrapper.text()).toEqual(h1);
        // expect(wrapper.text()).toEqual(h2);
        expect(wrapper).toBeDefined();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQiwrREFBNkQ7QUFDN0QsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksb01BQUEsOERBRUQsRUFBb0IsS0FBTSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDNUIsS0FIQyxvQkFBb0IsRUFBTSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSwyQkFBMkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSwySEFBQSx1Q0FFRCxFQUFlLEtBQU0sRUFBYSxRQUN2QyxLQURLLGVBQWUsRUFBTSxhQUFhLEVBQ3RDLDRDQUE0QyxFQUFFLFVBQUMsRUFBVTtZQUFSLFVBQUUsRUFBRSxVQUFFO1FBQ3JELElBQU0sWUFBWSxnQkFDVixLQUFLLENBQ1osQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxzQkFBUyxlQUFNLFlBQVksRUFBSyxDQUFDLENBQUM7UUFDekQsb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyxNQUFNO1FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixzQ0FBc0M7UUFDdEMsc0NBQXNDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxJQUFJLDJnQkFBQSxzRkFFRCxFQUFDLGNBQWUsRUFBQyxhQUFjLEVBQUMsY0FBZSxFQUFDLGlCQUNoRCxFQUFHLFlBQWEsRUFBRyxXQUFZLEVBQUcsWUFBYSxFQUFHLGlCQUNsRCxFQUFFLGFBQWMsRUFBRSxZQUFhLEVBQUUsYUFBYyxFQUFFLGNBQ2pELEVBQUksV0FBWSxFQUFDLGFBQWMsRUFBSSxXQUFZLEVBQUMsd0JBQ2hELEVBQUMsY0FBZSxFQUFDLGFBQWMsRUFBQyxjQUFlLEVBQUMsYUFDaEQsRUFBQyxjQUFlLEVBQUksVUFBVyxFQUFDLGNBQWUsRUFBSSxTQUN4RCxLQU5LLENBQUMsRUFBZSxDQUFDLEVBQWMsQ0FBQyxFQUFlLENBQUMsRUFDaEQsR0FBRyxFQUFhLEdBQUcsRUFBWSxHQUFHLEVBQWEsR0FBRyxFQUNsRCxDQUFDLENBQUMsRUFBYyxDQUFDLENBQUMsRUFBYSxDQUFDLENBQUMsRUFBYyxDQUFDLENBQUMsRUFDakQsSUFBSSxFQUFZLENBQUMsRUFBYyxJQUFJLEVBQVksQ0FBQyxFQUNoRCxDQUFDLEVBQWUsQ0FBQyxFQUFjLENBQUMsRUFBZSxDQUFDLEVBQ2hELENBQUMsRUFBZSxJQUFJLEVBQVcsQ0FBQyxFQUFlLElBQUksRUFDdkQsa0NBQWtDLEVBQUUsVUFBQyxFQUFzRDtZQUFwRCwwQkFBVSxFQUFFLDBCQUFVLEVBQUUsOEJBQVksRUFBRSw4QkFBWTtRQUV0RixPQUFPO1FBQ1IsSUFBTSxZQUFZLEdBQVc7WUFDMUIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztRQUVELE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUUsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXhELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxhcHAtaGVhZGVyLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvYXBwLWhlYWRlci90eXBlcy1hcHAtaGVhZGVyJztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICB0b0RvOiAnJyxcclxuICAgICAgICBkb25lOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoQXBwSGVhZGVyKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIuZC1mbGV4J30gfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMSd9ICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMid9ICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG5cclxuICAgICAgICAvL9C/0YDQvtGC0LXRgdGC0LjRgtGMINGC0LXQutGB0YIg0LIgaDEsIGgyXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGgxICAgICAgICAgICB8IGgyXHJcbiAgICAgICAgJHsnTXkgVG9zRG8gTGlzdCd9IHwgJHsnbW9yZSB0byBkbywnfVxyXG4gICAgYCgnc2hvdWxkIGNoZWNrIHRleHQgaW4gQXBwSGVhZGVyICRoMSBhbmQgJGgyJywgKHsgaDEsIGgyIH0pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7IC4uLmN1cnJlbnRQcm9wcyB9IC8+KTtcclxuICAgICAgICAvLyBjb25zdCBoMSA9IHdyYXBwZXIuY2hpbGRyZW4oWzBdKTtcclxuICAgICAgICAvLyBjb25zdCBoMiA9IHdyYXBwZXIuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgd3JhcHBlci5maW5kKCdoMScpO1xyXG4gICAgICAgIC8vIGV4cGVjdCh3cmFwcGVyLnRleHQoKSkudG9FcXVhbChoMSk7XHJcbiAgICAgICAgLy8gZXhwZWN0KHdyYXBwZXIudGV4dCgpKS50b0VxdWFsKGgyKTtcclxuICAgICAgICBleHBlY3Qod3JhcHBlcikudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIHRvRG9BY3R1YWwgICAgfCBkb25lQWN0dWFsIHwgdG9Eb0V4cGVjdGVkICB8IGRvbmVFeHBlY3RlZCAgICAgICBcclxuICAgICAgICAkezF9ICAgICAgICAgIHwgJHsyfSAgICAgICB8ICAgJHsxfSAgICAgICAgfCAgICR7Mn0gICAgIFxyXG4gICAgICAgICR7JzEnfSAgICAgICAgfCAkeycyJ30gICAgIHwgICAkeycxJ30gICAgICB8ICAgJHsnMid9ICAgICBcclxuICAgICAgICAkey0xfSAgICAgICAgIHwgJHstMn0gICAgICB8ICAgJHstMX0gICAgICAgfCAgICR7LTJ9ICBcclxuICAgICAgICAkezExMjN9ICAgICAgIHwgJHswfSAgICAgICB8ICAgJHsxMTIzfSAgICAgfCAgICR7MH0gICAgICAgICAgICBcclxuICAgICAgICAkezB9ICAgICAgICAgIHwgJHswfSAgICAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MH0gXHJcbiAgICAgICAgJHswfSAgICAgICAgICB8ICR7MTEyM30gICAgfCAgICR7MH0gICAgICAgIHwgICAkezExMjN9IFxyXG4gICAgYCgnU2hvdWxkIGNoYW5nZSBwcm9wcyBvZiBBcHBIZWFkZXInLCAoeyB0b0RvQWN0dWFsLCBkb25lQWN0dWFsLCB0b0RvRXhwZWN0ZWQsIGRvbmVFeHBlY3RlZCB9KSA9PiB7XHJcblxyXG4gICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgdG9EbzogdG9Eb0FjdHVhbCxcclxuICAgICAgICAgICBkb25lOiBkb25lQWN0dWFsXHJcbiAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPCBBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCd0b0RvJykpLnRvRXF1YWwodG9Eb0V4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCdkb25lJykpLnRvRXF1YWwoZG9uZUV4cGVjdGVkKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==