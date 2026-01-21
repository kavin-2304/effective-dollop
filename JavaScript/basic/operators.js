//Arithmetic operators 
let a=10
let b=2;
let c=1;

function ArithmeticOperators(){
    console.log(a+b);
    console.log(a-b);
    console.log(a/b);
    console.log(a*b);
    console.log(a%b);
    console.log(a**b); // exponentiation
    console.log(a++);//increment 
    console.log(a--);//decrement
}
ArithmeticOperators()
console.log()
//Assignment Operators
function AssignmentOperators(){
    console.log(a+=5);
    console.log(a-=5);
    console.log(a*=5);
    console.log(a/=5);
    console.log(a**=5);
}

AssignmentOperators();
console.log();

function comparesionOperators(){
    if(a==b){
        console.log('Equal Values');
    }else{
        console.log('Not Equal');
    }

    if(a!=b){
        console.log('Not Equal Values');
    }else{
        console.log('Equal');
    }
    console.log(a>b);
    console.log(a<b);
    console.log(a>=b);
    console.log(a<=b);
    console.log(a===b);
}

comparesionOperators();
console.log();

function logicalOperators(){
    console.log(a>b && b>c)
    console.log(a>b || b<c);
    console.log(!a>b);
}

logicalOperators();
console.log()

let result = a>b ? 'A Greater than b' : 'A Less than B';
console.log(result);
