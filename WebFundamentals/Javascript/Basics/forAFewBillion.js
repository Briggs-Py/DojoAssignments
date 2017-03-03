function doubleMoney(days){
    var x = 0.01
    for(var i = 0; i<days; i++){
        x += x;
    }
    console.log(x);
}
doubleMoney(30);
