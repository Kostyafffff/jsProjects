//Не используют методы базового класса, то недолжны зависеть

class Sportsman {
   private name;

   constructor(name) {
    this.name = name;
   }
}


const swimmer = {
    swimmingVeryFast() {
        console.log(`${this.name} could swim 100m in 20 seconds`);
    }
}

const runner = {
    runningVeryFast() {
        console.log(`${this.name} could run 2km like leopard`);
    }
}

const boxer = {
    boxing() {
        console.log(`${this.name} could punch in dace with fist`);
    }
}

const wrestler = {
    throw() {
        console.log(`${this.name} could trow via hip`);
    }
}

class Tyson extends Sportsman {}

// @ts-ignore
Object.assign(Tyson.prototype, boxer, wrestler);

const man = new Tyson('Mike');
man.boxing();
man.throw();