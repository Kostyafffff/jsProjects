"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../src/functions");
describe('mult works', function () {
    it('name', function () {
        //Given
        var a = 2;
        var b = 3;
        var expected = 6;
        //When
        var actual = functions_1.mult(a, b);
        //Then
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxXZWJzdG9ybVByb2plY3RzXFxqc1Byb2plY3RzXFx0b2RvbGlzdF90eXBlc2NyaXB0XFx0ZXN0XFxmdW5jdGlvbnMudGVzdC50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF1QztBQUV2QyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDUCxPQUFPO1FBQ1AsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU07UUFDTixJQUFNLE1BQU0sR0FBRyxnQkFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQixNQUFNO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcV2Vic3Rvcm1Qcm9qZWN0c1xcanNQcm9qZWN0c1xcdG9kb2xpc3RfdHlwZXNjcmlwdFxcdGVzdFxcZnVuY3Rpb25zLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbXVsdCB9IGZyb20gJy4uL3NyYy9mdW5jdGlvbnMnXHJcblxyXG5kZXNjcmliZSgnbXVsdCB3b3JrcycsICgpID0+IHtcclxuICAgIGl0KCduYW1lJywgKCkgPT4ge1xyXG4gICAgICAgIC8vR2l2ZW5cclxuICAgICAgICBjb25zdCBhID0gMjtcclxuICAgICAgICBjb25zdCBiID0gMztcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IDY7XHJcbiAgICAgICAgLy9XaGVuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbXVsdChhLCBiKTtcclxuXHJcbiAgICAgICAgLy9UaGVuXHJcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XHJcbiAgICB9KTtcclxufSk7Il0sInZlcnNpb24iOjN9