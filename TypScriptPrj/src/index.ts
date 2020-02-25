export const mult = (a: number, b: number) : number => {
    return a * b;
};
mult(1, 2);

// function f() {
//             let c = 0;
//             return function () {
//                 c++;
//                 console.log(c);
//     };
// };

const f = (): Function => {
    let c: number = 0;
    return () => {
        c++;
        console.log(c);
    }
};

let d = f();
d();
d();
d();