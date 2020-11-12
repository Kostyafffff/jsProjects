import { unique } from './unique';

describe('unique tests', () => {
    it.each`
        data             | expected
        ${[]}            | ${[]}
        ${[1,2,3,3,4]}   | ${[1, 2, 3, 4]}
        ${[1,2,3,4,1,3]} | ${[1, 2, 3, 4]}
    `('should return $expected from $data',({data, expected}) => {
        //When
        const actual = unique(data);

        //Then
        expect(actual).toEqual(expected);
    });
});
