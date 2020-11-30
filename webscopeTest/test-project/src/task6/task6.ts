import { isSimple } from "../simpleNumbers/simpleNumbers";

export const getSimpleNumbers = (a: number, b: number): number[] => {
    const arrayOfNumbers = [];

    for (; a <= b; a++){
        if (isSimple(a)){
            arrayOfNumbers.push(a);
        }
    }

    return arrayOfNumbers;
}

export const getSumOfNumber = (numbers: number[]): number => numbers.reduce((acc, currVal) => acc + currVal, 0);

export const getAverageNumbers = (
    numbers: number[]
): number => numbers.reduce((acc, currVal) => acc + currVal, 0) / numbers.length;

export const getMinNumber = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0;
    }

    let minNumber = numbers[0];

    numbers.forEach(num => {
        if (num < minNumber) {
            minNumber = num;
        }
    })

    return minNumber;
}

export const getMaxNumber = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0;
    }

    let maxNumber = numbers[0];

    numbers.forEach(num => {
        if (num > maxNumber) {
            maxNumber = num;
        }
    })

    return maxNumber;
}
