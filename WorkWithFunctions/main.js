//LexicalEncironment 0 lvl {
//  name: "Kostya"
//  getName: body function
//  scope: null
//}
let name = "Kostya";

function getName(name) {
    //LexicalEncironment 1 lvl {
    //  name: "Kostya"
    // args: arguments
    //  scope: LexicalEnvironment
    //}
    let text = "My name is ";
    return text + name + ' ' + secondName;

    function getFullName(secondName) {
        //LexicalEncironment 2 lvl {
        //  secondName: "Furmanov"
        // args: arguments
        //getFullName:......    
        //  scope: LexicalEnvironment1
        //}
        return name + ' ' + secondName;
    }

    return text + getFullName('Furmanov');
}

//getName('Furmanov');

function makeCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    };
}

let counterState = makeCounter();

let module = (function () {

    let counter = 0;

    function setCounter(value) {
        counter = value;
        return this;
    }

    function plusCounter() {
        counter++;
        return this;
    }

    function reset() {
        counter = 0;
    }

    function getCounter() {
        return counter;
    }
    return {
        setCounter: setCounter,
        getCounter: getCounter,
        plusCounter: plusCounter,
        reset: reset
    };
})();