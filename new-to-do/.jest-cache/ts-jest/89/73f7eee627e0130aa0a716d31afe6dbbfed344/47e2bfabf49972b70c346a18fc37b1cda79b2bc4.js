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
// import { mapStateToProps } from '../../../src/components/app-header';
// import { store } from "../../../src/redux/store/store";
var selectors = __importStar(require("../../../src/redux/selectors/selectors"));
//import  { getToDoCount, getDoneCount } from "../../../src/redux/selectors/selectors";
// const getToDoItemValueStub = sinon.stub().returns(3);
var getToDoItemValueStub = sinon_1.default.replace(selectors, 'getToDoCount', function () {
    return 123;
});
var getToDoneItemValueStub = sinon_1.default.stub().returns(0);
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        // const store = {
        //     todoList: [
        //         {
        //            // [sad : false, asdasd: 'asdasd'],
        //             label: 'asdasdas',
        //             important: false,
        //             done: false,
        //             id: 'asdasdas',
        //         },
        //         {
        //             // [sad : false, asdasd: 'asdasd'],
        //             label: 'asdasdas',
        //             important: false,
        //             done: true,
        //             id: 'asdasdas',
        //         }
        //     ],
        //     searchField: '',
        //     addField: '',
        //     filterBy: 'ALL',
        // } as IStore;
        var expected = {
            toDo: getToDoItemValueStub,
            done: getToDoneItemValueStub
        };
        var actual = '';
        //When
        //   const actual = mapStateToProps(store);
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLHdFQUF3RTtBQUN4RSwwREFBMEQ7QUFFekQsZ0ZBQXFFO0FBRXRFLHVGQUF1RjtBQUd2Rix3REFBd0Q7QUFDeEQsSUFBTSxvQkFBb0IsR0FBRyxlQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUU7SUFDakUsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sc0JBQXNCLEdBQUcsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFFakMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixpREFBaUQ7UUFDakQsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQywyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLGFBQWE7UUFDYixZQUFZO1FBQ1osa0RBQWtEO1FBQ2xELGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixZQUFZO1FBQ1osU0FBUztRQUNULHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixJQUFNLFFBQVEsR0FBRztZQUNiLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsSUFBSSxFQUFFLHNCQUFzQjtTQUMvQixDQUFDO1FBQ0YsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU07UUFDVCwyQ0FBMkM7UUFFeEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXGpzUHJvamVjdHNcXG5ldy10by1kb1xcdGVzdFxcY29tcG9uZW50c1xcYXBwLWhlYWRlclxcaW5kZXgudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xyXG4vLyBpbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJztcclxuLy8gaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3N0b3JlXCI7XHJcblxyXG4gaW1wb3J0ICogYXMgIHNlbGVjdG9ycyBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNcIjtcclxuXHJcbi8vaW1wb3J0ICB7IGdldFRvRG9Db3VudCwgZ2V0RG9uZUNvdW50IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuLy8gY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygzKTtcclxuY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5yZXBsYWNlKHNlbGVjdG9ycywgJ2dldFRvRG9Db3VudCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgIHJldHVybiAxMjM7XHJcbiB9KTtcclxuXHJcbiBjb25zdCBnZXRUb0RvbmVJdGVtVmFsdWVTdHViID0gc2lub24uc3R1YigpLnJldHVybnMoMCk7XHJcblxyXG5kZXNjcmliZSgnc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyJywgKCkgPT4ge1xyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgIHNpbm9uLnJlc2V0SGlzdG9yeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ21hcFN0YXRlVG9Qcm9wcycsICgpID0+IHtcclxuICAgICAgICAvL0dpdmVuXHJcbiAgICAgICAgLy8gY29uc3Qgc3RvcmUgPSB7XHJcbiAgICAgICAgLy8gICAgIHRvZG9MaXN0OiBbXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAvLyBbc2FkIDogZmFsc2UsIGFzZGFzZDogJ2FzZGFzZCddLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ6ICdhc2Rhc2RhcycsXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIFtzYWQgOiBmYWxzZSwgYXNkYXNkOiAnYXNkYXNkJ10sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6ICdhc2Rhc2RhcycsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgIC8vICAgICBzZWFyY2hGaWVsZDogJycsXHJcbiAgICAgICAgLy8gICAgIGFkZEZpZWxkOiAnJyxcclxuICAgICAgICAvLyAgICAgZmlsdGVyQnk6ICdBTEwnLFxyXG4gICAgICAgIC8vIH0gYXMgSVN0b3JlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xyXG4gICAgICAgICAgICB0b0RvOiBnZXRUb0RvSXRlbVZhbHVlU3R1YixcclxuICAgICAgICAgICAgZG9uZTogZ2V0VG9Eb25lSXRlbVZhbHVlU3R1YlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gJyc7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgLy8gICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKGV4cGVjdGVkKTtcclxuICAgIH0pXHJcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==