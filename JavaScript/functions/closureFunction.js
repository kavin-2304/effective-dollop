//closure functions
function greetCounter(){
    let greetCount=0;
    return function(){
        greetCount++;
        console.log(`HelloWorld!...${greetCount}`);
    }
}
let greet = greetCounter();
greet();
greet();
greet();

//factory functions
function oddEvenTest(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Wrong Request")
    }
}

let func=oddEvenTest("even");
console.log(func(4));