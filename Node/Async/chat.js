const mongoose=require("mongoose");

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    msg:{
        maxLength:50,
        type:String,
    },
    date:{
        type:Date,
    },
})

const Chat = mongoose.model('Chat',chatSchema);

module.exports=Chat;