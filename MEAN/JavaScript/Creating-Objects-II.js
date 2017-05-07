function vehicleConstructor(name, wheels, passengers, speed){
    if (!(this instanceof vehicleConstructor)){
    return new vehicleConstructor(name,wheels,passengerNumber, speed);
  }
    //Public

    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.distanceTraveled = 0;
    this.vin = makeVin();

    function makeVin(){
        var vinNum = "";
        for(var x = 0; x < 17; x++){
            vinNum+=chars[Math.floor(Math.random() * 35)];
        }
        return vinNum
    }

}

vehicleConstructor.prototype.makeNoise = function(noise){
    var noise = noise || "Honk!";
    console.log(noise);
    return this;
}

vehicleConstructor.prototype.move = function(){
    this.makeNoise();
    updateDistanceTraveled();
    return this;

}

vehicleConstructor.prototype.checkMiles = function(){
    console.log(distanceTraveled);
    return this;
}

vehicleConstructor.prototype.updateDistanceTraveled = function(){
    this.distanceTraveled += this.speed;
    console.log(this.distanceTraveled);
    return this;
}

}

bike = new vehicleConstructor("Bike", 2, 0, 10);
bike.makeNoise = function(){
    console.log("ring ring");
}
bike.makeNoise()

sudan = new vehicleConstructor("Honda", 4, 4, 40);
sudan.makeNoise = function(){
    console.log("honk honk");
}

bus = new vehicleConstructor("Bus", 6, 0, 30);
bus.pickupPassengers = function(newPassengers){
    this.passengers += newPassengers;
}
bus.dropoffPassengers = function(oldPassengers){
    this.passengers -= oldPassengers;
}

sudan.move()
sudan.move()
sudan.checkMiles()
sudan.makeNoise()
