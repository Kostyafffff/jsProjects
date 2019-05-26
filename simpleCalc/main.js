const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');
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

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
    const keyType = getKeyType(key);
    const {
        firstValue,
        operator,
        modValue,
        previousKeyType,
    } = calculator.dataset;

    calculator.dataset.previousKeyType = keyType;

    if (keyType === 'operator') {
        calculator.dataset.operator = key.dataset.action;
        calculator.dataset.firstValue = firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate' ?
            calculatedValue :
            displayedNum;
    }

    if (keyType === 'calculate') {
        calculator.dataset.modValue = firstValue && previousKeyType === 'calculate' ?
            modValue :
            displayedNum;
    }

    if (keyType === 'clear' && key.textContent === 'AC') {
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
    }
};

const updateVisualState = (key, calculator) => {
    const keyType = getKeyType(key);
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

    if (keyType === 'operator') {
        key.classList.add('is-depressed');
    }

    if (keyType === 'clear' && key.textContent !== 'AC') {
        key.textContent = 'AC';
    }

    if (keyType !== 'clear') {
        const clearButton = calculator.querySelector('[data-action = clear]');
        clearButton.textContent = 'CE';
    }
};



keys.addEventListener('click', eve => {

    if (!eve.target.matches('button')) {
        return
        const key = eve.target;
        const displayedNum = display.textContent;
        const resultString = createResultString(key, displayedNum, calculator.dataset);

        display.textContent = resultString;
        updateCalculatorState(key, calculator, resultString, displayedNum);
        updateVisualState(key, calculator);

    }
});