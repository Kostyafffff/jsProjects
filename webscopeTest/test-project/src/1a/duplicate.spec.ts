import { duplicate } from './duplicate';

describe('1a tests', () => {
    it.each`
         array         |     expected
         ${[1]}        |    ${[1, 1]}
         ${[-2, 3]}    |    ${[-2, 3, -2, 3]}
         ${[1, 2, 3]}  |    ${[1, 2, 3, 1, 2, 3]} 
    `('should return $expected from $array', ( { array, expected }) => {
        //When
        const actual = duplicate(array);

        //Then
        expect(actual).toEqual(expected);
    });
});
