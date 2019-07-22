class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    static sumNumbers(x, y){
        return x + y;
    }
}

const kostya = new Person("Kostya", "Furmanov");

class Customer extends Person{

    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
}

const customer2 = new Customer("j", "jj", '02130123', "qweqwe");

function factorial(number) {
    if (number === 1){
        return 1;
    }
    else {
        return number * factorial(--number);
    }
}

console.log(factorial(5));