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
var app_header_1 = require("components/app-header");
var React = __importStar(require("react"));
describe('src/components/app-header/app-header', function () {
    var props = {
        toDo: 'toDo',
        done: 'done'
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
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                h2         |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "], ["\n                h2         |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "])), ' more to do, ', '2', '1', ' more to do, ', '-2', '0', ' more to do, ', '23', '431', ' more to do, ', '43', '50', ' more to do, ', '231213', '3123213')('should check text in AppHeader $h1 and $h2', function (_a) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGNvbXBvbmVudC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsZ0RBQTBCO0FBQzFCLG9EQUFrRDtBQUNsRCwyQ0FBK0I7QUFHL0IsUUFBUSxDQUFDLHNDQUFzQyxFQUFFO0lBRTdDLElBQU0sS0FBSyxHQUFXO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDZixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMsc0JBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMsc0JBQVMsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWhELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxvTUFBQSw4REFFRCxFQUFvQixLQUFNLEVBQUMsWUFDM0IsRUFBa0IsT0FBUSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUM1QixLQUhDLG9CQUFvQixFQUFNLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQixrQkFBa0IsRUFBUSxDQUFDLEVBQzNCLDJDQUEyQyxFQUFFLFVBQUMsRUFBK0I7WUFBOUIsZ0NBQWEsRUFBRSxrQ0FBYztRQUU5RSxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxzQkFBUyxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFdkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXJFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksdVNBQUEsOERBRUQsRUFBZSxLQUFNLEVBQUcsV0FBWSxFQUFHLGFBQ3ZDLEVBQWUsS0FBTSxFQUFJLFVBQVcsRUFBRyxhQUN2QyxFQUFlLEtBQU0sRUFBSSxVQUFXLEVBQUssYUFDekMsRUFBZSxLQUFNLEVBQUksVUFBVyxFQUFJLGFBQ3hDLEVBQWUsS0FBTSxFQUFRLE1BQU8sRUFBUyxZQUMvQyxLQUxFLGVBQWUsRUFBTSxHQUFHLEVBQVksR0FBRyxFQUN2QyxlQUFlLEVBQU0sSUFBSSxFQUFXLEdBQUcsRUFDdkMsZUFBZSxFQUFNLElBQUksRUFBVyxLQUFLLEVBQ3pDLGVBQWUsRUFBTSxJQUFJLEVBQVcsSUFBSSxFQUN4QyxlQUFlLEVBQU0sUUFBUSxFQUFPLFNBQVMsRUFDOUMsNENBQTRDLEVBQUUsVUFBQyxFQUFrQjtZQUFoQixVQUFFLEVBQUUsY0FBSSxFQUFFLGNBQUk7UUFDaEUsSUFBTSxZQUFZLEdBQVc7WUFDekIsSUFBSSxNQUFBO1lBQ0osSUFBSSxNQUFBO1NBQ1AsQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxzQkFBUyxlQUFNLFlBQVksRUFBSyxDQUFDLENBQUM7UUFFekQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQzthQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBR0gsV0FBVztJQUNYLGdFQUFnRTtJQUNoRSwwREFBMEQ7SUFDMUQsNERBQTREO0lBQzVELDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELDZEQUE2RDtJQUM3RCxzR0FBc0c7SUFDdEcsRUFBRTtJQUNGLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IsRUFBRTtJQUNGLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsRUFBRTtJQUNGLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELEtBQUs7QUFDVCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcY29tcG9uZW50LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXIvdHlwZXMtYXBwLWhlYWRlcic7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgdG9EbzogJ3RvRG8nLFxyXG4gICAgICAgIGRvbmU6ICdkb25lJ1xyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoQXBwSGVhZGVyKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIuZC1mbGV4J30gfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMSd9ICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMid9ICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgICAgICAgICBoMiAgICAgICAgIHx0b0RvICAgICAgICAgIHwgZG9uZVxyXG4gICAgICAgICR7JyBtb3JlIHRvIGRvLCAnfSB8ICR7JzInfSAgICAgICB8ICR7JzEnfSBcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeyctMid9ICAgICAgfCAkeycwJ30gXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnMjMnfSAgICAgIHwgJHsnNDMxJ30gXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnNDMnfSAgICAgIHwgJHsnNTAnfSBcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeycyMzEyMTMnfSAgfCAkeyczMTIzMjEzJ30gXHJcbiAgICAgICBgKCdzaG91bGQgY2hlY2sgdGV4dCBpbiBBcHBIZWFkZXIgJGgxIGFuZCAkaDInLCAoeyBoMiwgdG9EbywgZG9uZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHRvRG8sXHJcbiAgICAgICAgICAgIGRvbmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsgLi4uY3VycmVudFByb3BzIH0gLz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKCdoMScpLnRleHQoKSkudG9FcXVhbCgnTXkgVG9EbyBMaXN0Jyk7XHJcbiAgICAgICAgZXhwZWN0KHRvRG8gKyBoMiArIGRvbmUpXHJcbiAgICAgICAgICAgIC50b0VxdWFsKHdyYXBwZXIuZmluZCgnaDInKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICBjb25zdCBwb2ludDogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgcG9pbnQubGVuZ3RoO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIGl0LmVhY2hgXHJcbiAgICAvLyAgICAgdG9Eb0FjdHVhbCAgICB8IGRvbmVBY3R1YWwgfCB0b0RvRXhwZWN0ZWQgIHwgZG9uZUV4cGVjdGVkXHJcbiAgICAvLyAgICAgJHsxfSAgICAgICAgICB8ICR7Mn0gICAgICAgfCAgICR7MX0gICAgICAgIHwgICAkezJ9XHJcbiAgICAvLyAgICAgJHsnMSd9ICAgICAgICB8ICR7JzInfSAgICAgfCAgICR7JzEnfSAgICAgIHwgICAkeycyJ31cclxuICAgIC8vICAgICAkey0xfSAgICAgICAgIHwgJHstMn0gICAgICB8ICAgJHstMX0gICAgICAgfCAgICR7LTJ9XHJcbiAgICAvLyAgICAgJHsxMTIzfSAgICAgICB8ICR7MH0gICAgICAgfCAgICR7MTEyM30gICAgIHwgICAkezB9XHJcbiAgICAvLyAgICAgJHswfSAgICAgICAgICB8ICR7MH0gICAgICAgfCAgICR7MH0gICAgICAgIHwgICAkezB9XHJcbiAgICAvLyAgICAgJHswfSAgICAgICAgICB8ICR7MTEyM30gICAgfCAgICR7MH0gICAgICAgIHwgICAkezExMjN9XHJcbiAgICAvLyBgKCdTaG91bGQgY2hhbmdlIHByb3BzIG9mIEFwcEhlYWRlcicsICh7IHRvRG9BY3R1YWwsIGRvbmVBY3R1YWwsIHRvRG9FeHBlY3RlZCwgZG9uZUV4cGVjdGVkIH0pID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgIC8vR2l2ZW5cclxuICAgIC8vICAgICBjb25zdCBjdXJyZW50UHJvcHM6IElQcm9wcyA9IHtcclxuICAgIC8vICAgICAgICB0b0RvOiB0b0RvQWN0dWFsLFxyXG4gICAgLy8gICAgICAgIGRvbmU6IGRvbmVBY3R1YWxcclxuICAgIC8vICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vV2hlblxyXG4gICAgLy8gICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy9UaGVuXHJcbiAgICAvLyAgICAgZXhwZWN0KHdyYXBwZXIucHJvcCgndG9EbycpKS50b0VxdWFsKHRvRG9FeHBlY3RlZCk7XHJcbiAgICAvLyAgICAgZXhwZWN0KHdyYXBwZXIucHJvcCgnZG9uZScpKS50b0VxdWFsKGRvbmVFeHBlY3RlZCk7XHJcbiAgICAvLyB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=