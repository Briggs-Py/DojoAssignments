var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (i in x){
    console.log(x[i]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"])
console.log(x);
var total = 0;
for(var x = 0; x < 501; x++){
    total += x;
}
console.log(total);
var array = [1, 5, 90, 25, -3, 0];
var min = array[0];
for(var x = 0; x < array.length; x++){
    if (array[x] < min){
        min = array[x];
    }
}
console.log(min);
var array = [1, 5, 90, 25, -3, 0];
var max = array[0];
for(var x = 0; x < array.length; x++){
    if (array[x] > max){
        max = array[x];
    }
}
console.log(max);
