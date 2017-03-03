function tellTheTime(x, y, z){
    var hour = x
    var min = y
    var period = z
    if(period === AM){
        if(min >= 30){
            console.log("It's almost", hour, " in the morning.")
        }
        else{
            console.log("it's just after" hour," in the morning")
        }
    else{
        if(min >= 30){
            console.log("It's almost", hour, " in the evening.")
        }
        else{
            console.log("it's just after" hour," in the evening")
    }
}
