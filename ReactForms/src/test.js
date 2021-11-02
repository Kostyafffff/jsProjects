console.log(
    'aa'
)

const testData = [
    { pin: 'pin1' },
    { pin: 'pin2' },
    { pin: 'pin3' }
];

const result = { pin: ['pin1', 'pin2', 'pin3']};



















const res = testData.reduce((acc, currentValue) => {
    const prev = Object.values({...acc.pin});

    return {
        ...acc,
        pin: [...prev, currentValue.pin]
    };
}, {}
)

console.log(res)
