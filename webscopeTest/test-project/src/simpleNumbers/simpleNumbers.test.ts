import {isSimple, nextNumber} from "./simpleNumbers";

describe('simpleNumbers tests', () => {
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
