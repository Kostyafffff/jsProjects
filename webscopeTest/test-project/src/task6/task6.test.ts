import {getAverageNumbers, getMaxNumber, getMinNumber, getSimpleNumbers, getSumOfNumber} from "./task6";

describe('task6 tests', () => {
    describe('getSimpleNumbers tests', () => {
        it('should return array of simple numbers', () => {
            //Given
            const expected = [1, 2, 3, 5, 7, 11, 13, 17];

            //When
            const actual = getSimpleNumbers(1, 17);

            //Then
            expect(actual).toEqual(expected);
        })
    })

    describe('getSumOfNumber tests', () => {
        it('should return sum of array numbers', () => {
            //Given
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const expected = 55;

            //When
            const actual = getSumOfNumber(numbers);

            //Then
            expect(actual).toEqual(expected);
        })

        it('should return 0 when empty array', () => {
            //Given
            const numbers: number[] = [];
            const expected = 0;

            //When
            const actual = getSumOfNumber(numbers);

            //Then
            expect(actual).toEqual(expected);
        })
    })

    describe('getAverageNumbers tests', () => {
        it('should return average of array numbers', () => {
            //Given
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const expected = 5.5;

            //When
            const actual = getAverageNumbers(numbers);

            //Then
            expect(actual).toEqual(expected);
        })

        it('should return 0 when empty array', () => {
            //Given
            const numbers: number[] = [];

            //When
            const actual = getAverageNumbers(numbers);

            //Then
            expect(actual).toEqual(NaN);
        })
    })

    describe('getMinNumber tests', () => {
        it('should return min of array numbers', () => {
            //Given
            const numbers = [-5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const expected = -5;

            //When
            const actual = getMinNumber(numbers);

            //Then
            expect(actual).toEqual(expected);
        })

        it('should return 0 when empty array', () => {
            //Given
            const numbers: number[] = [];
            const expected = 0;

            //When
            const actual = getMinNumber(numbers);

            //Then
            expect(actual).toEqual(expected);
        })
    })

    describe('getMaxNumber tests', () => {
        it('should return max number of array numbers', () => {
            //Given
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const expected = 10;

            //When
            const actual = getMaxNumber(numbers);

            //Then
            expect(actual).toEqual(expected);
        })

        it('should return 0 when empty array', () => {
            //Given
            const numbers: number[] = [];
            const expected = 0;

            //When
            const actual = getSumOfNumber(numbers);

            //Then
            expect(actual).toEqual(expected);
        })
    })
})
