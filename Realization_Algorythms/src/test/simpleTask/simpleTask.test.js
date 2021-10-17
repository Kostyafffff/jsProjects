import {inputOutPut222222222} from "../../algo/simpleTask/simpleTask";

describe('aaa', () => {
    it('should return correct data', () => {
        const data = 'a=1,2&b=1&c=4,5&a=2,3&b=3,4';

        const output = {
            a: [1, 2, 3],
            b: [1, 3, 4],
            c: [4, 5],
        };

        //When
        const actual = inputOutPut222222222(data);

        //Then
        expect(actual).toEqual(output)
    })
})
