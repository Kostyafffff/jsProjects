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
    it('should be defined', function () {
        //Then
        expect(app_header_1.AppHeader).toBeDefined();
    });
    it('should TodoListItemProps mount component', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, props)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass           | expectedLength\n        ", "        | ", "\n        ", "   | ", "\n        ", "   | ", "\n     \n        "], ["\n        expectedClass           | expectedLength\n        ", "        | ", "\n        ", "   | ", "\n        ", "   | ", "\n     \n        "])), '.app-header', 1, '.app-header > h1', 1, '.app-header > h2', 1)('should render in AppHeader $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        toDoActual    | doneActual | toDoExpected  | doneExpected       \n        ", "          | ", "       |   ", "        |   ", "     \n        ", "        | ", "     |   ", "      |   ", "     \n        ", "         | ", "      |   ", "       |   ", "  \n        ", "          | ", "       |   ", "        |   ", "            \n    "], ["\n        toDoActual    | doneActual | toDoExpected  | doneExpected       \n        ", "          | ", "       |   ", "        |   ", "     \n        ", "        | ", "     |   ", "      |   ", "     \n        ", "         | ", "      |   ", "       |   ", "  \n        ", "          | ", "       |   ", "        |   ", "            \n    "])), 1, 2, 1, 2, '1', '2', '1', '1', -1, -2, -1, -2, 0, 0, 0, 0)('Should change AppHeader', function (_a) {
        var toDo = _a.toDo, done = _a.done, toDoExpected = _a.toDoExpected, doneExpected = _a.doneExpected;
        //Given
        var currentProps = {
            toDo: toDo,
            done: done
        };
        //When
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //Then
        expect(wrapper.prop('toDo')).toEqual(toDoExpected);
        expect(wrapper.prop('done')).toEqual(doneExpected);
    });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTZCO0FBQzdCLGdEQUEwQjtBQUMxQiw0RUFBd0U7QUFDeEUsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUUzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxrTkFBQSw4REFFRCxFQUFhLFlBQWEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDM0IsRUFBa0IsT0FBUSxFQUFDLG1CQUU1QixLQUpDLGFBQWEsRUFBYSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUUzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLHdaQUFBLHNGQUVELEVBQUMsY0FBZSxFQUFDLGFBQWMsRUFBQyxjQUFlLEVBQUMsaUJBQ2hELEVBQUcsWUFBYSxFQUFHLFdBQVksRUFBRyxZQUFhLEVBQUcsaUJBQ2xELEVBQUUsYUFBYyxFQUFFLFlBQWEsRUFBRSxhQUFjLEVBQUUsY0FDakQsRUFBQyxjQUFlLEVBQUMsYUFBYyxFQUFDLGNBQWUsRUFBQyxvQkFDckQsS0FKSyxDQUFDLEVBQWUsQ0FBQyxFQUFjLENBQUMsRUFBZSxDQUFDLEVBQ2hELEdBQUcsRUFBYSxHQUFHLEVBQVksR0FBRyxFQUFhLEdBQUcsRUFDbEQsQ0FBQyxDQUFDLEVBQWMsQ0FBQyxDQUFDLEVBQWEsQ0FBQyxDQUFDLEVBQWMsQ0FBQyxDQUFDLEVBQ2pELENBQUMsRUFBZSxDQUFDLEVBQWMsQ0FBQyxFQUFlLENBQUMsRUFDcEQseUJBQXlCLEVBQUUsVUFBQyxFQUEwQztZQUF4QyxjQUFJLEVBQUUsY0FBSSxFQUFFLDhCQUFZLEVBQUUsOEJBQVk7UUFFakUsT0FBTztRQUNSLElBQU0sWUFBWSxHQUFXO1lBQzFCLElBQUksTUFBQTtZQUNKLElBQUksTUFBQTtTQUNQLENBQUM7UUFFRCxNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFFLHNCQUFTLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQTtRQUV2RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcYXBwLWhlYWRlci50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vdW50fSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQge0FwcEhlYWRlcn0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0lQcm9wc30gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlci90eXBlcy1hcHAtaGVhZGVyJztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICB0b0RvOiAnJyxcclxuICAgICAgICBkb25lOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoQXBwSGVhZGVyKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyJ30gICAgICAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyID4gaDEnfSAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyID4gaDInfSAgIHwgJHsxfVxyXG4gICAgIFxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgaW4gQXBwSGVhZGVyICRleHBlY3RlZENsYXNzJywgKHtleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aH0pID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgdG9Eb0FjdHVhbCAgICB8IGRvbmVBY3R1YWwgfCB0b0RvRXhwZWN0ZWQgIHwgZG9uZUV4cGVjdGVkICAgICAgIFxyXG4gICAgICAgICR7MX0gICAgICAgICAgfCAkezJ9ICAgICAgIHwgICAkezF9ICAgICAgICB8ICAgJHsyfSAgICAgXHJcbiAgICAgICAgJHsnMSd9ICAgICAgICB8ICR7JzInfSAgICAgfCAgICR7JzEnfSAgICAgIHwgICAkeycxJ30gICAgIFxyXG4gICAgICAgICR7LTF9ICAgICAgICAgfCAkey0yfSAgICAgIHwgICAkey0xfSAgICAgICB8ICAgJHstMn0gIFxyXG4gICAgICAgICR7MH0gICAgICAgICAgfCAkezB9ICAgICAgIHwgICAkezB9ICAgICAgICB8ICAgJHswfSAgICAgICAgICAgIFxyXG4gICAgYCgnU2hvdWxkIGNoYW5nZSBBcHBIZWFkZXInLCAoeyB0b0RvLCBkb25lLCB0b0RvRXhwZWN0ZWQsIGRvbmVFeHBlY3RlZCB9KSA9PiB7XHJcblxyXG4gICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgdG9EbyxcclxuICAgICAgICAgICBkb25lXHJcbiAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPCBBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pXHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ3RvRG8nKSkudG9FcXVhbCh0b0RvRXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ2RvbmUnKSkudG9FcXVhbChkb25lRXhwZWN0ZWQpO1xyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9