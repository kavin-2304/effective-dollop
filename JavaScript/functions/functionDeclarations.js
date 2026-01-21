//function expression 
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


//functions objects
let calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}

console.log(calculator.add(2,3));

//this keyword in objects with functions
let student = {
    name:'Kavin',
    rollNo:23,
    marks:{
        phy:80,
        math:75,
        chem:81,
    },
    avg:function(){
        let avg=(this.marks.phy+this.marks.math+this.marks.chem)/3;
        return avg;
    }
}

let studentAvg=student.avg();
console.log(studentAvg);