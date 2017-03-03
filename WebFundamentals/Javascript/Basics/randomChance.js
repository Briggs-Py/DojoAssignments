function slots(quarters){
    while(quarters>0){
        var chance = Math.random();
        if(chance <= 0.01){
            var winnings = Math.random(50,100);
            var total = Math.floor(winnings);
            quarters=quarters + total;
            console.log(" ", quarters, " remaining.");
        }
        quarters -= 1;
    }
    console.log("You lost all your quarters...");
}
slots(200);
