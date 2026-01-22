function greet(name,callback){
    console.log(name);
    callback();
}

function hello(){
    console.log("Hello....");
}

greet("Kavin",hello);