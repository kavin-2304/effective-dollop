function fibo(n){
    let n1=0;
    let n2=1;
    let n3;
    let output="0 1 ";
    for(let i=0;i<n;i++){
        n3=n1+n2;
        n1=n2;
        n2=n3;
        output += n2 + " ";
    }
    return output;
}

let result = fibo(10);
console.log(result);

let sum = function(a,b){
    return a+b;
}

console.log(sum(1,2));

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