//открыты для расширения но закрыты для модификации

class Car {
    getPrice() {
        throw  new Error('getPrice method should be implemented')
    }
}

class Mercedes extends Car {
    private price;

    constructor(price: number) {
        super()
        this.price = price
    }

    getPrice() {
        return this.price * 10;
    }
}

class Ford extends Car {
    private price;

    constructor(price: number) {
        super();
        this.price = price
    }

    getPrice() {
        return this.price * 3;
    }
}

class PriceCalculator {
    private cars;

    constructor(cars = []) {
        this.cars = cars
    }

    sum() {
        return this.cars.reduce((acc, car) => {
            acc += car.getPrice();

            return acc;
        }, 0)
    }
}

const calcPrice = new PriceCalculator([
    new Mercedes(200),
    new Ford(300),
    new Ford(300),
])

console.log(calcPrice);

