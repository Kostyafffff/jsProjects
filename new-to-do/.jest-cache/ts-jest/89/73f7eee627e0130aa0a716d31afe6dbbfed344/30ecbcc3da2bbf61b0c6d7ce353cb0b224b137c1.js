"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var app_header_1 = require("../../../src/components/app-header");
// import * as  selectors from "../../../src/redux/selectors/selectors";
//import  { getToDoCount, getDoneCount } from "../../../src/redux/selectors/selectors";
// const getToDoItemValueStub = sinon.stub().returns(3);
// const getToDoneItemValueStub = sinon.stub().returns(0);
describe('src/components/AppHeader', function () {
    beforeEach(function () {
        sinon_1.default.resetHistory();
    });
    it('mapStateToProps', function () {
        //Given
        var store = {
            todoList: [
                {
                    // [sad : false, asdasd: 'asdasd'],
                    label: 'asdasdas',
                    important: false,
                    done: false,
                    id: 'asdasdas',
                },
                {
                    // [sad : false, asdasd: 'asdasd'],
                    label: 'asdasdas',
                    important: false,
                    done: true,
                    id: 'asdasdas',
                }
            ],
            searchField: '',
            addField: '',
            filterBy: 'ALL',
        };
        // const expected = {
        //     toDo: getToDoItemValueStub,
        //     done: getToDoneItemValueStub
        // };
        //When
        var actual = app_header_1.mapStateToProps(store);
        //Then
        expect(actual).toEqual({ toDo: 1, done: 1 });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsaUVBQXFFO0FBQ3JFLHdFQUF3RTtBQUV4RSx1RkFBdUY7QUFHdkYsd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUUxRCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFFakMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRztZQUNWLFFBQVEsRUFBRTtnQkFDTjtvQkFDRyxtQ0FBbUM7b0JBQ2xDLEtBQUssRUFBRSxVQUFVO29CQUNqQixTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLFVBQVU7aUJBQ2pCO2dCQUNEO29CQUNJLG1DQUFtQztvQkFDbkMsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsVUFBVTtpQkFDakI7YUFDSjtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsS0FBSztTQUNSLENBQUM7UUFDWixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxLQUFLO1FBRUwsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3JlZHV4L3N0b3JlL3R5cGVzJztcclxuaW1wb3J0IHsgbWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlcic7XHJcbi8vIGltcG9ydCAqIGFzICBzZWxlY3RvcnMgZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG4vL2ltcG9ydCAgeyBnZXRUb0RvQ291bnQsIGdldERvbmVDb3VudCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbi8vIGNvbnN0IGdldFRvRG9JdGVtVmFsdWVTdHViID0gc2lub24uc3R1YigpLnJldHVybnMoMyk7XHJcbi8vIGNvbnN0IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygwKTtcclxuXHJcbmRlc2NyaWJlKCdzcmMvY29tcG9uZW50cy9BcHBIZWFkZXInLCAoKSA9PiB7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2lub24ucmVzZXRIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnbWFwU3RhdGVUb1Byb3BzJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHtcclxuICAgICAgICAgICAgdG9kb0xpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIC8vIFtzYWQgOiBmYWxzZSwgYXNkYXNkOiAnYXNkYXNkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdhc2Rhc2RhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gW3NhZCA6IGZhbHNlLCBhc2Rhc2Q6ICdhc2Rhc2QnXSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdhc2Rhc2RhcycsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkOiAnJyxcclxuICAgICAgICAgICAgYWRkRmllbGQ6ICcnLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeTogJ0FMTCcsXHJcbiAgICAgICAgfSBhcyBJU3RvcmU7XHJcbiAgICAgICAgLy8gY29uc3QgZXhwZWN0ZWQgPSB7XHJcbiAgICAgICAgLy8gICAgIHRvRG86IGdldFRvRG9JdGVtVmFsdWVTdHViLFxyXG4gICAgICAgIC8vICAgICBkb25lOiBnZXRUb0RvbmVJdGVtVmFsdWVTdHViXHJcbiAgICAgICAgLy8gfTtcclxuXHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbCh7dG9EbzogMSwgZG9uZTogMX0pO1xyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9