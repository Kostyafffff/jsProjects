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
var app_header_1 = require("../../../src/components/app-header");
var selectors = __importStar(require("../../../src/redux/selectors/selectors"));
//import  { getToDoCount, getDoneCount } from "../../../src/redux/selectors/selectors";
var getToDoItemValueStub = sinon_1.default.stub(selectors, 'getToDoCount').returns(3);
var getToDoneItemValueStub = sinon_1.default.stub(selectors, 'getDoneCount').returns(0);
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {};
        // const expected = {
        //     toDo: getToDoItemValueStub,
        //     done: getToDoneItemValueStub
        // };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual({ getToDoItemValueStub: getToDoItemValueStub, getToDoneItemValueStub: getToDoneItemValueStub });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBRTFCLGlFQUFxRTtBQUNyRSxnRkFBcUU7QUFFckUsdUZBQXVGO0FBR3ZGLElBQU0sb0JBQW9CLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLElBQU0sc0JBQXNCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWhGLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUVqQyxVQUFVLENBQUM7UUFDUCxlQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsT0FBTztRQUNQLElBQU0sS0FBSyxHQUFHLEVBQVksQ0FBQztRQUMzQixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxLQUFLO1FBRUwsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUUsRUFBRSxvQkFBb0Isc0JBQUEsRUFBRSxzQkFBc0Isd0JBQUEsRUFBRSxDQUFDLENBQUM7SUFFOUUsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcaW5kZXgudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zcmMvcmVkdXgvc3RvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJztcclxuaW1wb3J0ICogYXMgIHNlbGVjdG9ycyBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNcIjtcclxuXHJcbi8vaW1wb3J0ICB7IGdldFRvRG9Db3VudCwgZ2V0RG9uZUNvdW50IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKHNlbGVjdG9ycywgJ2dldFRvRG9Db3VudCcpLnJldHVybnMoMyk7XHJcbmNvbnN0IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKHNlbGVjdG9ycywgJ2dldERvbmVDb3VudCcpLnJldHVybnMoMCk7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyJywgKCkgPT4ge1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB7fSBhcyBJU3RvcmU7XHJcbiAgICAgICAgLy8gY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgLy8gICAgIHRvRG86IGdldFRvRG9JdGVtVmFsdWVTdHViLFxyXG4gICAgICAgIC8vICAgICBkb25lOiBnZXRUb0RvbmVJdGVtVmFsdWVTdHViXHJcbiAgICAgICAgLy8gfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbCggeyBnZXRUb0RvSXRlbVZhbHVlU3R1YiwgZ2V0VG9Eb25lSXRlbVZhbHVlU3R1YiB9KTtcclxuXHJcbiAgICB9KVxyXG59KTsiXSwidmVyc2lvbiI6M30=