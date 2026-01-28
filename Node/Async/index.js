const express=require("express");
const app=express();
const port = 8080;
const Chat=require("./chat");

const mongoose=require("mongoose");

main().then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/mongo2")
}

app.get("/users",async (req,res)=>{
    let users=await Chat.find();
    let msg = users[0].msg;
    console.log(msg);
    res.send(msg);
})

app.listen(port,()=>{
    console.log(`Listening on port :${port}`);
})