//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Car{
    constructor(maximumPasengers,passengers,
        numberOFWheels,MaximumSpeed,fuel,schuduleService){
            this.maximumPasengers=maximumPasengers
            this.MaximumSpeed=MaximumSpeed
            this.fuel=fuel
            this.passengers=passengers
            this.numberOFWheels=numberOFWheels
            this.schuduleService=schuduleService

    }
    loadPassenger(num){
        if(this.passengers){
            this.passengers= this.passengers +3;
            this.maximumPasengers= this.maximumPasengers
            else= console.log("maximumPasengers")

    }
}
start() {
    if (this.fuel > 0) {
        return this.started = true;
        console.log("engine started...!!!");
    } else {
        return this.started = false;
        console.log("engine cannot start...");
    }
    schuduleService(mileage){
        this.schuduleService=this.schuduleService +3,000;
    } else{console.log(timeForMaintenance);
    


    }
    schuduleService(){
        this.schuduleService=true;
    }

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
