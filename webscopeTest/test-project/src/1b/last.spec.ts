import { last } from './last';

describe('last tests', () => {
    it.each`
        array      | expected
        ${[]}      | ${undefined} 
        ${[1]}     | ${1} 
        ${[1, 2]}  | ${2} 
    `('should return element = $expected from $array', ({array, expected}) => {
        //When
        const actual = last(array);

        //Then
        expect(actual).toEqual(expected);
    });
});
