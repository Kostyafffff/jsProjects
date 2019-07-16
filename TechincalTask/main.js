function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

let kostya = new Person("Kostya", "Furmanov", 23);  