function rangePrint(start, end, skip){
    for(var i = start; i<end; i+=skip){
        console.log(i);
    }
}
rangePrint(2, 10, 2)
