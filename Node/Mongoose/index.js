const mongoose=require("mongoose")
const Chat=require("./chat");

main().then(()=>{
    console.log("connection with mongo established")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/mongo2")
}

let allchats=[
    {
        from:'kavin',
        to:'yagensh',
        msg:'hey bro how are you',
        date:new Date()
    },
    {
        from:'yagnesh',
        to:'kavin',
        msg:'yeah i am doing good how are you.',
        date:new Date()
    },
]

Chat.insertMany(allchats).then((res)=>{
    console.log(res)
})