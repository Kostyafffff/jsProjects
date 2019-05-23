const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector(".calculator__display");

keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (e.target.matches('button')) {
        if (!action) {
            console.log('number key!');
        }
        if (
            action === 'add' ||
            action === 'substract' ||
            action === 'multiply' ||
            action === 'divide') {
            console.log('operator key!');
            key.classList.add('is-depressed');
        }
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }

        if (action === 'clear') {
            console.log('clear key');
        }

        if (action === 'calculate') {
            console.log('equal key!');
        }
    }
});