class Car {
    constructor({name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10}) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption; 
    }    
    
    getFullName() {
        return `${this.name} ${this.model}`
    }

    getAge() {
        let currentYear = new Date().getFullYear()
        return currentYear - this.year
    }

    changeColor(newColor) {
        if (this.color === newColor) {
            alert(`The car is already ${newColor}`);
        }else{
            this.color = newColor;
            return alert(`The car's color was modified to ${newColor}`);
        }
    }

    calculateWay(kilometers, fuel) {
        let time = kilometers / this.maxSpeed;

        if (time <= 1){
            alert(`You need ${time.toFixed(1)} hour to reach the destination`);
        }else{
            alert(`You need ${time.toFixed(1)} hours to reach the destination`);
        }

        if (fuel < 10) {
            alert(`You should refuel car`);
        }

        let fuelQuantity = kilometers * this.fuelConsumption / 100;
        let refuelTimes = (fuelQuantity / fuel) - 1;

        if(refuelTimes <= 1) {
            alert(`You've got enough fuel to reach destination`);
        }else{
            alert(`You need to refuel car ${Math.ceil(refuelTimes)} times to reach destination`);
        }
    }
}

class Bmw extends Car {
    constructor(name,climateControl) {
        super(name);
        this.name = 'BMW';
        this.climateControl = true;
    }
    getOptions() {
        return `All ${this.name} models have climate control`
    }
}

let x5 = new Bmw({model: 'X5', year: 2018, color: 'black', maxSpeed: 300, fuelCapacity: 100})


class Mini extends Car {
    constructor(name, doors = 2) {
        super(name);
        this.name = 'MINI';
        this.doors = doors;
    }
    getBodyType(doors){
        return `${this.name} ${this.model} is a ${this.doors}-door hardtop.`
    }
}

let cooper = new Mini({model: 'Cooper', year: 2002, color: 'yellow', maxSpeed: 270, fuelCapacity: 50})

//console.log(cooper.getBodyType())
cooper.doors = 4;
//console.log(cooper.getBodyType())

class Audi extends Car {
    constructor(name) {
        super(name);
        this.name = 'Audi'
        delete this.fuelConsumption;
    }
}

let q5 = new Audi({model: 'Q5', year: 2012, color: 'blue', maxSpeed: 320, fuelCapacity: 90})


//console.log(Object.getOwnPropertyNames(q5))
//console.log(x5.getAge())
//console.log(x5.getFullName())
//console.log(x5.changeColor('black'))
//console.log(x5.changeColor('yellow'))
//console.log(x5.calculateWay(500, 20))
//console.log(Bmw instanceof Car)
//console.log(x5 instanceof Bmw)
