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
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTZCO0FBQzdCLGdEQUEwQjtBQUMxQiw0RUFBd0U7QUFDeEUsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUUzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxrTkFBQSw4REFFRCxFQUFhLFlBQWEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDM0IsRUFBa0IsT0FBUSxFQUFDLG1CQUU1QixLQUpDLGFBQWEsRUFBYSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUUzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLHdaQUFBLHNGQUVELEVBQUMsY0FBZSxFQUFDLGFBQWMsRUFBQyxjQUFlLEVBQUMsaUJBQ2hELEVBQUcsWUFBYSxFQUFHLFdBQVksRUFBRyxZQUFhLEVBQUcsaUJBQ2xELEVBQUUsYUFBYyxFQUFFLFlBQWEsRUFBRSxhQUFjLEVBQUUsY0FDakQsRUFBQyxjQUFlLEVBQUMsYUFBYyxFQUFDLGNBQWUsRUFBQyxvQkFDckQsS0FKSyxDQUFDLEVBQWUsQ0FBQyxFQUFjLENBQUMsRUFBZSxDQUFDLEVBQ2hELEdBQUcsRUFBYSxHQUFHLEVBQVksR0FBRyxFQUFhLEdBQUcsRUFDbEQsQ0FBQyxDQUFDLEVBQWMsQ0FBQyxDQUFDLEVBQWEsQ0FBQyxDQUFDLEVBQWMsQ0FBQyxDQUFDLEVBQ2pELENBQUMsRUFBZSxDQUFDLEVBQWMsQ0FBQyxFQUFlLENBQUMsRUFDcEQseUJBQXlCLEVBQUUsVUFBQyxFQUFzRDtZQUFwRCwwQkFBVSxFQUFFLDBCQUFVLEVBQUUsOEJBQVksRUFBRSw4QkFBWTtRQUU3RSxPQUFPO1FBQ1IsSUFBTSxZQUFZLEdBQVc7WUFDMUIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztRQUVELE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUUsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXhELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxhcHAtaGVhZGVyLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW91bnR9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7QXBwSGVhZGVyfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SVByb3BzfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86ICcnLFxyXG4gICAgICAgIGRvbmU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChBcHBIZWFkZXIpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXInfSAgICAgICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMSd9ICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMid9ICAgfCAkezF9XHJcbiAgICAgXHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICB0b0RvQWN0dWFsICAgIHwgZG9uZUFjdHVhbCB8IHRvRG9FeHBlY3RlZCAgfCBkb25lRXhwZWN0ZWQgICAgICAgXHJcbiAgICAgICAgJHsxfSAgICAgICAgICB8ICR7Mn0gICAgICAgfCAgICR7MX0gICAgICAgIHwgICAkezJ9ICAgICBcclxuICAgICAgICAkeycxJ30gICAgICAgIHwgJHsnMid9ICAgICB8ICAgJHsnMSd9ICAgICAgfCAgICR7JzEnfSAgICAgXHJcbiAgICAgICAgJHstMX0gICAgICAgICB8ICR7LTJ9ICAgICAgfCAgICR7LTF9ICAgICAgIHwgICAkey0yfSAgXHJcbiAgICAgICAgJHswfSAgICAgICAgICB8ICR7MH0gICAgICAgfCAgICR7MH0gICAgICAgIHwgICAkezB9ICAgICAgICAgICAgXHJcbiAgICBgKCdTaG91bGQgY2hhbmdlIEFwcEhlYWRlcicsICh7IHRvRG9BY3R1YWwsIGRvbmVBY3R1YWwsIHRvRG9FeHBlY3RlZCwgZG9uZUV4cGVjdGVkIH0pID0+IHtcclxuXHJcbiAgICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICB0b0RvOiB0b0RvQWN0dWFsLFxyXG4gICAgICAgICAgIGRvbmU6IGRvbmVBY3R1YWxcclxuICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8IEFwcEhlYWRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ3RvRG8nKSkudG9FcXVhbCh0b0RvRXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ2RvbmUnKSkudG9FcXVhbChkb25lRXhwZWN0ZWQpO1xyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9