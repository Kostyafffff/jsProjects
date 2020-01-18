"use strict";
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
var sinon_1 = __importDefault(require("sinon"));
var getSearchValue = __importStar(require("redux-utils/selectors/selectors"));
var search_panel_1 = require("../../../src/components/search-panel");
var action_creators_1 = require("../../../src/redux-utils/action-creators/action-creators");
var getSearchValueStub = sinon_1.default.stub(getSearchValue, 'getSearchValue').returns('honey i will find you');
describe('src/components/search-panel', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        var expected = { fieldValue: 'honey i will find you' };
        //When
        var actual = search_panel_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
        expect(getSearchValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });
    it('mapDispatchToProps', function () {
        //Given
        var expectedMapDispatchToProps = {
            setSearchValue: action_creators_1.setSearchValue
        };
        //Then
        expect(search_panel_1.mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRTpcXEpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcc2VhcmNoLXBhbmVsXFxpbmRleC1zZWFyY2gtcGFuZWwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxnREFBMEI7QUFDMUIsOEVBQWtFO0FBQ2xFLHFFQUF5RjtBQUN6Riw0RkFBd0Y7QUFDeEYsSUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXpHLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRTtJQUNwQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRyxFQUFFLFVBQVUsRUFBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXhELE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyw4QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBQ3JCLE9BQU87UUFDUCxJQUFNLDBCQUEwQixHQUFHO1lBQy9CLGNBQWMsa0NBQUE7U0FDakIsQ0FBQztRQUVGLE1BQU07UUFDTixNQUFNLENBQUMsaUNBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkU6XFxKc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcaW5kZXgtc2VhcmNoLXBhbmVsLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC11dGlscy9zdG9yZS90eXBlc1wiO1xyXG5pbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCI7XHJcbmltcG9ydCAqIGFzIGdldFNlYXJjaFZhbHVlIGZyb20gJ3JlZHV4LXV0aWxzL3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQge21hcERpc3BhdGNoVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsXCI7XHJcbmltcG9ydCB7c2V0U2VhcmNoVmFsdWV9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgtdXRpbHMvYWN0aW9uLWNyZWF0b3JzL2FjdGlvbi1jcmVhdG9yc1wiO1xyXG5jb25zdCBnZXRTZWFyY2hWYWx1ZVN0dWIgPSBzaW5vbi5zdHViKGdldFNlYXJjaFZhbHVlLCAnZ2V0U2VhcmNoVmFsdWUnKS5yZXR1cm5zKCdob25leSBpIHdpbGwgZmluZCB5b3UnKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwnLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge30gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0geyBmaWVsZFZhbHVlOidob25leSBpIHdpbGwgZmluZCB5b3UnIH07XHJcblxyXG4gICAgICAgIC8vV2hlblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSk7XHJcblxyXG4gICAgICAgIC8vVGhlblxyXG4gICAgICAgIGV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xyXG4gICAgICAgIGV4cGVjdChnZXRTZWFyY2hWYWx1ZVN0dWIuY2FsbGVkT25jZVdpdGhFeGFjdGx5KHN0b3JlKSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcERpc3BhdGNoVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykudG9FcXVhbChleHBlY3RlZE1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==