import {isSimple, nextNumber, simpleNumbers} from "./simpleNumbers";

describe('simpleNumbers tests', () => {
    it('should return array of simple numbers', () => {
        //Given
        const expected = [1, 2, 3, 5, 7];

        //When
        const actual = simpleNumbers(1, 8);

        //Then
        expect(actual).toEqual(expected);
    })

    it.each`
        number | result
        ${1}   | ${true}
        ${2}   | ${true}
        ${3}   | ${true}
        ${4}   | ${false}
        ${5}   | ${true}
        ${6}   | ${false}
        ${7}   | ${true}
        ${8}   | ${false}
        ${9}   | ${false}
        ${10}  | ${false}
        ${11}  | ${true}
        ${11}  | ${true}
        ${55}  | ${false}
    `('should return $result when number === $number', ({number, result}) => {
        //When
        const actual = isSimple(number);

        //Then
        expect(actual).toEqual(result);
    })

    it.each`
        number      | expected
        ${8}        | ${11}
        ${55}       | ${59}
        ${11}       | ${13}
        ${120}      | ${127}
        ${555}      | ${557}
        ${1000}     | ${1009}
        ${2000}     | ${2003}
        ${250000}   | ${250007}
        ${100000000}| ${100000007}
    `('should return next number$result when number',({number, expected}) => {
        //When
        const actual = nextNumber(number);

        //Then
        expect(actual).toEqual(expected);
    })
})
