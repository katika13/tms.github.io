function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype; // optional
}

function Car({name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10}){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;      
}

Car.prototype.getFullName = function () {
    return `${this.name} ${this.model}`
}

Car.prototype.getAge = function () {
    let currentYear = new Date().getFullYear()
    return currentYear - this.year
}

Car.prototype.changeColor = function (newColor) {
    if (this.color === newColor) {
        alert(`The car is already ${newColor}`);
    }else{
        this.color = newColor;
        return alert(`The car's color was modified to ${newColor}`);
    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
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


function Bmw (name, climateControl) {
    Bmw.superclass.constructor.call(this, name, climateControl);
    this.name = 'BMW';
    this.climateControl = true;
}
extend(Bmw, Car);

Bmw.prototype.getOptions = function(){
    return `All ${this.name} models have climate control`
}

let x5 = new Bmw({model: 'X5', year: 2018, color: 'black', maxSpeed: 300, fuelCapacity: 100})

function Mini(name, doors) {
    Mini.superclass.constructor.call(this, name, doors = 2);
    this.name = 'MINI';
    this.doors = doors;
}

extend(Mini, Car);

Mini.prototype.getBodyType = function(doors){
        return `${this.name} ${this.model} is a ${this.doors}-door hardtop.`
}

let cooper = new Mini({model: 'Cooper', year: 2002, color: 'yellow', maxSpeed: 270, fuelCapacity: 50})
//console.log(Object.getOwnPropertyNames(cooper))
//console.log(cooper.getBodyType())
cooper.doors = 4;
//console.log(cooper.getBodyType())

function Audi (name) {
    Audi.superclass.constructor.call(this, name);
    this.name = 'Audi'
    delete this.fuelConsumption;
}

extend(Audi, Car);

let q5 = new Audi({model: 'Q5', year: 2012, color: 'blue', maxSpeed: 320, fuelCapacity: 90})


//console.log(Object.getOwnPropertyNames(x5))
//console.log(x5.getOptions())
//console.log(Object.getOwnPropertyNames(q5))
//console.log(x5 instanceof Bmw)
//console.log(Bmw instanceof Car)
//console.log(x5.getAge())
//console.log(x5.getFullName())
//console.log(x5.changeColor('black'))
//console.log(x5.changeColor('yellow'))
//console.log(x5.calculateWay(500, 20))
