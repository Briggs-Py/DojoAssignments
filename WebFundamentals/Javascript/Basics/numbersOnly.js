function numOnly(arr){
  var num = [];
  for(var i = 0; i<arr.length; i++){
    if(typeof(arr[i]) == 'number'){
      num.push(arr[i]);
    }
  }
  console.log(num);
  return(num);
}
var newArray = [1, "apple", -3, "orange", 0.5];
numOnly(newArray);
