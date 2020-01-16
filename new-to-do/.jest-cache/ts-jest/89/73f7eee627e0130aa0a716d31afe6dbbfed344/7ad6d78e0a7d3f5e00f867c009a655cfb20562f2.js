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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsaUVBQW1FO0FBQ25FLHdFQUF3RTtBQUV4RSx1RkFBdUY7QUFHdkYsd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUUxRCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFFakMsVUFBVSxDQUFDO1FBQ1AsZUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xCLE9BQU87UUFDUCxJQUFNLEtBQUssR0FBRztZQUNWLFFBQVEsRUFBRTtnQkFDTjtvQkFDRyxtQ0FBbUM7b0JBQ2xDLEtBQUssRUFBRSxVQUFVO29CQUNqQixTQUFTLEVBQUUsS0FBSztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLFVBQVU7aUJBQ2pCO2dCQUNEO29CQUNJLG1DQUFtQztvQkFDbkMsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsVUFBVTtpQkFDakI7YUFDSjtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsS0FBSztTQUNSLENBQUM7UUFDWixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxLQUFLO1FBRUwsTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFHLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRS9DLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFxuZXctdG8tZG9cXHRlc3RcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXGluZGV4LnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcclxuaW1wb3J0IHtJU3RvcmV9IGZyb20gJy4uLy4uLy4uL3NyYy9yZWR1eC9zdG9yZS90eXBlcyc7XHJcbmltcG9ydCB7bWFwU3RhdGVUb1Byb3BzfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hcHAtaGVhZGVyJztcclxuLy8gaW1wb3J0ICogYXMgIHNlbGVjdG9ycyBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNcIjtcclxuXHJcbi8vaW1wb3J0ICB7IGdldFRvRG9Db3VudCwgZ2V0RG9uZUNvdW50IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuLy8gY29uc3QgZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIgPSBzaW5vbi5zdHViKCkucmV0dXJucygzKTtcclxuLy8gY29uc3QgZ2V0VG9Eb25lSXRlbVZhbHVlU3R1YiA9IHNpbm9uLnN0dWIoKS5yZXR1cm5zKDApO1xyXG5cclxuZGVzY3JpYmUoJ3NyYy9jb21wb25lbnRzL0FwcEhlYWRlcicsICgpID0+IHtcclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBzaW5vbi5yZXNldEhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdtYXBTdGF0ZVRvUHJvcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9HaXZlblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0ge1xyXG4gICAgICAgICAgICB0b2RvTGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gW3NhZCA6IGZhbHNlLCBhc2Rhc2Q6ICdhc2Rhc2QnXSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBbc2FkIDogZmFsc2UsIGFzZGFzZDogJ2FzZGFzZCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnYXNkYXNkYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2FzZGFzZGFzJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6ICcnLFxyXG4gICAgICAgICAgICBhZGRGaWVsZDogJycsXHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiAnQUxMJyxcclxuICAgICAgICB9IGFzIElTdG9yZTtcclxuICAgICAgICAvLyBjb25zdCBleHBlY3RlZCA9IHtcclxuICAgICAgICAvLyAgICAgdG9EbzogZ2V0VG9Eb0l0ZW1WYWx1ZVN0dWIsXHJcbiAgICAgICAgLy8gICAgIGRvbmU6IGdldFRvRG9uZUl0ZW1WYWx1ZVN0dWJcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAvL1doZW5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUpO1xyXG5cclxuICAgICAgICAvL1RoZW5cclxuICAgICAgICBleHBlY3QoYWN0dWFsKS50b0VxdWFsKHt0b0RvOiAxLCBkb25lOiAxfSk7XHJcblxyXG4gICAgfSlcclxufSk7Il0sInZlcnNpb24iOjN9