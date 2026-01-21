let names=["kavin","yagnesh","manan","aman"];

function print(){
    for(let i=0;i<names.length;i++){
        console.log(`student ${i} is :${names[i]}`);
    }
}

names.push("Jainam");//add in the last place
print();

console.log();

names.pop();//removes from the last place
print();

console.log();

names.unshift("Khushi");//add at the start
print();

console.log();

names.shift();//remove from the start
print();

console.log(names.indexOf("yagnesh"));//it returns the index of value/element
console.log(names.indexOf("khushi"));

console.log(names.includes("khushi"));//is value in the the array or not

let teach=["sanjay","palwinder","isha"];

let arr=names.concat(teach);//concatination of two different arrays
console.log(arr);

let reverseArr=arr.reverse();//revering the array
console.log(reverseArr);

let arrSlice=arr.slice(1,2);//returns a copy of somepart of the original array
console.log(arrSlice);

// to add an element in between og the array / remove / replace
reverseArr.splice(0,1);//splice method makes changes in the original array
console.log(reverseArr);
reverseArr.splice(0,0,"Manivel")
console.log(reverseArr);


console.log();

names.sort();
print();


let nestedArr=[[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<nestedArr[0].length;i++){
    for(let j=0;j<nestedArr[1].length;j++){
        console.log(nestedArr[i][j]);
    }
    console.log();
}

let number=[1,2,3,4,5];
number.forEach(function(el){
    console.log(el);
})

let students=[
    {
        name:'kavin',
        marks:91
    },{
        name:'aman',
        marks:92
    },{
        name:'manan',
        marks:93
    }
];

let gpa=students.map((el)=>{//map method
    return el.marks/10;
})
console.log(gpa);

//filter method
let nums=[1,2,3,4,5,6,,7,8,9,10];
console.log(nums.filter((num)=>(num %2==0)));//filter out the even numbers

//every method
let res= nums.every((num)=>(num%2==0));
console.log(res);

//reduce function
let res2=nums.reduce((res,el)=>(res+el));
console.log(res2);

let maximum=nums.reduce((res,el)=>{
    if(el>res){
        return el;
    }else{
        res;
    }
})
console.log(maximum);