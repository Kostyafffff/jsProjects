import {binarySearch} from "../../algo/binary-search/binarySearch";
import { describe, expect, it } from "@jest/globals";

describe('binarySearch tests', () => {
    it('should return null when array doe not exist number', () => {
        //Given
        const data = [5, 3, 2, 4, 7, 10, 12];
        const number = 23;

        //When
        const actual = binarySearch(data, number);

        //Then
        expect(actual).toBeNull();
    });

    it('should return correct position', () => {
        //Given
        const data = [5, 3, 2, 4, 7, 10, 12];
        const number = 10;
        const position = 5;

        //When
        const actual = binarySearch(data, number);

        //Then
        expect(actual).toEqual(position);
    });
})
