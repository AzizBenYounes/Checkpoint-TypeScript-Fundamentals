//creating the interface: implementing the class
interface Vehicle{
    make:string,
    model:string,
    year:number,
    start(): void
}
//class car that is made from the interface
class car implements Vehicle{
    make:string;
    model:string;
    year:number;
    constructor(make:string,model:string,year:number,) 
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    start(): void {
        console.log("Car engine started")
    }
}
//instances of the class is the act of creating cars from class schema
    const mywhip = new Car ("BMW","Porsh",2020)
    console.log(Mywhip.make)
    Mywhip.start();
    const mywhip2 = new Car ("ferrari","406",2006)
    console.log(Mywhip2)