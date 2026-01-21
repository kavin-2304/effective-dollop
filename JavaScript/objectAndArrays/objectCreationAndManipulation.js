let employee = {
    name:'KavinKathiriya',
    age:22,
    phoneNo:7043349997,
    jobRoll:'Intern',
    grades:{
        tenth:72,
        tewelveth:23,
    },
    email:'kathiriyakavin1@gmail.com'
}

console.log(employee.name);
employee.name='kavin kathiriya';
console.log(`updated ${employee.name}`);

employee.grades.tenth=75;
console.log(`Marks in tenth :${employee.grades.tenth}`);


//objects of objects

let classInfo = {
    kavin:{
        grade:"A",
        city:"Surat"
    },
    Yagnesh:{
        grade:"A",
        city:"Jamnagar"
    },
    manan:{
        grade:"A+",
        city:"Somnath"
    }
}

//Array of Objects
let teachersInfo=[
    {
        name:"Sanjay",
        Subject:"IOT",
        email:"sanjay@gmail.com"
    },
    {
        name:"Palwinder",
        Subject:"ML",
        email:"palwinder@gmail.com"
    },
    {
        name:"Isha",
        Subject:"Maths",
        email:"isha@gmail.com"
    }
]

console.log(teachersInfo[0]);
console.log(teachersInfo[1].name);