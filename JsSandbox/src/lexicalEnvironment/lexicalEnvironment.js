let a = 10;
let printA = null;

{
    let a = 100;
    printA = () => console.log(a);
}

printA();

printA = () => console.log(a);
printA();
