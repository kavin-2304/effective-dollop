const express=require("express")
const app=express();
const port = 8080;
const http=require("http");
const server = http.createServer(app);
const path=require("path");
const {Server} = require("socket.io");
const io=new Server(server);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        console.log("Message received:", msg);
        io.emit('chat message', msg);
    })
})



app.get('/',(req,res)=>{
    res.render("chat.ejs");
})

server.listen(port,()=>{
    console.log("listening on port :"+port);
})