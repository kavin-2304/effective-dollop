//higher order function
function multipleGreet(func,count){
    for(i=1;i<=count;i++){
        func();
    }
}

let greet = function(){
    console.log("Hello!..");
}

multipleGreet(greet,3);