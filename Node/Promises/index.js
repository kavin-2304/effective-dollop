const express=require("express");
const app=express();
const port = 8080;

const mongoose=require("mongoose");
const _ = require("lodash");

const studentSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    school:{
        type:String
    }
})

main().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/student");
}

let Student=mongoose.model("Student",studentSchema);

// Student.insertMany([
//     {name:"kavin",school:"PP Savani"},
//     {name:"Yagnesh",school:"Sarkari"},
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

async function getNames(){
    let stu=await Student.find();
    console.log(stu);
    let names=_.map(stu,"name");
    console.log(names);
}

getNames();


app.listen(port,()=>{
    console.log("Listening on port :"+port);
})