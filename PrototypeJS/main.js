function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

let kostya = new Person("Kostya", "Furmanov", 24);
console.log(kostya);


function factorial(number) {

    if(number === 1){
        return number;
    }
    else{
        return number * factorial(number - 1);
    }

}

console.log(factorial( 5 ));

