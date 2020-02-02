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
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                h2       |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "], ["\n                h2       |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "])), ' more to do, ', '2', '1', ' more to do, ', '-2', '0', ' more to do, ', '23', '431', ' more to do, ', '43', '50', ' more to do, ', '231213', '3123213')('should check text in AppHeader $h1 and $h2', function (_a) {
        var h2 = _a.h2, toDo = _a.toDo, done = _a.done;
        var currentProps = {
            toDo: toDo,
            done: done
        };
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //When
        expect(wrapper.find('h1').text()).toEqual('My ToDo List');
        expect(toDo + h2 + done)
            .toEqual(wrapper.find('h2').text());
        var point = '';
        point.length;
    });
    // it.each`
    //     toDoActual    | doneActual | toDoExpected  | doneExpected
    //     ${1}          | ${2}       |   ${1}        |   ${2}
    //     ${'1'}        | ${'2'}     |   ${'1'}      |   ${'2'}
    //     ${-1}         | ${-2}      |   ${-1}       |   ${-2}
    //     ${1123}       | ${0}       |   ${1123}     |   ${0}
    //     ${0}          | ${0}       |   ${0}        |   ${0}
    //     ${0}          | ${1123}    |   ${0}        |   ${1123}
    // `('Should change props of AppHeader', ({ toDoActual, doneActual, toDoExpected, doneExpected }) => {
    //
    //      //Given
    //     const currentProps: IProps = {
    //        toDo: toDoActual,
    //        done: doneActual
    //    };
    //
    //     //When
    //     const wrapper = mount(<AppHeader {...currentProps} />);
    //
    //     //Then
    //     expect(wrapper.prop('toDo')).toEqual(toDoExpected);
    //     expect(wrapper.prop('done')).toEqual(doneExpected);
    // })
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQiwrREFBNkQ7QUFDN0QsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksb01BQUEsOERBRUQsRUFBb0IsS0FBTSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDNUIsS0FIQyxvQkFBb0IsRUFBTSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSwyQkFBMkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxxU0FBQSw0REFFRCxFQUFlLEtBQU0sRUFBRyxXQUFZLEVBQUcsYUFDdkMsRUFBZSxLQUFNLEVBQUksVUFBVyxFQUFHLGFBQ3ZDLEVBQWUsS0FBTSxFQUFJLFVBQVcsRUFBSyxhQUN6QyxFQUFlLEtBQU0sRUFBSSxVQUFXLEVBQUksYUFDeEMsRUFBZSxLQUFNLEVBQVEsTUFBTyxFQUFTLFlBQy9DLEtBTEUsZUFBZSxFQUFNLEdBQUcsRUFBWSxHQUFHLEVBQ3ZDLGVBQWUsRUFBTSxJQUFJLEVBQVcsR0FBRyxFQUN2QyxlQUFlLEVBQU0sSUFBSSxFQUFXLEtBQUssRUFDekMsZUFBZSxFQUFNLElBQUksRUFBVyxJQUFJLEVBQ3hDLGVBQWUsRUFBTSxRQUFRLEVBQU8sU0FBUyxFQUM5Qyw0Q0FBNEMsRUFBRSxVQUFDLEVBQWtCO1lBQWhCLFVBQUUsRUFBRSxjQUFJLEVBQUUsY0FBSTtRQUNoRSxJQUFNLFlBQVksR0FBVztZQUN6QixJQUFJLE1BQUE7WUFDSixJQUFJLE1BQUE7U0FDUCxDQUFDO1FBQ0YsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQU0sWUFBWSxFQUFLLENBQUMsQ0FBQztRQUV6RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFeEMsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFHSCxXQUFXO0lBQ1gsZ0VBQWdFO0lBQ2hFLDBEQUEwRDtJQUMxRCw0REFBNEQ7SUFDNUQsMkRBQTJEO0lBQzNELDBEQUEwRDtJQUMxRCwwREFBMEQ7SUFDMUQsNkRBQTZEO0lBQzdELHNHQUFzRztJQUN0RyxFQUFFO0lBQ0YsZUFBZTtJQUNmLHFDQUFxQztJQUNyQywyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixFQUFFO0lBQ0YsYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCxFQUFFO0lBQ0YsYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCwwREFBMEQ7SUFDMUQsS0FBSztBQUNULENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxhcHAtaGVhZGVyLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvYXBwLWhlYWRlci90eXBlcy1hcHAtaGVhZGVyJztcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyL2FwcC1oZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICB0b0RvOiAnJyxcclxuICAgICAgICBkb25lOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoQXBwSGVhZGVyKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIuZC1mbGV4J30gfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMSd9ICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMid9ICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG5cclxuICAgICAgICAvL9C/0YDQvtGC0LXRgdGC0LjRgtGMINGC0LXQutGB0YIg0LIgaDEsIGgyXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgICAgICAgICAgaDIgICAgICAgfHRvRG8gICAgICAgICAgfCBkb25lXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnMid9ICAgICAgIHwgJHsnMSd9IFxyXG4gICAgICAgICR7JyBtb3JlIHRvIGRvLCAnfSB8ICR7Jy0yJ30gICAgICB8ICR7JzAnfSBcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeycyMyd9ICAgICAgfCAkeyc0MzEnfSBcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeyc0Myd9ICAgICAgfCAkeyc1MCd9IFxyXG4gICAgICAgICR7JyBtb3JlIHRvIGRvLCAnfSB8ICR7JzIzMTIxMyd9ICB8ICR7JzMxMjMyMTMnfSBcclxuICAgICAgIGAoJ3Nob3VsZCBjaGVjayB0ZXh0IGluIEFwcEhlYWRlciAkaDEgYW5kICRoMicsICh7IGgyLCB0b0RvLCBkb25lIH0pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgdG9EbyxcclxuICAgICAgICAgICAgZG9uZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgeyAuLi5jdXJyZW50UHJvcHMgfSAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoJ2gxJykudGV4dCgpKS50b0VxdWFsKCdNeSBUb0RvIExpc3QnKTtcclxuICAgICAgICBleHBlY3QodG9EbyArIGgyICsgZG9uZSlcclxuICAgICAgICAgICAgLnRvRXF1YWwod3JhcHBlci5maW5kKCdoMicpLnRleHQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50OiBzdHJpbmcgPSAnJztcclxuICAgICAgICBwb2ludC5sZW5ndGg7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gaXQuZWFjaGBcclxuICAgIC8vICAgICB0b0RvQWN0dWFsICAgIHwgZG9uZUFjdHVhbCB8IHRvRG9FeHBlY3RlZCAgfCBkb25lRXhwZWN0ZWRcclxuICAgIC8vICAgICAkezF9ICAgICAgICAgIHwgJHsyfSAgICAgICB8ICAgJHsxfSAgICAgICAgfCAgICR7Mn1cclxuICAgIC8vICAgICAkeycxJ30gICAgICAgIHwgJHsnMid9ICAgICB8ICAgJHsnMSd9ICAgICAgfCAgICR7JzInfVxyXG4gICAgLy8gICAgICR7LTF9ICAgICAgICAgfCAkey0yfSAgICAgIHwgICAkey0xfSAgICAgICB8ICAgJHstMn1cclxuICAgIC8vICAgICAkezExMjN9ICAgICAgIHwgJHswfSAgICAgICB8ICAgJHsxMTIzfSAgICAgfCAgICR7MH1cclxuICAgIC8vICAgICAkezB9ICAgICAgICAgIHwgJHswfSAgICAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MH1cclxuICAgIC8vICAgICAkezB9ICAgICAgICAgIHwgJHsxMTIzfSAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MTEyM31cclxuICAgIC8vIGAoJ1Nob3VsZCBjaGFuZ2UgcHJvcHMgb2YgQXBwSGVhZGVyJywgKHsgdG9Eb0FjdHVhbCwgZG9uZUFjdHVhbCwgdG9Eb0V4cGVjdGVkLCBkb25lRXhwZWN0ZWQgfSkgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgLy9HaXZlblxyXG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgLy8gICAgICAgIHRvRG86IHRvRG9BY3R1YWwsXHJcbiAgICAvLyAgICAgICAgZG9uZTogZG9uZUFjdHVhbFxyXG4gICAgLy8gICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy9XaGVuXHJcbiAgICAvLyAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAvL1RoZW5cclxuICAgIC8vICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCd0b0RvJykpLnRvRXF1YWwodG9Eb0V4cGVjdGVkKTtcclxuICAgIC8vICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCdkb25lJykpLnRvRXF1YWwoZG9uZUV4cGVjdGVkKTtcclxuICAgIC8vIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==