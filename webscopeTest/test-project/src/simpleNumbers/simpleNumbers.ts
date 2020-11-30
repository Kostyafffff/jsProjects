export const isSimple = (simpleNumber: number): boolean => {
    let isSimple = true;

    if (simpleNumber === 1){
        return isSimple;
    }

    for(let i = 2; i < simpleNumber; i++ ){
        if(simpleNumber % i === 0){
            isSimple = false;
            break;
        }
    }

    return isSimple;
};

//написать функцию ктороая, возвращает следущее простое число после переданного
//например 9 => 11
export const nextNumber = (anyNumber: number): number => {
    let workingNumber = anyNumber + 9;
    const currentArray = [];

    while (workingNumber > anyNumber) {

        if (isSimple(workingNumber)) {
            currentArray.push(workingNumber);
        }

        workingNumber--;
    }

    return currentArray[currentArray.length - 1];
};

