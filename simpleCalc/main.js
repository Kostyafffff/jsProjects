const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector(".calculator__display");

const calculate = (n1, operator, n2) => {
    let result = "";
    switch (operator) {
        case 'add':
            result = n1 + n2;
            break;
        case 'substract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            result = n1 / n2;
            break;
    }
    return result;
};

const getKeyType = key => {
    const {
        action
    } = key.dataset;
    if (!action) return 'number';
    if (action === 'add' ||
        action === 'substract' ||
        action === 'multiply' ||
        action === 'divide'
    ) return 'operator';
    return action;
};

const createResultString = (key, diplayedNum, state) => {
    const keyContent = key.textContent;
    const keyType = getKeyType(key);
    const {
        firstValue,
        operator,
        modValue,
        previousKeyType
    } = state;

    if (keyType === 'number') {
        return diplayedNum === '0' ||
            previousKeyType === 'operator' ||
            previousKeyType === 'calculate' ?
            keyContent :
            displayedNum + keyContent;
    }

    if (keyType === 'decimal') {
        if (!displayedNum.includes('.')) return displayedNum + '.';
        if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
        return diplayedNum;
    }

    if (keyType === 'operator') {
        return firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate' ?
            calculate(firstValue, operator, displayedNum) :
            displayedNum;
    }

    if (keyType === 'clear') return 0;

    if (keyType === 'calculate') {
        return firstValue ?
            previousKeyType === 'calculate' ?
            calculate(displayedNum, operator, modValue) :
            calculate(firstValue, operator, displayedNum) :
            diplayedNum;
    }
};