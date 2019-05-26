const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector(".calculator__display");

keys.addEventListener('click', e => {

    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear';
        }
        if (action === 'calculate') {
            const firstValue = displayedNum;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (
            action === 'add' ||
            action === 'substract' ||
            action === 'multiply' ||
            action === 'divide') {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
    }
});
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