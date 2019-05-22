const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('calculator__keys');

keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    if (e.target.mathces('button')) {
        if (!action) {
            console.log('number key!');
        }
        if (
            action === 'add' ||
            action === 'substract' ||
            action === 'multiply' ||
            action === 'divide') {
            console.log('operator key!');
        }

        if (action === 'decimal') {
            console.log('decimal key');
        }

        if (action === 'clear') {
            console.log('clear key');
        }

        if (action === 'calculate') {
            console.log('equal key!');
        }
    }
});