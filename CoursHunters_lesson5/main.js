/*
1.Function declareation
функцию можно вызвать до её определния, т.к. браузер берёт функции неважно где были созданы и они уже готовы к использованию 
*/
function sum(x = 0, y = 0, ...args) {
    console.log(arguments);
    return x + y;
}

sum(1);
sum(2);
sum(3);

//2. function expression
/**
 * именем функции будет являться - переменная,
 * функции не "всплывают", можно создовать внутри блоков кодв
 */
// num = function () {
//     console.log('Function expression');
// };
// num();

// //3.анонимная самовызывающая 
// //анонимная т.к. нет имени
// //самовызывающая т.к. она вызовется автоматически когда скрипт до неё дойтёт


// (function () {

//     console.log("Self invoked function");

// })();


// /*
// arrow function
// */
// let arrow = () => {
//     console.log('Arrow function');
// };

// arrow();

// //return 