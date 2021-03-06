import {describe, expect, it} from "@jest/globals";
import {insertSort} from "../../algo/insert-sorting/insertSorting";

describe('insert sorting test', () => {
    it('should sort array in ascending order', () => {
        //Given
        const array = [5, 2, 10, 13, 50, 9];
        const expected = [2, 5, 9, 10, 13, 50];

        //Then
        expect(insertSort(array)).toEqual(expected);
    })
})
