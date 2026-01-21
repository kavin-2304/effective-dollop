let numbers=[1,2,3,4,5,6,7,8];
console.log(...numbers);
console.log(Math.min(...numbers));

let even=[2,4,6,8];
let odd=[1,3,5,7];

console.log(...even,...odd);

//spread for object literals
let stu={
    email:"kavin@gmail.com",
    pass:'kavin123',
}

let copy = {...stu,id:123};
console.log(copy);

let obj1={...numbers};
console.log(obj1);

//Rest take mutiple arguments of function in give a single output
function sum(...args){
    return args.reduce((res,el)=>res+el);
}
console.log(sum(1,2,3,4,5));

function minimum(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}
console.log(minimum(1,2,3,4));