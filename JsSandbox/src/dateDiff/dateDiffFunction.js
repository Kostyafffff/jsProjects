const date = (prevDate, currentDate) => {
    const date1 = new Date(prevDate);
    const date2 = new Date(currentDate);
    const oneDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs(date2.getTime() - date1.getTime()) / oneDay);
}

console.log(date('2021-01-17', '2021-02-23'))


const myFunc = (array, budget) => {

    let result = false;

    array.sort((a, b ) => a - b);

    array.forEach((it, index) => {
        let start = array[index];

        if((start + array[index + 1]) === budget) {
            result = true;
        }
    })

    return result;
}

const myFunc2 = (array, budget) => {
    let res = false;

    array.forEach((it, index) => {
        res = array.some(watch => watch + it === budget)
    })

    return res;
}

const a = myFunc([7], 7)


console.log(myFunc([7], 7))
