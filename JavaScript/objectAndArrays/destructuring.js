//destructuring means stroing array values in multiple array

let heros=["ironman","bruce","steve","peter"];
let [winner,runnerup,...others]=heros;
console.log(winner,runnerup,others);

//destructuring for the objects
const student = {
    name:'Kavin',
    rollNo:101,
    email:'kavin@gmail.com',
    marks:{
        math:85,
        phy:83,
        chem:90,
    },
    username:'Kavin123',
    password:'kavin',
    city:'surat',
}

const {username:user,password:pass,city:place='mumbai'}=student;
console.log(`The user is :${user} from ${place} and his password is :${pass}`);