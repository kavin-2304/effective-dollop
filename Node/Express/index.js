const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hey express is working!....")
})


let students=[
    {
        name:"kavin kathiriya",
        email:"kavin@gmail.com"
    },
    {
        name:"yagnesh",
        email:"yagnesh@gmail.com"
    },
]

app.get("/students",(req,res)=>{
    res.send(`Welcome ${students[0].name} and ${students[1].name}`)
    console.log(students);
})

app.post("/students/register",(req,res)=>{
    let {newName,newEmail}=req.body;
    let newStudent={
        name:newName,
        email:newEmail,
    }
    students.push(newStudent);
    res.send(`welcome new students ${students[2].name}`);
})

app.listen(port,()=>{
    console.log("listening on port :"+port);
})