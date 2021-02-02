import {binarySearch} from "../../algo/binary-search/binarySearch";
import { describe, expect, it } from "@jest/globals";

describe('binarySearch tests', () => {
    it('should return null', () => {
        const actual = binarySearch([], '');

        expect(actual).toEqual(null);
    });
})
