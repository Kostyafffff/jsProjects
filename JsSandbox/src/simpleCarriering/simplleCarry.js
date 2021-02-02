/*
* При помощи функции Call, bind, apply реализовать функцию, которая будет оборачивать
* другую функию таким образом чтобы результатом была тоже функция, но при этом она могла принимать
* заданное количество аргументов. Функция принимает на вход другую функцию и число аргументов которое необходимо собрать
* чтобы передать в функцию которая была передана первым аргументом
*
* function watchArgs(fn, argumentsLength){}
*
*
* function test1(a, b, c){
*   return a + b + c;
* }
*
* function test2(a, b, c, d) {
*   return a + b + c + d;
* }
*
*const t1 = watchArgs(test1, 3);
*result = t1();// функция, аргументы не были переданы
*result = t1(1, 2); //
*result = t1(3); // 6
*
* */

const uniq = num => num;

function watchArgs(fn, argumentsLength) {
    let argsArray = [];

    return function simple() {
        if(argsArray.length === argumentsLength){
            return fn.apply(null, argsArray);
        }

        for (let i = 0; i < arguments.length; i++) {
            argsArray.push(arguments[i]);

            if (argsArray.length === argumentsLength) {
                return fn.apply(null, argsArray);
            }
        }

        // Array.from(arguments).forEach(it => {
        //     argsArray.push(it)
        //
        //     if(argsArray.length === argumentsLength) {
        //         return fn.apply(null, argsArray);
        //     }
        // })

        return simple;
    };
}


function test1(a, b, c) {
    return a + b + c;
}

function test2(a, b, c, d){
    return a + b + c + d;
}
let result;

const a = watchArgs(test1, 3);

result = a(122);
//result = t1();// функция, аргументы не были переданы
// result = t1(1, 2); //
// result = t1(3); // 6
