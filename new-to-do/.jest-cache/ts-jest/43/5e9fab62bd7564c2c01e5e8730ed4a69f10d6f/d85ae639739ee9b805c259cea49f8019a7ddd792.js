"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var sinon_1 = __importDefault(require("sinon"));
var App_1 = require("components/app/App");
var state = {
    toDoData: [
        sinon_1.default.stub(),
        sinon_1.default.stub(),
        sinon_1.default.stub(),
        'asd',
        'active'
    ]
};
describe('src/components/App/App', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('App component should be rendered', function () {
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, __assign({}, state)));
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
    //createToDoItem
    it('createTodoItem check', function () {
        //Given
        var label = 'asdasdas';
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = {
            label: label,
            important: false,
            done: false,
            id: instance.maxId,
        };
        //When
        var actual = instance.createTodoItem(label);
        //Then
        expect(actual).toEqual(expected);
        expect(instance.maxId).toEqual(104);
    });
    //onAddItem
    it('onAddItem check', function () {
        //Given
        var text = 'wake up in hell';
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = {
            label: text,
            important: false,
            done: false,
            id: 103,
        };
        //When
        instance.onAddItem(text);
        expect(instance.state.toDoData[0]).toEqual(expected);
    });
    it('onToggleImportant check', function () {
        //Given
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        var instance = wrapper.instance();
        var toDoData = [{
                label: 'hello',
                important: false,
                done: false,
                id: 99,
            }];
        var expected = {
            label: 'hello',
            important: true,
            done: false,
            id: 99,
        };
        wrapper.setState({ toDoData: toDoData });
        //When
        instance.onToggleImportant(99);
        //Then
        expect(instance.state.toDoData[0]).toEqual(expected);
    });
    //same as onToggleImportant
    it('onToggleDone check', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = {
            label: 'hello',
            important: false,
            done: false,
            id: 103,
        };
        //When
        instance.onAddItem(expected.label);
        instance.onToggleDone(103);
        //Then
        expect(instance.state.toDoData[0].done).toBeTruthy();
    });
    it('should have default state', function () {
        //Given
        var expected = {
            toDoData: [
                {
                    label: 'Setup React project ToDo List',
                    important: false,
                    done: false,
                    id: 100
                },
                {
                    label: 'Rewrite ToDo list with typescript',
                    important: false,
                    done: false,
                    id: 101
                },
                {
                    label: 'Create tests with Jest and Enzyme',
                    important: false,
                    done: false,
                    id: 102
                },
            ],
            term: '',
            filter: 'active',
        };
        //When
        var wrapper = enzyme_1.mount(React.createElement(App_1.App, null));
        //Then
        expect(wrapper.state()).toEqual(expected);
    });
    it('deleteItem check', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = 0;
        //When
        instance.deleteItem(100);
        instance.deleteItem(101);
        instance.deleteItem(102);
        //Then
        expect(instance.state.toDoData.length).toEqual(expected);
    });
    it('onSearchChange check', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = 'while';
        //When
        instance.onSearchChange(expected);
        //Then
        expect(instance.state.term).toEqual(expected);
    });
    it('onFilter change', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var expected = 'while';
        //When
        instance.onFilterChange(expected);
        //Then
        expect(instance.state.filter).toEqual(expected);
    });
    it('filter active', function () {
        //Given
        var expected = {
            label: 'Create tests with Jest and Enzyme',
            important: false,
            done: false,
            id: 102
        };
        var items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            },
            expected,
        ];
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        //When
        var actual = instance.filter(items, 'active');
        //Then
        expect(actual).toEqual([expected]);
    });
    it('filter empty', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        //When
        var actual = instance.filter([], 'active');
        //Then
        expect(actual).toEqual([]);
    });
    it('filter empty', function () {
        //Given
        var instance = enzyme_1.mount(React.createElement(App_1.App, null)).instance();
        var items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            }
        ];
        //When
        var actual = instance.filter(items, 'done');
        //Then
        expect(__spreadArrays(actual)).toEqual(__spreadArrays(items));
    });
    //filter
    //search
    //toggleProperty
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStCO0FBQy9CLDJDQUErQjtBQUMvQixnREFBMEI7QUFDMUIsMENBQXlDO0FBRXpDLElBQU0sS0FBSyxHQUFHO0lBQ1osUUFBUSxFQUFFO1FBQ04sZUFBSyxDQUFDLElBQUksRUFBRTtRQUNaLGVBQUssQ0FBQyxJQUFJLEVBQUU7UUFDWixlQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1osS0FBSztRQUNMLFFBQVE7S0FDWDtDQUNGLENBQUM7QUFFRixRQUFRLENBQUMsd0JBQXdCLEVBQUU7SUFDL0IsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ25DLElBQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxvQkFBQyxTQUFHLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxnQkFBZ0I7SUFDaEIsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3ZCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBTSxRQUFRLEdBQUcsY0FBSyxDQUFNLG9CQUFDLFNBQUcsT0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsSUFBTSxRQUFRLEdBQUc7WUFDYixLQUFLLE9BQUE7WUFDTCxTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEVBQUUsRUFBRSxRQUFRLENBQUMsS0FBSztTQUNyQixDQUFDO1FBRUYsTUFBTTtR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O1NBQ0osQ0FBQztRQUVGLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5QyxNQUFNO1FBQ04sTUFBTSxnQkFBSyxNQUFNLEVBQUUsQ0FBQyxPQUFPLGdCQUFLLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUTtJQUNSLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEIsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC10ZXN0XFxhcHAudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJ2NvbXBvbmVudHMvYXBwL0FwcCc7XHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuICB0b0RvRGF0YTogW1xyXG4gICAgICBzaW5vbi5zdHViKCksXHJcbiAgICAgIHNpbm9uLnN0dWIoKSxcclxuICAgICAgc2lub24uc3R1YigpLFxyXG4gICAgICAnYXNkJyxcclxuICAgICAgJ2FjdGl2ZSdcclxuICBdXHJcbn07XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwL0FwcCcsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ0FwcCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QXBwIHsuLi5zdGF0ZX0vPik7XHJcblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLmlzRW1wdHlSZW5kZXIoKSkudG9CZUZhbHN5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NyZWF0ZVRvRG9JdGVtXHJcbiAgICBpdCgnY3JlYXRlVG9kb0l0ZW0gY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSAnYXNkYXNkYXMnO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiBpbnN0YW5jZS5tYXhJZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBpbnN0YW5jZS5jcmVhdGVUb2RvSXRlbShsYWJlbCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5tYXhJZCkudG9FcXVhbCgxMDQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9vbkFkZEl0ZW1cclxuICAgIGl0KCdvbkFkZEl0ZW0gY2hlY2snLCAoKSA9PntcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9ICd3YWtlIHVwIGluIGhlbGwnO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogdGV4dCxcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkOiAxMDMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgaW5zdGFuY2Uub25BZGRJdGVtKHRleHQpO1xyXG5cclxuICAgICAgICBleHBlY3QoaW5zdGFuY2Uuc3RhdGUudG9Eb0RhdGFbMF0pLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uVG9nZ2xlSW1wb3J0YW50IGNoZWNrJywoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudDxBcHA+KDxBcHAgLz4pO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gd3JhcHBlci5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IHRvRG9EYXRhID0gW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdoZWxsbycsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogOTksXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaGVsbG8nLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogOTksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3cmFwcGVyLnNldFN0YXRlKHsgdG9Eb0RhdGEgfSk7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uVG9nZ2xlSW1wb3J0YW50KDk5KTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhWzBdKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2FtZSBhcyBvblRvZ2dsZUltcG9ydGFudFxyXG4gICAgaXQoJ29uVG9nZ2xlRG9uZSBjaGVjaycsKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdoZWxsbycsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogMTAzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uQWRkSXRlbShleHBlY3RlZC5sYWJlbCk7XHJcbiAgICAgICAgaW5zdGFuY2Uub25Ub2dnbGVEb25lKDEwMyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS50b0RvRGF0YVswXS5kb25lKS50b0JlVHJ1dGh5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGhhdmUgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRvRG9EYXRhOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGUgdGVzdHMgd2l0aCBKZXN0IGFuZCBFbnp5bWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEwMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGVybTogJycsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG1vdW50PEFwcD4oPEFwcCAvPik7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCkpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2RlbGV0ZUl0ZW0gY2hlY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbW91bnQ8QXBwPig8QXBwIC8+KS5pbnN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5kZWxldGVJdGVtKDEwMCk7XHJcbiAgICAgICAgaW5zdGFuY2UuZGVsZXRlSXRlbSgxMDEpO1xyXG4gICAgICAgIGluc3RhbmNlLmRlbGV0ZUl0ZW0oMTAyKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRvRG9EYXRhLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaXQoJ29uU2VhcmNoQ2hhbmdlIGNoZWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9ICd3aGlsZSc7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGluc3RhbmNlLm9uU2VhcmNoQ2hhbmdlKGV4cGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLnN0YXRlLnRlcm0pLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ29uRmlsdGVyIGNoYW5nZScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSAnd2hpbGUnO1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBpbnN0YW5jZS5vbkZpbHRlckNoYW5nZShleHBlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChpbnN0YW5jZS5zdGF0ZS5maWx0ZXIpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2ZpbHRlciBhY3RpdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZSB0ZXN0cyB3aXRoIEplc3QgYW5kIEVuenltZScsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogMTAyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR1cCBSZWFjdCBwcm9qZWN0IFRvRG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXdyaXRlIFRvRG8gbGlzdCB3aXRoIHR5cGVzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4cGVjdGVkLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IGluc3RhbmNlLmZpbHRlcihpdGVtcywgJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKFtleHBlY3RlZF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2ZpbHRlciBlbXB0eScsICgpID0+e1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG1vdW50PEFwcD4oPEFwcCAvPikuaW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuZmlsdGVyKFtdLCAnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoW10pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ2ZpbHRlciBlbXB0eScsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBtb3VudDxBcHA+KDxBcHAgLz4pLmluc3RhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dXAgUmVhY3QgcHJvamVjdCBUb0RvIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZDogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmV3cml0ZSBUb0RvIGxpc3Qgd2l0aCB0eXBlc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEwMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gaW5zdGFuY2UuZmlsdGVyKGl0ZW1zLCAnZG9uZScpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoWy4uLmFjdHVhbF0pLnRvRXF1YWwoWy4uLml0ZW1zXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2ZpbHRlclxyXG4gICAgLy9zZWFyY2hcclxuICAgIC8vdG9nZ2xlUHJvcGVydHlcclxufSk7Il0sInZlcnNpb24iOjN9