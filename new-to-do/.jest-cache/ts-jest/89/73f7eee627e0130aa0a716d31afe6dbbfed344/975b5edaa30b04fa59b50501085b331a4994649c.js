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
var component_1 = require("components/app-header/component");
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
        expect(component_1.AppHeader).toBeDefined();
    });
    it('should TodoListItemProps mount component', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(component_1.AppHeader, __assign({}, props)));
        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        expectedClass           | expectedLength\n        ", " | ", "\n        ", "   | ", "\n        ", "   | ", "\n        "], ["\n        expectedClass           | expectedLength\n        ", " | ", "\n        ", "   | ", "\n        ", "   | ", "\n        "])), '.app-header.d-flex', 1, '.app-header > h1', 1, '.app-header > h2', 1)('should render in AppHeader $expectedClass', function (_a) {
        var expectedClass = _a.expectedClass, expectedLength = _a.expectedLength;
        //Given
        var currentProps = __assign({}, props);
        //When
        var wrapper = enzyme_1.mount(React.createElement(component_1.AppHeader, __assign({}, currentProps)));
        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                h2         |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "], ["\n                h2         |toDo          | done\n        ", " | ", "       | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "      | ", " \n        ", " | ", "  | ", " \n       "])), ' more to do, ', '2', '1', ' more to do, ', '-2', '0', ' more to do, ', '23', '431', ' more to do, ', '43', '50', ' more to do, ', '231213', '3123213')('should check text in AppHeader $h1 and $h2', function (_a) {
        var h2 = _a.h2, toDo = _a.toDo, done = _a.done;
        var currentProps = {
            toDo: toDo,
            done: done
        };
        var wrapper = enzyme_1.mount(React.createElement(component_1.AppHeader, __assign({}, currentProps)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGNvbXBvbmVudC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBK0I7QUFDL0IsZ0RBQTBCO0FBQzFCLDZEQUE0RDtBQUM1RCwyQ0FBK0I7QUFHL0IsUUFBUSxDQUFDLHNDQUFzQyxFQUFFO0lBRTdDLElBQU0sS0FBSyxHQUFXO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDZixDQUFDO0lBRUYsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU07UUFDTixNQUFNLENBQUMscUJBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLE9BQU87UUFDUCxJQUFNLE9BQU8sR0FBRyxjQUFLLENBQUMsb0JBQUMscUJBQVMsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBRWhELE1BQU07UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSxvTUFBQSw4REFFRCxFQUFvQixLQUFNLEVBQUMsWUFDM0IsRUFBa0IsT0FBUSxFQUFDLFlBQzNCLEVBQWtCLE9BQVEsRUFBQyxZQUM1QixLQUhDLG9CQUFvQixFQUFNLENBQUMsRUFDM0Isa0JBQWtCLEVBQVEsQ0FBQyxFQUMzQixrQkFBa0IsRUFBUSxDQUFDLEVBQzNCLDJDQUEyQyxFQUFFLFVBQUMsRUFBK0I7WUFBOUIsZ0NBQWEsRUFBRSxrQ0FBYztRQUU5RSxPQUFPO1FBQ1AsSUFBTSxZQUFZLGdCQUNYLEtBQUssQ0FDWCxDQUFDO1FBRUYsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxxQkFBUyxlQUFLLFlBQVksRUFBSSxDQUFDLENBQUM7UUFFdkQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXJFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLElBQUksdVNBQUEsOERBRUQsRUFBZSxLQUFNLEVBQUcsV0FBWSxFQUFHLGFBQ3ZDLEVBQWUsS0FBTSxFQUFJLFVBQVcsRUFBRyxhQUN2QyxFQUFlLEtBQU0sRUFBSSxVQUFXLEVBQUssYUFDekMsRUFBZSxLQUFNLEVBQUksVUFBVyxFQUFJLGFBQ3hDLEVBQWUsS0FBTSxFQUFRLE1BQU8sRUFBUyxZQUMvQyxLQUxFLGVBQWUsRUFBTSxHQUFHLEVBQVksR0FBRyxFQUN2QyxlQUFlLEVBQU0sSUFBSSxFQUFXLEdBQUcsRUFDdkMsZUFBZSxFQUFNLElBQUksRUFBVyxLQUFLLEVBQ3pDLGVBQWUsRUFBTSxJQUFJLEVBQVcsSUFBSSxFQUN4QyxlQUFlLEVBQU0sUUFBUSxFQUFPLFNBQVMsRUFDOUMsNENBQTRDLEVBQUUsVUFBQyxFQUFrQjtZQUFoQixVQUFFLEVBQUUsY0FBSSxFQUFFLGNBQUk7UUFDaEUsSUFBTSxZQUFZLEdBQVc7WUFDekIsSUFBSSxNQUFBO1lBQ0osSUFBSSxNQUFBO1NBQ1AsQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxxQkFBUyxlQUFNLFlBQVksRUFBSyxDQUFDLENBQUM7UUFFekQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQzthQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBR0gsV0FBVztJQUNYLGdFQUFnRTtJQUNoRSwwREFBMEQ7SUFDMUQsNERBQTREO0lBQzVELDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELDZEQUE2RDtJQUM3RCxzR0FBc0c7SUFDdEcsRUFBRTtJQUNGLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IsRUFBRTtJQUNGLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsRUFBRTtJQUNGLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELEtBQUs7QUFDVCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcY29tcG9uZW50LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcclxuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgQXBwSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL2NvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86ICd0b0RvJyxcclxuICAgICAgICBkb25lOiAnZG9uZSdcclxuICAgIH07XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KEFwcEhlYWRlcikudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgVG9kb0xpc3RJdGVtUHJvcHMgbW91bnQgY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4ucHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuaXNFbXB0eVJlbmRlcigpKS50b0JlRmFsc3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgZXhwZWN0ZWRDbGFzcyAgICAgICAgICAgfCBleHBlY3RlZExlbmd0aFxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyLmQtZmxleCd9IHwgJHsxfVxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyID4gaDEnfSAgIHwgJHsxfVxyXG4gICAgICAgICR7Jy5hcHAtaGVhZGVyID4gaDInfSAgIHwgJHsxfVxyXG4gICAgICAgIGAoJ3Nob3VsZCByZW5kZXIgaW4gQXBwSGVhZGVyICRleHBlY3RlZENsYXNzJywgKHtleHBlY3RlZENsYXNzLCBleHBlY3RlZExlbmd0aH0pID0+IHtcclxuXHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5jdXJyZW50UHJvcHN9IC8+KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZChleHBlY3RlZENsYXNzKSkudG9IYXZlTGVuZ3RoKGV4cGVjdGVkTGVuZ3RoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdC5lYWNoYFxyXG4gICAgICAgICAgICAgICAgaDIgICAgICAgICB8dG9EbyAgICAgICAgICB8IGRvbmVcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeycyJ30gICAgICAgfCAkeycxJ30gXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnLTInfSAgICAgIHwgJHsnMCd9IFxyXG4gICAgICAgICR7JyBtb3JlIHRvIGRvLCAnfSB8ICR7JzIzJ30gICAgICB8ICR7JzQzMSd9IFxyXG4gICAgICAgICR7JyBtb3JlIHRvIGRvLCAnfSB8ICR7JzQzJ30gICAgICB8ICR7JzUwJ30gXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnMjMxMjEzJ30gIHwgJHsnMzEyMzIxMyd9IFxyXG4gICAgICAgYCgnc2hvdWxkIGNoZWNrIHRleHQgaW4gQXBwSGVhZGVyICRoMSBhbmQgJGgyJywgKHsgaDIsIHRvRG8sIGRvbmUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgICAgICB0b0RvLFxyXG4gICAgICAgICAgICBkb25lXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7IC4uLmN1cnJlbnRQcm9wcyB9IC8+KTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgZXhwZWN0KHdyYXBwZXIuZmluZCgnaDEnKS50ZXh0KCkpLnRvRXF1YWwoJ015IFRvRG8gTGlzdCcpO1xyXG4gICAgICAgIGV4cGVjdCh0b0RvICsgaDIgKyBkb25lKVxyXG4gICAgICAgICAgICAudG9FcXVhbCh3cmFwcGVyLmZpbmQoJ2gyJykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnQ6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHBvaW50Lmxlbmd0aDtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBpdC5lYWNoYFxyXG4gICAgLy8gICAgIHRvRG9BY3R1YWwgICAgfCBkb25lQWN0dWFsIHwgdG9Eb0V4cGVjdGVkICB8IGRvbmVFeHBlY3RlZFxyXG4gICAgLy8gICAgICR7MX0gICAgICAgICAgfCAkezJ9ICAgICAgIHwgICAkezF9ICAgICAgICB8ICAgJHsyfVxyXG4gICAgLy8gICAgICR7JzEnfSAgICAgICAgfCAkeycyJ30gICAgIHwgICAkeycxJ30gICAgICB8ICAgJHsnMid9XHJcbiAgICAvLyAgICAgJHstMX0gICAgICAgICB8ICR7LTJ9ICAgICAgfCAgICR7LTF9ICAgICAgIHwgICAkey0yfVxyXG4gICAgLy8gICAgICR7MTEyM30gICAgICAgfCAkezB9ICAgICAgIHwgICAkezExMjN9ICAgICB8ICAgJHswfVxyXG4gICAgLy8gICAgICR7MH0gICAgICAgICAgfCAkezB9ICAgICAgIHwgICAkezB9ICAgICAgICB8ICAgJHswfVxyXG4gICAgLy8gICAgICR7MH0gICAgICAgICAgfCAkezExMjN9ICAgIHwgICAkezB9ICAgICAgICB8ICAgJHsxMTIzfVxyXG4gICAgLy8gYCgnU2hvdWxkIGNoYW5nZSBwcm9wcyBvZiBBcHBIZWFkZXInLCAoeyB0b0RvQWN0dWFsLCBkb25lQWN0dWFsLCB0b0RvRXhwZWN0ZWQsIGRvbmVFeHBlY3RlZCB9KSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAvL0dpdmVuXHJcbiAgICAvLyAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAvLyAgICAgICAgdG9EbzogdG9Eb0FjdHVhbCxcclxuICAgIC8vICAgICAgICBkb25lOiBkb25lQWN0dWFsXHJcbiAgICAvLyAgICB9O1xyXG4gICAgLy9cclxuICAgIC8vICAgICAvL1doZW5cclxuICAgIC8vICAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEFwcEhlYWRlciB7Li4uY3VycmVudFByb3BzfSAvPik7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vVGhlblxyXG4gICAgLy8gICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ3RvRG8nKSkudG9FcXVhbCh0b0RvRXhwZWN0ZWQpO1xyXG4gICAgLy8gICAgIGV4cGVjdCh3cmFwcGVyLnByb3AoJ2RvbmUnKSkudG9FcXVhbChkb25lRXhwZWN0ZWQpO1xyXG4gICAgLy8gfSlcclxufSk7Il0sInZlcnNpb24iOjN9