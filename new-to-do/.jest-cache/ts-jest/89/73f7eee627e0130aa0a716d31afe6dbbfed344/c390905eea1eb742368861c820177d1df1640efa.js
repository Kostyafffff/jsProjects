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
var getSearchValue = __importStar(require("redux/selectors/selectors"));
var search_panel_1 = require("../../../src/components/search-panel");
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcaW5kZXgtc2VhcmNoLXBhbmVsLnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQTBCO0FBQzFCLHdFQUE0RDtBQUM1RCxxRUFBdUU7QUFDdkUsSUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXpHLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRTtJQUNwQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixJQUFNLFFBQVEsR0FBRyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXZELE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyw4QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU07UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pFLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcaW5kZXgtc2VhcmNoLXBhbmVsLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlc1wiO1xyXG5pbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCI7XHJcbmltcG9ydCAqIGFzIGdldFNlYXJjaFZhbHVlIGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXBhbmVsXCI7XHJcbmNvbnN0IGdldFNlYXJjaFZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoZ2V0U2VhcmNoVmFsdWUsICdnZXRTZWFyY2hWYWx1ZScpLnJldHVybnMoJ2hvbmV5IGkgd2lsbCBmaW5kIHlvdScpO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL3NlYXJjaC1wYW5lbCcsICgpID0+IHtcclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7ZmllbGRWYWx1ZTonaG9uZXkgaSB3aWxsIGZpbmQgeW91JyB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgICAgICBleHBlY3QoZ2V0U2VhcmNoVmFsdWVTdHViLmNhbGxlZE9uY2VXaXRoRXhhY3RseShzdG9yZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pXHJcbn0pO1xyXG4iXSwidmVyc2lvbiI6M30=