function vehicleConstructor(name, wheels, passengers, speed){
    if (!(this instanceof vehicleConstructor)){
    return new vehicleConstructor(name,wheels,passengerNumber, speed);
  }
    //Private
    var distanceTraveled = 0;
    var self = this;
    function updateDistanceTraveled(){
        distanceTraveled += self.speed;
        console.log(distanceTraveled)
    }

    //Public
    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;

    this.makeNoise = function(noise){
        var noise = noise || "Honk!";
        console.log(noise);
    }
    this.move = function(){
        this.makeNoise();
        updateDistanceTraveled();
    }
    this.checkMiles = function(){
        console.log(distanceTraveled);
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
