export default class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return JSON.stringify(
            {
                name: this.name,
                age: this.age,
            })
    }
}