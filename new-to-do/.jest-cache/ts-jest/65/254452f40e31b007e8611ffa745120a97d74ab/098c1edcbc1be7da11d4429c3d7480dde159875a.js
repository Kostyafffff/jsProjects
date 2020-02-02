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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var enzyme_1 = require("enzyme");
var sinon_1 = __importDefault(require("sinon"));
var component_1 = require("components/app-header/component");
describe('src/components/app-header/app-header', function () {
    var props = {
        toDo: 1,
        done: 1
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
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcY29tcG9uZW50LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUMvQixpQ0FBK0I7QUFDL0IsZ0RBQTBCO0FBRTFCLDZEQUE0RDtBQUc1RCxRQUFRLENBQUMsc0NBQXNDLEVBQUU7SUFFN0MsSUFBTSxLQUFLLEdBQVc7UUFDbEIsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsQ0FBQztLQUNWLENBQUM7SUFFRixVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTTtRQUNOLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDM0MsT0FBTztRQUNQLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxxQkFBUyxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFFaEQsTUFBTTtRQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxJQUFJLG9NQUFBLDhEQUVELEVBQW9CLEtBQU0sRUFBQyxZQUMzQixFQUFrQixPQUFRLEVBQUMsWUFDM0IsRUFBa0IsT0FBUSxFQUFDLFlBQzVCLEtBSEMsb0JBQW9CLEVBQU0sQ0FBQyxFQUMzQixrQkFBa0IsRUFBUSxDQUFDLEVBQzNCLGtCQUFrQixFQUFRLENBQUMsRUFDM0IsMkNBQTJDLEVBQUUsVUFBQyxFQUErQjtZQUE5QixnQ0FBYSxFQUFFLGtDQUFjO1FBRTlFLE9BQU87UUFDUCxJQUFNLFlBQVksZ0JBQ1gsS0FBSyxDQUNYLENBQUM7UUFFRixNQUFNO1FBQ04sSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHFCQUFTLGVBQUssWUFBWSxFQUFJLENBQUMsQ0FBQztRQUV2RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsSUFBSSx1U0FBQSw4REFFRCxFQUFlLEtBQU0sRUFBRyxXQUFZLEVBQUcsYUFDdkMsRUFBZSxLQUFNLEVBQUksVUFBVyxFQUFHLGFBQ3ZDLEVBQWUsS0FBTSxFQUFJLFVBQVcsRUFBSyxhQUN6QyxFQUFlLEtBQU0sRUFBSSxVQUFXLEVBQUksYUFDeEMsRUFBZSxLQUFNLEVBQVEsTUFBTyxFQUFTLFlBQy9DLEtBTEUsZUFBZSxFQUFNLEdBQUcsRUFBWSxHQUFHLEVBQ3ZDLGVBQWUsRUFBTSxJQUFJLEVBQVcsR0FBRyxFQUN2QyxlQUFlLEVBQU0sSUFBSSxFQUFXLEtBQUssRUFDekMsZUFBZSxFQUFNLElBQUksRUFBVyxJQUFJLEVBQ3hDLGVBQWUsRUFBTSxRQUFRLEVBQU8sU0FBUyxFQUM5Qyw0Q0FBNEMsRUFBRSxVQUFDLEVBQWtCO1lBQWhCLFVBQUUsRUFBRSxjQUFJLEVBQUUsY0FBSTtRQUNoRSxJQUFNLFlBQVksR0FBVztZQUN6QixJQUFJLE1BQUE7WUFDSixJQUFJLE1BQUE7U0FDUCxDQUFDO1FBQ0YsSUFBTSxPQUFPLEdBQUcsY0FBSyxDQUFDLG9CQUFDLHFCQUFTLGVBQU0sWUFBWSxFQUFLLENBQUMsQ0FBQztRQUV6RCxNQUFNO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFeEMsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJFOlxcSnNQcm9qZWN0c1xcbmV3LXRvLWRvXFx0ZXN0XFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxjb21wb25lbnQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcblxyXG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2FwcC1oZWFkZXIvY29tcG9uZW50JztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9hcHAtaGVhZGVyL3R5cGVzLWFwcC1oZWFkZXInO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wczogSVByb3BzID0ge1xyXG4gICAgICAgIHRvRG86IDEsXHJcbiAgICAgICAgZG9uZTogMVxyXG4gICAgfTtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoQXBwSGVhZGVyKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBUb2RvTGlzdEl0ZW1Qcm9wcyBtb3VudCBjb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsuLi5wcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5pc0VtcHR5UmVuZGVyKCkpLnRvQmVGYWxzeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQuZWFjaGBcclxuICAgICAgICBleHBlY3RlZENsYXNzICAgICAgICAgICB8IGV4cGVjdGVkTGVuZ3RoXHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIuZC1mbGV4J30gfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMSd9ICAgfCAkezF9XHJcbiAgICAgICAgJHsnLmFwcC1oZWFkZXIgPiBoMid9ICAgfCAkezF9XHJcbiAgICAgICAgYCgnc2hvdWxkIHJlbmRlciBpbiBBcHBIZWFkZXIgJGV4cGVjdGVkQ2xhc3MnLCAoe2V4cGVjdGVkQ2xhc3MsIGV4cGVjdGVkTGVuZ3RofSkgPT4ge1xyXG5cclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBcHBIZWFkZXIgey4uLmN1cnJlbnRQcm9wc30gLz4pO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKGV4cGVjdGVkQ2xhc3MpKS50b0hhdmVMZW5ndGgoZXhwZWN0ZWRMZW5ndGgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGl0LmVhY2hgXHJcbiAgICAgICAgICAgICAgICBoMiAgICAgICAgIHx0b0RvICAgICAgICAgIHwgZG9uZVxyXG4gICAgICAgICR7JyBtb3JlIHRvIGRvLCAnfSB8ICR7JzInfSAgICAgICB8ICR7JzEnfSBcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeyctMid9ICAgICAgfCAkeycwJ30gXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnMjMnfSAgICAgIHwgJHsnNDMxJ30gXHJcbiAgICAgICAgJHsnIG1vcmUgdG8gZG8sICd9IHwgJHsnNDMnfSAgICAgIHwgJHsnNTAnfSBcclxuICAgICAgICAkeycgbW9yZSB0byBkbywgJ30gfCAkeycyMzEyMTMnfSAgfCAkeyczMTIzMjEzJ30gXHJcbiAgICAgICBgKCdzaG91bGQgY2hlY2sgdGV4dCBpbiBBcHBIZWFkZXIgJGgxIGFuZCAkaDInLCAoeyBoMiwgdG9EbywgZG9uZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb3BzOiBJUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHRvRG8sXHJcbiAgICAgICAgICAgIGRvbmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwSGVhZGVyIHsgLi4uY3VycmVudFByb3BzIH0gLz4pO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBleHBlY3Qod3JhcHBlci5maW5kKCdoMScpLnRleHQoKSkudG9FcXVhbCgnTXkgVG9EbyBMaXN0Jyk7XHJcbiAgICAgICAgZXhwZWN0KHRvRG8gKyBoMiArIGRvbmUpXHJcbiAgICAgICAgICAgIC50b0VxdWFsKHdyYXBwZXIuZmluZCgnaDInKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICBjb25zdCBwb2ludDogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgcG9pbnQubGVuZ3RoO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==