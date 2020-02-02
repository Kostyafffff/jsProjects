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
        expect(h2)
            .toEqual(wrapper.find(toDo + 'h2 ' + done).text());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLGdEQUEwQjtBQUMxQiwrREFBNkQ7QUFDN0QsMkNBQStCO0FBRy9CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUU3QyxJQUFNLEtBQUssR0FBVztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLGVBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNO1FBQ04sTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxPQUFPO1FBQ1AsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUVoRCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksb01BQUEsOERBRUQsRUFBb0IsS0FBTSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDNUIsS0FIQyxvQkFBb0IsRUFBTSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQiwyQ0FBMkMsRUFBRSxVQUFDLEVBQStCO1lBQTlCLGdDQUFhLEVBQUUsa0NBQWM7UUFFOUUsT0FBTztRQUNQLElBQU0sWUFBWSxnQkFDWCxLQUFLLENBQ1gsQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxZQUFZLEVBQUksQ0FBQyxDQUFDO1FBRXZELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSwyQkFBMkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxxU0FBQSw0REFFRCxFQUFhLEtBQU0sRUFBRyxXQUFZLEVBQUcsYUFDckMsRUFBYSxLQUFNLEVBQUksVUFBVyxFQUFHLGFBQ3JDLEVBQWEsS0FBTSxFQUFJLFVBQVcsRUFBSyxhQUN2QyxFQUFhLEtBQU0sRUFBSSxVQUFXLEVBQUksYUFDdEMsRUFBYSxLQUFNLEVBQVEsTUFBTyxFQUFTLFlBQzdDLEtBTEUsYUFBYSxFQUFNLEdBQUcsRUFBWSxHQUFHLEVBQ3JDLGFBQWEsRUFBTSxJQUFJLEVBQVcsR0FBRyxFQUNyQyxhQUFhLEVBQU0sSUFBSSxFQUFXLEtBQUssRUFDdkMsYUFBYSxFQUFNLElBQUksRUFBVyxJQUFJLEVBQ3RDLGFBQWEsRUFBTSxRQUFRLEVBQU8sU0FBUyxFQUM1Qyw0Q0FBNEMsRUFBRSxVQUFDLEVBQWtCO1lBQWhCLFVBQUUsRUFBRSxjQUFJLEVBQUUsY0FBSTtRQUNoRSxJQUFNLFlBQVksR0FBVztZQUN6QixJQUFJLE1BQUE7WUFDSixJQUFJLE1BQUE7U0FDUCxDQUFDO1FBQ0YsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHNCQUFTLGVBQU0sWUFBWSxFQUFLLENBQUMsQ0FBQztRQUV6RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUNMLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV4RCxJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUdILFdBQVc7SUFDWCxnRUFBZ0U7SUFDaEUsMERBQTBEO0lBQzFELDREQUE0RDtJQUM1RCwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDBEQUEwRDtJQUMxRCw2REFBNkQ7SUFDN0Qsc0dBQXNHO0lBQ3RHLEVBQUU7SUFDRixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLEVBQUU7SUFDRixhQUFhO0lBQ2IsOERBQThEO0lBQzlELEVBQUU7SUFDRixhQUFhO0lBQ2IsMERBQTBEO0lBQzFELDBEQUEwRDtJQUMxRCxLQUFLO0FBQ1QsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86ICcnLFxyXG4gICAgICAgIGRvbmU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChBcHBIZWFkZXIpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIFRvZG9MaXN0SXRlbVByb3BzIG1vdW50IGNvbXBvbmVudCcsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLnByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgIGV4cGVjdGVkQ2xhc3MgICAgICAgICAgIHwgZXhwZWN0ZWRMZW5ndGhcclxuICAgICAgICAkeycuYXBwLWhlYWRlci5kLWZsZXgnfSB8ICR7MX1cclxuICAgICAgICAkeycuYXBwLWhlYWRlciA+IGgxJ30gICB8ICR7MX1cclxuICAgICAgICAkeycuYXBwLWhlYWRlciA+IGgyJ30gICB8ICR7MX1cclxuICAgICAgICBgKCdzaG91bGQgcmVuZGVyIGluIEFwcEhlYWRlciAkZXhwZWN0ZWRDbGFzcycsICh7ZXhwZWN0ZWRDbGFzcywgZXhwZWN0ZWRMZW5ndGh9KSA9PiB7XHJcblxyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoZXhwZWN0ZWRDbGFzcykpLnRvSGF2ZUxlbmd0aChleHBlY3RlZExlbmd0aCk7XHJcblxyXG4gICAgICAgIC8v0L/RgNC+0YLQtdGB0YLQuNGC0Ywg0YLQtdC60YHRgiDQsiBoMSwgaDJcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgICAgICAgICBoMiAgICAgICB8dG9EbyAgICAgICAgICB8IGRvbmVcclxuICAgICAgICAkeydtb3JlIHRvIGRvLCd9IHwgJHsnMid9ICAgICAgIHwgJHsnMSd9IFxyXG4gICAgICAgICR7J21vcmUgdG8gZG8sJ30gfCAkeyctMid9ICAgICAgfCAkeycwJ30gXHJcbiAgICAgICAgJHsnbW9yZSB0byBkbywnfSB8ICR7JzIzJ30gICAgICB8ICR7JzQzMSd9IFxyXG4gICAgICAgICR7J21vcmUgdG8gZG8sJ30gfCAkeyc0Myd9ICAgICAgfCAkeyc1MCd9IFxyXG4gICAgICAgICR7J21vcmUgdG8gZG8sJ30gfCAkeycyMzEyMTMnfSAgfCAkeyczMTIzMjEzJ30gXHJcbiAgICAgICBgKCdzaG91bGQgY2hlY2sgdGV4dCBpbiBBcHBIZWFkZXIgJGgxIGFuZCAkaDInLCAoeyBoMiwgdG9EbywgZG9uZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHRvRG8sXHJcbiAgICAgICAgICAgIGRvbmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsgLi4uY3VycmVudFByb3BzIH0gLz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKCdoMScpLnRleHQoKSkudG9FcXVhbCgnTXkgVG9EbyBMaXN0Jyk7XHJcbiAgICAgICAgZXhwZWN0KGgyKVxyXG4gICAgICAgICAgICAudG9FcXVhbCh3cmFwcGVyLmZpbmQodG9EbyArICdoMiAnICsgZG9uZSApLnRleHQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50OiBzdHJpbmcgPSAnJztcclxuICAgICAgICBwb2ludC5sZW5ndGg7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gaXQuZWFjaGBcclxuICAgIC8vICAgICB0b0RvQWN0dWFsICAgIHwgZG9uZUFjdHVhbCB8IHRvRG9FeHBlY3RlZCAgfCBkb25lRXhwZWN0ZWRcclxuICAgIC8vICAgICAkezF9ICAgICAgICAgIHwgJHsyfSAgICAgICB8ICAgJHsxfSAgICAgICAgfCAgICR7Mn1cclxuICAgIC8vICAgICAkeycxJ30gICAgICAgIHwgJHsnMid9ICAgICB8ICAgJHsnMSd9ICAgICAgfCAgICR7JzInfVxyXG4gICAgLy8gICAgICR7LTF9ICAgICAgICAgfCAkey0yfSAgICAgIHwgICAkey0xfSAgICAgICB8ICAgJHstMn1cclxuICAgIC8vICAgICAkezExMjN9ICAgICAgIHwgJHswfSAgICAgICB8ICAgJHsxMTIzfSAgICAgfCAgICR7MH1cclxuICAgIC8vICAgICAkezB9ICAgICAgICAgIHwgJHswfSAgICAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MH1cclxuICAgIC8vICAgICAkezB9ICAgICAgICAgIHwgJHsxMTIzfSAgICB8ICAgJHswfSAgICAgICAgfCAgICR7MTEyM31cclxuICAgIC8vIGAoJ1Nob3VsZCBjaGFuZ2UgcHJvcHMgb2YgQXBwSGVhZGVyJywgKHsgdG9Eb0FjdHVhbCwgZG9uZUFjdHVhbCwgdG9Eb0V4cGVjdGVkLCBkb25lRXhwZWN0ZWQgfSkgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgLy9HaXZlblxyXG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgLy8gICAgICAgIHRvRG86IHRvRG9BY3R1YWwsXHJcbiAgICAvLyAgICAgICAgZG9uZTogZG9uZUFjdHVhbFxyXG4gICAgLy8gICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy9XaGVuXHJcbiAgICAvLyAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAvL1RoZW5cclxuICAgIC8vICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCd0b0RvJykpLnRvRXF1YWwodG9Eb0V4cGVjdGVkKTtcclxuICAgIC8vICAgICBleHBlY3Qod3JhcHBlci5wcm9wKCdkb25lJykpLnRvRXF1YWwoZG9uZUV4cGVjdGVkKTtcclxuICAgIC8vIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==