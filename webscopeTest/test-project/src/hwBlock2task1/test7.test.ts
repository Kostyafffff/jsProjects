import {replaceStr} from "./test7";

describe('test7 tests', () => {
    it('should return correct result',() => {
        //Given
        //ac#d##c
        const string = "camelsHaveThreeHumps";
        const expected = "camels-have-three-humps";

        //When
        const actual = replaceStr(string);

        //Then
        expect(actual).toEqual(expected);
    })
})
