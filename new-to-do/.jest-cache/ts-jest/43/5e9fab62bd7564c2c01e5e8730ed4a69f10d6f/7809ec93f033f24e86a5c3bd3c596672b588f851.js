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
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                h2       |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "], ["\n                h2       |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "])), 'more to do,', '2', '1', 'more to do,', '-2', '0', 'more to do,', '23', '431', 'more to do,', '43', '50', 'more to do,', '231213', '3123213')('should check text in AppHeader $h1 and $h2', function (_a) {
        var h2 = _a.h2, toDo = _a.toDo, done = _a.done;
        var currentProps = {
            toDo: toDo,
            done: done
        };
        var wrapper = enzyme_1.mount(React.createElement(app_header_1.AppHeader, __assign({}, currentProps)));
        //When
        expect(wrapper.find('h1').text()).toEqual('My ToDo List');
        expect(toDo + h2 + ' ' + done)
            .toEqual(wrapper.find(' h2').text());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQiwrREFBNkQ7QUFDN0QsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksb01BQUEsOERBRUQsRUFBb0IsS0FBTSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDNUIsS0FIQyxvQkFBb0IsRUFBTSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSwyQkFBMkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxxU0FBQSw0REFFRCxFQUFhLEtBQU0sRUFBRyxXQUFZLEVBQUcsYUFDckMsRUFBYSxLQUFNLEVBQUksVUFBVyxFQUFHLGFBQ3JDLEVBQWEsS0FBTSxFQUFJLFVBQVcsRUFBSyxhQUN2QyxFQUFhLEtBQU0sRUFBSSxVQUFXLEVBQUksYUFDdEMsRUFBYSxLQUFNLEVBQVEsTUFBTyxFQUFTLFlBQzdDLEtBTEUsYUFBYSxFQUFNLEdBQUcsRUFBWSxHQUFHLEVBQ3JDLGFBQWEsRUFBTSxJQUFJLEVBQVcsR0FBRyxFQUNyQyxhQUFhLEVBQU0sSUFBSSxFQUFXLEtBQUssRUFDdkMsYUFBYSxFQUFNLElBQUksRUFBVyxJQUFJLEVBQ3RDLGFBQWEsRUFBTSxRQUFRLEVBQU8sU0FBUyxFQUM1Qyw0Q0FBNEMsRUFBRSxVQUFDLEVBQWtCO1lBQWhCLFVBQUUsRUFBRSxjQUFJLEVBQUUsY0FBSTtRQUNoRSxJQUFNLFlBQVksR0FBVztZQUN6QixJQUFJLE1BQUE7WUFDSixJQUFJLE1BQUE7U0FDUCxDQUFDO1FBQ0YsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQU0sWUFBWSxFQUFLLENBQUMsQ0FBQztRQUV6RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUUsR0FBRyxHQUFHLElBQUksQ0FBQzthQUN4QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBR0gsV0FBVztJQUNYLGdFQUFnRTtJQUNoRSwwREFBMEQ7SUFDMUQsNERBQTREO0lBQzVELDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELDZEQUE2RDtJQUM3RCxzR0FBc0c7SUFDdEcsRUFBRTtJQUNGLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IsRUFBRTtJQUNGLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsRUFBRTtJQUNGLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELEtBQUs7QUFDVCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcYXBwLWhlYWRlci50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IEFwcEhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXIvdHlwZXMtYXBwLWhlYWRlcic7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgdG9EbzogJycsXHJcbiAgICAgICAgZG9uZTogJydcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KEFwcEhlYWRlcikudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyLmQtZmxleCd9IHwgJHsxfVxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyID4gaDEnfSAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyID4gaDInfSAgIHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgaW4gQXBwSGVhZGVyICRleHBlY3RlZENsYXNzJywgKHtleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aH0pID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy/Qv9GA0L7RgtC10YHRgtC40YLRjCDRgtC10LrRgdGCINCyIGgxLCBoMlxyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICAgICAgICAgIGgyICAgICAgIHx0b0RvICAgICAgICAgIHwgZG9uZVxyXG4gICAgICAgICR7J21vcmUgdG8gZG8sJ30gfCAkeycyJ30gICAgICAgfCAkeycxJ30gXHJcbiAgICAgICAgJHsnbW9yZSB0byBkbywnfSB8ICR7Jy0yJ30gICAgICB8ICR7JzAnfSBcclxuICAgICAgICAkeydtb3JlIHRvIGRvLCd9IHwgJHsnMjMnfSAgICAgIHwgJHsnNDMxJ30gXHJcbiAgICAgICAgJHsnbW9yZSB0byBkbywnfSB8ICR7JzQzJ30gICAgICB8ICR7JzUwJ30gXHJcbiAgICAgICAgJHsnbW9yZSB0byBkbywnfSB8ICR7JzIzMTIxMyd9ICB8ICR7JzMxMjMyMTMnfSBcclxuICAgICAgIGAoJ3Nob3VsZCBjaGVjayB0ZXh0IGluIEFwcEhlYWRlciAkaDEgYW5kICRoMicsICh7IGgyLCB0b0RvLCBkb25lIH0pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgdG9EbyxcclxuICAgICAgICAgICAgZG9uZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgeyAuLi5jdXJyZW50UHJvcHMgfSAvPik7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoJ2gxJykudGV4dCgpKS50b0VxdWFsKCdNeSBUb0RvIExpc3QnKTtcclxuICAgICAgICBleHBlY3QodG9EbyArIGgyICsnICcgKyBkb25lKVxyXG4gICAgICAgICAgICAudG9FcXVhbCh3cmFwcGVyLmZpbmQoJyBoMicpLnRleHQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50OiBzdHJpbmcgPSAnJztcclxuICAgICAgICBwb2ludC5sZW5ndGg7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gaXQuZWFjaGBcclxuICAgIC8vICAgICB0b0RvQWN0dWFsICAgIHwgZG9uZUFjdHVhbCB8IHRvRG9FeHBlY3RlZCAgfCBkb25lRXhwZWN0ZWRcclxuICAgIC8vICAgICAkezF9ICAgICAgICAgIHwgJHsyfSAgICAgICB8ICAgJHsxfSAgICAgICAgfCAgICR7Mn1cclxuICAgIC8vICAgICAkeycxJ30gICAgICAgIHwgJHsnMid9ICAgICB8ICAgJHsnMSd9ICAgICAgfCAgICR7JzInfVxyXG4gICAgLy8gICAgICR7LTF9ICAgICAgICAgfCAkey0yfSAgICAgIHwgICAkey0xfSAgICAgICB8ICAgJHstMn1cclxuICAgIC8vICAgICAkezExMjN9ICAgICAgIHwgJHswfSAgICAgICB8ICAgJHsxMTIzfSAgICAgfCAgICR7MH1cclxuICAgIC8vICAgICAkezB9ICAgICAgICAgIHwgJHswfSAgICAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MH1cclxuICAgIC8vICAgICAkezB9ICAgICAgICAgIHwgJHsxMTIzfSAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MTEyM31cclxuICAgIC8vIGAoJ1Nob3VsZCBjaGFuZ2UgcHJvcHMgb2YgQXBwSGVhZGVyJywgKHsgdG9Eb0FjdHVhbCwgZG9uZUFjdHVhbCwgdG9Eb0V4cGVjdGVkLCBkb25lRXhwZWN0ZWQgfSkgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgLy9HaXZlblxyXG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgLy8gICAgICAgIHRvRG86IHRvRG9BY3R1YWwsXHJcbiAgICAvLyAgICAgICAgZG9uZTogZG9uZUFjdHVhbFxyXG4gICAgLy8gICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy9XaGVuXHJcbiAgICAvLyAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAvL1RoZW5cclxuICAgIC8vICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCd0b0RvJykpLnRvRXF1YWwodG9Eb0V4cGVjdGVkKTtcclxuICAgIC8vICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCdkb25lJykpLnRvRXF1YWwoZG9uZUV4cGVjdGVkKTtcclxuICAgIC8vIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==