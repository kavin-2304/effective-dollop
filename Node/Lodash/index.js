const _ = require("lodash");

let arr=[1,2,3,4,2,1];
let unique=_.uniq(arr);
console.log(unique);

//Is empty check
console.log(_.isEmpty(arr));

//deep clone
let student={
    name:"kavin Kathiriya",
    marks:{
        Maths:90,
        Physics:89,
        chemistry:91,
    }
}
let student2=student;
student2.marks.Maths=80;
console.log(student2);

let student3=_.cloneDeep(student);
console.log(student3);

//acquiering values from object
let users=[
    {name:"kavin",rollNo:1},
    {name:"yagnesh",rollNo:2},
]

let names = _.map(users,"name");
console.log(names);