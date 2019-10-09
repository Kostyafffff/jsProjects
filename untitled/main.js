function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

}

let kostya = new Person('Kostya', 'Furmanov', 24);


//prototype - для записи методов от которого этот экземпляр класса был создан

//__proto__ - ссылка прото

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};