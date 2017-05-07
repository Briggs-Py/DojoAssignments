function runningLogger(){
    console.log("I am running!");
}

function multipyByTen(num){
    if (typeof(num) == "number")
        return(num*10);
}

function stringReturnOne(){
    return("Too easy");
}

function stringReturnTwo(){
    return("Really too easy");
}

function caller(func){
    if(typeof(func) === "function"){
        func();
    }
}

function myDoubleConsoleLog(func1, func2){
    if(typeof(func1) & typeof(func2) === "function"){
        console.log(func1(), func2());
    }
}

function caller2(func){
    console.log("Starting");
    var x = setTimeout(function(){
        if(typeof(func) === "function"){
            func()
        }
    }, 2000);

    console.log("ending?");
    return("interesting");
}
