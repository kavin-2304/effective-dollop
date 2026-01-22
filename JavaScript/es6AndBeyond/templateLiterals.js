export const student = {
    name:"Kavin Kathirya",
    email:"kavin@gmail.com",
    Subject:["Maths","Physics","Chemistry"],
    marks:{
        Maths:89,
        Physcis:90,
        Chemistry:91
    },
    Grade:"A1",
};

console.log(`Student ${student.name} secured grade:${student.Grade} and his marks were Maths:${student.marks.Maths}, Physcis:${student.marks.Physcis}, Chemistry:${student.marks.Chemistry}`);