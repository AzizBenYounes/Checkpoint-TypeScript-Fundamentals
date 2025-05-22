//class car that is made from the interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
//instances of the class is the act of creating cars from class schema
var Mywhip = new Car("BMW", "Porsh", 2020);
console.log(Mywhip.make);
Mywhip.start();
var Mywhip2 = new Car("ferrari", "406", 2006);
console.log(Mywhip2);
